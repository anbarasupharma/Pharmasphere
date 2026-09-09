(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.labQC = {
    render(container, params) {
      const qcCategories = [
        {
          title: 'Tablets QC',
          tests: [
            { name: 'Weight Variation', principle: 'Ensures uniformity of weight across a batch.', criteria: 'USP Limits based on average weight', equip: 'Analytical Balance' },
            { name: 'Hardness (Crushing Strength)', principle: 'Measures force required to break a tablet.', criteria: 'Typically 4-10 kg/cm²', equip: 'Monsanto, Pfizer Tester' },
            { name: 'Friability', principle: 'Tests durability against mechanical shock.', criteria: 'Not more than 1.0% weight loss', equip: 'Roche Friabilator' },
            { name: 'Disintegration', principle: 'Time required for tablet to break down.', criteria: 'Varies (e.g., Uncoated: 15 mins)', equip: 'Disintegration Apparatus' },
            { name: 'Dissolution', principle: 'Measures drug release rate in vitro.', criteria: 'Q value specified in monograph', equip: 'USP Dissolution Apparatus (I & II)' },
            { name: 'Content Uniformity', principle: 'Ensures uniform API distribution.', criteria: '85-115% with RSD ≤ 6.0%', equip: 'HPLC, UV Spectrophotometer' }
          ]
        },
        {
          title: 'Liquid & Suspension QC',
          tests: [
            { name: 'pH', principle: 'Checks acidity/alkalinity for stability.', criteria: 'Within specified range', equip: 'pH Meter' },
            { name: 'Viscosity', principle: 'Measures resistance to flow.', criteria: 'Specific to formulation', equip: 'Brookfield Viscometer' },
            { name: 'Sedimentation Volume', principle: 'Evaluates physical stability of suspensions.', criteria: 'F = Vu/Vo (Close to 1 is ideal)', equip: 'Measuring Cylinder' },
            { name: 'Redispersibility', principle: 'Ease of re-suspending settled particles.', criteria: 'Readily dispersible upon shaking', equip: 'Manual/Mechanical Shaker' }
          ]
        }
      ];

      let equipmentHtml = '';
      if (PharmHub.data.equipment && Array.isArray(PharmHub.data.equipment)) {
        equipmentHtml = PharmHub.data.equipment.map(eq => `
          <div class="pharma-card">
            <div class="pharma-card__header"><strong>${eq.name}</strong></div>
            <div class="pharma-card__body">
              <p><strong>Category:</strong> ${eq.category}</p>
              <p><strong>Purpose:</strong> ${eq.purpose}</p>
            </div>
          </div>
        `).join('');
      } else {
        equipmentHtml = '<p class="pharma-empty-state">Equipment data not available.</p>';
      }

      let excipientHtml = '';
      if (PharmHub.data.excipients && Array.isArray(PharmHub.data.excipients)) {
        excipientHtml = PharmHub.data.excipients.slice(0, 10).map(ex => `
          <div class="pharma-card">
            <div class="pharma-card__header"><strong>${ex.name}</strong></div>
            <div class="pharma-card__body">
              <p><strong>Category:</strong> ${ex.category}</p>
              <p><strong>Functions:</strong> ${(ex.functions||[]).join(', ')}</p>
            </div>
          </div>
        `).join('');
      } else {
        excipientHtml = '<p class="pharma-empty-state">Excipient data not available.</p>';
      }

      let html = `
        <div class="pharma-container pharma-section">
          <div style="text-align:center; margin-bottom: 3rem;">
            <h1>Lab & Quality Control</h1>
            <p style="color:var(--text-secondary); max-width:600px; margin: 0 auto;">Comprehensive guide to pharmaceutical quality control tests, equipment, and excipients.</p>
          </div>
          
          <div class="pharma-tabs" style="margin-bottom: 2rem; display:flex; gap:1rem; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">
            <button class="pharma-btn pharma-btn--outline active tab-btn" data-target="qc-tests">QC Tests</button>
            <button class="pharma-btn pharma-btn--outline tab-btn" data-target="equipment">Equipment</button>
            <button class="pharma-btn pharma-btn--outline tab-btn" data-target="excipients">Excipients Database</button>
          </div>

          <div id="qc-tests" class="tab-content">
            ${qcCategories.map(cat => `
              <h2 style="margin-bottom: 1rem;">${cat.title}</h2>
              <div class="pharma-grid pharma-grid--3col" style="margin-bottom: 2rem;">
                ${cat.tests.map(t => `
                  <div class="pharma-card">
                    <div class="pharma-card__header">
                      <h3 style="margin:0; font-size:1.1rem;"><i data-lucide="check-square" style="color:var(--primary); margin-right:0.5rem;"></i>${t.name}</h3>
                    </div>
                    <div class="pharma-card__body">
                      <p style="margin-bottom:0.5rem; font-size:0.9rem;"><strong>Principle:</strong> ${t.principle}</p>
                      <p style="margin-bottom:0.5rem; font-size:0.9rem;"><strong>Criteria:</strong> ${t.criteria}</p>
                      <p style="margin:0; font-size:0.9rem;"><strong>Equipment:</strong> ${t.equip}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>

          <div id="equipment" class="tab-content" style="display:none;">
            <h2>Pharmaceutical Equipment</h2>
            <div class="pharma-grid pharma-grid--3col">${equipmentHtml}</div>
          </div>

          <div id="excipients" class="tab-content" style="display:none;">
            <h2>Excipients Database</h2>
            <p>Showing sample excipients.</p>
            <div class="pharma-grid pharma-grid--3col">${excipientHtml}</div>
          </div>
        </div>
      `;
      
      container.innerHTML = html;

      // Tab logic
      const tabBtns = container.querySelectorAll('.tab-btn');
      const tabContents = container.querySelectorAll('.tab-content');
      
      tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          tabBtns.forEach(b => b.classList.remove('pharma-btn--primary', 'active'));
          e.target.classList.add('pharma-btn--primary', 'active');
          
          tabContents.forEach(c => c.style.display = 'none');
          container.querySelector('#' + e.target.getAttribute('data-target')).style.display = 'block';
        });
      });
    }
  };
})();
