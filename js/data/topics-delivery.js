(function() {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};
  PharmHub.data.topics = PharmHub.data.topics || {};

  const newTopics = {
    'modified-release': {
      id: 'modified-release',
      title: 'Modified Release Systems',
      category: 'drug-delivery',
      icon: 'zap',
      color: 'var(--cat-delivery)',
      brief: 'Formulations designed to alter the rate, time, or site of drug release to improve therapeutic outcomes.',
      content: {
        definition: '<p><strong>Modified Release (MR) Systems</strong> are sophisticated dosage forms designed to alter the rate, time, or location of active pharmaceutical ingredient (API) release. Unlike immediate-release formulations, where the drug is released almost immediately after administration, MR systems optimize the pharmacokinetic profile to maintain constant therapeutic blood levels, reduce dosing frequency, and improve patient compliance.</p>',
        introduction: '<p>The concept of modifying drug release originated to combat the peak-and-valley concentration profiles of conventional dosage forms. This approach minimizes side effects associated with high $C_{max}$ and therapeutic failures due to sub-therapeutic trough levels. The major advantages include better disease management (e.g., overnight management of asthma or pain), reduced gastrointestinal irritation, and enhanced bioavailability.</p>',
        classification: `
          <p>Modified release encompasses several distinct profiles:</p>
          <ul>
            <li><strong>Extended Release (ER):</strong> Allows a twofold or more reduction in dosing frequency. Systems slowly release the drug over a prolonged period (e.g., 12 to 24 hours).</li>
            <li><strong>Delayed Release:</strong> Delays drug release until the dosage form has passed through the acidic environment of the stomach (e.g., Enteric-coated tablets).</li>
            <li><strong>Targeted Release:</strong> Directs the drug to a specific tissue or region in the body or GI tract (e.g., colon-targeted delivery).</li>
            <li><strong>Pulsatile Release:</strong> Delivers drug in distinct pulses, often to match the circadian rhythm of a disease (chronotherapeutics).</li>
          </ul>
        `,
        manufacturing: `
          <p>Common formulation approaches and mechanisms include:</p>
          <ul>
            <li><strong>Matrix Systems:</strong> The API is homogenously dispersed within a polymer matrix. <em>Hydrophilic matrices</em> (e.g., HPMC) swell and form a gel layer that regulates diffusion. <em>Hydrophobic matrices</em> (e.g., waxes, ethylcellulose) release drugs via pore diffusion and erosion.</li>
            <li><strong>Reservoir/Membrane Controlled Systems:</strong> A core of drug is surrounded by an insoluble polymeric membrane. Drug release is governed by Fickian diffusion through the membrane.</li>
            <li><strong>Osmotic Pumps (OROS):</strong> Consists of an osmotically active core surrounded by a semipermeable membrane with a laser-drilled delivery orifice. Water imbibition generates osmotic pressure that pushes the drug out at a constant zero-order rate.</li>
            <li><strong>Ion-Exchange Resins:</strong> Drugs are bound to ion-exchange resins; release occurs when ions in the GI tract displace the drug.</li>
          </ul>
        `,
        evaluation: `
          <p>Key evaluation parameters for MR systems:</p>
          <ul>
            <li><strong>In Vitro Dissolution Testing:</strong> Utilizing USP apparatus (I, II, III, or IV) in biorelevant media. Assessing the release profile over time to ensure it matches the desired kinetics (e.g., zero-order, Higuchi, or Korsmeyer-Peppas).</li>
            <li><strong>Swelling and Erosion Studies:</strong> Evaluating the hydration rate and gel-layer formation of hydrophilic matrices.</li>
            <li><strong>In Vitro-In Vivo Correlation (IVIVC):</strong> Establishing a predictive mathematical model describing the relationship between an in vitro property (dissolution) and an in vivo response (plasma concentration).</li>
            <li><strong>Pharmacokinetic Profiling:</strong> Assessing steady-state parameters, peak-trough fluctuations, $C_{max}$, $T_{max}$, and AUC.</li>
          </ul>
        `
      },
      vivaQuestions: [
        'What is the difference between delayed release and extended release?',
        'How does a hydrophilic matrix system control drug release?',
        'Describe the mechanism of action of an osmotic pump (OROS).',
        'What is the importance of IVIVC in modified release formulations?',
        'Which USP dissolution apparatus is commonly used for evaluating extended-release pellets?'
      ],
      references: [
        {text: 'FDA Guidance for Industry: Extended Release Oral Dosage Forms', url: 'https://www.fda.gov/'},
        {text: 'Aulton’s Pharmaceutics: The Design and Manufacture of Medicines', url: '#'},
        {text: 'Remington: The Science and Practice of Pharmacy', url: '#'}
      ],
      defined: true
    },
    
    'transdermal': {
      id: 'transdermal',
      title: 'Transdermal Drug Delivery',
      category: 'drug-delivery',
      icon: 'layers',
      color: 'var(--cat-delivery)',
      brief: 'Systems designed to deliver drugs across the skin for systemic circulation.',
      content: {
        definition: '<p><strong>Transdermal Drug Delivery Systems (TDDS)</strong> are self-contained, discrete dosage forms which, when applied to the intact skin, deliver the drug through the skin at a controlled rate to the systemic circulation.</p>',
        introduction: '<p>The skin, specifically the stratum corneum, acts as a formidable barrier. Transdermal patches overcome this barrier to offer continuous, non-invasive drug infusion. They bypass hepatic first-pass metabolism, avoid GI incompatibility, provide predictable and extended duration of action, and allow for immediate termination of therapy simply by removing the patch. Classic examples include nitroglycerin for angina, fentanyl for pain, and nicotine for smoking cessation.</p>',
        classification: `
          <p>Types of Transdermal Patches:</p>
          <ul>
            <li><strong>Reservoir Systems:</strong> The drug is contained in a liquid or gel compartment separated from the skin by a rate-controlling polymeric membrane and an adhesive layer.</li>
            <li><strong>Matrix Systems (Drug-in-Adhesive):</strong> The drug is directly dispersed within the pressure-sensitive adhesive polymer, which simultaneously controls the release rate and adheres the patch to the skin.</li>
            <li><strong>Microreservoir Systems:</strong> A hybrid where microscopic spheres of drug reservoir are suspended in a solid polymer matrix.</li>
          </ul>
        `,
        manufacturing: `
          <p>Formulation strategies to overcome the stratum corneum barrier:</p>
          <ul>
            <li><strong>Chemical Penetration Enhancers:</strong> Solvents (e.g., ethanol, propylene glycol), surfactants, and fatty acids that temporarily and reversibly alter skin lipid structure.</li>
            <li><strong>Physical Enhancement Methods:</strong> 
              <ul>
                <li><em>Iontophoresis:</em> Application of a low-level electrical current to drive charged drugs across the skin.</li>
                <li><em>Sonophoresis:</em> Use of low-frequency ultrasound to create micro-cavitations in the skin lipids.</li>
                <li><em>Microneedles:</em> Arrays of microscopic needles that mechanically pierce the stratum corneum without hitting nerve endings.</li>
              </ul>
            </li>
          </ul>
        `,
        evaluation: `
          <p>Key evaluations for TDDS:</p>
          <ul>
            <li><strong>In Vitro Permeation Studies:</strong> Conducted using a <strong>Franz Diffusion Cell</strong>. Excised skin (human or animal) or synthetic membranes separate donor and receptor compartments to measure the flux ($J$) of the drug.</li>
            <li><strong>Adhesive Properties:</strong> Tests for tack (thumb tack test), peel adhesion (force required to peel patch), and shear strength (cohesive strength of adhesive).</li>
            <li><strong>Physicochemical Properties:</strong> Thickness, weight variation, drug content uniformity, and moisture content.</li>
            <li><strong>Skin Irritation Testing:</strong> In vivo models to ensure the formulation does not cause erythema or edema (Draize test).</li>
          </ul>
        `
      },
      vivaQuestions: [
        'What is the primary barrier to transdermal drug delivery?',
        'Differentiate between a matrix patch and a reservoir patch.',
        'What is a Franz diffusion cell and how does it work?',
        'Name three physical permeation enhancement techniques.',
        'Why are high-dose drugs generally unsuitable for transdermal delivery?'
      ],
      references: [
        {text: 'Transdermal Drug Delivery Systems: A Comprehensive Review (IJPS)', url: 'https://www.ijpsonline.com/'},
        {text: 'Ansel’s Pharmaceutical Dosage Forms and Drug Delivery Systems', url: '#'},
        {text: 'Advances in Transdermal Drug Delivery (MDPI)', url: 'https://www.mdpi.com/'}
      ],
      defined: true
    },
    
    'nanoparticles': {
      id: 'nanoparticles',
      title: 'Nanoparticles',
      category: 'drug-delivery',
      icon: 'atom',
      color: 'var(--cat-delivery)',
      brief: 'Sub-micron colloidal carriers used for targeted and controlled drug delivery.',
      content: {
        definition: '<p><strong>Nanoparticles</strong> in drug delivery are solid colloidal particles ranging in size from 1 to 1000 nanometers (though generally targeted between 10-200 nm for medical use). They consist of macromolecular materials in which the active principle is dissolved, entrapped, encapsulated, or attached to a nanoparticle matrix.</p>',
        introduction: '<p>Nanotechnology has revolutionized pharmacology by enabling targeted delivery, improving the solubility of poorly water-soluble drugs, and protecting labile drugs (like proteins, peptides, and genetic material) from enzymatic degradation. The nanoscale size allows these carriers to traverse biological barriers and accumulate in target tissues, minimizing systemic toxicity.</p>',
        classification: `
          <p>Types of Nanoparticulate Carriers:</p>
          <ul>
            <li><strong>Polymeric Nanoparticles:</strong> Can be divided into <em>Nanospheres</em> (matrix systems where drug is uniformly dispersed) and <em>Nanocapsules</em> (reservoir systems where a liquid core is surrounded by a polymer shell). Polymers can be natural (e.g., Chitosan) or synthetic biodegradable (e.g., PLGA).</li>
            <li><strong>Solid Lipid Nanoparticles (SLNs):</strong> Composed of biocompatible solid lipids. They offer good physical stability and protection of incorporated labile drugs.</li>
            <li><strong>Nanostructured Lipid Carriers (NLCs):</strong> The second generation of SLNs, containing a blend of solid and liquid lipids, creating an imperfect matrix that allows for higher drug loading and prevents drug expulsion during storage.</li>
            <li><strong>Inorganic Nanoparticles:</strong> Such as gold nanoparticles, mesoporous silica, or iron oxide nanoparticles (often used for theranostics and imaging).</li>
          </ul>
        `,
        manufacturing: `
          <p>Preparation and Targeting Mechanisms:</p>
          <ul>
            <li><strong>Preparation Methods:</strong> Solvent evaporation, nanoprecipitation, emulsification-diffusion, and high-pressure homogenization (especially for SLNs/NLCs).</li>
            <li><strong>Passive Targeting (EPR Effect):</strong> In solid tumors and inflamed tissues, blood vessels are leaky and lymphatic drainage is poor. Nanoparticles exploit this Enhanced Permeability and Retention (EPR) effect to naturally accumulate at these sites.</li>
            <li><strong>Active Targeting:</strong> The nanoparticle surface is functionalized with ligands (antibodies, peptides, aptamers) that specifically bind to receptors overexpressed on target cells (e.g., folate receptors on cancer cells).</li>
            <li><strong>Surface Modification:</strong> PEGylation (coating with Polyethylene Glycol) creates "stealth" nanoparticles that evade the reticuloendothelial system (RES) and prolong blood circulation time.</li>
          </ul>
        `,
        evaluation: `
          <p>Critical quality attributes include:</p>
          <ul>
            <li><strong>Particle Size and Polydispersity Index (PDI):</strong> Measured by Dynamic Light Scattering (DLS). Narrow size distribution is critical.</li>
            <li><strong>Zeta Potential:</strong> Indicates the surface charge. Values greater than +30 mV or less than -30 mV typically denote stable colloidal dispersions.</li>
            <li><strong>Morphology:</strong> Visualized using Transmission Electron Microscopy (TEM) or Scanning Electron Microscopy (SEM).</li>
            <li><strong>Entrapment Efficiency (EE) and Loading Capacity:</strong> Quantifying the amount of drug successfully encapsulated versus free drug.</li>
            <li><strong>In Vitro Release Profile:</strong> Usually assessed via dialysis bag techniques due to the small size of the particles.</li>
          </ul>
        `
      },
      vivaQuestions: [
        'What is the EPR effect in the context of tumor targeting?',
        'Differentiate between nanospheres and nanocapsules.',
        'Why is PEGylation used in nanoparticle formulation?',
        'How does Dynamic Light Scattering (DLS) measure particle size?',
        'What advantage do NLCs have over standard SLNs?'
      ],
      references: [
        {text: 'Targeted Drug Delivery via Nanoparticles (NIH)', url: 'https://www.ncbi.nlm.nih.gov/'},
        {text: 'Polymeric nanoparticles in drug delivery (ResearchGate)', url: 'https://www.researchgate.net/'},
        {text: 'Lipid Nanoparticles: From Liposomes to mRNA Vaccine Delivery', url: '#'}
      ],
      defined: true
    },
    
    'liposomes': {
      id: 'liposomes',
      title: 'Liposomes',
      category: 'drug-delivery',
      icon: 'circle',
      color: 'var(--cat-delivery)',
      brief: 'Spherical vesicles composed of phospholipid bilayers, capable of encapsulating hydrophilic and lipophilic drugs.',
      content: {
        definition: '<p><strong>Liposomes</strong> are microscopic, artificially prepared spherical vesicles consisting of one or more concentric lipid bilayers enclosing an aqueous core. They are primarily composed of natural or synthetic phospholipids and cholesterol.</p>',
        introduction: '<p>Since their discovery in the 1960s, liposomes have become one of the most successful drug delivery platforms. Due to their amphiphilic nature, they can entrap hydrophilic drugs within their aqueous core and intercalate lipophilic drugs within the lipid bilayer. Liposomal formulations (e.g., Doxil®, AmBisome®) significantly reduce the toxicity of powerful drugs and can be targeted to specific tissues.</p>',
        classification: `
          <p>Based on size and number of lamellae (bilayers):</p>
          <ul>
            <li><strong>Small Unilamellar Vesicles (SUV):</strong> 20–100 nm, consisting of a single lipid bilayer.</li>
            <li><strong>Large Unilamellar Vesicles (LUV):</strong> >100 nm, consisting of a single bilayer; offer larger encapsulation volumes for aqueous drugs.</li>
            <li><strong>Multilamellar Vesicles (MLV):</strong> >500 nm, consisting of several concentric lipid bilayers separated by aqueous compartments (onion-like structure).</li>
            <li><strong>Multivesicular Liposomes (MVL):</strong> Non-concentric, closely packed vesicles within a larger lipid membrane.</li>
          </ul>
        `,
        manufacturing: `
          <p>Preparation techniques:</p>
          <ul>
            <li><strong>Thin-Film Hydration (Bangham Method):</strong> Lipids are dissolved in an organic solvent, evaporated to form a thin film, and then hydrated with an aqueous buffer. This generally forms MLVs.</li>
            <li><strong>Sonication or Extrusion:</strong> Used to reduce the size of MLVs down to SUVs or LUVs, yielding a uniform size distribution.</li>
            <li><strong>Reverse-Phase Evaporation:</strong> Forms an inverted emulsion, followed by solvent removal, yielding high-encapsulation LUVs.</li>
            <li><strong>Ethanol/Ether Injection Method:</strong> Rapid injection of lipid-solvent solution into an aqueous phase, allowing spontaneous liposome formation.</li>
          </ul>
          <p><strong>Loading Methods:</strong> <em>Passive loading</em> involves entrapping the drug during liposome formation. <em>Active loading</em> utilizes transmembrane pH or ion gradients to draw weakly basic or acidic drugs into pre-formed liposomes, vastly improving encapsulation efficiency.</p>
        `,
        evaluation: `
          <p>Evaluation involves assessing:</p>
          <ul>
            <li><strong>Vesicle Size and Morphology:</strong> Measured via DLS, TEM, and freeze-fracture electron microscopy.</li>
            <li><strong>Lamellarity:</strong> Determined by NMR spectroscopy or small-angle X-ray scattering (SAXS).</li>
            <li><strong>Encapsulation Efficiency:</strong> Separation of free drug using gel permeation chromatography, ultracentrifugation, or dialysis, followed by assay.</li>
            <li><strong>In Vitro Release Studies:</strong> Carried out in physiological buffers to monitor drug leakage or burst release.</li>
            <li><strong>Phase Transition Temperature ($T_c$):</strong> Analyzed via Differential Scanning Calorimetry (DSC) to ensure bilayer stability at body temperature.</li>
          </ul>
        `
      },
      vivaQuestions: [
        'What role does cholesterol play in the liposomal lipid bilayer?',
        'Explain the thin-film hydration method for preparing liposomes.',
        'What is active loading and how does it improve drug encapsulation?',
        'Differentiate between SUVs, LUVs, and MLVs.',
        'Give an example of a commercially successful liposomal drug and its clinical advantage.'
      ],
      references: [
        {text: 'Liposomes in Drug Delivery (MDPI)', url: 'https://www.mdpi.com/'},
        {text: 'Preparation and Characterization of Liposomes', url: 'https://www.ncbi.nlm.nih.gov/'},
        {text: 'BocSci: Liposomal Technology', url: '#'}
      ],
      defined: true
    },
    
    'ocular': {
      id: 'ocular',
      title: 'Ocular Drug Delivery',
      category: 'drug-delivery',
      icon: 'eye',
      color: 'var(--cat-delivery)',
      brief: 'Specialized systems formulated to overcome the eye’s protective barriers for localized therapy.',
      content: {
        definition: '<p><strong>Ocular Drug Delivery Systems</strong> are specialized dosage forms designed to deliver therapeutic agents into the eye. These formulations must overcome anatomical and physiological barriers to treat diseases of both the anterior segment (e.g., glaucoma, conjunctivitis) and posterior segment (e.g., macular degeneration, diabetic retinopathy).</p>',
        introduction: '<p>The eye is highly protected. Conventional eye drops typically suffer from extremely low bioavailability (less than 5%) due to rapid tear turnover, nasolacrimal drainage, blinking, and the highly selective permeability of the cornea. To achieve therapeutic efficacy, frequent dosing is often required, leading to poor compliance and potential systemic side effects. Advanced ocular systems focus on prolonging contact time, enhancing corneal penetration, or utilizing localized implants for sustained release.</p>',
        classification: `
          <p>Ocular Delivery Approaches:</p>
          <ul>
            <li><strong>Viscosity Enhancers & Mucoadhesives:</strong> Solutions utilizing polymers (like HPMC or hyaluronic acid) to thicken the drop or adhere to ocular mucin, increasing residence time.</li>
            <li><strong>In Situ Gelling Systems:</strong> Formulations instilled as drops that undergo a sol-to-gel phase transition in the cul-de-sac triggered by physiological pH, temperature, or ions.</li>
            <li><strong>Ophthalmic Inserts:</strong> Solid or semi-solid sterile preparations (e.g., Ocusert®) placed in the conjunctival sac to provide zero-order drug release.</li>
            <li><strong>Nanocarriers:</strong> Niosomes, micelles, and nanoparticles tailored to penetrate the corneal barriers.</li>
            <li><strong>Intravitreal Implants:</strong> Biodegradable or non-biodegradable polymer implants surgically placed into the vitreous humor for long-term posterior segment treatment (e.g., Ozurdex).</li>
          </ul>
        `,
        manufacturing: `
          <p>Formulation considerations are exceptionally stringent:</p>
          <ul>
            <li><strong>Sterility:</strong> Absolutely mandatory. Formulations must be sterilized via autoclaving, gamma radiation, or aseptic filtration.</li>
            <li><strong>Isotonicity and pH:</strong> Must be buffered close to physiological tear pH (7.4) and made isotonic using NaCl to prevent irritation and reflex tearing, which washes away the drug.</li>
            <li><strong>Preservatives:</strong> Required in multi-dose containers (e.g., Benzalkonium chloride), though preservative-free systems are preferred for chronic use to avoid epithelial toxicity.</li>
          </ul>
        `,
        evaluation: `
          <p>Standard and specialized tests include:</p>
          <ul>
            <li><strong>Sterility and Pyrogen Testing:</strong> To ensure absolute safety of the formulation.</li>
            <li><strong>Clarity and Particulate Matter:</strong> Strict limits on the number and size of visible and sub-visible particles.</li>
            <li><strong>In Vitro Transcorneal Permeation:</strong> Conducted using excised animal corneas (e.g., goat or rabbit) mounted on specialized Franz diffusion cells.</li>
            <li><strong>Ocular Irritation (Draize Test):</strong> Historically performed in vivo on rabbit eyes, now increasingly replaced by alternative in vitro tests (e.g., HET-CAM, EpiOcular models).</li>
            <li><strong>Rheological Studies:</strong> Assessing viscosity and phase transition properties for in situ gels.</li>
          </ul>
        `
      },
      vivaQuestions: [
        'Why is the bioavailability of conventional eye drops so low?',
        'Explain the mechanism of an in-situ gelling system.',
        'Why are pH and isotonicity critical in ophthalmic preparations?',
        'Describe the pathways a drug can take to cross the cornea.',
        'What alternatives exist to the Draize test for ocular irritation?'
      ],
      references: [
        {text: 'Recent Advances in Ocular Drug Delivery (MDPI)', url: 'https://www.mdpi.com/'},
        {text: 'Anatomy and barriers of the eye for drug delivery', url: 'https://www.ncbi.nlm.nih.gov/'},
        {text: 'Ophthalmic Product Development Guidance (FDA)', url: 'https://www.fda.gov/'}
      ],
      defined: true
    }
  };

  Object.assign(PharmHub.data.topics, newTopics);

})();
