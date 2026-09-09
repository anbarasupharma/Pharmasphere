(function() {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  PharmHub.data.topics = PharmHub.data.topics || {};

  const qaTopic = {
    'qa': {
      id: 'qa', 
      title: 'Quality Assurance (QA) & Systems', 
      category: 'quality', 
      icon: 'shield-check', 
      color: '#ec4899', // Pink/rose color for quality
      brief: 'Comprehensive systems, CAPA, and procedures to ensure overall pharmaceutical quality.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #db2777; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h4 style="color: #be185d; margin-top: 0; display:flex; align-items:center; gap:0.5rem;">
              <i data-lucide="shield"></i> Core Definition
            </h4>
            <p style="margin:0; color: #831843; font-size: 1.05rem;">
              <strong>Quality Assurance (QA)</strong> is a wide-ranging, proactive concept that covers all matters that individually or collectively influence the quality of a pharmaceutical product. It is the sum total of the organized arrangements made with the objective of ensuring that medicinal products are of the quality required for their intended use.
            </p>
          </div>
          <p>Unlike Quality Control (which tests the products), QA focuses on the <strong>processes</strong> used to make the product. It ensures that standard operating procedures (SOPs) are strictly followed, deviations are investigated, and facilities meet global GMP standards.</p>
        `,
        introduction: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">The QA vs QC Distinction</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
            <!-- QA Card -->
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 1.5rem;">
              <h4 style="color: #1d4ed8; text-align: center; margin-top:0;">Quality Assurance (QA)</h4>
              <ul style="color: #1e3a8a; padding-left: 1.2rem; margin-bottom:0;">
                <li style="margin-bottom:0.5rem;"><strong>Proactive:</strong> Prevents defects.</li>
                <li style="margin-bottom:0.5rem;"><strong>Process-Oriented:</strong> Focuses on manufacturing systems and SOPs.</li>
                <li style="margin-bottom:0.5rem;"><strong>Scope:</strong> Whole facility, training, audits, vendor qualification.</li>
                <li><strong>Tool:</strong> Quality Management System (QMS).</li>
              </ul>
            </div>
            <!-- QC Card -->
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 1.5rem;">
              <h4 style="color: #15803d; text-align: center; margin-top:0;">Quality Control (QC)</h4>
              <ul style="color: #14532d; padding-left: 1.2rem; margin-bottom:0;">
                <li style="margin-bottom:0.5rem;"><strong>Reactive:</strong> Identifies defects.</li>
                <li style="margin-bottom:0.5rem;"><strong>Product-Oriented:</strong> Focuses on testing the actual drug batch.</li>
                <li style="margin-bottom:0.5rem;"><strong>Scope:</strong> Laboratory testing, raw materials, assays, stability.</li>
                <li><strong>Tool:</strong> Analytical Instruments (HPLC, UV, Disintegration).</li>
              </ul>
            </div>
          </div>
        `,
        principles: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem; margin-top:2rem;">Core Pillars of the Quality System</h3>
          
          <div style="margin-bottom: 1.5rem;">
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
              <span style="background: #db2777; color: white; width: 32px; height: 32px; display: flex; align-items:center; justify-content:center; border-radius: 50%; font-weight: bold;">1</span>
              <h4 style="margin:0; color:#db2777;">CAPA (Corrective and Preventive Actions)</h4>
            </div>
            <p style="padding-left: 3rem;">The heart of QA. When a deviation occurs, QA doesn't just fix the immediate error (Correction). They investigate the root cause, implement a <strong>Corrective Action</strong> to stop it from happening again, and a <strong>Preventive Action</strong> across other systems to prevent similar issues.</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
              <span style="background: #db2777; color: white; width: 32px; height: 32px; display: flex; align-items:center; justify-content:center; border-radius: 50%; font-weight: bold;">2</span>
              <h4 style="margin:0; color:#db2777;">Change Control</h4>
            </div>
            <p style="padding-left: 3rem;">In pharma, nothing can be changed (equipment, suppliers, batch size, software) without formal approval. Change Control ensures that proposed changes are scientifically evaluated for their impact on drug safety and efficacy before implementation.</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
              <span style="background: #db2777; color: white; width: 32px; height: 32px; display: flex; align-items:center; justify-content:center; border-radius: 50%; font-weight: bold;">3</span>
              <h4 style="margin:0; color:#db2777;">Validation & Qualification</h4>
            </div>
            <p style="padding-left: 3rem; margin-bottom: 0.5rem;">Documented evidence that a process or equipment does exactly what it claims to do. This involves:</p>
            <ul style="padding-left: 4.5rem; margin-top:0;">
              <li><strong>DQ (Design Qualification):</strong> Is the design suitable?</li>
              <li><strong>IQ (Installation Qualification):</strong> Is it installed correctly?</li>
              <li><strong>OQ (Operational Qualification):</strong> Does it operate within limits?</li>
              <li><strong>PQ (Performance Qualification):</strong> Does it perform consistently under load?</li>
            </ul>
          </div>
        `,
        evaluation: `
          <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 1.5rem; border-radius: 8px;">
            <h4 style="color: #b45309; margin-top:0;"><i data-lucide="book-open"></i> ICH Guidelines for Quality</h4>
            <p style="color: #92400e;">Global pharmaceutical QA is guided by the International Council for Harmonisation (ICH). The most critical documents are:</p>
            <ul style="color: #78350f;">
              <li><strong>ICH Q8 (Pharmaceutical Development):</strong> Introduces Quality by Design (QbD).</li>
              <li><strong>ICH Q9 (Quality Risk Management):</strong> Frameworks for assessing risk (e.g., FMEA).</li>
              <li><strong>ICH Q10 (Pharmaceutical Quality System):</strong> The overarching modern quality system model linking GMP and development.</li>
            </ul>
          </div>
        `
      },
      vivaQuestions: [
        'What is the fundamental difference between QA and QC?',
        'Explain the phases of equipment qualification (DQ, IQ, OQ, PQ).',
        'What is the purpose of a Change Control system?',
        'Define a Corrective Action versus a Preventive Action in CAPA.'
      ],
      references: [
        {text: "ICH Q10 Pharmaceutical Quality System", url: "https://www.ich.org/"},
        {text: "FDA Guidance on Quality Systems Approach", url: "https://www.fda.gov/"}
      ],
      defined: true
    }
  };

  Object.assign(PharmHub.data.topics, qaTopic);
})();
