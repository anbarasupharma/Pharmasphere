(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.drugDelivery = {
    render(container, params) {
      if (params) {
        if (PharmHub.data.topics && PharmHub.data.topics[params]) {
          PharmHub.router.navigate('#/learn/' + params);
          return;
        } else {
          container.innerHTML = `<div class="pharma-container pharma-section"><h2>Drug Delivery System not found</h2><a href="#/drug-delivery" class="pharma-btn pharma-btn--outline">Back</a></div>`;
          return;
        }
      }

      const categories = [
        { title: 'Modified Release', icon: 'clock', items: ['Sustained Release', 'Controlled Release', 'Extended Release', 'Delayed Release (Enteric)'] },
        { title: 'Targeted Delivery', icon: 'target', items: ['Gastroretentive', 'Colon-targeted', 'Site-specific', 'Tumor-targeted'] },
        { title: 'Route-specific', icon: 'map', items: ['Transdermal', 'Buccal & Sublingual', 'Nasal & Pulmonary', 'Ocular', 'Rectal'] },
        { title: 'Advanced & Nano', icon: 'atom', items: ['Nanoparticles', 'Liposomes', 'Microspheres', 'Dendrimers', 'Solid Lipid Nanoparticles'] }
      ];

      let html = `
        <div class="pharma-container pharma-section">
          <div style="text-align:center; margin-bottom: 3rem;">
            <h1>Drug Delivery Systems (NDDS)</h1>
            <p style="color:var(--text-secondary); max-width:600px; margin: 0 auto;">Explore advanced strategies for delivering therapeutic agents safely and effectively.</p>
          </div>
          
          <div class="pharma-grid pharma-grid--2col" style="margin-bottom: 3rem; gap: 2rem;">
            ${categories.map(cat => `
              <div class="pharma-card">
                <div class="pharma-card__header" style="display:flex; align-items:center; gap:0.5rem; background:var(--bg-secondary);">
                  <i data-lucide="${cat.icon}" style="color:var(--cat-delivery);"></i>
                  <h2 style="margin:0; font-size:1.25rem;">${cat.title}</h2>
                </div>
                <div class="pharma-card__body">
                  <div style="display:flex; flex-direction:column; gap:0.5rem;">
                    ${cat.items.map(item => {
                      const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                      const exists = PharmHub.data.topics && PharmHub.data.topics[slug];
                      return `
                        <a href="${exists ? `#/learn/${slug}` : `#/drug-delivery`}" style="display:flex; align-items:center; justify-content:space-between; padding:0.75rem; border:1px solid var(--border); border-radius:var(--radius-sm); text-decoration:none; color:inherit;" class="pharma-card--clickable">
                          <span>${item}</span>
                          ${exists ? '<i data-lucide="chevron-right" style="width:16px; color:var(--primary);"></i>' : '<span class="pharma-badge" style="font-size:0.7rem;">Soon</span>'}
                        </a>
                      `;
                    }).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="pharma-card">
            <div class="pharma-card__header"><h2>Conventional vs Novel Drug Delivery</h2></div>
            <div class="pharma-card__body" style="overflow-x:auto;">
              <table class="pharma-table pharma-table--striped" style="width:100%; min-width:600px;">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Conventional System</th>
                    <th>Novel / Controlled System</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Plasma Concentration</td>
                    <td>Fluctuating (Peaks and Valleys)</td>
                    <td>Maintained within therapeutic window</td>
                  </tr>
                  <tr>
                    <td>Dosing Frequency</td>
                    <td>High (Multiple times a day)</td>
                    <td>Low (Once daily or less)</td>
                  </tr>
                  <tr>
                    <td>Patient Compliance</td>
                    <td>Poor</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td>Risk of Toxicity</td>
                    <td>High (during peak levels)</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Development Cost</td>
                    <td>Low</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
      
      container.innerHTML = html;
    }
  };
})();
