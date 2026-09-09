(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};

  PharmHub.data.equipment = [
    {
      name: 'Single-Punch Tablet Press',
      category: 'compression',
      purpose: 'Compression of powder or granules into tablets, ideal for small-scale production or R&D.',
      principle: 'Operates on the principle of applying high pressure to powder confined in a die using a single set of upper and lower punches.',
      components: ['Hopper', 'Die cavity', 'Upper punch', 'Lower punch', 'Cam track', 'Capacity adjuster'],
      applications: 'Used for formulating small batches of tablets, clinical trials, and educational demonstrations.',
      parameters: ['Compression force', 'Fill depth', 'Tablet thickness', 'Ejection force'],
      references: [
        { text: 'Aulton\'s Pharmaceutics, 5th Edition', url: '#' },
        { text: 'Lachman\'s Theory and Practice of Industrial Pharmacy', url: '#' }
      ]
    },
    {
      name: 'Rotary Tablet Press',
      category: 'compression',
      purpose: 'High-speed commercial scale production of tablets.',
      principle: 'Multiple sets of dies and punches are mounted on a rotating turret. As the turret rotates, punches are guided by cam tracks to fill, compress, and eject tablets continuously.',
      components: ['Turret', 'Dies', 'Upper and lower punches', 'Feed frame', 'Pre-compression rollers', 'Main compression rollers', 'Discharge chute'],
      applications: 'Mass production of pharmaceutical tablets, effervescent tablets, and chewables.',
      parameters: ['Turret speed', 'Pre-compression force', 'Main compression force', 'Feeder speed', 'Punch penetration'],
      references: [
        { text: 'Lachman\'s Theory and Practice of Industrial Pharmacy', url: '#' }
      ]
    },
    {
      name: 'Fluid-Bed Granulator/Dryer',
      category: 'granulation',
      purpose: 'Drying of wet granules, mixing, and agglomeration (granulation) of powders.',
      principle: 'A bed of solid particles is fluidized by passing a stream of air upward through it. Liquid binder can be sprayed onto the fluidized bed to form granules.',
      components: ['Air inlet system', 'Product container (bowl)', 'Spray nozzle', 'Expansion chamber', 'Exhaust filter', 'Blower'],
      applications: 'Wet granulation, drying of granules, and particle coating (Wurster process).',
      parameters: ['Inlet air temperature', 'Airflow rate', 'Spray rate', 'Atomization air pressure', 'Filter shaking intervals'],
      references: [
        { text: 'USP General Chapter <1151> Pharmaceutical Dosage Forms', url: '#' }
      ]
    },
    {
      name: 'Rapid Mixer Granulator (High-Shear)',
      category: 'granulation',
      purpose: 'Fast, efficient mixing and wet granulation of pharmaceutical powders.',
      principle: 'Uses an impeller to rapidly mix the powder bed and a chopper to break down large agglomerates while liquid binder is added, resulting in dense granules.',
      components: ['Mixing bowl', 'Impeller', 'Chopper', 'Liquid binder addition port', 'Discharge valve'],
      applications: 'High-shear wet granulation for tablets and capsules, producing dense and compact granules.',
      parameters: ['Impeller speed', 'Chopper speed', 'Binder addition rate', 'Granulation time', 'Ampere load'],
      references: [
        { text: 'Aulton\'s Pharmaceutics, 5th Edition', url: '#' }
      ]
    },
    {
      name: 'V-Blender',
      category: 'mixing',
      purpose: 'Dry blending of free-flowing solid powders or granules.',
      principle: 'Relies on the cascading action of materials within a rotating V-shaped vessel. Mixing occurs by tumbling and dividing the powder mass.',
      components: ['V-shaped shell', 'Drive motor', 'Intensifier bar (optional)', 'Charge/discharge ports'],
      applications: 'Blending of excipients and active ingredients prior to tableting or capsule filling.',
      parameters: ['Rotation speed (RPM)', 'Fill volume (optimally 50-60%)', 'Blending time', 'Intensifier bar speed'],
      references: [
        { text: 'Lachman\'s Theory and Practice of Industrial Pharmacy', url: '#' }
      ]
    },
    {
      name: 'Ball Mill',
      category: 'milling',
      purpose: 'Fine grinding and size reduction of hard, brittle materials.',
      principle: 'Size reduction is achieved by impact and attrition as balls drop from near the top of a rotating cylindrical shell.',
      components: ['Rotating hollow cylinder', 'Grinding media (balls of steel, porcelain, etc.)', 'Drive mechanism', 'Liner'],
      applications: 'Milling of highly toxic or sterile materials, preparation of ophthalmic suspensions, and general fine grinding.',
      parameters: ['Critical speed (optimally 65-80%)', 'Size of balls', 'Volume of material (usually 30% of mill volume)', 'Milling time'],
      references: [
        { text: 'Martin\'s Physical Pharmacy and Pharmaceutical Sciences', url: '#' }
      ]
    },
    {
      name: 'Colloid Mill',
      category: 'milling',
      purpose: 'Particle size reduction of solid suspensions and formulation of stable emulsions.',
      principle: 'Operates on the principle of high shear and attrition generated between a high-speed rotor and a stationary stator.',
      components: ['Rotor', 'Stator', 'Hopper', 'Cooling jacket (often needed due to heat generation)'],
      applications: 'Preparation of colloidal dispersions, emulsions, suspensions, and ointments.',
      parameters: ['Rotor speed (RPM)', 'Clearance (gap) between rotor and stator', 'Feed rate', 'Temperature'],
      references: [
        { text: 'Aulton\'s Pharmaceutics, 5th Edition', url: '#' }
      ]
    },
    {
      name: 'Homogenizer',
      category: 'mixing',
      purpose: 'Creating uniform and fine emulsions or dispersions.',
      principle: 'Forces liquid through a narrow homogenization valve under high pressure, generating intense shear, cavitation, and turbulence.',
      components: ['High-pressure pump', 'Homogenizing valve', 'Impact ring'],
      applications: 'Manufacturing of intravenous emulsions, topical creams, and stabilization of suspensions.',
      parameters: ['Homogenization pressure', 'Number of passes', 'Valve temperature'],
      references: [
        { text: 'Lachman\'s Theory and Practice of Industrial Pharmacy', url: '#' }
      ]
    },
    {
      name: 'Dissolution Apparatus (USP Type I & II)',
      category: 'testing',
      purpose: 'In vitro determination of the rate and extent of drug release from solid dosage forms.',
      principle: 'Provides a controlled hydrodynamic environment at physiological temperature (37°C) to simulate in vivo drug dissolution.',
      components: ['Water bath', 'Vessels (usually 1000 mL)', 'Stirring elements (Baskets for Type I, Paddles for Type II)', 'Temperature controller', 'Sampling probes'],
      applications: 'Quality control release testing, stability testing, and bioequivalence studies for tablets and capsules.',
      parameters: ['Temperature (37 ± 0.5 °C)', 'Stirring speed (RPM)', 'Volume of dissolution medium', 'Sampling time points'],
      references: [
        { text: 'USP General Chapter <711> Dissolution', url: 'https://www.uspnf.com/' }
      ]
    },
    {
      name: 'Disintegration Tester',
      category: 'testing',
      purpose: 'Determination of the time required for solid dosage forms to disintegrate completely.',
      principle: 'Subjects tablets/capsules to a standardized agitating motion in a liquid medium at 37°C, simulating gastric or intestinal motility.',
      components: ['Basket-rack assembly (6 tubes)', 'Glass tubes with wire mesh base', 'Motor for up-and-down movement', 'Beaker (1 L)', 'Water bath'],
      applications: 'Routine quality control for immediate-release, enteric-coated, and effervescent tablets.',
      parameters: ['Temperature (37 ± 2 °C)', 'Stroke rate (29-32 cycles per minute)', 'Stroke distance', 'Testing medium'],
      references: [
        { text: 'USP General Chapter <701> Disintegration', url: 'https://www.uspnf.com/' }
      ]
    },
    {
      name: 'Friability Tester (Friabilator)',
      category: 'testing',
      purpose: 'Testing the physical strength and resistance to abrasion of uncoated tablets.',
      principle: 'Tablets are repeatedly dropped a specified distance within a rotating drum, subjected to mechanical shock and attrition.',
      components: ['Rotating transparent drum (Roche friabilator)', 'Motor', 'Timer/Counter'],
      applications: 'Evaluating tablet durability during packaging, handling, and shipping.',
      parameters: ['Drum rotation speed (25 RPM)', 'Total revolutions (usually 100)', 'Sample size (weight or number of tablets)'],
      references: [
        { text: 'USP General Chapter <1216> Tablet Friability', url: 'https://www.uspnf.com/' }
      ]
    },
    {
      name: 'Hardness Tester',
      category: 'testing',
      purpose: 'Measurement of the breaking force required to crush a tablet.',
      principle: 'Applies diametrical compression to a tablet positioned between two jaws until the tablet fractures.',
      components: ['Fixed jaw', 'Moving jaw', 'Load cell/Pressure sensor', 'Digital or dial display'],
      applications: 'Quality control during tableting to ensure consistent mechanical strength and dissolution profiles.',
      parameters: ['Crushing strength (N, kgf, or kp)', 'Platen speed'],
      references: [
        { text: 'USP General Chapter <1217> Tablet Breaking Force', url: 'https://www.uspnf.com/' }
      ]
    },
    {
      name: 'Viscometer (Brookfield type)',
      category: 'testing',
      purpose: 'Measurement of viscosity and flow properties of liquids, semisolids, and gels.',
      principle: 'A rotational viscometer that measures the torque required to rotate a spindle immersed in the test fluid at a constant speed.',
      components: ['Motor', 'Spindles of various sizes/shapes', 'Torque sensor', 'Digital display', 'Temperature probe'],
      applications: 'Rheological characterization of syrups, suspensions, emulsions, ointments, and polymeric solutions.',
      parameters: ['Spindle type/size', 'Rotational speed (RPM)', 'Temperature', 'Time of rotation'],
      references: [
        { text: 'USP General Chapter <912> Viscosity - Rotational Methods', url: 'https://www.uspnf.com/' }
      ]
    },
    {
      name: 'Stability Chamber',
      category: 'testing',
      purpose: 'Simulating various environmental conditions to evaluate the shelf life of pharmaceutical products.',
      principle: 'Maintains highly precise and uniform temperature and relative humidity levels over extended periods.',
      components: ['Insulated chamber', 'Heaters and chillers', 'Humidifier and dehumidifier', 'Air circulation fans', 'Sensors and dataloggers'],
      applications: 'Accelerated, long-term, and intermediate stability testing according to ICH guidelines.',
      parameters: ['Temperature (e.g., 25°C, 40°C)', 'Relative humidity (e.g., 60% RH, 75% RH)', 'Light exposure (for photostability chambers)'],
      references: [
        { text: 'ICH Q1A(R2) Stability Testing of New Drug Substances and Products', url: 'https://www.ich.org/' }
      ]
    },
    {
      name: 'Sieve Shaker',
      category: 'testing',
      purpose: 'Determination of particle size distribution of powders and granules.',
      principle: 'Uses mechanical vibration or tapping to pass material through a nested stack of sieves with progressively smaller mesh openings.',
      components: ['Stack of standard test sieves', 'Mechanical or electromagnetic shaker base', 'Lid and receiver pan', 'Timer'],
      applications: 'Micromeritic evaluation of raw materials, final blend prior to compression, and granulation endpoint determination.',
      parameters: ['Amplitude of vibration', 'Shaking time', 'Tapping frequency (if applicable)'],
      references: [
        { text: 'USP General Chapter <786> Particle Size Distribution Estimation by Analytical Sieving', url: 'https://www.uspnf.com/' }
      ]
    }
  ];

})();
