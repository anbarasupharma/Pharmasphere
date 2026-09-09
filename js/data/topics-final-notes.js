(function() {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  PharmHub.data.topics = PharmHub.data.topics || {};

  const finalNotes = {
    'tablets': {
      id: 'tablets', title: 'Tablets & Compression', category: 'dosage-forms', icon: 'server', color: '#2563eb',
      brief: 'Solid dosage forms and manufacturing defects.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #2563eb; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #1e3a8a; font-size:1.05rem;"><strong>Tablets</strong> are the most widely used solid dosage form, offering precision dosing, excellent stability, and mass-production efficiency via direct compression or granulation.</p>
          </div>
        `,
        principles: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Common Manufacturing Defects</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
            <div style="background: #fef2f2; border: 1px solid #fca5a5; padding: 1rem; border-radius: 8px;">
              <h4 style="color: #b91c1c; margin-top:0;">Capping & Lamination</h4>
              <p style="color: #7f1d1d; font-size:0.9rem;">Separation of the top/bottom crown (capping) or separation into horizontal layers (lamination) due to air entrapment or excessive fine powder.</p>
            </div>
            <div style="background: #fffbeb; border: 1px solid #fcd34d; padding: 1rem; border-radius: 8px;">
              <h4 style="color: #b45309; margin-top:0;">Picking & Sticking</h4>
              <p style="color: #78350f; font-size:0.9rem;">Material adheres to the punch faces (picking - usually on logos/letters) or the die wall (sticking). Often fixed by adding lubricants or drying granules.</p>
            </div>
            <div style="background: #f0fdf4; border: 1px solid #86efac; padding: 1rem; border-radius: 8px;">
              <h4 style="color: #15803d; margin-top:0;">Mottling</h4>
              <p style="color: #14532d; font-size:0.9rem;">Unequal distribution of color on a tablet, caused by drug degradation, dye migration during drying, or improper mixing.</p>
            </div>
          </div>
        `
      },
      defined: true
    },
    'suspensions': {
      id: 'suspensions', title: 'Suspensions', category: 'dosage-forms', icon: 'flask-conical', color: '#059669',
      brief: 'Biphasic solid-in-liquid systems.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #059669; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #064e3b; font-size:1.05rem;"><strong>Suspensions</strong> are thermodynamically unstable biphasic systems where finely divided insoluble solid particles are dispersed in a liquid vehicle.</p>
          </div>
        `,
        classification: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Flocculated vs Deflocculated</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0;">
            <div style="flex:1; min-width:250px; background: white; border: 2px solid #34d399; padding: 1.5rem; border-radius: 8px;">
              <h4 style="color: #047857; margin-top:0; text-align:center;">Flocculated</h4>
              <ul style="color: #065f46; font-size:0.9rem;">
                <li>Particles form loose aggregates (flocs).</li>
                <li>Rate of sedimentation is high.</li>
                <li>Sediment is loosely packed.</li>
                <li><strong>Highly desirable:</strong> Easily redispersed upon shaking.</li>
              </ul>
            </div>
            <div style="flex:1; min-width:250px; background: white; border: 2px solid #f87171; padding: 1.5rem; border-radius: 8px;">
              <h4 style="color: #b91c1c; margin-top:0; text-align:center;">Deflocculated</h4>
              <ul style="color: #991b1b; font-size:0.9rem;">
                <li>Particles exist as separate entities.</li>
                <li>Rate of sedimentation is slow.</li>
                <li>Sediment closely packs over time.</li>
                <li><strong>Dangerous:</strong> Forms a hard "cake" that is impossible to redisperse.</li>
              </ul>
            </div>
          </div>
        `
      },
      defined: true
    },
    'rheology': {
      id: 'rheology', title: 'Rheology', category: 'physical-pharma', icon: 'activity', color: '#9333ea',
      brief: 'Study of flow and deformation of matter.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #9333ea; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #581c87; font-size:1.05rem;"><strong>Rheology</strong> evaluates how materials flow and deform under stress. It is crucial for formulating pourable syrups, spreadable ointments, and injectable suspensions.</p>
          </div>
        `,
        principles: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Non-Newtonian Flow Types</h3>
          <div style="display:flex; flex-direction:column; gap:1rem; margin: 1.5rem 0;">
            <div style="background:var(--bg-card); padding:1rem; border-radius:8px; border-left:4px solid #a855f7;">
              <h4 style="margin:0 0 0.25rem 0; color:#7e22ce;">Plastic (Bingham Bodies)</h4>
              <p style="margin:0; font-size:0.9rem;">Material does not flow until a specific "Yield Value" of stress is applied (e.g., flocculated suspensions, toothpaste).</p>
            </div>
            <div style="background:var(--bg-card); padding:1rem; border-radius:8px; border-left:4px solid #a855f7;">
              <h4 style="margin:0 0 0.25rem 0; color:#7e22ce;">Pseudoplastic (Shear-Thinning)</h4>
              <p style="margin:0; font-size:0.9rem;">Viscosity <em>decreases</em> as shear stress increases. Excellent for polymer solutions that need to be shaken to pour easily.</p>
            </div>
            <div style="background:var(--bg-card); padding:1rem; border-radius:8px; border-left:4px solid #a855f7;">
              <h4 style="margin:0 0 0.25rem 0; color:#7e22ce;">Dilatant (Shear-Thickening)</h4>
              <p style="margin:0; font-size:0.9rem;">Viscosity <em>increases</em> as shear stress increases. Found in deflocculated suspensions containing high (>50%) solid content.</p>
            </div>
          </div>
        `
      },
      defined: true
    },
    'micromeritics': {
      id: 'micromeritics', title: 'Micromeritics', category: 'physical-pharma', icon: 'grid', color: '#d97706',
      brief: 'Science and technology of small particles.',
      content: {
        definition: `
          <div style="background: linear-gradient(135deg, #fffbeb 0%, #fde68a 100%); padding: 1.5rem; border-radius: 12px; border-left: 6px solid #d97706; margin-bottom: 1.5rem;">
            <p style="margin:0; color: #92400e; font-size:1.05rem;"><strong>Micromeritics</strong> is the study of small particles. Flow properties are critical in manufacturing to ensure uniform die-filling during tablet compression.</p>
          </div>
        `,
        principles: `
          <h3 style="color: var(--text); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">Evaluating Powder Flow</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
            <div style="background: white; border: 1px solid #fcd34d; border-radius: 8px; padding: 1.5rem; text-align:center; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
              <h4 style="color: #b45309; margin-top:0; font-size:1.2rem;">Angle of Repose</h4>
              <p style="color: #78350f; font-size: 0.9rem; margin-bottom:0.5rem;">Maximum angle possible between the surface of a powder pile and horizontal plane.</p>
              <strong style="color:#059669;">Excellent Flow: &lt; 25°</strong><br>
              <strong style="color:#dc2626;">Poor Flow: &gt; 40°</strong>
            </div>
            <div style="background: white; border: 1px solid #fcd34d; border-radius: 8px; padding: 1.5rem; text-align:center; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
              <h4 style="color: #b45309; margin-top:0; font-size:1.2rem;">Carr's Compressibility Index</h4>
              <p style="color: #78350f; font-size: 0.9rem; margin-bottom:0.5rem;">Evaluates the tendency of a powder to consolidate.</p>
              <strong style="color:#059669;">Excellent Flow: 5 - 15%</strong><br>
              <strong style="color:#dc2626;">Poor Flow: &gt; 25%</strong>
            </div>
            <div style="background: white; border: 1px solid #fcd34d; border-radius: 8px; padding: 1.5rem; text-align:center; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
              <h4 style="color: #b45309; margin-top:0; font-size:1.2rem;">Hausner Ratio</h4>
              <p style="color: #78350f; font-size: 0.9rem; margin-bottom:0.5rem;">Ratio of Tapped Density to Bulk Density.</p>
              <strong style="color:#059669;">Excellent Flow: 1.00 - 1.11</strong><br>
              <strong style="color:#dc2626;">Poor Flow: &gt; 1.25</strong>
            </div>
          </div>
        `
      },
      defined: true
    }
  };

  Object.assign(PharmHub.data.topics, finalNotes);

})();
