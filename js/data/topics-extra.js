(function() {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  PharmHub.data.topics = PharmHub.data.topics || {};

  const extraTopics = {
    'kinetics': {
      id: 'kinetics', title: 'Chemical Kinetics', category: 'physical-pharma', icon: 'trending-down', color: 'var(--cat-physical)',
      brief: 'Reaction rates and mechanisms.',
      content: {
        definition: '<p>Chemical kinetics in pharmaceutics is the study of the rate of chemical reactions, particularly the degradation of drug molecules, and the factors affecting these rates.</p>',
        introduction: '<p>Understanding kinetics is essential for predicting shelf-life, determining optimal storage conditions, and formulating stable dosage forms. It involves determining the order of reaction and the rate constant.</p>',
        classification: '<ul><li><strong>Zero-Order:</strong> Rate is independent of concentration (e.g., suspensions).</li><li><strong>First-Order:</strong> Rate is proportional to concentration (e.g., most drug degradation in solution).</li><li><strong>Second-Order:</strong> Rate depends on the concentration of two reactants.</li></ul>',
        applications: '<p>Used for stability testing, expiry date calculation, and pharmacokinetic modeling (ADME processes usually follow first-order kinetics).</p>'
      },
      formulas: [
        { name: 'First-Order Rate Equation', equation: 'ln(C_t) = ln(C_0) - kt', variables: { 'C_t': 'Concentration at time t', 'C_0': 'Initial concentration', 'k': 'Rate constant' }, units: 'time⁻¹', example: 'Calculating drug remaining after 30 days.' }
      ],
      vivaQuestions: ['What is the difference between zero-order and first-order kinetics?', 'How does temperature affect reaction rate?'],
      references: [{text: 'Martin\'s Physical Pharmacy', url: '#'}],
      defined: true
    },
    'colloids': {
      id: 'colloids', title: 'Colloids', category: 'physical-pharma', icon: 'droplets', color: 'var(--cat-physical)',
      brief: 'Lyophilic, lyophobic, and association colloids.',
      content: {
        definition: '<p>Colloids are heterogeneous systems consisting of a dispersed phase (1 nm to 1 µm) distributed uniformly throughout a continuous phase.</p>',
        introduction: '<p>Due to their large surface area, colloids exhibit unique optical (Tyndall effect), kinetic (Brownian motion), and electrical properties (zeta potential).</p>',
        classification: '<ul><li><strong>Lyophilic (Solvent-loving):</strong> Thermodynamically stable, easy to prepare (e.g., gelatin in water).</li><li><strong>Lyophobic (Solvent-hating):</strong> Unstable, require special preparation (e.g., gold sol).</li><li><strong>Association (Amphiphilic):</strong> Form micelles at CMC (e.g., surfactants).</li></ul>',
        applications: '<p>Used in targeted drug delivery (liposomes, nanoparticles), as plasma volume expanders, and for solubilizing poorly soluble drugs.</p>'
      },
      vivaQuestions: ['What is the Tyndall effect?', 'Define Critical Micelle Concentration (CMC).'],
      references: [{text: 'Aulton\'s Pharmaceutics', url: '#'}],
      defined: true
    },
    'colon-targeted': {
      id: 'colon-targeted', title: 'Colon-Targeted Delivery', category: 'drug-delivery', icon: 'target', color: 'var(--cat-delivery)',
      brief: 'Site-specific delivery to the lower GI tract.',
      content: {
        definition: '<p>Colon-targeted drug delivery systems (CDDS) are designed to delay drug release until the dosage form reaches the colon.</p>',
        introduction: '<p>This is highly beneficial for local treatment of colonic diseases (Crohn\'s disease, ulcerative colitis, colorectal cancer) and for systemic delivery of proteins and peptides that would degrade in the upper GI tract.</p>',
        mechanism: '<p>Approaches include: <strong>pH-dependent polymers</strong> (dissolve at pH > 7), <strong>time-dependent systems</strong>, and <strong>microbially triggered systems</strong> (degraded by colonic microflora like azo bonds or polysaccharides).</p>',
        advantages: '<ul><li>Reduces systemic side effects for local colonic therapies.</li><li>Bypasses gastric and enzymatic degradation.</li></ul>'
      },
      vivaQuestions: ['Why is the colon a good site for peptide delivery?', 'Name a polymer used for pH-dependent colonic delivery.'],
      references: [{text: 'Targeted Drug Delivery Systems (Vyas)', url: '#'}],
      defined: true
    },
    'diffusion': {
      id: 'diffusion', title: 'Diffusion', category: 'physical-pharma', icon: 'wind', color: 'var(--cat-physical)',
      brief: 'Mass transfer mechanisms and Fick\'s laws.',
      content: {
        definition: '<p>Diffusion is the spontaneous mass transfer of individual molecules from a region of higher concentration to a region of lower concentration due to random molecular motion.</p>',
        introduction: '<p>It is the driving force for drug release from polymeric matrices, drug absorption across biological membranes, and dissolution.</p>',
        mechanism: '<p>Described by <strong>Fick\'s First Law</strong> (steady-state diffusion) and <strong>Fick\'s Second Law</strong> (non-steady state).</p>',
      },
      formulas: [
        { name: 'Fick\'s First Law', equation: 'J = -D (dC/dx)', variables: { 'J': 'Flux', 'D': 'Diffusion coefficient', 'dC/dx': 'Concentration gradient' }, units: 'mass/area.time', example: 'Calculating permeation across a membrane.' }
      ],
      vivaQuestions: ['What does a negative sign in Fick\'s first law indicate?', 'What factors affect the diffusion coefficient?'],
      references: [{text: 'Martin\'s Physical Pharmacy', url: '#'}],
      defined: true
    },
    'dissolution': {
      id: 'dissolution', title: 'Dissolution', category: 'physical-pharma', icon: 'beaker', color: 'var(--cat-physical)',
      brief: 'In vitro drug release testing.',
      content: {
        definition: '<p>Dissolution is the process by which a solid substance dissolves in a solvent to yield a solution. It is the rate-limiting step for the absorption of poorly soluble drugs (BCS Class II and IV).</p>',
        introduction: '<p>In vitro dissolution testing is critical for QC, predicting in vivo bioavailability (IVIVC), and formulation development.</p>',
        mechanism: '<p>Governed by the Noyes-Whitney equation, which relates the dissolution rate to surface area, solubility, and diffusion layer thickness.</p>',
        evaluation: '<p>Standard USP Apparatus include Type 1 (Basket) and Type 2 (Paddle).</p>'
      },
      vivaQuestions: ['What is the difference between disintegration and dissolution?', 'Describe USP Apparatus 2.'],
      references: [{text: 'USP General Chapter <711>', url: '#'}],
      defined: true
    },
    'drug-absorption': {
      id: 'drug-absorption', title: 'Drug Absorption', category: 'biopharmaceutics', icon: 'activity', color: 'var(--cat-delivery)',
      brief: 'In-vivo pathways for drug systemic entry.',
      content: {
        definition: '<p>Drug absorption is the movement of a drug from its site of administration into the systemic circulation.</p>',
        mechanism: '<p>Pathways include: <strong>Passive diffusion</strong> (most common, follows concentration gradient), <strong>Carrier-mediated transport</strong> (active transport, facilitated diffusion), and <strong>Endocytosis/Transcytosis</strong>.</p>',
        formulation: '<p>Factors affecting absorption include physicochemical properties (pKa, solubility, partition coefficient), physiological factors (pH, gastric emptying time, blood flow), and dosage form variables.</p>'
      },
      vivaQuestions: ['What is the first-pass effect?', 'How does drug ionization affect absorption?'],
      references: [{text: 'Biopharmaceutics (Brahamankar)', url: '#'}],
      defined: true
    },
    'gmp': {
      id: 'gmp', title: 'Good Manufacturing Practices', category: 'technology', icon: 'settings', color: 'var(--cat-technology)',
      brief: 'cGMP requirements and facility design.',
      content: {
        definition: '<p>GMP (Good Manufacturing Practice) is a system for ensuring that products are consistently produced and controlled according to quality standards.</p>',
        introduction: '<p>It is designed to minimize the risks involved in any pharmaceutical production that cannot be eliminated through testing the final product (e.g., cross-contamination, mix-ups).</p>',
        keyPoints: '<ul><li>Proper facility design and HVAC systems.</li><li>Validation of equipment and processes.</li><li>Stringent documentation (SOPs, batch records).</li><li>Personnel training and hygiene.</li></ul>'
      },
      vivaQuestions: ['What does the "c" in cGMP stand for?', 'Why is documentation critical in GMP?'],
      references: [{text: 'FDA 21 CFR 210 and 211', url: '#'}],
      defined: true
    },
    'qa': {
      id: 'qa', title: 'Quality Assurance', category: 'quality', icon: 'shield-check', color: 'var(--cat-quality)',
      brief: 'Systems and procedures to ensure overall quality.',
      content: {
        definition: '<p>Quality Assurance (QA) is a wide-ranging concept covering all matters that individually or collectively influence the quality of a product.</p>',
        introduction: '<p>While Quality Control (QC) is product-oriented and focuses on testing, QA is process-oriented and focuses on defect prevention through QMS (Quality Management Systems).</p>',
        applications: '<p>QA responsibilities include vendor qualification, batch record review, deviations management, CAPA (Corrective and Preventive Actions), and internal audits.</p>'
      },
      vivaQuestions: ['What is the difference between QA and QC?', 'What is a CAPA?'],
      references: [{text: 'ICH Q10 Pharmaceutical Quality System', url: '#'}],
      defined: true
    },
    'surface-phenomena': {
      id: 'surface-phenomena', title: 'Surface Phenomena', category: 'physical-pharma', icon: 'layers', color: 'var(--cat-physical)',
      brief: 'Interfacial tension and surfactants.',
      content: {
        definition: '<p>Surface phenomena refer to the physical and chemical interactions that occur at the boundary (interface) between two phases (e.g., liquid-gas, liquid-liquid, solid-liquid).</p>',
        mechanism: '<p>Molecules at the interface experience unequal attractive forces, leading to <strong>surface tension</strong> (liquid-gas) or <strong>interfacial tension</strong> (liquid-liquid).</p>',
        applications: '<p>Crucial for formulating emulsions and suspensions. <strong>Surfactants</strong> (surface active agents) lower this tension by accumulating at the interface, improving wetting, solubilization, and stabilization.</p>'
      },
      vivaQuestions: ['What is the HLB scale?', 'How do surfactants lower surface tension?'],
      references: [{text: 'Martin\'s Physical Pharmacy', url: '#'}],
      defined: true
    },
    'syrups': {
      id: 'syrups', title: 'Syrups and Elixirs', category: 'dosage-forms', icon: 'droplet', color: 'var(--cat-dosage)',
      brief: 'Sweetened, hydroalcoholic liquid formulations.',
      content: {
        definition: '<p><strong>Syrups:</strong> Concentrated aqueous preparations of a sugar or sugar substitute with or without flavoring agents and medicinal substances. <br><strong>Elixirs:</strong> Clear, sweetened hydroalcoholic solutions intended for oral use.</p>',
        introduction: '<p>Used primarily for pediatric and geriatric patients who have difficulty swallowing solids. Syrups offer excellent taste masking, while elixirs are better for drugs with lower aqueous solubility due to the presence of alcohol.</p>',
        formulation: '<p>Syrups contain 60-85% sucrose (self-preserving at 85% w/v). Elixirs contain 5-40% alcohol, along with glycerin, propylene glycol, and artificial sweeteners.</p>'
      },
      vivaQuestions: ['Why is Simple Syrup USP (85% w/v) self-preserving?', 'What is the main difference between a syrup and an elixir?'],
      references: [{text: 'Ansel\'s Pharmaceutical Dosage Forms', url: '#'}],
      defined: true
    },
    'tablet-coating': {
      id: 'tablet-coating', title: 'Tablet Coating', category: 'dosage-forms', icon: 'circle', color: 'var(--cat-dosage)',
      brief: 'Sugar, film, and enteric coating processes.',
      content: {
        definition: '<p>Tablet coating is the application of a coating composition to a moving bed of tablets with the concurrent use of heated air to facilitate solvent evaporation.</p>',
        classification: '<ul><li><strong>Sugar Coating:</strong> Traditional, multi-step process (sealing, subcoating, smoothing, color coating, polishing). Increases tablet weight significantly.</li><li><strong>Film Coating:</strong> Deposition of a thin polymer film (e.g., HPMC). Faster, adds minimal weight.</li><li><strong>Enteric Coating:</strong> Protects drug from stomach acid or protects stomach from drug (e.g., CAP, Eudragit). Dissolves at higher pH in the intestine.</li></ul>',
        evaluation: '<p>Defects include picking/sticking, bridging, orange peel effect, and twinning.</p>'
      },
      vivaQuestions: ['Why are tablets enteric-coated?', 'What causes the "orange peel" defect in film coating?'],
      references: [{text: 'Lachman Industrial Pharmacy', url: '#'}],
      defined: true
    }
  };

  Object.assign(PharmHub.data.topics, extraTopics);
})();
