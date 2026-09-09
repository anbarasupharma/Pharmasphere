(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};

  let debounceTimer;

  PharmHub.search = {
    fuse: null,
    
    init() {
      if (!window.Fuse || !PharmHub.data || !PharmHub.data.searchIndex) {
        console.warn('Fuse.js or searchIndex not loaded.');
        return;
      }
      
      const options = {
        keys: ['title', 'keywords', 'brief', 'category'],
        threshold: 0.3,
        includeScore: true
      };
      
      this.fuse = new window.Fuse(PharmHub.data.searchIndex, options);
      this.setupListeners();
    },

    setupListeners() {
      const input = document.getElementById('search-input');
      if (input) {
        input.addEventListener('input', (e) => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            this.handleSearch(e.target.value);
          }, 200);
        });
      }

      const overlay = document.getElementById('search-overlay');
      if (overlay) {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) this.close();
        });
      }
    },

    open() {
      const modal = document.getElementById('search-modal');
      const input = document.getElementById('search-input');
      
      if (modal) modal.classList.add('open');
      if (input) {
        input.value = '';
        input.focus();
        this.handleSearch(''); // show hints
      }

      this._escListener = (e) => {
        if (e.key === 'Escape') this.close();
      };
      
      document.addEventListener('keydown', this._escListener);

      this._enterListener = (e) => {
        if (e.key === 'Enter') {
          const firstResult = document.querySelector('.pharma-search-result');
          if (firstResult) {
            firstResult.click();
          }
        }
      };
      document.addEventListener('keydown', this._enterListener);
    },

    close() {
      const modal = document.getElementById('search-modal');
      const input = document.getElementById('search-input');
      const resultsContainer = document.getElementById('search-results');
      
      if (modal) modal.classList.remove('open');
      if (input) input.value = '';
      if (resultsContainer) resultsContainer.innerHTML = '';
      
      if (this._escListener) {
        document.removeEventListener('keydown', this._escListener);
      }
      if (this._enterListener) {
        document.removeEventListener('keydown', this._enterListener);
      }
    },

    search(query) {
      if (!this.fuse) return [];
      return this.fuse.search(query).map(result => result.item);
    },

    handleSearch(query) {
      const resultsContainer = document.getElementById('search-results');
      if (!resultsContainer) return;

      if (!query.trim()) {
        resultsContainer.innerHTML = `
          <div class="pharma-search-hints">
            <p>Try searching for:</p>
            <ul>
              <li>"Tablets"</li>
              <li>"Dilution Calculator"</li>
              <li>"Magnesium Stearate"</li>
            </ul>
          </div>
        `;
        return;
      }

      const results = this.search(query);
      
      if (results.length === 0) {
        resultsContainer.innerHTML = `
          <div class="pharma-search-empty">
            <p>No results found for "${query}"</p>
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = results.map(item => `
        <a href="${item.route}" class="pharma-search-result" onclick="PharmHub.search.close()">
          <div class="pharma-search-result__header">
            <span class="pharma-search-result__title">${item.title}</span>
            <span class="pharma-badge pharma-badge--outline">${item.type}</span>
          </div>
          <p class="pharma-search-result__brief">${item.brief}</p>
        </a>
      `).join('');
    }
  };
})();
