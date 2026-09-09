# Pharmaceutics Hub — Architecture Specification

> This document defines all interface contracts. Every JS module must follow these conventions.

## Project Path
`C:\Users\admin\.gemini\antigravity\scratch\pharmaceutics-hub\`

## Global Namespace Pattern

Every JS file uses an IIFE and attaches to `window.PharmHub`:

```js
(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  // ... attach your module ...
  PharmHub.moduleName = { ... };
})();
```

## Script Loading Order (from index.html)

1. CDN: Chart.js, Fuse.js, Lucide
2. Data: topics.js, excipients.js, equipment.js, quizzes.js, search-index.js
3. Modules: progress.js, search.js, quiz.js, calculators.js, charts.js
4. Pages: home.js, learn.js, dosage-forms.js, calculators-page.js, lab-qc.js, drug-delivery.js, quiz-page.js, references.js, about.js
5. Core: app.js (initializes everything)

## Data Schemas

### PharmHub.data.topics  (topics.js)
```
{
  'topic-id-slug': {
    id:       'topic-id-slug',
    title:    'Full Topic Title',
    category: 'physical-pharma' | 'dosage-forms' | 'drug-delivery' | 'quality' | 'biopharmaceutics' | 'technology' | 'microbiology' | 'packaging',
    icon:     'lucide-icon-name',
    color:    '#hex',                // category accent color
    brief:    'One-sentence description for cards & search',
    content: {
      definition:    '<p>HTML</p>',
      introduction:  '<p>HTML</p>',
      principles:    '<p>HTML</p>',
      classification:'<div>HTML with tables/lists</div>',
      mechanism:     '<p>HTML</p>',
      applications:  '<p>HTML</p>',
      formulation:   '<p>HTML</p>',
      manufacturing: '<p>HTML</p>',
      evaluation:    '<p>HTML</p>',
      advantages:    '<ul><li>…</li></ul>',
      limitations:   '<ul><li>…</li></ul>',
      keyPoints:     '<ul><li>…</li></ul>'
    },
    formulas: [
      {
        name:      'Formula Name',
        equation:  'C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub>',
        variables: { C: 'Concentration', V: 'Volume' },
        units:     'result units',
        example:   'Worked example HTML',
        application: 'When to use'
      }
    ],
    tables: [
      { title: 'Title', headers: ['A','B'], rows: [['1','2']] }
    ],
    processes: [
      { title: 'Process Name', steps: ['Step 1','Step 2'] }
    ],
    vivaQuestions: ['Question 1?', 'Question 2?'],
    references: [
      { text: 'USP General Chapter <1174>', url: 'https://...' }
    ],
    relatedTopics: ['other-topic-id'],
    defined: true   // false = stub/placeholder only
  }
}
```

### PharmHub.data.excipients  (excipients.js)
```
[
  {
    name:       'Microcrystalline Cellulose',
    synonyms:   ['MCC', 'Avicel'],
    category:   'diluent',   // diluent|binder|disintegrant|lubricant|glidant|preservative|antioxidant|sweetener|flavor|color|surfactant|emulsifier|suspending-agent|viscosity-enhancer|buffer|coating-polymer|plasticizer|humectant
    functions:  ['Diluent','Binder'],
    dosageForms:['Tablets','Capsules'],
    properties: 'Key properties text',
    compatibility: 'Notes',
    references: [{ text: '', url: '' }]
  }
]
```

### PharmHub.data.equipment  (equipment.js)
```
[
  {
    name:         'Tablet Press',
    category:     'compression',  // compression|granulation|mixing|milling|drying|coating|testing|packaging
    purpose:      'text',
    principle:    'text',
    components:   ['Die','Punch'],
    applications: 'text',
    parameters:   ['Compression force','Turret speed'],
    references:   [{ text: '', url: '' }]
  }
]
```

### PharmHub.data.quizzes  (quizzes.js)
```
[
  {
    id:          'q001',
    topic:       'tablets',        // matches a topic id
    category:    'dosage-forms',   // broad category
    difficulty:  'basic',          // basic|intermediate|advanced
    question:    'Question text?',
    options:     ['A','B','C','D'],
    correct:     0,                // index of correct option
    explanation: 'HTML explanation',
    reference:   { text: 'Source', url: '' }
  }
]
```

### PharmHub.data.searchIndex  (search-index.js)
```
[
  {
    title:    'Display Title',
    type:     'topic',    // topic|calculator|excipient|equipment|quiz|definition
    route:    '#/learn/tablets',
    keywords: 'space-separated keywords',
    category: 'Category Name',
    brief:    'Short description'
  }
]
```

## Module APIs

### PharmHub.calculators  (calculators.js)
```
{
  types: {
    'percentage-strength': {
      title, description, category,
      inputs: [{ id, label, type, placeholder, unit, required, min, step, options? }],
      formula: 'HTML',
      assumptions: 'text',
      references: [{ text, url }]
    },
    ...
  },
  calculate(type, inputs) → {
    result: number|string,
    steps: string[],        // step-by-step explanation strings (HTML)
    formula: string,        // rendered formula HTML
    interpretation: string, // educational interpretation
    error: string|null
  },
  getInfo(type) → type info object
}
```

Calculator types (16 total):
percentage-strength, dilution, alligation, proof-spirit, isotonicity,
displacement-value, density, bulk-density, tapped-density, carrs-index,
hausner-ratio, angle-of-repose, first-order-kinetics, zero-order-kinetics,
dissolution, dose-conversion

### PharmHub.charts  (charts.js)
```
{
  instances: [],
  createDissolutionChart(containerId, options?) → Chart,
  createFirstOrderChart(containerId, params?)   → Chart,
  createZeroOrderChart(containerId, params?)     → Chart,
  createPKCurveChart(containerId)                → Chart,
  createSedimentationChart(containerId)          → Chart,
  createPSDChart(containerId, data?)             → Chart,
  createRheogramChart(containerId, type?)        → Chart,
  createReleaseProfileChart(containerId)         → Chart,
  destroyAll()
}
```

### PharmHub.quiz  (quiz.js)
```
{
  getRandomQuestion(topic?)          → question object,
  getQuestions(topic?, count?, diff?) → question[],
  checkAnswer(questionId, answer)    → { correct, explanation },
  startSession(topic?, count?)       → sessionId,
  submitAnswer(sessionId, qId, ans)  → { correct, explanation },
  getSessionScore(sessionId)         → { correct, total, percentage, results[] }
}
```

### PharmHub.search  (search.js)
```
{
  fuse: null,
  init()          // build Fuse index from PharmHub.data.searchIndex
  open()          // show modal, focus input
  close()         // hide modal
  search(query)   → results[]
}
```

### PharmHub.progress  (progress.js)
```
{
  init()                      // load from localStorage
  get(topicId) → 'not-started' | 'learning' | 'completed'
  set(topicId, status)        // save to localStorage
  getAll() → { topicId: status }
  getStats() → { total, notStarted, learning, completed, percentage }
}
```

## Page Renderers

Each attaches to `PharmHub.pages`:
```
PharmHub.pages.home = {
  render(container, params) { /* build HTML into container */ }
};
```

Page keys → Routes:
| Key             | Route Pattern                     |
|-----------------|-----------------------------------|
| home            | #/ or #/home                      |
| learn           | #/learn  or #/learn/:topicId      |
| dosageForms     | #/dosage-forms or #/dosage-forms/:id |
| calculatorsPage | #/calculators or #/calculators/:type |
| labQC           | #/lab-qc                          |
| drugDelivery    | #/drug-delivery or #/drug-delivery/:id |
| quizPage        | #/quiz or #/quiz/:topic           |
| references      | #/references                      |
| about           | #/about                           |

## CSS Class Conventions

Prefix: `pharma-`    Naming: BEM-like (`block__element--modifier`)

Core classes available in main.css:

**Layout**: pharma-section, pharma-container, pharma-grid, pharma-grid--2col, --3col, --4col
**Cards**: pharma-card, pharma-card--featured, pharma-card__header, pharma-card__body, pharma-card__footer
**Buttons**: pharma-btn, pharma-btn--primary, --secondary, --outline, --danger, --sm, --lg
**Forms**: pharma-input, pharma-select, pharma-textarea, pharma-input-group
**Data**: pharma-table, pharma-table--striped, pharma-table--compact
**Content**: pharma-accordion, pharma-accordion__item, pharma-accordion__header, pharma-accordion__content
**Display**: pharma-badge, pharma-badge--primary, --success, --warning, --danger, --outline
**Alerts**: pharma-callout, pharma-callout--info, --warning, --tip, --important
**Special**: pharma-formula-box, pharma-flowchart, pharma-comparison-table, pharma-stat-card
**Nav**: pharma-nav, pharma-breadcrumb, pharma-tabs, pharma-tab-content
**Search**: pharma-search-modal, pharma-search-modal__header, __results
**Calculator**: pharma-calculator, pharma-calculator__input-group, __result, __steps
**Progress**: pharma-progress-bar, pharma-progress-bar__fill
**Hero**: pharma-hero, pharma-hero__title, pharma-hero__subtitle, pharma-hero__actions
**Quiz**: pharma-quiz, pharma-quiz__option, pharma-quiz__feedback
**Footer**: pharma-footer, pharma-footer__grid, pharma-footer__brand, pharma-footer__links
**Utility**: pharma-divider, pharma-empty-state, pharma-loading, pharma-tag, pharma-topic-page, pharma-sidebar

## Theme Variables (from themes.css)

Use `var(--name)` for ALL visual properties. Key variables:

Colors: --primary, --primary-light, --primary-dark, --primary-50 to --primary-900,
        --accent, --accent-light, --accent-dark,
        --bg, --bg-secondary, --bg-tertiary, --bg-card,
        --text, --text-secondary, --text-muted, --text-inverse,
        --border, --border-light, --border-focus,
        --success, --warning, --danger, --info (+bg/border variants),
        --cat-physical, --cat-dosage, --cat-delivery, --cat-quality, etc.

Shadows: --shadow-xs, --shadow-sm, --shadow-md, --shadow-lg, --shadow-xl
Radius:  --radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-full
Transitions: --transition-fast, --transition, --transition-slow
Fonts: --font-body, --font-mono; sizes: --font-size-xs to --font-size-5xl
Layout: --nav-height, --container-width, --sidebar-width

## Navigation

To navigate programmatically: `PharmHub.router.navigate('#/learn/tablets')`
In HTML: `<a href="#/learn/tablets">`

## Content Principles

- Original educational explanations (never copy verbatim from copyrighted sources)
- Reference authoritative sources: USP, IP, WHO, FDA, EMA, ICH, PubMed
- Distinguish educational content from official pharmacopoeial requirements
- Add educational disclaimers on calculators and clinical content
- Use Lucide icon names from https://lucide.dev/icons for `data-lucide` attributes
- After dynamic rendering, icons are activated by `PharmHub.utils.renderIcons()`
