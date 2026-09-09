(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.about = {
    render(container, params) {
      let html = `
        <div class="pharma-container pharma-section" style="max-width: 800px; margin: 0 auto;">
          <div style="text-align:center; margin-bottom: 3rem;">
            <div style="display:inline-flex; align-items:center; justify-content:center; width:80px; height:80px; border-radius:50%; background:var(--primary); color:white; margin-bottom:1rem;">
              <i data-lucide="microscope" style="width:40px; height:40px;"></i>
            </div>
            <h1>About Pharmaceutics Hub</h1>
            <p style="color:var(--text-secondary); font-size:1.2rem;">An interactive educational platform for formulation science.</p>
            <div style="margin-top:0.5rem;"><span class="pharma-badge">Version 1.0.0</span></div>
          </div>

          <div class="pharma-card" style="margin-bottom: 2rem;">
            <div class="pharma-card__body">
              <h2 style="margin-top:0;">Project Purpose</h2>
              <p>Pharmaceutics Hub is designed to help pharmacy students, educators, and professionals explore the science of dosage form design. It combines comprehensive study materials, interactive calculators, and self-assessment tools into a single, cohesive open-source platform.</p>
              
              <div class="pharma-callout pharma-callout--important" style="margin-top: 1.5rem;">
                <i data-lucide="alert-triangle"></i>
                <div>
                  <strong>Educational Disclaimer</strong>
                  <p style="margin:0; font-size:0.9rem;">The content and calculators provided on this website are for educational purposes only. They are not intended as professional advice or for clinical use. Always consult official pharmacopoeias (USP, Ph. Eur., IP) and regulatory guidelines for actual formulation and clinical practice.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pharma-grid pharma-grid--2col" style="margin-bottom: 2rem; gap: 2rem;">
            <div class="pharma-card">
              <div class="pharma-card__header"><h3 style="margin:0;"><i data-lucide="star" style="color:var(--warning); margin-right:0.5rem;"></i>Features</h3></div>
              <div class="pharma-card__body">
                <ul style="padding-left:1.2rem; margin:0; line-height:1.6;">
                  <li>Comprehensive topic library</li>
                  <li>Interactive pharmaceutical calculators</li>
                  <li>In-browser knowledge quizzes</li>
                  <li>Offline-capable learning progress</li>
                  <li>Light/Dark theme support</li>
                </ul>
              </div>
            </div>

            <div class="pharma-card">
              <div class="pharma-card__header"><h3 style="margin:0;"><i data-lucide="code" style="color:var(--primary); margin-right:0.5rem;"></i>Tech Stack</h3></div>
              <div class="pharma-card__body">
                <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
                  <span class="pharma-badge" style="background:#e34f26; color:white;">HTML5</span>
                  <span class="pharma-badge" style="background:#1572b6; color:white;">CSS3</span>
                  <span class="pharma-badge" style="background:#f7df1e; color:black;">JavaScript (Vanilla)</span>
                  <span class="pharma-badge" style="background:#ff6384; color:white;">Chart.js</span>
                  <span class="pharma-badge" style="background:#333333; color:white;">Fuse.js</span>
                  <span class="pharma-badge" style="background:#000000; color:white;">Lucide Icons</span>
                </div>
              </div>
            </div>
          </div>

          <div class="pharma-card" style="margin-bottom: 2rem;">
            <div class="pharma-card__body" style="text-align:center;">
              <h2 style="margin-top:0;">Open Source & Contribution</h2>
              <p>This project is open source and available under the <strong>MIT License</strong>. Contributions, issue reports, and feature requests are welcome!</p>
              <div style="display:flex; justify-content:center; gap: 1rem; margin-top:1.5rem;">
                <a href="https://github.com" target="_blank" class="pharma-btn pharma-btn--outline"><i data-lucide="github"></i> GitHub Repository</a>
                <a href="mailto:contact@example.com" class="pharma-btn pharma-btn--outline"><i data-lucide="mail"></i> Contact</a>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML = html;
    }
  };
})();
