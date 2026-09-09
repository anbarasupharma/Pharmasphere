(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};

  const STORAGE_KEY = 'pharma-progress';

  PharmHub.progress = {
    data: {},

    init() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          this.data = JSON.parse(stored);
        } else {
          this.data = {};
        }
      } catch (e) {
        console.warn('Could not load progress from localStorage', e);
        this.data = {};
      }
    },

    get(topicId) {
      return this.data[topicId] || 'not-started';
    },

    set(topicId, status) {
      this.data[topicId] = status;
      this.save();
    },

    getAll() {
      return { ...this.data };
    },

    getStats() {
      const allTopics = (PharmHub.data && PharmHub.data.topics) || {};
      let total = 0;
      let completed = 0;
      let learning = 0;
      let notStarted = 0;

      for (const topicId in allTopics) {
        if (!allTopics[topicId].defined) continue;
        
        total++;
        const status = this.get(topicId);
        
        if (status === 'completed') {
          completed++;
        } else if (status === 'learning') {
          learning++;
        } else {
          notStarted++;
        }
      }

      return {
        total,
        notStarted,
        learning,
        completed,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0
      };
    },

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      } catch (e) {
        console.warn('Could not save progress to localStorage', e);
      }
    }
  };
})();
