(function() {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  PharmHub.data.topics = PharmHub.data.topics || {};

  const userNotes = {
    'physical-pharmaceutics': {
      id: 'physical-pharmaceutics', title: 'Physical Pharmaceutics', category: 'physical-pharma', icon: 'microscope', color: '#4f46e5',
      brief: 'Study of physicochemical principles in drug formulation.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #4f46e5; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h4 style="color: #3730a3; margin-top: 0; display:flex; align-items:center; gap:0.5rem;"><i data-lucide="microscope"></i> Core Concept</h4>
            <p style="margin:0; color: #312e81; font-size: 1.05rem;"><strong>Physical Pharmaceutics</strong> integrates knowledge of physics and chemistry to understand the fundamental principles underlying drug formulation, delivery, and stability.</p>
          </div>
        `,
        principles: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">The 4 Pillars of Physical Pharmacy</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem;">
              <h4 style="color: #0f172a; margin-top:0;">Thermodynamics</h4>
              <p style="color: #334155; font-size: 0.9rem;">Energy changes driving solubility, phase transitions, and micellization.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem;">
              <h4 style="color: #0f172a; margin-top:0;">States of Matter</h4>
              <p style="color: #334155; font-size: 0.9rem;">Solid, liquid, gas, and mesophases (liquid crystals/polymorphs).</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem;">
              <h4 style="color: #0f172a; margin-top:0;">Phase Equilibria</h4>
              <p style="color: #334155; font-size: 0.9rem;">Phase diagrams, eutectic mixtures, and the Gibbs phase rule.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem;">
              <h4 style="color: #0f172a; margin-top:0;">Interfacial Phenomena</h4>
              <p style="color: #334155; font-size: 0.9rem;">Surface tension, adsorption, and surfactants.</p>
            </div>
          </div>
        `
      },
      defined: true
    },
    'buccal': {
      id: 'buccal', title: 'Buccal & Sublingual', category: 'drug-delivery', icon: 'smile', color: '#f59e0b',
      brief: 'Transmucosal delivery in the oral cavity.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #d97706; margin-bottom: 1.5rem;">
            <h4 style="color: #92400e; margin-top: 0; display:flex; align-items:center; gap:0.5rem;"><i data-lucide="target"></i> Transmucosal Delivery</h4>
            <p style="margin:0; color: #78350f;"><strong>Buccal delivery</strong> utilizes the cheek's mucosal lining, while <strong>Sublingual delivery</strong> utilizes the highly vascularized membrane under the tongue for rapid systemic absorption.</p>
          </div>
        `,
        advantages: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Pros & Cons</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
            <div style="background: #ecfdf5; border: 1px solid #6ee7b7; padding: 1rem; border-radius: 8px;">
              <h4 style="color: #047857; margin-top:0;">Advantages</h4>
              <ul style="color: #065f46; padding-left: 1rem; margin:0;">
                <li><strong>Bypasses First-Pass:</strong> Avoids liver degradation.</li>
                <li><strong>Rapid Onset:</strong> Ideal for angina (Nitroglycerin).</li>
                <li>Avoids harsh stomach acid.</li>
              </ul>
            </div>
            <div style="background: #fef2f2; border: 1px solid #fca5a5; padding: 1rem; border-radius: 8px;">
              <h4 style="color: #b91c1c; margin-top:0;">Limitations</h4>
              <ul style="color: #991b1b; padding-left: 1rem; margin:0;">
                <li>Small surface area for absorption.</li>
                <li>Drug is constantly diluted/washed away by saliva.</li>
                <li>Taste masking can be difficult.</li>
              </ul>
            </div>
          </div>
        `
      },
      defined: true
    },
    'gmp': {
      id: 'gmp', title: 'Good Manufacturing Practices (GMP)', category: 'technology', icon: 'shield-check', color: '#10b981',
      brief: 'cGMP requirements and facility design.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #059669; margin-bottom: 1.5rem;">
            <h4 style="color: #065f46; margin-top: 0;">What is GMP?</h4>
            <p style="margin:0; color: #064e3b;">GMP enforces that quality cannot be merely tested into a product at the end; it must be completely <strong>built into each batch</strong> during all stages of manufacturing via strict 21 CFR compliance.</p>
          </div>
        `,
        keyPoints: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Key GMP Directives</h3>
          <div style="display:flex; flex-direction:column; gap:1rem; margin: 1.5rem 0;">
            <div style="display:flex; align-items:flex-start; gap:1rem; background:var(--bg-card); padding:1rem; border-radius:8px; border:1px solid var(--border);">
              <div style="background:#10b981; color:white; padding:0.5rem; border-radius:8px;"><i data-lucide="users"></i></div>
              <div><h4 style="margin:0 0 0.25rem 0; color:#047857;">Personnel</h4><p style="margin:0; font-size:0.9rem;">Strict hygiene, gowning protocols, and continuous documented training.</p></div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:1rem; background:var(--bg-card); padding:1rem; border-radius:8px; border:1px solid var(--border);">
              <div style="background:#10b981; color:white; padding:0.5rem; border-radius:8px;"><i data-lucide="building"></i></div>
              <div><h4 style="margin:0 0 0.25rem 0; color:#047857;">Premises & Equipment</h4><p style="margin:0; font-size:0.9rem;">Cleanroom classifications (ISO 5/7/8) and pressure-controlled HVAC systems.</p></div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:1rem; background:var(--bg-card); padding:1rem; border-radius:8px; border:1px solid var(--border);">
              <div style="background:#10b981; color:white; padding:0.5rem; border-radius:8px;"><i data-lucide="file-text"></i></div>
              <div><h4 style="margin:0 0 0.25rem 0; color:#047857;">Documentation</h4><p style="margin:0; font-size:0.9rem;">"If it isn't documented, it didn't happen." Adherence to SOPs and BMRs.</p></div>
            </div>
          </div>
        `
      },
      defined: true
    },
    'microspheres': {
      id: 'microspheres', title: 'Microspheres', category: 'drug-delivery', icon: 'circle-dot', color: '#c026d3',
      brief: 'Microparticulate delivery systems.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #c026d3; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #701a75; font-size:1.05rem;"><strong>Microspheres</strong> are free-flowing solid particles (1–1000 µm) consisting of a polymeric matrix where the drug is dissolved or encapsulated, commonly used for sustained-release depot injections.</p>
          </div>
        `,
        classification: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
            <div style="background: #faf5ff; border: 1px solid #e9d5ff; padding: 1.5rem; border-radius: 8px; text-align:center;">
              <div style="width:60px; height:60px; border-radius:50%; border:4px solid #a855f7; margin:0 auto 1rem auto; display:flex; align-items:center; justify-content:center;">
                <div style="width:20px; height:20px; background:#a855f7; border-radius:50%;"></div>
              </div>
              <h4 style="color: #7e22ce; margin-top:0;">Microcapsules</h4>
              <p style="color: #581c87; font-size:0.9rem;">A distinct core material completely surrounded by a polymeric shell.</p>
            </div>
            <div style="background: #faf5ff; border: 1px solid #e9d5ff; padding: 1.5rem; border-radius: 8px; text-align:center;">
              <div style="width:60px; height:60px; border-radius:50%; background:#e9d5ff; margin:0 auto 1rem auto; display:flex; align-items:center; justify-content:center; position:relative;">
                <div style="width:6px; height:6px; background:#7e22ce; border-radius:50%; position:absolute; top:20px; left:20px;"></div>
                <div style="width:6px; height:6px; background:#7e22ce; border-radius:50%; position:absolute; top:40px; right:20px;"></div>
                <div style="width:6px; height:6px; background:#7e22ce; border-radius:50%; position:absolute; top:30px; left:40px;"></div>
              </div>
              <h4 style="color: #7e22ce; margin-top:0;">Micromatrix</h4>
              <p style="color: #581c87; font-size:0.9rem;">The drug is homogenously dispersed throughout the entire polymeric sphere.</p>
            </div>
          </div>
        `
      },
      defined: true
    },
    'nasal': {
      id: 'nasal', title: 'Nasal Delivery', category: 'drug-delivery', icon: 'wind', color: '#0ea5e9',
      brief: 'Nasal cavity administration.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #0284c7; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #075985; font-size:1.05rem;">Nasal delivery provides rapid systemic absorption due to the highly vascularized respiratory mucosa. It is also uniquely capable of direct <strong>nose-to-brain targeting</strong> via the olfactory and trigeminal nerve pathways, bypassing the BBB.</p>
          </div>
        `,
        limitations: `
          <div style="background: #fff1f2; border: 1px solid #fecdd3; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
            <h4 style="color: #be123c; margin-top:0; display:flex; align-items:center; gap:0.5rem;"><i data-lucide="alert-triangle"></i> The Barrier: Mucociliary Clearance</h4>
            <p style="color: #881337; margin-bottom:0;">The nasal cavity's primary defense is constant mucociliary clearance, sweeping mucus toward the nasopharynx. This gives formulations a maximum residence time of <strong>15–20 minutes</strong>, necessitating the use of mucoadhesive polymers.</p>
          </div>
        `
      },
      defined: true
    },
    'pharmaceutical-microbiology': {
      id: 'pharmaceutical-microbiology', title: 'Pharmaceutical Microbiology', category: 'microbiology', icon: 'bug', color: '#dc2626',
      brief: 'Study of microorganisms in manufacturing.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #b91c1c; margin-bottom: 1.5rem;">
            <h4 style="color: #991b1b; margin-top: 0;">Microbial Control</h4>
            <p style="margin:0; color: #7f1d1d;">The applied science of preventing microbial contamination in products, ensuring sterility in parenterals, and testing antimicrobial effectiveness.</p>
          </div>
        `,
        principles: `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
            <div style="background: white; border: 2px solid #fca5a5; border-radius: 8px; padding: 1rem; text-align:center;">
              <h4 style="color: #b91c1c; margin-top:0;">Sterility</h4>
              <p style="color: #7f1d1d; font-size: 0.9rem;">The absolute absence of viable microorganisms.</p>
            </div>
            <div style="background: white; border: 2px solid #fca5a5; border-radius: 8px; padding: 1rem; text-align:center;">
              <h4 style="color: #b91c1c; margin-top:0;">Bioburden</h4>
              <p style="color: #7f1d1d; font-size: 0.9rem;">The microbial count prior to sterilization.</p>
            </div>
            <div style="background: white; border: 2px solid #fca5a5; border-radius: 8px; padding: 1rem; text-align:center;">
              <h4 style="color: #b91c1c; margin-top:0;">Endotoxins</h4>
              <p style="color: #7f1d1d; font-size: 0.9rem;">Pyrogenic lipopolysaccharides from Gram-negatives (tested via LAL).</p>
            </div>
          </div>
        `
      },
      defined: true
    },
    'pulmonary': {
      id: 'pulmonary', title: 'Pulmonary Delivery', category: 'drug-delivery', icon: 'cloud', color: '#0891b2',
      brief: 'Inhalers and respiratory delivery.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #ecfeff 0%, #cffafe 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #0891b2; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #164e63;">The lungs offer an enormous surface area (~100 m²) and a very thin alveolar epithelium (0.1–0.2 µm), allowing for rapid and extensive systemic absorption of inhaled aerosols.</p>
          </div>
        `,
        principles: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Aerodynamic Equivalent Diameter (AED)</h3>
          <div style="display:flex; flex-direction:column; gap:0.5rem; margin: 1.5rem 0;">
            <div style="display:flex; justify-content:space-between; background:var(--bg-card); padding:1rem; border-radius:8px; border:1px solid var(--border);">
              <span style="font-weight:bold; color:#be123c;">> 5 µm</span>
              <span style="color:var(--text-secondary);">Impacts in the oropharynx & swallowed.</span>
            </div>
            <div style="display:flex; justify-content:space-between; background:#ecfeff; padding:1rem; border-radius:8px; border:1px solid #67e8f9;">
              <span style="font-weight:bold; color:#0d9488;">1 to 5 µm</span>
              <span style="color:#0f766e; font-weight:bold;">Ideal for deep lung alveolar deposition.</span>
            </div>
            <div style="display:flex; justify-content:space-between; background:var(--bg-card); padding:1rem; border-radius:8px; border:1px solid var(--border);">
              <span style="font-weight:bold; color:#94a3b8;">< 1 µm</span>
              <span style="color:var(--text-secondary);">Often immediately exhaled.</span>
            </div>
          </div>
        `
      },
      defined: true
    }
  };

  Object.assign(PharmHub.data.topics, userNotes);

})();
