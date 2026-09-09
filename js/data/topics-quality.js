(function() {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  PharmHub.data.topics = PharmHub.data.topics || {};

  const newTopics = {
    'quality-control': {
      id: 'quality-control',
      title: 'Quality Control & Assurance',
      category: 'quality',
      icon: 'check-circle',
      color: 'var(--cat-quality)',
      brief: 'Principles of QA/QC, ICH guidelines, and USP testing requirements.',
      content: {
        definition: '<p><strong>Quality Assurance (QA)</strong> is a wide-ranging concept covering all matters that individually or collectively influence the quality of a product. It is the totality of the arrangements made with the objective of ensuring that pharmaceutical products are of the quality required for their intended use. <strong>Quality Control (QC)</strong> is that part of Good Manufacturing Practice (GMP) concerned with sampling, specifications, and testing, and with the organization, documentation, and release procedures.</p>',
        introduction: '<p>While often used interchangeably, QA is process-focused and preventative, ensuring "right first time" outcomes through SOPs, risk assessments, and training. QC is product-focused and reactive, involving the operational checks and testing to verify that specifications are met before product release. Together, they form the foundation of a robust Pharmaceutical Quality System (PQS).</p>',
        classification: '<h3>Key Regulatory Frameworks</h3><ul><li><strong>ICH Guidelines (Q Series):</strong> Provide globally harmonized standards for quality. Key guidelines include Q1 (Stability), Q2 (Analytical Validation), Q3 (Impurities), Q9 (Quality Risk Management), and Q10 (Pharmaceutical Quality System). ICH emphasizes a risk-based lifecycle approach.</li><li><strong>United States Pharmacopeia (USP):</strong> Provides public, compendial quality standards. Includes specific monographs for substances and general chapters for standardized testing methods (e.g., microbial limits, dissolution). USP is highly prescriptive compared to ICH.</li></ul>',
        manufacturing: '<p>Quality must be built into the product during manufacturing (Quality by Design - QbD). This involves identifying Critical Quality Attributes (CQAs) and Critical Process Parameters (CPPs) to establish a design space where consistent quality is assured. Routine monitoring and in-process controls (IPCs) act as ongoing QC measures during the manufacturing lifecycle.</p>',
        evaluation: '<p>Evaluation involves rigorous testing according to USP/ICH standards. Common testing requirements include: <strong>Identity testing</strong> (e.g., FTIR, HPLC), <strong>Assay</strong> (determination of active ingredient content), <strong>Impurities testing</strong> (related substances, residual solvents per ICH Q3), <strong>Dissolution/Disintegration</strong> (for solid oral dosage forms), and <strong>Microbial limits</strong> (sterility or bioburden testing). Method validation per ICH Q2 ensures that these analytical procedures are accurate, precise, specific, and robust.</p>'
      },
      vivaQuestions: [
        'What is the fundamental difference between Quality Assurance (QA) and Quality Control (QC)?',
        'Can you name three critical ICH Quality (Q) guidelines and their focus?',
        'How does a USP monograph differ from a General Chapter?',
        'What is Quality by Design (QbD) and how does it relate to CQAs and CPPs?',
        'Describe the parameters required for analytical method validation according to ICH Q2.',
        'What role does ICH Q9 play in modern pharmaceutical quality systems?'
      ],
      references: [
        {text: 'ICH Quality Guidelines', url: 'https://www.ich.org/page/quality-guidelines'},
        {text: 'USP-NF General Chapters', url: 'https://www.uspnf.com/'},
        {text: 'FDA Guidance on Quality Systems', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents'}
      ],
      defined: true
    },
    'sterilization': {
      id: 'sterilization',
      title: 'Pharmaceutical Sterilization',
      category: 'microbiology',
      icon: 'shield-alert',
      color: 'var(--cat-microbiology)',
      brief: 'Sterilization methods, thermal lethality kinetics (D, Z, F values), and validation.',
      content: {
        definition: '<p><strong>Sterilization</strong> is an essential, highly controlled process designed to completely eliminate or destroy all forms of microbial life, including highly resistant bacterial spores, from a pharmaceutical preparation or packaging component. The outcome is expressed as a Sterility Assurance Level (SAL), typically targeted at $10^{-6}$ (a one in a million probability of a non-sterile unit).</p>',
        introduction: '<p>Sterilization is critical for parenteral products, ophthalmic preparations, and medical devices. Due to the absolute nature of sterility, it cannot be practically verified by end-product testing alone. Therefore, sterilization processes must be rigorously validated and controlled using physical, chemical, and biological indicators.</p>',
        classification: '<h3>Sterilization Methods</h3><ul><li><strong>Thermal:</strong> Moist heat (autoclaving, using pressurized steam) and Dry heat (depyrogenation ovens). Moist heat is most common due to its high efficiency in coagulating microbial proteins.</li><li><strong>Radiation:</strong> Gamma rays, electron beams. Used for heat-sensitive materials and disposable plastics.</li><li><strong>Filtration:</strong> Physical removal of microbes using 0.22 µm pore-size filters. The only method suitable for heat-sensitive liquid biologics.</li><li><strong>Chemical/Gas:</strong> Ethylene Oxide (EtO), Vaporized Hydrogen Peroxide (VHP). Used for equipment and some packaged devices.</li></ul>',
        manufacturing: '<h3>Thermal Lethality Kinetics</h3><p>Validating thermal sterilization relies on mathematical models of microbial death:</p><ul><li><strong>D-Value (Decimal Reduction Time):</strong> The time (in minutes) required at a constant temperature to reduce a specific microbial population by 90% (1-log reduction). Indicates heat resistance.</li><li><strong>z-Value:</strong> The temperature increase required to achieve a 10-fold decrease in the D-value. Indicates sensitivity to temperature changes.</li><li><strong>F-Value (Lethality Value):</strong> The total lethality of a process, expressed as equivalent time at a reference temperature. For moist heat, <strong>$F_0$</strong> is used (reference 121.1°C, z-value 10°C). It integrates the lethality over the entire heating and cooling cycle.</li></ul>',
        evaluation: '<p>Evaluation and validation involve mapping the sterilizer chamber for temperature distribution (empty chamber) and heat penetration (loaded chamber). <strong>Biological Indicators (BIs)</strong>, such as <em>Geobacillus stearothermophilus</em> spores for moist heat, are used to prove the required lethality (e.g., $F_0 \\ge 15$ mins) was achieved. Ongoing evaluation requires routine monitoring of physical parameters (time, temperature, pressure) against validated limits.</p>'
      },
      vivaQuestions: [
        'Define D-value, z-value, and F-value in the context of sterilization kinetics.',
        'Why is moist heat sterilization generally more effective than dry heat sterilization?',
        'What is a Sterility Assurance Level (SAL) and what is the standard target for injectables?',
        'Explain the difference between temperature distribution and heat penetration studies.',
        'Which biological indicator is primarily used for validating moist heat sterilization?',
        'When would you choose sterile filtration over terminal autoclaving?'
      ],
      references: [
        {text: 'USP <1229> Sterilization of Compendial Articles', url: 'https://www.uspnf.com/'},
        {text: 'FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing', url: 'https://www.fda.gov/'},
        {text: 'PDA Technical Report No. 1 (Validation of Moist Heat Sterilization)', url: 'https://www.pda.org/'}
      ],
      defined: true
    },
    'packaging': {
      id: 'packaging',
      title: 'Pharmaceutical Packaging',
      category: 'packaging',
      icon: 'package',
      color: 'var(--cat-packaging)',
      brief: 'Glass and plastic packaging types, extractables, leachables, and USP testing.',
      content: {
        definition: '<p><strong>Pharmaceutical Packaging</strong> encompasses all the materials and components used to enclose and protect a drug product. It ensures product stability, efficacy, and safety from the time of manufacture to the point of administration. The packaging must not interact physically or chemically with the drug to alter its quality beyond established specifications.</p>',
        introduction: '<p>Packaging is broadly categorized into Primary (in direct contact with the drug, e.g., vials, blister packs), Secondary (provides additional physical protection and labeling, e.g., cartons), and Tertiary (for bulk handling). Regulatory focus is heavily on primary packaging materials, particularly glass and plastics, due to risks of extractables and leachables.</p>',
        classification: '<h3>Types of Packaging Materials</h3><ul><li><strong>Glass (USP &lt;660&gt;):</strong> Recently shifted to a performance-based classification. <em>Type I</em> is highly resistant borosilicate, ideal for most parenterals. <em>Type II</em> is treated soda-lime glass, suitable for neutral/acidic aqueous products. <em>Type III</em> is moderate resistance soda-lime, used for dry powders or non-aqueous liquids.</li><li><strong>Plastics (USP &lt;661.1&gt; &amp; &lt;661.2&gt;):</strong> Polymers like PET, HDPE, PVC, and Polypropylene. Standardized in two parts: characterizing the raw plastic materials (&lt;661.1&gt;) and qualifying the finished packaging systems (&lt;661.2&gt;).</li></ul>',
        manufacturing: '<p>Manufacturing packaging components involves rigorous control of raw materials. For plastics, the formulation includes base polymers and additives (plasticizers, antioxidants, UV stabilizers). The presence of these additives necessitates extensive testing to ensure they do not leach into the drug product. <strong>Extractables</strong> are compounds emitted under extreme experimental conditions, while <strong>Leachables</strong> are those that migrate under normal shelf-life conditions.</p>',
        evaluation: '<p>Evaluation involves strict compendial testing. <strong>Glass testing</strong> includes Hydrolytic Resistance (to ensure chemical durability), Light Transmission (for amber glass), and Extractable Arsenic (via ICP). <strong>Plastic testing</strong> involves physicochemical tests (extraction in various media), Identification (FT-IR, DSC), and Biological Reactivity tests to ensure biocompatibility. Extractables and Leachables (E&L) studies are critical to toxicological risk assessment.</p>'
      },
      vivaQuestions: [
        'Differentiate between Type I, Type II, and Type III glass according to USP classifications.',
        'What is the fundamental difference between Extractables and Leachables?',
        'Explain the transition in USP from a composition-based to a performance-based classification for glass.',
        'What are the key differences in scope between USP <661.1> and USP <661.2>?',
        'Why is hydrolytic resistance testing critical for glass containers used for parenteral products?',
        'Name two analytical techniques commonly used to identify plastic packaging materials.'
      ],
      references: [
        {text: 'USP <660> Containers—Glass', url: 'https://www.uspnf.com/'},
        {text: 'USP <661.1> and <661.2> Plastic Packaging Systems', url: 'https://www.uspnf.com/'},
        {text: 'FDA Guidance: Container Closure Systems for Packaging Human Drugs', url: 'https://www.fda.gov/'}
      ],
      defined: true
    }
  };

  Object.assign(PharmHub.data.topics, newTopics);
})();
