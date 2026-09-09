(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.data = PharmHub.data || {};

  PharmHub.data.excipients = [
    {
      name: 'Microcrystalline Cellulose',
      synonyms: ['MCC', 'Avicel'],
      category: 'diluent',
      functions: ['Diluent', 'Binder', 'Disintegrant (mild)'],
      dosageForms: ['Tablets', 'Capsules'],
      properties: 'A purified, partially depolymerized cellulose. Occurs as a white, odorless, tasteless crystalline powder composed of porous particles. Known for excellent compressibility and binding properties in direct compression.',
      compatibility: 'Generally compatible with most active ingredients. Incompatible with strong oxidizing agents.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' },
        { text: 'USP-NF: Microcrystalline Cellulose', url: '#' }
      ]
    },
    {
      name: 'Lactose Monohydrate',
      synonyms: ['Milk sugar', 'Pharmatose'],
      category: 'diluent',
      functions: ['Diluent', 'Filler'],
      dosageForms: ['Tablets', 'Capsules', 'Dry powder inhalers'],
      properties: 'A widely used excipient that is crystalline, white, odorless, and slightly sweet. Offers good physical stability and ease of use in wet granulation and direct compression (special grades).',
      compatibility: 'Can undergo Maillard reaction (browning) when combined with primary amines in the presence of alkaline lubricants.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Starch',
      synonyms: ['Corn starch', 'Maize starch', 'Potato starch'],
      category: 'disintegrant',
      functions: ['Disintegrant', 'Binder', 'Diluent'],
      dosageForms: ['Tablets', 'Capsules'],
      properties: 'Fine, white, odorless powder. When used dry, it acts as a disintegrant by swelling in water. When cooked into a paste, it acts as a very effective binder.',
      compatibility: 'Generally stable. Moisture content can affect the stability of moisture-sensitive drugs.',
      references: [
        { text: 'USP-NF: Starch', url: '#' }
      ]
    },
    {
      name: 'Croscarmellose Sodium',
      synonyms: ['Ac-Di-Sol', 'Cross-linked carboxymethylcellulose sodium'],
      category: 'disintegrant',
      functions: ['Superdisintegrant'],
      dosageForms: ['Tablets', 'Capsules'],
      properties: 'An internally cross-linked polymer of carboxymethylcellulose sodium. Rapidly swells and wicks water into the tablet matrix, promoting highly efficient disintegration at low concentrations (1-5%).',
      compatibility: 'Compatible with most formulations. Highly hygroscopic.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Sodium Starch Glycolate',
      synonyms: ['Explotab', 'Primojel'],
      category: 'disintegrant',
      functions: ['Superdisintegrant'],
      dosageForms: ['Tablets', 'Capsules'],
      properties: 'A cross-linked and carboxymethylated starch derivative. Exhibits remarkable swelling capacity in water, causing rapid tablet disintegration. Effective independent of the presence of hydrophobic lubricants.',
      compatibility: 'Stable. Compatible with most drug substances.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Crospovidone',
      synonyms: ['Cross-linked PVP', 'Kollidon CL'],
      category: 'disintegrant',
      functions: ['Superdisintegrant'],
      dosageForms: ['Tablets', 'Capsules'],
      properties: 'A synthetic, cross-linked polyvinylpyrrolidone. Functions primarily by rapid wicking of liquid into the tablet, recovering its pre-compression shape, rather than significant swelling.',
      compatibility: 'Highly compatible. Can absorb moisture, protecting sensitive APIs.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Magnesium Stearate',
      synonyms: ['Magnesium octadecanoate'],
      category: 'lubricant',
      functions: ['Lubricant'],
      dosageForms: ['Tablets', 'Capsules'],
      properties: 'A fine, white, lightweight powder that is greasy to the touch. The most widely used boundary lubricant, effective at very low concentrations (0.25-2%). Hydrophobic in nature.',
      compatibility: 'Incompatible with strong acids, alkalis, and iron salts. Can prolong disintegration and reduce tablet hardness if over-blended.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' },
        { text: 'USP-NF: Magnesium Stearate', url: '#' }
      ]
    },
    {
      name: 'Stearic Acid',
      synonyms: ['Octadecanoic acid'],
      category: 'lubricant',
      functions: ['Lubricant', 'Emulsifying agent (when neutralized)'],
      dosageForms: ['Tablets', 'Capsules', 'Creams'],
      properties: 'A hard, white or faintly yellow solid. Less hydrophobic than magnesium stearate, making it an alternative when magnesium stearate overly retards dissolution.',
      compatibility: 'Incompatible with metal hydroxides and oxidizing agents.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Talc',
      synonyms: ['Purified talc', 'Hydrous magnesium silicate'],
      category: 'glidant',
      functions: ['Glidant', 'Lubricant', 'Antiadherent'],
      dosageForms: ['Tablets', 'Capsules', 'Powders'],
      properties: 'A very fine, white to grayish-white, odorless powder. Excellent antiadherent properties and moderate glidant properties. Often used in combination with magnesium stearate.',
      compatibility: 'Generally non-reactive. Must be sterilized if used in dusting powders or surgical applications.',
      references: [
        { text: 'USP-NF: Talc', url: '#' }
      ]
    },
    {
      name: 'Colloidal Silicon Dioxide',
      synonyms: ['Aerosil', 'Cab-O-Sil', 'Colloidal silica'],
      category: 'glidant',
      functions: ['Glidant', 'Anticaking agent', 'Suspending agent'],
      dosageForms: ['Tablets', 'Capsules', 'Suspensions'],
      properties: 'A light, fluffy, submicroscopic fumed silica. Extremely efficient glidant at very low concentrations (0.1-0.5%). Absorbs significant amounts of moisture without liquefying.',
      compatibility: 'Incompatible with diethylstilbestrol preparations.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Polyvinylpyrrolidone',
      synonyms: ['Povidone', 'PVP'],
      category: 'binder',
      functions: ['Binder', 'Suspending agent', 'Film-former'],
      dosageForms: ['Tablets', 'Granules', 'Solutions', 'Suspensions'],
      properties: 'A synthetic polymer available in various molecular weights (K-values). Highly soluble in both water and alcohol, making it an exceptionally versatile wet granulation binder.',
      compatibility: 'Compatible with a vast range of active ingredients and excipients.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Hydroxypropyl Methylcellulose',
      synonyms: ['HPMC', 'Hypromellose'],
      category: 'binder',
      functions: ['Binder', 'Film-coating polymer', 'Viscosity modifier', 'Matrix-forming agent'],
      dosageForms: ['Tablets', 'Sustained-release formulations', 'Ophthalmic solutions'],
      properties: 'A water-soluble cellulose ether. Low viscosity grades are used for film coating and binding; high viscosity grades are standard for hydrophilic matrix extended-release tablets.',
      compatibility: 'Incompatible with some oxidizing agents. Precipitates out of solution at elevated temperatures.',
      references: [
        { text: 'USP-NF: Hypromellose', url: '#' }
      ]
    },
    {
      name: 'Methylparaben',
      synonyms: ['Methyl p-hydroxybenzoate', 'Nipagin M'],
      category: 'preservative',
      functions: ['Antimicrobial preservative'],
      dosageForms: ['Oral liquids', 'Topicals', 'Parenterals'],
      properties: 'A widely used preservative, effective primarily against molds and fungi. Often used in combination with propylparaben to achieve a synergistic effect and broader spectrum.',
      compatibility: 'Antimicrobial activity is reduced in the presence of nonionic surfactants (e.g., polysorbates) due to micellar solubilization.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Sodium Benzoate',
      synonyms: ['Benzoic acid sodium salt'],
      category: 'preservative',
      functions: ['Antimicrobial preservative'],
      dosageForms: ['Oral liquids', 'Syrups'],
      properties: 'A bacteriostatic and fungistatic preservative. Effective only in acidic conditions (pH < 5) where the undissociated benzoic acid is present.',
      compatibility: 'Incompatible with ascorbic acid (can form benzene under certain conditions). Incompatible with heavy metals.',
      references: [
        { text: 'USP-NF: Sodium Benzoate', url: '#' }
      ]
    },
    {
      name: 'Butylated Hydroxytoluene',
      synonyms: ['BHT'],
      category: 'antioxidant',
      functions: ['Antioxidant'],
      dosageForms: ['Oils', 'Fats', 'Topical emulsions', 'Capsules (soft)'],
      properties: 'A lipophilic, sterically hindered phenol. Used to delay or prevent oxidative degradation of oils, fats, and fat-soluble vitamins.',
      compatibility: 'Incompatible with strong oxidizing agents and iron salts.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Sucrose',
      synonyms: ['Sugar', 'Saccharose'],
      category: 'sweetener',
      functions: ['Sweetening agent', 'Coating agent', 'Binder', 'Viscosity enhancer'],
      dosageForms: ['Syrups', 'Lozenges', 'Tablets (sugar coating)'],
      properties: 'A highly soluble disaccharide. In high concentrations (e.g., 85% w/v syrup), it is self-preserving due to high osmotic pressure. Imparts a pleasant taste and mouthfeel.',
      compatibility: 'Can undergo inversion to dextrose and fructose in acidic conditions. Maillard reaction can occur with amines.',
      references: [
        { text: 'USP-NF: Sucrose', url: '#' }
      ]
    },
    {
      name: 'Saccharin Sodium',
      synonyms: ['Soluble saccharin'],
      category: 'sweetener',
      functions: ['Intense sweetening agent'],
      dosageForms: ['Oral liquids', 'Chewable tablets', 'Toothpastes'],
      properties: 'An artificial sweetener approximately 300 times sweeter than sucrose. Highly water-soluble. Often used in combination with other sweeteners to mask its bitter/metallic aftertaste.',
      compatibility: 'Generally compatible. Stable under normal conditions.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Sodium Lauryl Sulfate',
      synonyms: ['SLS', 'Sodium dodecyl sulfate'],
      category: 'surfactant',
      functions: ['Anionic surfactant', 'Wetting agent', 'Detergent'],
      dosageForms: ['Tablets', 'Capsules', 'Shampoos', 'Toothpastes'],
      properties: 'A highly effective anionic surfactant with high HLB (~40). Used in low concentrations to improve wetting and dissolution of poorly soluble drugs in solid dosage forms.',
      compatibility: 'Incompatible with cationic APIs and excipients, and salts of heavy metals.',
      references: [
        { text: 'USP-NF: Sodium Lauryl Sulfate', url: '#' }
      ]
    },
    {
      name: 'Polysorbate 80',
      synonyms: ['Tween 80', 'Polyoxyethylene 20 sorbitan monooleate'],
      category: 'emulsifier',
      functions: ['Nonionic surfactant', 'Solubilizing agent', 'O/W Emulsifier'],
      dosageForms: ['Parenterals', 'Oral liquids', 'Emulsions'],
      properties: 'A hydrophilic nonionic surfactant (HLB 15). Extremely versatile for solubilizing hydrophobic drugs and preparing stable oil-in-water emulsions.',
      compatibility: 'Can interact with preservatives (like parabens), reducing their effectiveness.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Methylcellulose',
      synonyms: ['MC', 'Methocel'],
      category: 'suspending-agent',
      functions: ['Suspending agent', 'Viscosity enhancer', 'Binder'],
      dosageForms: ['Oral suspensions', 'Topical gels', 'Ophthalmic drops'],
      properties: 'A water-soluble cellulose derivative. Forms viscous solutions in cold water but exhibits unique thermal gelation (gels upon heating, liquefies upon cooling).',
      compatibility: 'Incompatible with some electrolytes at high concentrations.',
      references: [
        { text: 'USP-NF: Methylcellulose', url: '#' }
      ]
    },
    {
      name: 'Carbomer',
      synonyms: ['Carbopol', 'Polyacrylic acid'],
      category: 'viscosity-enhancer',
      functions: ['Gelling agent', 'Suspending agent', 'Bioadhesive'],
      dosageForms: ['Topical gels', 'Ophthalmic formulations', 'Oral suspensions'],
      properties: 'High molecular weight cross-linked polymers. Disperse in water to form acidic solutions, which upon neutralization (with bases like NaOH or TEA) uncoil to form highly viscous, clear gels.',
      compatibility: 'Incompatible with cationic polymers and high concentrations of strong electrolytes (causes loss of viscosity).',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Gelatin',
      synonyms: ['Animal protein'],
      category: 'binder',
      functions: ['Capsule shell former', 'Binder', 'Coating agent', 'Suspending agent'],
      dosageForms: ['Hard and soft capsules', 'Tablets', 'Pastilles'],
      properties: 'A purified protein derived from collagen. Forms thermally reversible gels. Available as Type A (acid-treated) and Type B (alkali-treated), differing in isoelectric points.',
      compatibility: 'Can undergo cross-linking in the presence of aldehydes (e.g., formaldehyde), causing capsule insolubility. Incompatible with tannins.',
      references: [
        { text: 'USP-NF: Gelatin', url: '#' }
      ]
    },
    {
      name: 'Ethylcellulose',
      synonyms: ['EC', 'Ethocel'],
      category: 'coating-polymer',
      functions: ['Extended-release coating', 'Matrix former', 'Moisture barrier'],
      dosageForms: ['Modified-release tablets and pellets'],
      properties: 'A water-insoluble cellulose ether. Soluble in organic solvents. Used extensively to form diffusion-controlled membranes for sustained-release microparticles and tablets.',
      compatibility: 'Compatible with most active ingredients. Often blended with a water-soluble pore-former (like HPMC) to control drug release rates.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    },
    {
      name: 'Polyethylene Glycol',
      synonyms: ['PEG', 'Macrogol'],
      category: 'plasticizer',
      functions: ['Plasticizer', 'Solvent', 'Water-soluble ointment base', 'Lubricant'],
      dosageForms: ['Ointments', 'Suppositories', 'Film-coated tablets', 'Liquids'],
      properties: 'A family of water-soluble polymers. Liquid at low molecular weights (e.g., PEG 400), solid at higher weights (e.g., PEG 4000, 6000). Widely used to plasticize film coatings and as suppository bases.',
      compatibility: 'Can interact with some drugs (e.g., penicillin) and plastics. Liquid PEGs can soften gelatin capsules.',
      references: [
        { text: 'USP-NF: Polyethylene Glycol', url: '#' }
      ]
    },
    {
      name: 'Propylene Glycol',
      synonyms: ['1,2-Propanediol', 'PG'],
      category: 'humectant',
      functions: ['Solvent', 'Co-solvent', 'Humectant', 'Preservative (at high conc.)'],
      dosageForms: ['Oral liquids', 'Parenterals', 'Topicals'],
      properties: 'A clear, viscous, water-miscible liquid. Excellent solvent for many poorly water-soluble drugs. Also acts as a humectant in topical formulations to prevent drying out.',
      compatibility: 'Incompatible with some oxidizing agents. Can cause irritation upon IM or SC injection at high concentrations.',
      references: [
        { text: 'Handbook of Pharmaceutical Excipients', url: '#' }
      ]
    }
  ];

})();
