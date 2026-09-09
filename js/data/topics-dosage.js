(function() {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  PharmHub.data.topics = PharmHub.data.topics || {};

  const newTopics = {
    'powders': {
      id: 'powders',
      title: 'Powders',
      category: 'dosage-forms',
      icon: 'align-center',
      color: 'var(--cat-dosage)',
      brief: 'Solid dosage forms consisting of intimately mixed, dry, finely divided drugs and/or excipients.',
      content: {
        definition: '<p><strong>Powders</strong> are defined as solid dosage forms consisting of a mixture of finely divided drugs and/or chemicals in a dry form, intended for internal (oral) or external use.</p>',
        introduction: '<p>Powders are one of the oldest dosage forms and serve as the foundation for the formulation of other solid dosage forms like tablets and capsules. They offer flexibility in dosing and are generally more chemically stable than liquid preparations. The particle size of powders plays a critical role in determining their dissolution rate, bioavailability, and flow properties.</p>',
        classification: '<ul><li><strong>Bulk Powders for Internal Use:</strong> Supplied in bulk containers, e.g., antacids, laxatives. Patients measure the dose themselves.</li><li><strong>Bulk Powders for External Use:</strong> Dusting powders, snuffs, dentifrices. Dusting powders must be homogenous, free from local irritation, and have good flowability.</li><li><strong>Divided Powders:</strong> Dispensed in individual unit doses (e.g., folded papers or sachets) for potent drugs.</li><li><strong>Specialized Powders:</strong> Effervescent powders, insufflations.</li></ul>',
        manufacturing: '<p>The preparation of powders involves several key steps:</p><ol><li><strong>Size Reduction (Comminution):</strong> Trituration, pulverization by intervention, or levigation to achieve the desired particle size.</li><li><strong>Mixing (Blending):</strong> Homogeneous mixing is essential. Techniques include spatulation, trituration, tumbling, and geometric dilution (for mixing potent drugs with a large amount of diluent).</li><li><strong>Packaging:</strong> Depending on the type (bulk or divided), they are packed in wide-mouth containers, sifter-top containers, or individual sachets.</li></ol>',
        evaluation: '<p>Quality control of powders includes the evaluation of several parameters:</p><ul><li><strong>Particle Size Analysis:</strong> Using microscopy, sieving (mesh sizes), or laser diffraction.</li><li><strong>Flow Properties:</strong> Measured via Angle of Repose, Carr\'s Compressibility Index, and Hausner Ratio.</li><li><strong>Moisture Content:</strong> To ensure physical and chemical stability.</li><li><strong>Content Uniformity:</strong> Essential for divided powders and potent drugs.</li></ul>'
      },
      vivaQuestions: [
        'What is geometric dilution and when is it used?',
        'How does particle size affect the bioavailability of a powder?',
        'Explain the principle behind effervescent powders.',
        'What are dusting powders and what are their ideal properties?',
        'Define Carr\'s index and how it relates to powder flow.',
        'What is pulverization by intervention?'
      ],
      references: [
        { text: 'Aulton\'s Pharmaceutics: The Design and Manufacture of Medicines', url: 'https://www.elsevier.com/books/aultons-pharmaceutics/taylor/978-0-7020-8154-5' },
        { text: 'Remington: The Science and Practice of Pharmacy', url: 'https://pharmpress.com/product/remington-the-science-and-practice-of-pharmacy/' },
        { text: 'USP General Chapter <1174> Powder Flow', url: 'https://www.uspnf.com/' }
      ],
      defined: true
    },
    'granules': {
      id: 'granules',
      title: 'Granules',
      category: 'dosage-forms',
      icon: 'grid',
      color: 'var(--cat-dosage)',
      brief: 'Preparations consisting of solid, dry agglomerates of powder particles sufficiently resilient to withstand handling.',
      content: {
        definition: '<p><strong>Granules</strong> are defined as solid dosage forms that consist of aggregations of fine particles of powders in a mass of about spherical shape. They are typically in the size range of 0.2 to 4.0 mm.</p>',
        introduction: '<p>Granulation is primarily carried out to improve the flow properties of powders and to prevent segregation of the constituents of a powder blend. Granules are used directly as a dosage form (e.g., in sachets for reconstitution) or as an intermediate in the manufacture of tablets and capsules. They have better flowability, higher density, and improved compressibility compared to powders.</p>',
        classification: '<ul><li><strong>Effervescent Granules:</strong> Contain a mixture of citric acid, tartaric acid, and sodium bicarbonate, which releases CO2 upon mixing with water.</li><li><strong>Coated Granules:</strong> Coated with materials to modify release profiles (enteric-coated, sustained-release).</li><li><strong>Gastro-resistant Granules:</strong> Designed to resist gastric fluid and release the active ingredient in the intestinal fluid.</li><li><strong>Modified-release Granules:</strong> Formulated to alter the rate or place of release of the active pharmaceutical ingredient.</li></ul>',
        manufacturing: '<p>The two main methods of preparing granules are:</p><ol><li><strong>Wet Granulation:</strong> The most common method. Involves weighing, mixing, adding a liquid binder to form a damp mass, screening the mass into pellets or granules, drying the granulation, and dry screening.</li><li><strong>Dry Granulation:</strong> Used for moisture-sensitive or heat-sensitive materials. Powder particles are compacted into large pieces (slugging or roller compaction) and subsequently broken down and sized into granules.</li></ol>',
        evaluation: '<p>Key quality control tests for granules include:</p><ul><li><strong>Particle Size Distribution:</strong> Sieve analysis.</li><li><strong>Flow Properties:</strong> Angle of repose, Hausner ratio.</li><li><strong>Moisture Content:</strong> Loss on drying (LOD) or Karl Fischer titration.</li><li><strong>Friability:</strong> Resistance to abrasion and crumbling during handling.</li><li><strong>Dissolution Testing:</strong> For granules intended for modified release.</li></ul>'
      },
      vivaQuestions: [
        'Why are granules preferred over powders for tableting?',
        'Describe the process of wet granulation.',
        'When is dry granulation preferred over wet granulation?',
        'What is the purpose of adding tartaric acid in effervescent granules?',
        'How is the moisture content of granules determined?'
      ],
      references: [
        { text: 'Aulton\'s Pharmaceutics: The Design and Manufacture of Medicines', url: 'https://www.elsevier.com/books/aultons-pharmaceutics/taylor/978-0-7020-8154-5' },
        { text: 'Remington: The Science and Practice of Pharmacy', url: 'https://pharmpress.com/product/remington-the-science-and-practice-of-pharmacy/' },
        { text: 'FDA Guidance for Industry: Size, Shape, and Other Physical Attributes of Generic Tablets and Capsules', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents' }
      ],
      defined: true
    },
    'semisolids': {
      id: 'semisolids',
      title: 'Semisolid Dosage Forms',
      category: 'dosage-forms',
      icon: 'box',
      color: 'var(--cat-dosage)',
      brief: 'Topical formulations like ointments, creams, and gels applied to skin or mucous membranes for therapeutic or protective action.',
      content: {
        definition: '<p><strong>Semisolid Dosage Forms</strong> are products of semisolid consistency applied to skin or mucous membranes for therapeutic, protective, or cosmetic functions. They include ointments, creams, gels, and pastes.</p>',
        introduction: '<p>These dosage forms are designed for local application to elicit a localized effect, although systemic absorption can occur. They consist of an active pharmaceutical ingredient (API) dissolved or suspended in a suitable semisolid base. The choice of base significantly affects the release of the drug and its clinical efficacy.</p>',
        classification: '<ul><li><strong>Ointments:</strong> Greasy, anhydrous, or low-water content formulations. Provide an occlusive effect. E.g., hydrocarbon bases, absorption bases.</li><li><strong>Creams:</strong> Opaque emulsions, either water-in-oil (w/o) or oil-in-water (o/w). Easier to spread and wash off than ointments.</li><li><strong>Gels:</strong> Semisolid systems consisting of dispersions of small or large molecules in an aqueous liquid vehicle rendered jelly-like by the addition of a gelling agent.</li><li><strong>Pastes:</strong> Thick, stiff ointments containing a high proportion (e.g., 20-50%) of finely dispersed solid powders. Provide a protective barrier.</li></ul>',
        manufacturing: '<p>Manufacturing of semisolids generally involves:</p><ol><li><strong>Preparation of the Base:</strong> Melting of lipophilic components (waxes, fats) using a water bath or jacketed vessel.</li><li><strong>Incorporation of API:</strong> Drugs are added either by dissolving in a small amount of solvent or by fine levigation and dispersion into the base.</li><li><strong>Emulsification (for creams):</strong> Aqueous and oil phases are heated separately and mixed under continuous stirring and cooling.</li><li><strong>Milling and Homogenization:</strong> To ensure uniform dispersion and a smooth texture.</li></ol>',
        evaluation: '<p>Quality control parameters for semisolids include:</p><ul><li><strong>Rheological Properties:</strong> Viscosity, spreadability, and extrudability.</li><li><strong>Drug Content Uniformity:</strong> Assaying the API concentration.</li><li><strong>In Vitro Release Testing (IVRT):</strong> Using Franz diffusion cells.</li><li><strong>pH Measurement:</strong> Critical for skin compatibility.</li><li><strong>Microbial Testing:</strong> Preservative efficacy and limits for objectionable organisms.</li></ul>'
      },
      vivaQuestions: [
        'Differentiate between an ointment and a cream.',
        'What are the four types of ointment bases? Give an example of each.',
        'Explain the function of a gelling agent.',
        'What is a Franz diffusion cell used for?',
        'Why are pastes stiffer than ointments?',
        'How does the occlusive nature of hydrocarbon bases affect drug absorption?'
      ],
      references: [
        { text: 'Aulton\'s Pharmaceutics: The Design and Manufacture of Medicines', url: 'https://www.elsevier.com/books/aultons-pharmaceutics/taylor/978-0-7020-8154-5' },
        { text: 'USP <1151> Pharmaceutical Dosage Forms', url: 'https://www.uspnf.com/' },
        { text: 'FDA Guidance: Nonsterile Semisolid Dosage Forms', url: 'https://www.fda.gov/' }
      ],
      defined: true
    },
    'parenterals': {
      id: 'parenterals',
      title: 'Parenteral Products',
      category: 'dosage-forms',
      icon: 'syringe',
      color: 'var(--cat-dosage)',
      brief: 'Sterile dosage forms administered directly into the systemic circulation by injection, bypassing the gastrointestinal tract.',
      content: {
        definition: '<p><strong>Parenterals</strong> are sterile preparations intended for administration directly into the systemic circulation in humans or animals via injection, infusion, or implantation.</p>',
        introduction: '<p>The term parenteral implies administration routes bypassing the enteral (GI) tract. They are utilized when rapid onset of action is required, when drugs are not absorbed or are destroyed in the GI tract (e.g., insulin), or when patients cannot take oral medication. Strict requirements exist for sterility, apyrogenicity, and particulate matter limits.</p>',
        classification: '<ul><li><strong>Small Volume Parenterals (SVPs):</strong> Volume 100 mL or less. Administered as single or multiple dose injections (e.g., ampoules, vials).</li><li><strong>Large Volume Parenterals (LVPs):</strong> Volume greater than 100 mL. Used for fluid replacement, electrolyte balance, or total parenteral nutrition (TPN). Must be single-dose and preservative-free.</li><li><strong>Dry Powders for Injection:</strong> Reconstituted with a suitable diluent immediately prior to use (for unstable drugs).</li><li><strong>Implants:</strong> Solid sterile preparations placed surgically for extended release.</li></ul>',
        manufacturing: '<p>The manufacture of parenterals requires an aseptic environment (Cleanrooms, usually Grade A/ISO 5):</p><ol><li><strong>Water for Injection (WFI):</strong> Preparation of high-purity water.</li><li><strong>Formulation:</strong> Dissolving API and excipients (buffers, tonicity adjusters).</li><li><strong>Filtration:</strong> Sterile filtration using 0.22 micron membrane filters.</li><li><strong>Filling and Sealing:</strong> Conducted in Class 100 (Grade A) laminar airflow environments.</li><li><strong>Sterilization:</strong> Terminal sterilization (e.g., autoclaving) if the product is heat-stable.</li></ol>',
        evaluation: '<p>Stringent quality control encompasses:</p><ul><li><strong>Sterility Testing:</strong> Membrane filtration or direct inoculation to detect microbial contamination.</li><li><strong>Pyrogen Testing / LAL Test:</strong> To detect bacterial endotoxins.</li><li><strong>Particulate Matter Evaluation:</strong> Visual inspection and light obscuration techniques.</li><li><strong>Leaker Test:</strong> Dye bath test to ensure seal integrity of ampoules.</li><li><strong>pH and Osmolarity:</strong> Must be compatible with physiological fluids.</li></ul>'
      },
      vivaQuestions: [
        'What is the difference between Water for Injection (WFI) and Sterile Water for Injection?',
        'Describe the LAL test. What is its significance?',
        'Why must Large Volume Parenterals be preservative-free?',
        'What are the advantages of terminal sterilization over aseptic processing?',
        'How is a leaker test performed for ampoules?',
        'What pore size is used for sterile filtration, and why?'
      ],
      references: [
        { text: 'Aulton\'s Pharmaceutics: The Design and Manufacture of Medicines', url: 'https://www.elsevier.com/books/aultons-pharmaceutics/taylor/978-0-7020-8154-5' },
        { text: 'USP <71> Sterility Tests', url: 'https://www.uspnf.com/' },
        { text: 'USP <85> Bacterial Endotoxins Test', url: 'https://www.uspnf.com/' },
        { text: 'Remington: The Science and Practice of Pharmacy', url: 'https://pharmpress.com/product/remington-the-science-and-practice-of-pharmacy/' }
      ],
      defined: true
    },
    'solutions': {
      id: 'solutions',
      title: 'Pharmaceutical Solutions',
      category: 'dosage-forms',
      icon: 'droplet',
      color: 'var(--cat-dosage)',
      brief: 'Liquid preparations containing one or more chemical substances dissolved in a suitable solvent or mixture of mutually miscible solvents.',
      content: {
        definition: '<p><strong>Pharmaceutical Solutions</strong> are homogenous liquid preparations that contain one or more active ingredients dissolved in a suitable solvent or a mixture of mutually miscible solvents.</p>',
        introduction: '<p>Solutions are thermodynamically stable systems that provide a uniform dose upon administration. They are readily absorbed since the drug is already in a dissolved state, making them ideal for oral, topical, otic, ophthalmic, and parenteral routes. The major challenge is maintaining physical and chemical stability over the product\'s shelf-life.</p>',
        classification: '<ul><li><strong>Aqueous Solutions:</strong> Syrups (sweet, viscous, high sucrose), Elixirs (sweetened hydroalcoholic solutions), Linctuses (viscous, throat-coating).</li><li><strong>Non-aqueous Solutions:</strong> Spirits (alcoholic solutions of volatile substances), Tinctures (alcoholic extracts of plant/animal materials).</li><li><strong>By Route of Administration:</strong> Oral solutions, topical solutions (lotions, liniments), ophthalmic solutions, otic solutions.</li></ul>',
        manufacturing: '<p>The preparation typically involves:</p><ol><li><strong>Dissolution:</strong> The active ingredient and excipients (preservatives, buffers, sweeteners, flavors) are added to the solvent. Gentle heating or mechanical stirring may be applied to facilitate dissolution.</li><li><strong>Filtration:</strong> The solution is clarified by passing it through a suitable filter to remove particulate matter.</li><li><strong>Volume Adjustment:</strong> Making up to the final volume with the solvent.</li><li><strong>Packaging:</strong> Filling into appropriately sized bottles (glass or plastic).</li></ol>',
        evaluation: '<p>Evaluation parameters for solutions include:</p><ul><li><strong>Clarity:</strong> Visual inspection against a dark and light background to ensure absence of undissolved matter.</li><li><strong>pH:</strong> Critical for drug stability, solubility, and patient tolerability.</li><li><strong>Viscosity:</strong> Important for pouring and adherence (e.g., syrups).</li><li><strong>Specific Gravity:</strong> Using a pycnometer or hydrometer.</li><li><strong>Assay:</strong> Determining the concentration of the active pharmaceutical ingredient.</li><li><strong>Microbiological Testing:</strong> Efficacy of antimicrobial preservation.</li></ul>'
      },
      vivaQuestions: [
        'Differentiate between a syrup and an elixir.',
        'Why is sucrose used in high concentrations in syrups?',
        'What are the advantages of solutions over solid dosage forms?',
        'How do co-solvents improve the solubility of a poorly soluble drug?',
        'What is a tincture?',
        'Why is pH control critical in pharmaceutical solutions?'
      ],
      references: [
        { text: 'Aulton\'s Pharmaceutics: The Design and Manufacture of Medicines', url: 'https://www.elsevier.com/books/aultons-pharmaceutics/taylor/978-0-7020-8154-5' },
        { text: 'Remington: The Science and Practice of Pharmacy', url: 'https://pharmpress.com/product/remington-the-science-and-practice-of-pharmacy/' },
        { text: 'USP <1151> Pharmaceutical Dosage Forms', url: 'https://www.uspnf.com/' }
      ],
      defined: true
    }
  };

  // Merge into main object
  Object.assign(PharmHub.data.topics, newTopics);
})();
