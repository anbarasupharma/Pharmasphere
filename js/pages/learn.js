(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.learn = {
    render(container, params) {
      if (!params) {
        this.renderHub(container);
      } else {
        this.renderTopic(container, params);
      }
    },

    renderHub(container) {
      const topicsObj = PharmHub.data.topics || {};
      const topics = Object.values(topicsObj);
      
      const categories = ['All', 'Physical Pharmaceutics', 'Dosage Forms', 'Drug Delivery', 'Quality', 'Biopharmaceutics', 'Technology'];

      let html = `
        <div class="pharma-container pharma-section">
          <h1 style="margin-bottom: 0.5rem;">Pharmaceutics Topics</h1>
          <p style="color:var(--text-secondary); margin-bottom: 2rem;">Browse the complete library of pharmaceutics topics.</p>
          
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom: 2rem;">
            ${categories.map(c => `
              <button class="pharma-btn pharma-btn--outline pharma-btn--sm cat-filter" data-cat="${c === 'All' ? 'all' : c.toLowerCase()}">${c}</button>
            `).join('')}
          </div>

          <div class="pharma-grid pharma-grid--3col">
            ${topics.length > 0 ? topics.sort((a,b) => a.title.localeCompare(b.title)).map(t => {
              const status = PharmHub.progress ? PharmHub.progress.get(t.id) : 'not-started';
              const statusColors = { 'not-started': 'var(--text-muted)', 'learning': 'var(--warning)', 'completed': 'var(--success)' };
              return `
              <a href="#/learn/${t.id}" class="pharma-card pharma-card--clickable topic-card" data-cat="${(t.category || '').toLowerCase()}" style="text-decoration:none; color:inherit;">
                <div class="pharma-card__body">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                      <i data-lucide="${t.icon || 'book'}" style="color:${t.color || 'var(--primary)'}"></i>
                      <span class="pharma-badge" style="background:var(--bg-secondary);">${t.category || 'General'}</span>
                    </div>
                    <i data-lucide="circle" fill="${statusColors[status]}" style="color:${statusColors[status]}; width:16px; height:16px;"></i>
                  </div>
                  <h3 style="margin: 0.5rem 0;">${t.title}</h3>
                  <p style="margin:0; font-size:0.9rem; color:var(--text-secondary);">${t.brief || ''}</p>
                </div>
              </a>
            `}).join('') : '<p class="pharma-empty-state">No topics found. Please load topics data.</p>'}
          </div>
        </div>
      `;
      container.innerHTML = html;

      // Filter logic
      const buttons = container.querySelectorAll('.cat-filter');
      const cards = container.querySelectorAll('.topic-card');
      
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const cat = btn.getAttribute('data-cat');
          cards.forEach(card => {
            if (cat === 'all' || card.getAttribute('data-cat').includes(cat.replace(' ', '-'))) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    },

    renderTopic(container, topicId) {
      const topic = (PharmHub.data.topics || {})[topicId];

      if (!topic) {
        container.innerHTML = `<div class="pharma-container pharma-section"><div class="pharma-callout pharma-callout--danger">Topic not found.</div><a href="#/learn" class="pharma-btn pharma-btn--outline">Back to Library</a></div>`;
        return;
      }

      if (topic.defined === false) {
        container.innerHTML = `
          <div class="pharma-container pharma-section">
            <div class="pharma-breadcrumb" style="margin-bottom: 2rem;"><a href="#/">Home</a> / <a href="#/learn">Learn</a> / ${topic.title}</div>
            <h1>${topic.title}</h1>
            <div class="pharma-callout pharma-callout--info" style="margin-top: 2rem;">
              <i data-lucide="info"></i>
              <div><strong>Coming Soon</strong><p>This topic is coming soon. Check back later!</p></div>
            </div>
            <a href="#/learn" class="pharma-btn pharma-btn--outline" style="margin-top:1rem;">Back to Library</a>
          </div>
        `;
        return;
      }

      const status = PharmHub.progress ? PharmHub.progress.get(topicId) : 'not-started';
      const content = topic.content || {};

      let html = `
        <div class="pharma-topic-page">
          
          <div class="topic-banner">
            <div class="topic-banner-content">
              <h1>${topic.title}</h1>
              <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
                <span class="pharma-badge" style="background:${topic.color}; border:none;">
                  <i data-lucide="${topic.icon}" style="width:14px; height:14px; margin-right:4px;"></i>
                  ${PharmHub.utils.escapeHTML(topic.category.toUpperCase().replace('-', ' '))}
                </span>
                <span class="pharma-badge">Extensive Educational Resource</span>
              </div>
            </div>
          </div>

          <div class="pharma-topic-page__content" style="max-width: 900px; margin: 0 auto;">
            
            <!-- Progress Tracker -->
            <div class="pharma-card" style="padding:1rem; margin-bottom:2rem; display:flex; justify-content:space-between; align-items:center; background:var(--bg-secondary); flex-wrap: wrap; gap: 1rem;">
              <span style="font-weight:var(--font-weight-medium);">Your Progress:</span>
              <div class="pharma-progress-toggle" id="topic-progress-toggle" style="display:flex; gap:0.5rem;">
                <button class="pharma-btn pharma-btn--sm prog-btn ${status === 'not-started' ? 'pharma-btn--primary' : 'pharma-btn--outline'}" data-status="not-started">Not Started</button>
                <button class="pharma-btn pharma-btn--sm prog-btn ${status === 'learning' ? 'pharma-btn--primary' : 'pharma-btn--outline'}" data-status="learning">Learning</button>
                <button class="pharma-btn pharma-btn--sm prog-btn ${status === 'completed' ? 'pharma-btn--primary' : 'pharma-btn--outline'}" data-status="completed">Completed</button>
              </div>
            </div>

            <!-- Deep Dive Content Enhancer -->
            <div class="content-enhancer-card">
              <h3 style="margin-top:0; color:var(--primary); display:flex; align-items:center; gap:0.5rem;">
                <i data-lucide="book-open"></i> Clinical & Formulation Deep Dive
              </h3>
              <p>The study of <strong>${topic.title}</strong> is a critical cornerstone of modern pharmaceutics. Advancements in this area are heavily regulated by international bodies such as the FDA and ICH. Optimization in this field directly impacts drug bioavailability, patient compliance, and product shelf-life. Recent industry trends focus heavily on integrating advanced PAT (Process Analytical Technology) and Quality by Design (QbD) approaches to ensure optimal ${topic.title.toLowerCase()} characteristics.</p>
            </div>

          <div class="pharma-grid" style="grid-template-columns: 3fr 1fr; gap: 2rem;">
            <div class="topic-main-content">
              ${content.definition ? `<h2>Definition</h2><div class="pharma-callout pharma-callout--tip">${content.definition}</div>` : ''}
              ${content.introduction ? `<h2>Introduction</h2><div>${content.introduction}</div>` : ''}
              ${content.principles ? `<h2>Principles</h2><div>${content.principles}</div>` : ''}
              ${content.classification ? `<h2>Classification</h2><div>${content.classification}</div>` : ''}
              ${content.mechanism ? `<h2>Mechanism</h2><div>${content.mechanism}</div>` : ''}
              ${content.formulation ? `<h2>Formulation Considerations</h2><div>${content.formulation}</div>` : ''}
              ${content.manufacturing ? `<h2>Manufacturing</h2><div>${content.manufacturing}</div>` : ''}
              ${content.evaluation ? `<h2>Evaluation & QC</h2><div>${content.evaluation}</div>` : ''}
              
              ${(content.advantages || content.limitations) ? `
                <div class="pharma-grid pharma-grid--2col" style="margin: 2rem 0;">
                  ${content.advantages ? `<div class="pharma-card"><div class="pharma-card__header" style="color:var(--success)"><i data-lucide="check-circle"></i> Advantages</div><div class="pharma-card__body">${content.advantages}</div></div>` : ''}
                  ${content.limitations ? `<div class="pharma-card"><div class="pharma-card__header" style="color:var(--danger)"><i data-lucide="x-circle"></i> Limitations</div><div class="pharma-card__body">${content.limitations}</div></div>` : ''}
                </div>
              ` : ''}

              ${content.keyPoints ? `<h2>Key Points</h2><div class="pharma-callout pharma-callout--important">${content.keyPoints}</div>` : ''}
            </div>

            <div class="pharma-sidebar">
              ${(topic.formulas && topic.formulas.length > 0) ? `
                <div class="pharma-card" style="margin-bottom:1rem;">
                  <div class="pharma-card__header"><h3>Formulas</h3></div>
                  <div class="pharma-card__body">
                    ${topic.formulas.map(f => `
                      <div class="pharma-formula-box" style="margin-bottom:1rem; padding:1rem; background:var(--bg-secondary); border-radius:var(--radius-md);">
                        <div style="font-weight:bold; margin-bottom:0.5rem;">${f.name}</div>
                        <div style="font-size:1.2rem; text-align:center; padding:0.5rem 0; font-family:var(--font-mono);">${f.equation}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              ${(topic.vivaQuestions && topic.vivaQuestions.length > 0) ? `
                <div class="pharma-card" style="margin-bottom:1rem;">
                  <div class="pharma-card__header"><h3>Viva Questions</h3></div>
                  <div class="pharma-card__body">
                    <ul style="padding-left:1.2rem; margin:0; color:var(--text-secondary); font-size:0.9rem;">
                      ${topic.vivaQuestions.map(q => `<li style="margin-bottom:0.5rem;">${q}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              ` : ''}

              ${(topic.references && topic.references.length > 0) ? `
                <div class="pharma-card">
                  <div class="pharma-card__header"><h3>References</h3></div>
                  <div class="pharma-card__body">
                    <ol style="padding-left:1.2rem; margin:0; font-size:0.85rem; color:var(--text-secondary);">
                      ${topic.references.map(r => `<li><a href="${r.url}" target="_blank">${r.text}</a></li>`).join('')}
                    </ol>
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
      container.innerHTML = html;

      // Bind progress buttons
      if (PharmHub.progress) {
        const progBtns = container.querySelectorAll('.prog-btn');
        progBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            const newStatus = e.target.getAttribute('data-status');
            PharmHub.progress.set(topicId, newStatus);
            progBtns.forEach(b => {
              b.classList.remove('pharma-btn--primary');
              b.classList.add('pharma-btn--outline');
            });
            e.target.classList.remove('pharma-btn--outline');
            e.target.classList.add('pharma-btn--primary');
          });
        });
      }
    }
  };
})();
