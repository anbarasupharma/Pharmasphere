(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.references = {
    render(container, params) {
      const references = [
        {
          category: 'Major Textbooks',
          icon: 'book',
          items: [
            { title: "Aulton's Pharmaceutics", desc: "The Design and Manufacture of Medicines.", url: "#" },
            { title: "Remington", desc: "The Science and Practice of Pharmacy.", url: "#" },
            { title: "Lachman's", desc: "The Theory and Practice of Industrial Pharmacy.", url: "#" },
            { title: "Martin's Physical Pharmacy", desc: "Physical Chemical and Biopharmaceutical Principles in the Pharmaceutical Sciences.", url: "#" },
            { title: "Ansel's Pharmaceutical Dosage Forms", desc: "And Drug Delivery Systems.", url: "#" }
          ]
        },
        {
          category: 'Pharmacopoeias',
          icon: 'book-open',
          items: [
            { title: "USP-NF", desc: "United States Pharmacopeia–National Formulary.", url: "https://www.uspnf.com/" },
            { title: "Indian Pharmacopoeia (IP)", desc: "Official standard for drugs in India.", url: "https://www.ipc.gov.in/" },
            { title: "European Pharmacopoeia (Ph. Eur.)", desc: "Council of Europe.", url: "https://www.edqm.eu/" },
            { title: "British Pharmacopoeia (BP)", desc: "MHRA.", url: "https://www.pharmacopoeia.com/" }
          ]
        },
        {
          category: 'Regulatory Bodies & Guidelines',
          icon: 'landmark',
          items: [
            { title: "FDA", desc: "U.S. Food and Drug Administration.", url: "https://www.fda.gov/" },
            { title: "EMA", desc: "European Medicines Agency.", url: "https://www.ema.europa.eu/" },
            { title: "ICH", desc: "International Council for Harmonisation.", url: "https://www.ich.org/" },
            { title: "WHO", desc: "World Health Organization.", url: "https://www.who.int/" }
          ]
        }
      ];

      let html = `
        <div class="pharma-container pharma-section">
          <div style="text-align:center; margin-bottom: 3rem;">
            <h1>References & Resources</h1>
            <p style="color:var(--text-secondary); max-width:600px; margin: 0 auto;">Curated list of authoritative textbooks, pharmacopoeias, and regulatory guidelines for pharmaceutics.</p>
          </div>
          
          <div class="pharma-grid pharma-grid--3col">
            ${references.map(cat => `
              <div class="pharma-card">
                <div class="pharma-card__header" style="display:flex; align-items:center; gap:0.5rem; font-size:1.2rem;">
                  <i data-lucide="${cat.icon}" style="color:var(--primary);"></i>
                  ${cat.category}
                </div>
                <div class="pharma-card__body">
                  <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:1rem;">
                    ${cat.items.map(item => `
                      <li style="border-bottom: 1px solid var(--border-light); padding-bottom: 0.5rem;">
                        <a href="${item.url}" target="_blank" style="font-weight:bold; text-decoration:none; color:var(--primary); display:flex; align-items:center; gap:0.25rem;">
                          ${item.title} <i data-lucide="external-link" style="width:14px;height:14px;"></i>
                        </a>
                        <p style="margin:0.25rem 0 0; font-size:0.9rem; color:var(--text-secondary);">${item.desc}</p>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      container.innerHTML = html;
    }
  };
})();
