(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.calculatorsPage = {
    render(container, params) {
      if (!params) {
        this.renderHub(container);
      } else {
        this.renderCalculator(container, params);
      }
    },

    renderHub(container) {
      let calcTypes = [];
      if (PharmHub.calculators && PharmHub.calculators.types) {
        calcTypes = Object.keys(PharmHub.calculators.types).map(k => ({ id: k, ...PharmHub.calculators.types[k] }));
      } else {
        // Fallback for UI if no logic present
        calcTypes = [
          { id: 'percentage-strength', title: 'Percentage Strength', description: 'Calculate w/w, w/v, and v/v', category: 'Solutions' },
          { id: 'dilution', title: 'Dilution (C1V1)', description: 'Calculate required volumes for dilution', category: 'Solutions' },
          { id: 'alligation', title: 'Alligation', description: 'Mixing solutions of different strengths', category: 'Solutions' },
          { id: 'carrs-index', title: 'Carr\'s Compressibility Index', description: 'Evaluate powder flowability', category: 'Powder Flow' }
        ];
      }

      // Group by category
      const grouped = calcTypes.reduce((acc, curr) => {
        acc[curr.category || 'Other'] = acc[curr.category || 'Other'] || [];
        acc[curr.category || 'Other'].push(curr);
        return acc;
      }, {});

      let html = `
        <div class="pharma-container pharma-section">
          <div style="text-align:center; margin-bottom: 2rem;">
            <h1>Pharmaceutical Calculators</h1>
            <p style="color:var(--text-secondary); max-width:600px; margin: 0 auto;">Interactive tools for formulation calculations, kinetics, and quality control.</p>
          </div>
          
          <div class="pharma-callout pharma-callout--warning" style="margin-bottom: 2rem;">
            <i data-lucide="alert-triangle"></i>
            <div><strong>Educational Disclaimer</strong><br>These calculators are for educational purposes only. Do not use for clinical compounding or patient care without independent verification.</div>
          </div>

          ${Object.keys(grouped).map(cat => `
            <div style="margin-bottom: 3rem;">
              <h2 style="border-bottom: 2px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">${cat}</h2>
              <div class="pharma-grid pharma-grid--3col">
                ${grouped[cat].map(c => `
                  <a href="#/calculators/${c.id}" class="pharma-card pharma-card--clickable" style="text-decoration:none; color:inherit;">
                    <div class="pharma-card__body">
                      <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
                        <div style="width:32px; height:32px; border-radius:50%; background:var(--primary-light); display:flex; align-items:center; justify-content:center; color:white;">
                          <i data-lucide="calculator" style="width:16px; height:16px;"></i>
                        </div>
                        <h3 style="margin:0; font-size:1.1rem;">${c.title}</h3>
                      </div>
                      <p style="margin:0; font-size:0.9rem; color:var(--text-secondary);">${c.description}</p>
                    </div>
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      container.innerHTML = html;
    },

    renderCalculator(container, calcType) {
      let info = null;
      if (PharmHub.calculators && PharmHub.calculators.getInfo) {
        info = PharmHub.calculators.getInfo(calcType);
      }
      
      if (!info) {
        container.innerHTML = `<div class="pharma-container pharma-section"><h2>Calculator not found</h2><a href="#/calculators" class="pharma-btn pharma-btn--outline">Back</a></div>`;
        return;
      }

      let html = `
        <div class="pharma-container pharma-section">
          <div class="pharma-breadcrumb" style="margin-bottom: 1rem;"><a href="#/">Home</a> / <a href="#/calculators">Calculators</a> / ${info.title}</div>
          
          <h1 style="margin-bottom: 0.5rem;">${info.title}</h1>
          <p style="color:var(--text-secondary); margin-bottom: 2rem;">${info.description}</p>
          
          <div class="pharma-grid" style="grid-template-columns: 1fr 1fr; gap: 2rem;">
            <!-- Input Form -->
            <div class="pharma-card">
              <div class="pharma-card__header"><h3>Inputs</h3></div>
              <div class="pharma-card__body">
                <form id="calc-form">
                  ${info.inputs.map(inp => `
                    <div style="margin-bottom: 1rem;">
                      <label style="display:block; margin-bottom:0.25rem; font-weight:bold;">${inp.label} ${inp.required ? '<span style="color:var(--danger)">*</span>' : ''}</label>
                      <div style="display:flex; align-items:center;">
                        <input type="${inp.type}" id="inp-${inp.id}" class="pharma-input" style="flex:1;" placeholder="${inp.placeholder || ''}" ${inp.required ? 'required' : ''} ${inp.min !== undefined ? `min="${inp.min}"` : ''} ${inp.step ? `step="${inp.step}"` : ''}>
                        ${inp.unit ? `<span style="margin-left:0.5rem; color:var(--text-secondary);">${inp.unit}</span>` : ''}
                      </div>
                    </div>
                  `).join('')}
                  <div style="margin-top: 1.5rem; display:flex; gap: 1rem;">
                    <button type="submit" class="pharma-btn pharma-btn--primary" style="flex:1;">Calculate</button>
                    <button type="reset" class="pharma-btn pharma-btn--outline" id="calc-reset">Reset</button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Results & Info -->
            <div style="display:flex; flex-direction:column; gap:1rem;">
              <div class="pharma-card" id="result-card" style="display:none;">
                <div class="pharma-card__header" style="background:var(--success); color:white;"><h3>Result</h3></div>
                <div class="pharma-card__body">
                  <div id="calc-result" style="font-size:2rem; font-weight:bold; color:var(--success); margin-bottom:1rem; text-align:center;"></div>
                  <div id="calc-steps" style="background:var(--bg-secondary); padding:1rem; border-radius:var(--radius-md); font-family:var(--font-mono); font-size:0.9rem; margin-bottom:1rem;"></div>
                  <div id="calc-interpretation" style="border-left:4px solid var(--info); padding-left:1rem;"></div>
                </div>
              </div>
              
              <div class="pharma-card">
                <div class="pharma-card__header"><h3>Formula & Info</h3></div>
                <div class="pharma-card__body">
                  <div style="text-align:center; font-size:1.2rem; font-family:var(--font-mono); margin-bottom:1rem; padding:1rem; background:var(--bg-secondary); border-radius:var(--radius-md);">
                    ${info.formula || 'Formula not specified'}
                  </div>
                  ${info.assumptions ? `<p style="font-size:0.9rem; color:var(--text-secondary);"><strong>Assumptions:</strong> ${info.assumptions}</p>` : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML = html;

      // Logic
      const form = container.querySelector('#calc-form');
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (!PharmHub.calculators) return;
        
        let inputs = {};
        info.inputs.forEach(inp => {
          const val = container.querySelector(`#inp-${inp.id}`).value;
          inputs[inp.id] = inp.type === 'number' ? parseFloat(val) : val;
        });

        const res = PharmHub.calculators.calculate(calcType, inputs);
        
        if (res.error) {
          alert("Error: " + res.error);
          return;
        }

        container.querySelector('#result-card').style.display = 'block';
        container.querySelector('#calc-result').innerHTML = res.result;
        container.querySelector('#calc-steps').innerHTML = (res.steps || []).join('<br>');
        container.querySelector('#calc-interpretation').innerHTML = res.interpretation || '';
      });

      container.querySelector('#calc-reset').addEventListener('click', () => {
        container.querySelector('#result-card').style.display = 'none';
      });
    }
  };
})();
