(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.home = {
    render: function (container) {
      // Define all slides for the floating slideshow
      const slides = [
        { link: '#/learn/physical-pharma', title: 'Physical Pharmaceutics', icon: 'microscope', desc: 'Thermodynamics, rheology, and physical principles.' },
        { link: '#/learn/dosage-forms', title: 'Dosage Forms', icon: 'layers', desc: 'Design and manufacturing of tablets and capsules.' },
        { link: '#/learn/drug-delivery', title: 'Drug Delivery', icon: 'target', desc: 'NDDS and targeted release systems.' },
        { link: '#/calculators', title: 'Calculators', icon: 'calculator', desc: '16 interactive formulation tools.' },
        { link: '#/quiz', title: 'Quiz Engine', icon: 'brain-circuit', desc: 'Test your knowledge with 260+ questions.' },
        { link: '#/learn/quality', title: 'Quality Assurance', icon: 'shield-check', desc: 'GMP, QA vs QC, and ICH guidelines.' },
        { link: '#/learn/microbiology', title: 'Microbiology', icon: 'bug', desc: 'Sterility and endotoxin control.' }
      ];

      let html = `
        <div style="width: 100%; overflow-x: hidden;">
          
          <!-- HERO SECTION -->
          <section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; min-height: 70vh; max-width: 1400px; margin: 0 auto; padding: 4rem 2rem;">
            
            <div style="flex: 1; min-width: 300px; padding-right: 2rem; animation: academicFadeIn 0.8s ease backwards; z-index: 10;">
              <span class="pharma-badge" style="background: var(--text); color: var(--bg); margin-bottom: 1.5rem; display: inline-flex; align-items: center; font-weight: bold; padding: 0.5rem 1rem;">
                <i data-lucide="sparkles" style="width:16px; height:16px; margin-right:8px;"></i> Interactive V2.0
              </span>
              <h1 style="font-size: clamp(3rem, 6vw, 5rem); font-weight: 800; letter-spacing: -0.05em; line-height: 1.05; margin-bottom: 1.5rem; color: var(--text);">
                Welcome to<br>PharmaSphere.
              </h1>
              <p style="font-size: 1.2rem; color: var(--text-secondary); max-width: 500px; margin-bottom: 2.5rem; line-height: 1.6;">
                A simple, elegant, and interactive learning platform. Explore clinical notes, calculate formulas, and visualize drug delivery mechanisms.
              </p>
              <a href="#/learn" class="pharma-btn" style="background: var(--text); color: var(--bg); border-radius: 100px; padding: 1rem 2.5rem; font-size: 1.1rem; font-weight: bold; display: inline-flex; align-items: center; transition: transform 0.3s ease;">
                Explore Topics <i data-lucide="arrow-right" style="margin-left:8px;"></i>
              </a>
            </div>

            <!-- 3D CANVAS PORTFOLIO -->
            <div style="flex: 1; min-width: 300px; height: 500px; position: relative; animation: academicFadeIn 0.8s ease backwards; animation-delay: 0.2s;">
              <div id="hero-visual" style="width: 100%; height: 100%;"></div>
            </div>

          </section>

          <!-- FLOATING SLIDESHOW SECTION -->
          <section class="topic-slider-container">
            <div class="topic-slider" id="home-slider">
              ${slides.map((slide, index) => {
                let delay = 0.3 + (index * 0.1);
                return `
                  <a href="${slide.link}" class="topic-slide" style="text-decoration:none; color: var(--text); animation-delay: ${delay}s;">
                    <div>
                      <div style="width:64px; height:64px; border-radius:50%; border: 1px solid var(--border); background: var(--bg); display:flex; align-items:center; justify-content:center; margin-bottom: 2rem;">
                        <i data-lucide="${slide.icon}" style="width:28px; height:28px; color: var(--text);"></i>
                      </div>
                      <h3 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing:-0.5px;">${slide.title}</h3>
                      <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.5; margin: 0;">${slide.desc}</p>
                    </div>
                    <div style="margin-top: 2.5rem; display: flex; justify-content: flex-end;">
                      <div style="width:40px; height:40px; border-radius:50%; background: var(--text); color: var(--bg); display:flex; align-items:center; justify-content:center;">
                        <i data-lucide="arrow-up-right" style="width:20px; height:20px;"></i>
                      </div>
                    </div>
                  </a>
                `;
              }).join('')}
            </div>
          </section>

          <!-- LEARNING PROGRESS (Centered at bottom) -->
          <section style="max-width: 800px; margin: 4rem auto; padding: 0 1rem; animation: academicFadeIn 0.8s ease backwards; animation-delay: 1s;">
             <div id="progress-container"></div>
          </section>

        </div>
      `;

      container.innerHTML = html;

      // Render Progress Summary
      setTimeout(() => {
        if (PharmHub.progress && document.getElementById('progress-container')) {
          PharmHub.progress.renderSummary(document.getElementById('progress-container'));
        }
      }, 50);

      // Initialize 3D Hero and Render Icons
      setTimeout(() => {
        if (typeof PharmHub.init3DHero === 'function') {
          PharmHub.init3DHero();
        }
        if (window.lucide) {
          lucide.createIcons();
        } else if (PharmHub.utils && typeof PharmHub.utils.renderIcons === 'function') {
          PharmHub.utils.renderIcons();
        }
      }, 100);
      
      // Auto-scroll the slideshow slightly on load to hint that it is scrollable
      setTimeout(() => {
        const slider = document.getElementById('home-slider');
        if (slider && window.innerWidth > 768) {
           slider.scrollBy({ left: 100, behavior: 'smooth' });
           setTimeout(() => slider.scrollBy({ left: -100, behavior: 'smooth' }), 500);
        }
      }, 1500);
    }
  };
})();

