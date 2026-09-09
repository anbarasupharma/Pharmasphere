(function() {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  PharmHub.data.topics = PharmHub.data.topics || {};

  const nddsNotes = {
    'modified-release': {
      id: 'modified-release', title: 'Modified-Release Systems', category: 'drug-delivery', icon: 'zap', color: '#8b5cf6',
      brief: 'Sustained, controlled, and delayed release profiles.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #8b5cf6; margin-bottom: 1.5rem;">
            <h4 style="color: #5b21b6; margin-top: 0; display:flex; align-items:center; gap:0.5rem;"><i data-lucide="clock"></i> Release Kinetics</h4>
            <p style="margin:0; color: #4c1d95;"><strong>Modified-Release (MR)</strong> dosage forms are designed to alter the time, rate, or location of drug release compared to immediate-release forms, optimizing therapeutic outcomes and patient compliance.</p>
          </div>
        `,
        classification: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Types of Modified Release</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
            <div style="background: #faf5ff; border: 1px solid #d8b4fe; border-radius: 8px; padding: 1rem;">
              <h4 style="color: #7e22ce; margin-top:0;">Delayed Release</h4>
              <p style="color: #581c87; font-size: 0.9rem;">Release is intentionally delayed until the dosage form reaches a specific region (e.g., Enteric coating dissolving in the intestines, not the stomach).</p>
            </div>
            <div style="background: #faf5ff; border: 1px solid #d8b4fe; border-radius: 8px; padding: 1rem;">
              <h4 style="color: #7e22ce; margin-top:0;">Sustained Release (SR)</h4>
              <p style="color: #581c87; font-size: 0.9rem;">Prolongs drug release to reduce dosing frequency. Usually follows first-order kinetics (rate depends on remaining concentration).</p>
            </div>
            <div style="background: #faf5ff; border: 1px solid #d8b4fe; border-radius: 8px; padding: 1rem;">
              <h4 style="color: #7e22ce; margin-top:0;">Controlled Release (CR)</h4>
              <p style="color: #581c87; font-size: 0.9rem;">Maintains a constant drug level in the blood. Ideal systems follow strict <strong>Zero-Order kinetics</strong> (rate is completely independent of concentration).</p>
            </div>
          </div>
        `
      },
      defined: true
    },
    'colon-targeted': {
      id: 'colon-targeted', title: 'Colon-Targeted Delivery', category: 'drug-delivery', icon: 'target', color: '#f97316',
      brief: 'Site-specific delivery to the lower GI tract.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #f97316; margin-bottom: 1.5rem;">
            <h4 style="color: #9a3412; margin-top: 0; display:flex; align-items:center; gap:0.5rem;"><i data-lucide="target"></i> Targeted Therapy</h4>
            <p style="margin:0; color: #7c2d12;">Delivery systems specifically engineered to bypass the stomach and small intestine, releasing the active drug exclusively in the colon. Ideal for local diseases (Crohn's, Ulcerative Colitis) or systemic delivery of proteins.</p>
          </div>
        `,
        mechanism: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Targeting Strategies</h3>
          <div style="display:flex; flex-direction:column; gap:1rem; margin: 1.5rem 0;">
            <div style="display:flex; align-items:flex-start; gap:1rem; background:var(--bg-card); padding:1rem; border-radius:8px; border:1px solid #fdba74;">
              <div style="background:#f97316; color:white; padding:0.5rem; border-radius:8px; font-weight:bold;">pH</div>
              <div><h4 style="margin:0 0 0.25rem 0; color:#c2410c;">pH-Dependent Polymers</h4><p style="margin:0; font-size:0.9rem;">Polymers like Eudragit S100 that only dissolve at pH > 7.0 (found in the terminal ileum/colon).</p></div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:1rem; background:var(--bg-card); padding:1rem; border-radius:8px; border:1px solid #fdba74;">
              <div style="background:#f97316; color:white; padding:0.5rem; border-radius:8px; font-weight:bold;">T</div>
              <div><h4 style="margin:0 0 0.25rem 0; color:#c2410c;">Time-Dependent Systems</h4><p style="margin:0; font-size:0.9rem;">Designed to resist release for 5-6 hours, correlating with typical GI transit times to reach the colon.</p></div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:1rem; background:var(--bg-card); padding:1rem; border-radius:8px; border:1px solid #fdba74;">
              <div style="background:#f97316; color:white; padding:0.5rem; border-radius:8px;"><i data-lucide="bug"></i></div>
              <div><h4 style="margin:0 0 0.25rem 0; color:#c2410c;">Microbially Triggered</h4><p style="margin:0; font-size:0.9rem;">Exploits the massive colonic microflora. Drugs are bound by azo bonds or polysaccharides (like pectin/guar gum) that are only degraded by colonic bacterial enzymes.</p></div>
            </div>
          </div>
        `
      },
      defined: true
    },
    'transdermal': {
      id: 'transdermal', title: 'Transdermal Delivery (TDDS)', category: 'drug-delivery', icon: 'layers', color: '#14b8a6',
      brief: 'Systemic delivery across the skin.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #14b8a6; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #115e59; font-size:1.05rem;"><strong>Transdermal Patches</strong> deliver drugs systemically across the skin at a controlled rate. They bypass hepatic first-pass metabolism, provide steady plasma levels, and offer simple removal if toxicity occurs.</p>
          </div>
        `,
        principles: `
          <div style="background: #fff1f2; border: 1px solid #fecdd3; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
            <h4 style="color: #be123c; margin-top:0; display:flex; align-items:center; gap:0.5rem;"><i data-lucide="shield-alert"></i> The Stratum Corneum Barrier</h4>
            <p style="color: #881337; margin-bottom:0;">The outermost layer of the epidermis is the primary barrier to permeation. Only highly potent, lipophilic drugs with a low molecular weight (< 500 Da) can passively diffuse. Others require penetration enhancers, microneedles, or iontophoresis.</p>
          </div>
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Patch Designs</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
            <div style="background: #f0fdfa; border: 1px solid #5eead4; padding: 1rem; border-radius: 8px;">
              <h4 style="color: #0f766e; margin-top:0;">Matrix Patches</h4>
              <p style="color: #134e4a; font-size:0.9rem;">The drug is directly dissolved or dispersed within the adhesive polymer. Simpler to manufacture and cannot "leak" (dose dumping is prevented if cut).</p>
            </div>
            <div style="background: #f0fdfa; border: 1px solid #5eead4; padding: 1rem; border-radius: 8px;">
              <h4 style="color: #0f766e; margin-top:0;">Reservoir Patches</h4>
              <p style="color: #134e4a; font-size:0.9rem;">The drug is in a liquid/gel compartment, separated from the skin by a rate-controlling polymeric membrane. Offers precise zero-order release kinetics.</p>
            </div>
          </div>
        `
      },
      defined: true
    },
    'ocular': {
      id: 'ocular', title: 'Ocular Drug Delivery', category: 'drug-delivery', icon: 'eye', color: '#3b82f6',
      brief: 'Eye drops, ointments, and advanced inserts.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #3b82f6; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #1e40af; font-size:1.05rem;">Topical delivery to the eye is notoriously inefficient (often < 5% bioavailability) due to anatomical barriers, tear washout, and nasolacrimal drainage. NDDS approaches aim to increase precorneal residence time.</p>
          </div>
        `,
        mechanism: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Advanced Ocular Systems</h3>
          <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:1rem;">
            <li style="background: white; border: 1px solid #bfdbfe; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #1d4ed8;">Viscosity Enhancers:</strong> Polymers like HPMC or Hyaluronic acid thicken drops to slow drainage.
            </li>
            <li style="background: white; border: 1px solid #bfdbfe; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #1d4ed8;">In-Situ Gels:</strong> Liquids that instantly convert to a gel upon contact with the eye due to pH changes, temperature (Poloxamer), or ions (Gellan gum).
            </li>
            <li style="background: white; border: 1px solid #bfdbfe; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #1d4ed8;">Ocular Inserts:</strong> Solid polymeric devices (e.g., Ocusert) placed in the cul-de-sac for zero-order release over a week.
            </li>
          </ul>
        `
      },
      defined: true
    },
    'nanoparticles': {
      id: 'nanoparticles', title: 'Nanoparticles', category: 'drug-delivery', icon: 'atom', color: '#4338ca',
      brief: 'Polymeric and lipid nanocarriers (1-1000 nm).',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #4338ca; margin-bottom: 1.5rem;">
            <h4 style="color: #312e81; margin-top: 0; display:flex; align-items:center; gap:0.5rem;"><i data-lucide="atom"></i> Nano-Scale Delivery</h4>
            <p style="margin:0; color: #312e81;">Submicron colloidal structures (typically 10-200 nm). They can easily penetrate capillaries and cellular membranes, making them invaluable for targeted cancer therapy, gene delivery, and crossing the BBB.</p>
          </div>
        `,
        classification: `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
            <div style="background: #eef2ff; border: 1px solid #c7d2fe; padding: 1.5rem; border-radius: 8px; text-align:center;">
              <h4 style="color: #3730a3; margin-top:0;">Nanospheres</h4>
              <p style="color: #312e81; font-size:0.9rem;">Matrix systems where the drug is physically and uniformly dispersed.</p>
            </div>
            <div style="background: #eef2ff; border: 1px solid #c7d2fe; padding: 1.5rem; border-radius: 8px; text-align:center;">
              <h4 style="color: #3730a3; margin-top:0;">Nanocapsules</h4>
              <p style="color: #312e81; font-size:0.9rem;">Vesicular systems where a polymeric shell surrounds a liquid/oil drug core.</p>
            </div>
          </div>
        `,
        principles: `
          <div style="background: #fdf4ff; border: 1px solid #f0abfc; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
            <h4 style="color: #a21caf; margin-top:0;">Passive Targeting: The EPR Effect</h4>
            <p style="color: #701a75; margin-bottom:0;">Tumor tissues possess leaky vasculature (gaps in endothelial cells) and poor lymphatic drainage. Nanoparticles passively leak into and accumulate within the tumor tissue—a phenomenon known as the <strong>Enhanced Permeability and Retention (EPR) effect</strong>.</p>
          </div>
        `
      },
      defined: true
    },
    'liposomes': {
      id: 'liposomes', title: 'Liposomes', category: 'drug-delivery', icon: 'droplet', color: '#db2777',
      brief: 'Phospholipid vesicular systems.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #db2777; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #831843; font-size:1.05rem;"><strong>Liposomes</strong> are microscopic, spherical vesicles consisting of one or more concentric lipid bilayers (usually phospholipids and cholesterol) enclosing an aqueous core.</p>
          </div>
        `,
        mechanism: `
          <div style="display:flex; align-items:center; justify-content:center; gap:2rem; margin:2rem 0; flex-wrap:wrap;">
            <div style="width: 120px; height: 120px; border-radius: 50%; border: 15px solid #f472b6; background: #93c5fd; display:flex; align-items:center; justify-content:center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
              <span style="color: #1e3a8a; font-weight:bold; font-size:0.8rem; text-align:center;">Aqueous<br>Core</span>
            </div>
            <div style="flex:1; min-width:200px;">
              <h4 style="color: #be185d; margin-top:0;">Dual Delivery Capability</h4>
              <p style="margin-bottom:0.5rem; font-size:0.95rem;"><strong>Hydrophilic drugs</strong> (like Doxorubicin) are dissolved and trapped in the inner aqueous core.</p>
              <p style="margin-bottom:0; font-size:0.95rem;"><strong>Lipophilic drugs</strong> (like Amphotericin B) are intercalated within the hydrophobic tails of the lipid bilayer itself.</p>
            </div>
          </div>
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Stealth Liposomes</h3>
          <p>Conventional liposomes are rapidly destroyed by the Reticuloendothelial System (RES) / macrophages in the blood. By coating the liposome surface with <strong>Polyethylene Glycol (PEG)</strong>, they become "invisible" to macrophages, dramatically increasing their circulation half-life.</p>
        `
      },
      defined: true
    }
  };

  Object.assign(PharmHub.data.topics, nddsNotes);

})();
