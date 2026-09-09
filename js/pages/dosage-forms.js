(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.dosageForms = {
    render(container, params) {
      if (params) {
        // detail mode - redirect to learn page if topic exists
        if (PharmHub.data.topics && PharmHub.data.topics[params]) {
          PharmHub.router.navigate('#/learn/' + params);
          return;
        } else {
          container.innerHTML = `<div class="pharma-container pharma-section"><h2>Dosage Form not found</h2><a href="#/dosage-forms" class="pharma-btn pharma-btn--outline">Back</a></div>`;
          return;
        }
      }

      const categories = [
        { title: 'Solid Dosage Forms', id: 'solid', items: ['Tablets', 'Capsules', 'Powders', 'Granules'] },
        { title: 'Liquid Dosage Forms', id: 'liquid', items: ['Solutions', 'Syrups', 'Elixirs', 'Suspensions', 'Emulsions'] },
        { title: 'Semisolid Dosage Forms', id: 'semisolid', items: ['Ointments', 'Creams', 'Gels', 'Pastes', 'Suppositories'] },
        { title: 'Sterile Dosage Forms', id: 'sterile', items: ['Parenterals', 'Ophthalmics'] },
        { title: 'Aerosol & Pulmonary', id: 'aerosol', items: ['Aerosols', 'Dry Powder Inhalers'] },
        { title: 'Advanced & Modified Release', id: 'advanced', items: ['Sustained Release', 'Transdermal Patches', 'Implants'] }
      ];

      let html = `
        <div class="pharma-container pharma-section">
          <div style="text-align:center; margin-bottom: 3rem;">
            <h1>Dosage Forms Library</h1>
            <p style="color:var(--text-secondary); max-width:600px; margin: 0 auto;">A comprehensive catalog of pharmaceutical dosage forms, their characteristics, and applications.</p>
          </div>
          
          ${categories.map(cat => `
            <div style="margin-bottom: 3rem;">
              <h2 style="border-bottom: 2px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">${cat.title}</h2>
              <div class="pharma-grid pharma-grid--4col">
                ${cat.items.map(item => {
                  const slug = item.toLowerCase().replace(/ /g, '-');
                  const topicExists = PharmHub.data.topics && PharmHub.data.topics[slug];
                  return `
                    <a href="${topicExists ? `#/learn/${slug}` : `#/dosage-forms`}" class="pharma-card pharma-card--clickable" style="text-decoration:none; color:inherit;">
                      <div class="pharma-card__body" style="text-align:center;">
                        <div style="width:40px; height:40px; border-radius:50%; background:var(--bg-secondary); display:flex; align-items:center; justify-content:center; margin: 0 auto 1rem;">
                          <i data-lucide="pill" style="color:var(--primary);"></i>
                        </div>
                        <h3 style="font-size:1.1rem; margin:0;">${item}</h3>
                        ${topicExists ? '' : '<span class="pharma-badge" style="margin-top:0.5rem; display:inline-block; font-size:0.7rem;">Coming Soon</span>'}
                      </div>
                    </a>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      
      container.innerHTML = html;
    }
  };
})();
