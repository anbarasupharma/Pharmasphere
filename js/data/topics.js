(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};

  PharmHub.data.topics = {
    // --- DEEP TOPICS ---
    'solubility': {
      id: 'solubility',
      title: 'Solubility and Solubilization',
      category: 'physical-pharma',
      icon: 'flask-conical',
      color: '#6366f1',
      brief: 'Fundamentals of solubility, Noyes-Whitney equation, and techniques to enhance drug solubility.',
      content: {
        definition: '<p>Solubility is defined in quantitative terms as the concentration of a solute in a saturated solution at a certain temperature, and in qualitative terms as the spontaneous interaction of two or more substances to form a homogeneous molecular dispersion.</p>',
        introduction: '<p>Aqueous solubility is a critical physicochemical property in drug discovery and development. Poorly soluble drugs often show low bioavailability, erratic absorption, and inter-patient variability.</p>',
        principles: '<p>The process of solubilization involves breaking solute-solute and solvent-solvent bonds, followed by the formation of solute-solvent bonds. The thermodynamic driving force depends on the free energy change of this process.</p>',
        classification: '<div><ul><li><strong>Very soluble:</strong> Less than 1 part solvent per part solute</li><li><strong>Freely soluble:</strong> 1 to 10 parts</li><li><strong>Soluble:</strong> 10 to 30 parts</li><li><strong>Sparingly soluble:</strong> 30 to 100 parts</li><li><strong>Slightly soluble:</strong> 100 to 1000 parts</li><li><strong>Very slightly soluble:</strong> 1000 to 10,000 parts</li><li><strong>Practically insoluble:</strong> More than 10,000 parts</li></ul></div>',
        mechanism: '<p>Factors affecting solubility include temperature (typically increases solubility for endothermic dissolution), pH (ionization state affects aqueous solubility of weak acids and bases), presence of co-solvents, particle size, and crystalline state (polymorphism).</p>',
        applications: '<p>Enhancing solubility is crucial for formulating BCS Class II and IV drugs. Approaches include salt formation, use of co-solvents, cyclodextrin complexation, solid dispersions, and nanonization.</p>'
      },
      formulas: [
        {
          name: 'Noyes-Whitney Equation',
          equation: 'dC/dt = (D &middot; A / h) &middot; (C<sub>s</sub> - C)',
          variables: { 'dC/dt': 'Dissolution rate', 'D': 'Diffusion coefficient', 'A': 'Surface area of particles', 'h': 'Thickness of diffusion layer', 'C_s': 'Saturation solubility', 'C': 'Concentration in bulk solution' },
          units: 'concentration/time (e.g., mg/mL/min)',
          example: '<p>If A is increased via micronization, dC/dt increases proportionally.</p>',
          application: 'Estimating dissolution rate'
        },
        {
          name: 'Henderson-Hasselbalch Equation (Weak Acid)',
          equation: 'pH = pK<sub>a</sub> + log([A<sup>-</sup>]/[HA])',
          variables: { 'pH': 'Solution pH', 'pK_a': 'Acid dissociation constant', '[A^-]': 'Ionized form concentration', '[HA]': 'Unionized form concentration' },
          units: 'dimensionless',
          example: '<p>Used to predict the pH profile of drug solubility.</p>',
          application: 'Determining solubility vs pH profile'
        }
      ],
      tables: [],
      processes: [],
      vivaQuestions: [
        'How does polymorphism affect solubility?',
        'State the Noyes-Whitney equation and explain its terms.',
        'What is the difference between kinetic and thermodynamic solubility?',
        'How do co-solvents enhance solubility?',
        'Explain the USP descriptive terms for solubility.'
      ],
      references: [
        { text: 'USP General Notices', url: '#' },
        { text: 'Aulton\'s Pharmaceutics: The Design and Manufacture of Medicines', url: '#' }
      ],
      relatedTopics: ['dissolution', 'biopharmaceutics'],
      defined: true
    },
    'rheology': {
      id: 'rheology',
      title: 'Rheology',
      category: 'physical-pharma',
      icon: 'droplets',
      color: '#6366f1',
      brief: 'Study of flow and deformation of matter: Newtonian, non-Newtonian, and thixotropy.',
      content: {
        definition: '<p>Rheology is the science that deals with the flow of liquids and the deformation of solid materials under the influence of stress.</p>',
        introduction: '<p>Understanding rheology is critical in pharmaceutics for formulating suspensions, emulsions, and semisolids. It affects pouring, spreading, extrudability, and physical stability.</p>',
        principles: '<p>Materials are classified into Newtonian (viscosity is independent of shear rate) and Non-Newtonian (viscosity depends on shear rate). Non-Newtonian flow includes plastic (Bingham body), pseudoplastic (shear-thinning), and dilatant (shear-thickening) behaviors.</p>',
        classification: '<div><ul><li><strong>Newtonian Flow:</strong> Water, simple syrups.</li><li><strong>Pseudoplastic Flow:</strong> Polymer solutions (e.g., methylcellulose), shear-thinning.</li><li><strong>Dilatant Flow:</strong> Concentrated deflocculated suspensions (>50% w/w), shear-thickening.</li><li><strong>Plastic Flow:</strong> Flocculated suspensions, requires yield value to initiate flow.</li></ul></div>',
        mechanism: '<p>Thixotropy is an isothermal, reversible decrease in viscosity with time under a constant shear rate, followed by a gradual recovery when the shear is removed. Rheopexy is the opposite (shear-thickening over time).</p>',
        evaluation: '<p>Viscosity is measured using capillary viscometers (for Newtonian fluids), falling sphere viscometers, and rotational viscometers (Brookfield, cup-and-bob, cone-and-plate for non-Newtonian fluids).</p>'
      },
      formulas: [
        {
          name: 'Newton\'s Law of Flow',
          equation: '&tau; = &eta; &middot; &gamma;',
          variables: { '&tau;': 'Shear stress', '&eta;': 'Viscosity coefficient', '&gamma;': 'Shear rate (dv/dr)' },
          units: 'Viscosity in Poise (P) or Pascal-seconds (Pa·s)',
          example: '<p>For water at 20°C, viscosity is approx 1 cP.</p>',
          application: 'Characterizing Newtonian fluids'
        },
        {
          name: 'Power Law Equation',
          equation: '&tau; = K &middot; &gamma;<sup>n</sup>',
          variables: { '&tau;': 'Shear stress', 'K': 'Consistency index', '&gamma;': 'Shear rate', 'n': 'Flow index' },
          units: 'Various',
          example: '<p>If n < 1, the fluid is pseudoplastic.</p>',
          application: 'Characterizing non-Newtonian fluid behavior'
        }
      ],
      tables: [],
      processes: [],
      vivaQuestions: [
        'Differentiate between Newtonian and Non-Newtonian fluids.',
        'What is a Bingham body? Give an example.',
        'Explain the concept of thixotropy and its pharmaceutical significance.',
        'How does a cone and plate viscometer work?',
        'Why are suspending agents usually pseudoplastic?'
      ],
      references: [
        { text: 'Martin\'s Physical Pharmacy and Pharmaceutical Sciences', url: '#' },
        { text: 'Aulton\'s Pharmaceutics', url: '#' }
      ],
      relatedTopics: ['suspensions', 'semisolids'],
      defined: true
    },
    'micromeritics': {
      id: 'micromeritics',
      title: 'Micromeritics',
      category: 'physical-pharma',
      icon: 'atom',
      color: '#6366f1',
      brief: 'Science and technology of small particles: size, shape, surface area, and derived properties.',
      content: {
        definition: '<p>Micromeritics is the science and technology of small particles. It involves the study of fundamental and derived properties of individual particles and powder beds.</p>',
        principles: '<p>Fundamental properties include particle size, size distribution, shape, and surface area. Derived properties include bulk and tapped densities, porosity, flowability, and compressibility.</p>',
        evaluation: '<p>Particle size determination methods: 1. Optical microscopy (0.2-100 µm). 2. Sieving (50-5000 µm). 3. Sedimentation (Andresen pipette, 1-200 µm). 4. Light scattering/Laser diffraction (0.02-2000 µm). Flow properties are assessed using Angle of Repose, Carr\'s Index, and Hausner Ratio.</p>'
      },
      formulas: [
        {
          name: 'Carr\'s Compressibility Index',
          equation: 'Carr\'s Index (%) = [( &rho;<sub>tapped</sub> - &rho;<sub>bulk</sub> ) / &rho;<sub>tapped</sub>] &times; 100',
          variables: { '&rho;_tapped': 'Tapped density', '&rho;_bulk': 'Bulk density' },
          units: '%',
          example: '<p>A value between 5-15% indicates excellent flow.</p>',
          application: 'Evaluating powder flowability'
        },
        {
          name: 'Hausner Ratio',
          equation: 'HR = &rho;<sub>tapped</sub> / &rho;<sub>bulk</sub>',
          variables: { '&rho;_tapped': 'Tapped density', '&rho;_bulk': 'Bulk density' },
          units: 'dimensionless',
          example: '<p>HR < 1.25 indicates good flow.</p>',
          application: 'Evaluating powder friction and flow'
        },
        {
          name: 'Angle of Repose',
          equation: 'tan(&theta;) = h / r',
          variables: { '&theta;': 'Angle of repose', 'h': 'Height of powder cone', 'r': 'Radius of the cone base' },
          units: 'Degrees',
          example: '<p>&theta; < 30° represents excellent flow.</p>',
          application: 'Assessing powder cohesion and flow'
        }
      ],
      tables: [],
      processes: [],
      vivaQuestions: [
        'What are the fundamental and derived properties of powders?',
        'How is particle size measured using the sedimentation method?',
        'What is the difference between bulk density and tapped density?',
        'How does particle shape affect powder flow?',
        'Define Carr\'s index and its significance.'
      ],
      references: [
        { text: 'USP General Chapter <1174> Powder Flow', url: '#' },
        { text: 'Martin\'s Physical Pharmacy', url: '#' }
      ],
      relatedTopics: ['powders', 'granules', 'tablets'],
      defined: true
    },
    'tablets': {
      id: 'tablets',
      title: 'Tablets',
      category: 'dosage-forms',
      icon: 'pill',
      color: '#0d9488',
      brief: 'Solid dosage forms containing drug substances with or without suitable excipients.',
      content: {
        definition: '<p>Tablets are solid pharmaceutical dosage forms containing drug substances with or without suitable diluents, prepared either by compression or molding.</p>',
        classification: '<div><ul><li><strong>Ingested orally:</strong> Standard compressed, multiple compressed, delayed-release (enteric), sustained-release.</li><li><strong>Used in oral cavity:</strong> Buccal, sublingual, troches, lozenges, dental cones.</li><li><strong>Administered by other routes:</strong> Implants, vaginal tablets.</li><li><strong>Used to prepare solutions:</strong> Effervescent, dispensing, hypodermic, tablet triturates.</li></ul></div>',
        formulation: '<p>Key excipients include: <strong>Diluents</strong> (lactose, MCC) to add bulk. <strong>Binders</strong> (starch paste, PVP) to impart cohesiveness. <strong>Disintegrants</strong> (sodium starch glycolate, croscarmellose) to facilitate breakup. <strong>Lubricants</strong> (magnesium stearate) to reduce friction. <strong>Glidants</strong> (talc, colloidal silica) to improve flow. <strong>Antiadherents</strong> to prevent sticking to punches.</p>',
        manufacturing: '<p>Three main methods: 1. <strong>Direct Compression:</strong> simple blending and compression. 2. <strong>Wet Granulation:</strong> most widely used, involves forming a wet mass, drying, and sizing. 3. <strong>Dry Granulation (Slugging/Roller Compaction):</strong> for moisture or heat-sensitive drugs.</p>',
        evaluation: '<p>Official tests: Weight variation, Content uniformity, Disintegration time, Dissolution testing. Non-official tests: Hardness (crushing strength), Friability (<1% weight loss is acceptable), Thickness.</p>',
        limitations: '<ul><li>Difficult to formulate for drugs with poor compressibility or poor wetting.</li><li>Difficult for patients with dysphagia (swallowing difficulties) to take.</li><li>Manufacturing requires multiple complex steps (wet granulation).</li></ul>',
        keyPoints: '<ul><li><strong>Capping/Lamination:</strong> Separation of tablet layers, often due to entrapped air or too dry granules.</li><li><strong>Sticking/Picking:</strong> Material adheres to die wall or punch faces, often requiring more lubricant.</li><li><strong>Mottling:</strong> Unequal color distribution.</li></ul>'
      },
      formulas: [
        {
          name: 'Weight Variation Formula (Percentage Deviation)',
          equation: '% Deviation = [(W<sub>avg</sub> - W<sub>ind</sub>) / W<sub>avg</sub>] &times; 100',
          variables: { 'W_avg': 'Average weight of tablets', 'W_ind': 'Individual tablet weight' },
          units: '%',
          example: '<p>For a 200mg tablet, USP allows ±7.5% deviation.</p>',
          application: 'Quality control checking uniformity'
        },
        {
          name: 'Friability',
          equation: '% Friability = [(W<sub>initial</sub> - W<sub>final</sub>) / W<sub>initial</sub>] &times; 100',
          variables: { 'W_initial': 'Initial total weight of tablets', 'W_final': 'Weight after 100 revolutions in friabilator' },
          units: '%',
          example: '<p>Must not exceed 1.0% generally.</p>',
          application: 'Assessing mechanical strength against abrasion'
        }
      ],
      tables: [
        {
          title: 'USP Weight Variation Limits for Uncoated Tablets',
          headers: ['Average Weight', 'Maximum Percentage Difference'],
          rows: [
            ['130 mg or less', '10.0%'],
            ['130 mg to 324 mg', '7.5%'],
            ['More than 324 mg', '5.0%']
          ]
        }
      ],
      processes: [
        {
          title: 'Wet Granulation Manufacturing Flowchart',
          steps: [
            'Weighing and dispensing of API and excipients',
            'Dry mixing of API, diluent, and disintegrant',
            'Preparation of binder solution',
            'Wet massing (adding binder to powder blend)',
            'Screening of wet mass (forming wet granules)',
            'Drying of granules (e.g., in a fluid bed dryer)',
            'Dry screening of granules',
            'Blending with extra-granular excipients (lubricant, glidant)',
            'Compression into tablets'
          ]
        }
      ],
      vivaQuestions: [
        'Explain the difference between picking and sticking.',
        'Why is wet granulation preferred over direct compression in many cases?',
        'Describe the mechanism of action of superdisintegrants.',
        'What are the official and non-official tests for tablets?',
        'How does magnesium stearate affect tablet dissolution?',
        'Explain capping and lamination, and list two remedies.',
        'What is the purpose of enteric coating?'
      ],
      references: [
        { text: 'USP <701> Disintegration, <711> Dissolution, <1216> Friability', url: '#' },
        { text: 'Lachman\'s Theory and Practice of Industrial Pharmacy', url: '#' },
        { text: 'Indian Pharmacopoeia (IP)', url: '#' }
      ],
      relatedTopics: ['tablet-coating', 'powders', 'granules'],
      defined: true
    },
    'capsules': {
      id: 'capsules',
      title: 'Capsules',
      category: 'dosage-forms',
      icon: 'layers',
      color: '#0d9488',
      brief: 'Solid dosage forms enclosed in a gelatin or HPMC shell (hard or soft).',
      content: {
        definition: '<p>Capsules are solid dosage forms in which the drug and excipients are enclosed within a soluble shell, typically made of gelatin or hypromellose (HPMC).</p>',
        principles: '<p>Classified into Hard Gelatin Capsules (HGC) and Soft Gelatin Capsules (SGC). HGC consist of a base/body and a shorter cap, filled with dry powders or pellets. SGC are a continuous, single-piece hermetically sealed shell, often filled with liquids or suspensions.</p>',
        formulation: '<p>Shell composition: Gelatin (or HPMC), plasticizer (glycerin, sorbitol - higher in SGC), water, colorants, opacifiers (titanium dioxide), and preservatives. Gelatin is produced by partial hydrolysis of collagen (Type A: acid-treated, Type B: alkali-treated).</p>',
        manufacturing: '<p>HGC sizes range from 000 (largest, ~1.37 mL) to 5 (smallest, ~0.13 mL). Filling involves rectifying the shells, separating caps, filling the body, replacing the cap, and sealing/polishing.</p>',
        evaluation: '<p>Evaluated for weight variation, content uniformity, dissolution, moisture permeation, and disintegration.</p>'
      },
      formulas: [],
      tables: [
        {
          title: 'Hard Gelatin Capsule Sizes and Approximate Volumes',
          headers: ['Size', 'Approx. Volume (mL)', 'Approx. Fill Weight (mg, for powder density 0.8 g/mL)'],
          rows: [
            ['000', '1.37', '1096'],
            ['00', '0.95', '760'],
            ['0', '0.68', '544'],
            ['1', '0.50', '400'],
            ['2', '0.37', '296'],
            ['3', '0.30', '240'],
            ['4', '0.21', '168'],
            ['5', '0.13', '104']
          ]
        }
      ],
      processes: [],
      vivaQuestions: [
        'What is the difference between Type A and Type B gelatin?',
        'How is the size of hard gelatin capsules designated?',
        'What is the role of a plasticizer in a soft gelatin capsule?',
        'Explain why highly efflorescent or deliquescent drugs shouldn\'t be filled in hard gelatin capsules.',
        'How are soft gelatin capsules manufactured?'
      ],
      references: [
        { text: 'USP General Chapter <1151>', url: '#' },
        { text: 'Aulton\'s Pharmaceutics', url: '#' }
      ],
      relatedTopics: ['tablets'],
      defined: true
    },
    'suspensions': {
      id: 'suspensions',
      title: 'Suspensions',
      category: 'dosage-forms',
      icon: 'flask-conical',
      color: '#0d9488',
      brief: 'Biphasic liquid formulations of finely divided solid particles dispersed in a liquid vehicle.',
      content: {
        definition: '<p>A pharmaceutical suspension is a coarse dispersion in which insoluble solid particles (dispersed phase) are uniformly distributed throughout a liquid medium (dispersion medium).</p>',
        principles: '<p>Ideal properties: 1. Should settle slowly and be readily redispersed upon gentle shaking. 2. Particle size should remain constant during storage. 3. Should pour readily and evenly from the container.</p>',
        classification: '<p>Classified therapeutically (oral, topical, ophthalmic, parenteral) and electrokinetically (flocculated, deflocculated).</p>',
        mechanism: '<p><strong>Flocculated suspensions:</strong> Particles form loose network-like aggregates (flocs). Settle quickly but do not form a hard cake; easily redispersible. <strong>Deflocculated suspensions:</strong> Particles exist as separate entities. Settle slowly but form a hard, difficult-to-redisperse cake upon settling.</p>',
        formulation: '<p>Controlled flocculation is achieved using flocculating agents (electrolytes, surfactants, polymers). A structured vehicle (using suspending agents like carboxymethylcellulose, xanthan gum) is used to slow down sedimentation.</p>',
        evaluation: '<p>Evaluated using Sedimentation Volume (F), Degree of flocculation, redispersibility, viscosity, and particle size changes.</p>'
      },
      formulas: [
        {
          name: 'Stokes\' Law',
          equation: 'v = [d<sup>2</sup> &middot; (&rho;<sub>s</sub> - &rho;<sub>0</sub>) &middot; g] / (18 &middot; &eta;)',
          variables: { 'v': 'Sedimentation velocity', 'd': 'Particle diameter', '&rho;_s': 'Density of dispersed phase', '&rho;_0': 'Density of dispersion medium', 'g': 'Acceleration due to gravity', '&eta;': 'Viscosity of medium' },
          units: 'cm/s',
          example: '<p>Decreasing particle size (d) or increasing viscosity (&eta;) drastically reduces settling velocity.</p>',
          application: 'Predicting and controlling sedimentation rate'
        },
        {
          name: 'Sedimentation Volume (F)',
          equation: 'F = V<sub>u</sub> / V<sub>0</sub>',
          variables: { 'V_u': 'Ultimate volume of sediment', 'V_0': 'Original volume of suspension' },
          units: 'dimensionless (0 to 1)',
          example: '<p>An F value approaching 1 indicates an ideal flocculated suspension.</p>',
          application: 'Evaluating suspension physical stability'
        }
      ],
      tables: [
        {
          title: 'Comparison: Flocculated vs Deflocculated Suspensions',
          headers: ['Property', 'Flocculated', 'Deflocculated'],
          rows: [
            ['Particle state', 'Loose aggregates (flocs)', 'Separate entities'],
            ['Sedimentation rate', 'High', 'Low'],
            ['Sediment formation', 'Rapid', 'Slow'],
            ['Nature of sediment', 'Loosely packed, high volume', 'Closely packed, hard cake'],
            ['Redispersibility', 'Easy', 'Difficult (Caking occurs)'],
            ['Supernatant liquid', 'Clear', 'Cloudy/turbid']
          ]
        }
      ],
      processes: [],
      vivaQuestions: [
        'State Stokes\' law and discuss how it helps in suspension formulation.',
        'Differentiate between flocculated and deflocculated suspensions.',
        'What is a structured vehicle?',
        'What is caking, and how can it be prevented?',
        'Define sedimentation volume (F).'
      ],
      references: [
        { text: 'Aulton\'s Pharmaceutics', url: '#' },
        { text: 'USP <1151>', url: '#' }
      ],
      relatedTopics: ['rheology', 'emulsions', 'colloids'],
      defined: true
    },
    'emulsions': {
      id: 'emulsions',
      title: 'Emulsions',
      category: 'dosage-forms',
      icon: 'droplets',
      color: '#0d9488',
      brief: 'Biphasic systems of two immiscible liquids stabilized by emulsifying agents.',
      content: {
        definition: '<p>An emulsion is a thermodynamically unstable system consisting of at least two immiscible liquid phases, one of which is dispersed as globules in the other liquid phase, stabilized by the presence of an emulsifying agent.</p>',
        classification: '<p>Types include Oil-in-Water (O/W), Water-in-Oil (W/O), and multiple emulsions (O/W/O or W/O/W). Microemulsions and nanoemulsions refer to extremely fine droplet sizes.</p>',
        mechanism: '<p>Emulsifying agents reduce interfacial tension, form a rigid interfacial film around droplets, and/or form an electrical double layer. Types: surfactants (Tweens, Spans), hydrophilic colloids (acacia, tragacanth), and finely divided solids (bentonite).</p>',
        formulation: '<p>HLB (Hydrophile-Lipophile Balance) Concept: Surfactants with low HLB (3-6) are lipophilic and form W/O emulsions. High HLB (8-18) are hydrophilic and form O/W emulsions.</p>',
        evaluation: '<p>Instability manifests as: <strong>Creaming</strong> (reversible upward/downward movement of droplets), <strong>Flocculation</strong> (aggregation of droplets without fusing), <strong>Coalescence</strong> (fusing of droplets, leading to breaking), <strong>Breaking/Cracking</strong> (irreversible phase separation), and <strong>Phase Inversion</strong> (O/W becomes W/O or vice versa).</p>'
      },
      formulas: [],
      tables: [
        {
          title: 'HLB Scale and Applications',
          headers: ['HLB Range', 'Application'],
          rows: [
            ['1 - 3', 'Antifoaming agents'],
            ['3 - 6', 'W/O Emulsifying agents'],
            ['7 - 9', 'Wetting agents'],
            ['8 - 18', 'O/W Emulsifying agents'],
            ['13 - 15', 'Detergents'],
            ['15 - 18', 'Solubilizing agents']
          ]
        }
      ],
      processes: [],
      vivaQuestions: [
        'What is the HLB scale, and how does it determine the emulsion type?',
        'Explain the differences between creaming, flocculation, and breaking.',
        'Name three tests to identify the type of an emulsion (O/W vs W/O).',
        'What causes phase inversion in an emulsion?',
        'How do finely divided solid particles act as emulsifying agents?'
      ],
      references: [
        { text: 'Martin\'s Physical Pharmacy', url: '#' },
        { text: 'Aulton\'s Pharmaceutics', url: '#' }
      ],
      relatedTopics: ['suspensions', 'surface-phenomena'],
      defined: true
    },
    'biopharmaceutics': {
      id: 'biopharmaceutics',
      title: 'Biopharmaceutics',
      category: 'biopharmaceutics',
      icon: 'microscope',
      color: '#f97316',
      brief: 'Study of the interrelationship of physicochemical properties of the drug, dosage form, and route of administration on drug absorption.',
      content: {
        definition: '<p>Biopharmaceutics is the study of how the physicochemical properties of drugs, dosage forms, and routes of administration affect the rate and extent of drug absorption.</p>',
        introduction: '<p>It involves the processes of ADME (Absorption, Distribution, Metabolism, and Excretion). The primary focus is on absorption and its prerequisite—dissolution.</p>',
        principles: '<p><strong>Drug Absorption Mechanisms:</strong> Passive diffusion (most common, governed by Fick\'s law, relies on concentration gradient and lipid solubility), active transport, facilitated diffusion, and endocytosis.</p>',
        mechanism: '<p><strong>Bioavailability:</strong> The rate and extent to which the active ingredient is absorbed from a product and becomes available at the site of action. <em>Absolute bioavailability</em> compares oral to IV; <em>Relative bioavailability</em> compares to a recognized standard. <strong>Bioequivalence:</strong> Absence of a significant difference in the rate and extent of absorption between two pharmaceutically equivalent products.</p>',
        classification: '<p><strong>Biopharmaceutics Classification System (BCS):</strong> Classifies drugs based on their aqueous solubility and intestinal permeability. Important for justifying biowaivers.</p>',
        limitations: '<p>Factors reducing oral bioavailability include poor dissolution, poor permeability, presystemic (first-pass) metabolism in the gut wall or liver, and efflux transporters (e.g., P-glycoprotein).</p>'
      },
      formulas: [
        {
          name: 'Absolute Bioavailability (F)',
          equation: 'F = (AUC<sub>oral</sub> / AUC<sub>IV</sub>) &times; (Dose<sub>IV</sub> / Dose<sub>oral</sub>)',
          variables: { 'AUC': 'Area Under the Curve', 'Dose': 'Administered dose' },
          units: 'Dimensionless (often expressed as %)',
          example: '<p>If AUC_oral is half of AUC_IV for the same dose, absolute bioavailability is 50%.</p>',
          application: 'Determining extent of absorption'
        }
      ],
      tables: [
        {
          title: 'Biopharmaceutics Classification System (BCS)',
          headers: ['Class', 'Solubility', 'Permeability', 'Rate-limiting step', 'Examples'],
          rows: [
            ['I', 'High', 'High', 'Gastric emptying', 'Metoprolol, Paracetamol'],
            ['II', 'Low', 'High', 'Dissolution', 'Ketoconazole, Ibuprofen'],
            ['III', 'High', 'Low', 'Permeability', 'Cimetidine, Acyclovir'],
            ['IV', 'Low', 'Low', 'Both Dissolution & Permeability', 'Furosemide, Taxol']
          ]
        }
      ],
      processes: [],
      vivaQuestions: [
        'Define absolute and relative bioavailability.',
        'What is the Biopharmaceutics Classification System (BCS)? Explain its 4 classes.',
        'What is first-pass metabolism, and how does it affect oral bioavailability?',
        'Describe the main mechanisms of drug absorption across biological membranes.',
        'What is the difference between pharmaceutical equivalence and bioequivalence?'
      ],
      references: [
        { text: 'FDA Guidance on BCS', url: '#' },
        { text: 'Aulton\'s Pharmaceutics', url: '#' }
      ],
      relatedTopics: ['drug-absorption', 'dissolution', 'kinetics'],
      defined: true
    },
    'stability': {
      id: 'stability',
      title: 'Drug Stability and Kinetics',
      category: 'quality',
      icon: 'shield-check',
      color: '#ec4899',
      brief: 'Chemical degradation pathways, kinetics, shelf-life prediction, and ICH guidelines.',
      content: {
        definition: '<p>Stability refers to the capacity of a drug product to remain within specifications established to ensure its identity, strength, quality, and purity over time.</p>',
        classification: '<p>Types of stability: 1. Chemical (retention of chemical integrity). 2. Physical (appearance, palatability, uniformity, dissolution). 3. Microbiological (sterility, resistance to growth). 4. Therapeutic (efficacy remains unchanged). 5. Toxicological (no significant increase in toxicity).</p>',
        mechanism: '<p>Common degradation pathways include: <strong>Hydrolysis</strong> (cleavage by water, common in esters, amides, lactams), <strong>Oxidation</strong> (loss of electrons, auto-oxidation via free radicals), <strong>Photolysis</strong> (degradation by light), and <strong>Isomerization</strong>/Racemization.</p>',
        principles: '<p><strong>Kinetics:</strong> Zero-order kinetics (rate is independent of concentration) and First-order kinetics (rate is directly proportional to concentration). The Arrhenius equation predicts the effect of temperature on the rate constant, allowing accelerated stability testing to estimate shelf-life.</p>',
        evaluation: '<p><strong>ICH Stability Guidelines:</strong> Defines climatic zones (Zone I: Temperate, II: Subtropical, III: Hot/Dry, IV: Hot/Humid). Long-term conditions for Zone IVb are 30°C / 75% RH. Accelerated testing is typically 40°C / 75% RH for 6 months. Uses stability-indicating analytical methods (like HPLC) to detect degradation products.</p>'
      },
      formulas: [
        {
          name: 'First-Order Half-Life (t<sub>1/2</sub>)',
          equation: 't<sub>1/2</sub> = 0.693 / k',
          variables: { 'k': 'First-order rate constant' },
          units: 'Time (e.g., hours, days)',
          example: '<p>If k = 0.05 day^-1, t1/2 is approx 13.86 days.</p>',
          application: 'Determining drug half-life'
        },
        {
          name: 'Shelf Life (t<sub>90</sub>) for First-Order',
          equation: 't<sub>90</sub> = 0.105 / k',
          variables: { 'k': 'Rate constant' },
          units: 'Time',
          example: '<p>Time required for 10% degradation (90% remaining).</p>',
          application: 'Estimating product expiration date'
        },
        {
          name: 'Arrhenius Equation',
          equation: 'k = A &middot; e<sup>-E<sub>a</sub> / (R &middot; T)</sup>  OR  ln(k) = ln(A) - (E<sub>a</sub> / RT)',
          variables: { 'k': 'Rate constant', 'A': 'Frequency factor', 'E_a': 'Activation energy', 'R': 'Gas constant (8.314 J/mol·K)', 'T': 'Absolute temperature (K)' },
          units: 'Depends on reaction order',
          example: '<p>A plot of ln(k) vs 1/T yields a slope of -E_a/R.</p>',
          application: 'Accelerated stability testing'
        }
      ],
      tables: [],
      processes: [],
      vivaQuestions: [
        'Differentiate between zero-order and first-order degradation kinetics.',
        'What is t90, and how is it related to shelf-life?',
        'Write the Arrhenius equation and explain its application in stability testing.',
        'List three strategies to protect a drug from hydrolytic degradation.',
        'What are the ICH climatic zones, and what are the typical accelerated testing conditions?'
      ],
      references: [
        { text: 'ICH Q1A(R2) Stability Testing Guidelines', url: '#' },
        { text: 'Martin\'s Physical Pharmacy', url: '#' }
      ],
      relatedTopics: ['kinetics', 'quality-control'],
      defined: true
    },
    'preformulation': {
      id: 'preformulation',
      title: 'Preformulation Studies',
      category: 'technology',
      icon: 'test-tubes',
      color: '#06b6d4',
      brief: 'Initial physicochemical characterization of a new drug molecule prior to dosage form design.',
      content: {
        definition: '<p>Preformulation involves the investigation of the physical and chemical properties of a new drug substance alone or in combination with excipients, to generate information useful to the formulator in developing stable and bioavailable dosage forms.</p>',
        introduction: '<p>It is the foundational step in rational formulation design, aiming to minimize later-stage failures.</p>',
        principles: '<p>Key properties evaluated include: <strong>Organoleptic properties</strong> (color, odor, taste). <strong>Solubility</strong> (aqueous, non-aqueous, intrinsic solubility, pKa, partition coefficient). <strong>Solid-state properties</strong> (crystallinity, polymorphism, melting point, hygroscopicity, particle size and shape, powder flow). <strong>Stability</strong> (solid state, solution stability under stress conditions: heat, light, humidity, oxidation). <strong>Drug-Excipient Compatibility</strong>.</p>',
        evaluation: '<p>Analytical techniques employed: Differential Scanning Calorimetry (DSC), X-Ray Powder Diffraction (XRPD), Fourier-Transform Infrared Spectroscopy (FTIR), High-Performance Liquid Chromatography (HPLC), and Karl Fischer titration for moisture content.</p>',
        applications: '<p>Data guides the selection of salt forms or polymorphs, determines the need for solubility enhancement, dictates suitable manufacturing processes (e.g., if heat-sensitive, avoid wet granulation), and helps select compatible excipients.</p>'
      },
      formulas: [],
      tables: [],
      processes: [
        {
          title: 'Typical Preformulation Workflow',
          steps: [
            'Initial spectroscopic and physical characterization (color, structure, melting point)',
            'Determination of purity and analytical method development (HPLC)',
            'Solubility profile generation (intrinsic, pH-solubility profile, pKa)',
            'Solid-state characterization (polymorphism screening, hygroscopicity)',
            'Stability profiling (forced degradation under heat, light, pH extremes)',
            'Drug-excipient compatibility screening (binary mixtures via DSC/FTIR)'
          ]
        }
      ],
      vivaQuestions: [
        'What is the primary objective of preformulation studies?',
        'How does polymorphism impact drug formulation and bioavailability?',
        'Explain the importance of determining the pKa and partition coefficient of a drug.',
        'What techniques are used for drug-excipient compatibility testing?',
        'How do you measure the hygroscopicity of a powder?'
      ],
      references: [
        { text: 'Aulton\'s Pharmaceutics', url: '#' },
        { text: 'FDA Guidance on Preformulation', url: '#' }
      ],
      relatedTopics: ['solubility', 'micromeritics', 'stability'],
      defined: true
    },

    // --- STUBS ---
    'dissolution': { id: 'dissolution', title: 'Dissolution', category: 'physical-pharma', icon: 'flask-conical', color: '#6366f1', brief: 'In vitro drug release testing.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'diffusion': { id: 'diffusion', title: 'Diffusion', category: 'physical-pharma', icon: 'wind', color: '#6366f1', brief: 'Mass transfer mechanisms and Fick\'s laws.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'surface-phenomena': { id: 'surface-phenomena', title: 'Surface Phenomena', category: 'physical-pharma', icon: 'droplets', color: '#6366f1', brief: 'Interfacial tension and surfactants.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'colloids': { id: 'colloids', title: 'Colloids', category: 'physical-pharma', icon: 'atom', color: '#6366f1', brief: 'Lyophilic, lyophobic, and association colloids.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'kinetics': { id: 'kinetics', title: 'Chemical Kinetics', category: 'physical-pharma', icon: 'thermometer', color: '#6366f1', brief: 'Reaction rates and mechanisms.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    
    'powders': { id: 'powders', title: 'Pharmaceutical Powders', category: 'dosage-forms', icon: 'atom', color: '#0d9488', brief: 'Solid mixtures of finely divided drugs.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'granules': { id: 'granules', title: 'Granules', category: 'dosage-forms', icon: 'layers', color: '#0d9488', brief: 'Agglomerates of powder particles.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'semisolids': { id: 'semisolids', title: 'Semisolid Dosage Forms', category: 'dosage-forms', icon: 'droplets', color: '#0d9488', brief: 'Ointments, creams, gels, and pastes.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'tablet-coating': { id: 'tablet-coating', title: 'Tablet Coating', category: 'dosage-forms', icon: 'shield-check', color: '#0d9488', brief: 'Sugar, film, and enteric coating processes.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'solutions': { id: 'solutions', title: 'Solutions', category: 'dosage-forms', icon: 'beaker', color: '#0d9488', brief: 'Monophasic liquid dosage forms.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'syrups': { id: 'syrups', title: 'Syrups and Elixirs', category: 'dosage-forms', icon: 'flask-conical', color: '#0d9488', brief: 'Sweetened, hydroalcoholic liquid formulations.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'parenterals': { id: 'parenterals', title: 'Parenterals', category: 'dosage-forms', icon: 'syringe', color: '#0d9488', brief: 'Injectable, sterile dosage forms.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },

    'modified-release': { id: 'modified-release', title: 'Modified-Release Systems', category: 'drug-delivery', icon: 'thermometer', color: '#8b5cf6', brief: 'Sustained, controlled, and delayed release profiles.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'transdermal': { id: 'transdermal', title: 'Transdermal Delivery', category: 'drug-delivery', icon: 'layers', color: '#8b5cf6', brief: 'Patches and systemic delivery across the skin.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'nasal': { id: 'nasal', title: 'Nasal Delivery', category: 'drug-delivery', icon: 'spray-can', color: '#8b5cf6', brief: 'Formulations for nasal cavity administration.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'pulmonary': { id: 'pulmonary', title: 'Pulmonary Delivery', category: 'drug-delivery', icon: 'wind', color: '#8b5cf6', brief: 'Inhalers and respiratory drug delivery.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'ocular': { id: 'ocular', title: 'Ocular Delivery', category: 'drug-delivery', icon: 'eye', color: '#8b5cf6', brief: 'Eye drops, ointments, and inserts.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'buccal': { id: 'buccal', title: 'Buccal & Sublingual', category: 'drug-delivery', icon: 'pill', color: '#8b5cf6', brief: 'Transmucosal delivery in the oral cavity.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'colon-targeted': { id: 'colon-targeted', title: 'Colon-Targeted Delivery', category: 'drug-delivery', icon: 'microscope', color: '#8b5cf6', brief: 'Site-specific delivery to the lower GI tract.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'nanoparticles': { id: 'nanoparticles', title: 'Nanoparticles', category: 'drug-delivery', icon: 'atom', color: '#8b5cf6', brief: 'Polymeric and lipid nanocarriers.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'liposomes': { id: 'liposomes', title: 'Liposomes', category: 'drug-delivery', icon: 'droplets', color: '#8b5cf6', brief: 'Phospholipid vesicular systems.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'microspheres': { id: 'microspheres', title: 'Microspheres', category: 'drug-delivery', icon: 'atom', color: '#8b5cf6', brief: 'Microparticulate delivery systems.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },

    'quality-control': { id: 'quality-control', title: 'Quality Control (QC)', category: 'quality', icon: 'shield-check', color: '#ec4899', brief: 'Testing and specifications for product release.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'quality-assurance': { id: 'quality-assurance', title: 'Quality Assurance (QA)', category: 'quality', icon: 'shield-check', color: '#ec4899', brief: 'Systems and procedures to ensure overall quality.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'manufacturing': { id: 'manufacturing', title: 'Good Manufacturing Practices', category: 'technology', icon: 'shield-check', color: '#06b6d4', brief: 'cGMP requirements and facility design.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'pharmaceutical-microbiology': { id: 'pharmaceutical-microbiology', title: 'Pharmaceutical Microbiology', category: 'microbiology', icon: 'microscope', color: '#84cc16', brief: 'Microbial contamination and preservatives.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },
    'sterilization': { id: 'sterilization', title: 'Sterilization Methods', category: 'microbiology', icon: 'thermometer', color: '#84cc16', brief: 'Heat, radiation, filtration, and gas sterilization.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },

    'packaging': { id: 'packaging', title: 'Pharmaceutical Packaging', category: 'packaging', icon: 'package', color: '#64748b', brief: 'Primary and secondary packaging materials.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false },

    'drug-absorption': { id: 'drug-absorption', title: 'Drug Absorption', category: 'biopharmaceutics', icon: 'droplets', color: '#f97316', brief: 'In-vivo pathways for drug systemic entry.', content: {}, formulas: [], tables: [], processes: [], vivaQuestions: [], references: [], relatedTopics: [], defined: false }
  };

})();
