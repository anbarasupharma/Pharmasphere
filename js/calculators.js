/**
 * Pharmaceutics Hub - Calculators Module
 * Provides mathematical functions and educational steps for 16 pharmaceutical calculations.
 */
(function() {
    'use strict';

    // Ensure namespace exists
    window.PharmHub = window.PharmHub || {};

    const disclaimer = "Note: This calculator is for educational purposes only. Do not use for clinical decision making or actual patient care.";

    const types = {
        'percentage-strength': {
            title: 'Percentage Strength',
            description: 'Calculate percentage strengths (% w/v, % w/w, % v/v).',
            category: 'solutions',
            inputs: [
                { id: 'solute', label: 'Amount of Solute', type: 'number', required: true },
                { id: 'prep', label: 'Amount of Preparation', type: 'number', required: true },
                { id: 'type', label: 'Calculation Type', type: 'select', options: ['% w/v', '% w/w', '% v/v'], required: true }
            ],
            formula: '<p><strong>% w/v:</strong> (Weight in g / Volume in mL) × 100</p><p><strong>% w/w:</strong> (Weight / Total Weight) × 100</p><p><strong>% v/v:</strong> (Volume / Total Volume) × 100</p>',
            assumptions: 'Assumes consistent units (e.g., grams and milliliters for % w/v).',
            references: 'USP General Chapter <1160> Pharmaceutical Calculations.'
        },
        'dilution': {
            title: 'Dilution (C1V1 = C2V2)',
            description: 'Calculate the volume or concentration required for a dilution.',
            category: 'solutions',
            inputs: [
                { id: 'solve_for', label: 'Solve For', type: 'select', options: ['V2 (Final Volume)', 'C2 (Final Concentration)'], required: true },
                { id: 'c1', label: 'C1 (Initial Concentration)', type: 'number', required: true },
                { id: 'v1', label: 'V1 (Initial Volume)', type: 'number', required: true },
                { id: 'c2', label: 'C2 (Final Concentration) - Leave blank if solving for V2', type: 'number', required: false },
                { id: 'v2', label: 'V2 (Final Volume) - Leave blank if solving for C2', type: 'number', required: false }
            ],
            formula: '<p><strong>C₁V₁ = C₂V₂</strong></p>',
            assumptions: 'Assumes simple dilution with solvent that does not interact or contract volume significantly.',
            references: 'USP General Chapter <1160>.'
        },
        'alligation': {
            title: 'Alligation Alternate',
            description: 'Calculate the proportions of two mixtures to obtain a desired strength.',
            category: 'solutions',
            inputs: [
                { id: 'higher', label: 'Higher Strength (%)', type: 'number', required: true },
                { id: 'lower', label: 'Lower Strength (%)', type: 'number', required: true },
                { id: 'desired', label: 'Desired Strength (%)', type: 'number', required: true }
            ],
            formula: '<p>Parts of Higher = Desired - Lower</p><p>Parts of Lower = Higher - Desired</p>',
            assumptions: 'Assumes simple mixing without volume contraction.',
            references: 'USP General Chapter <1160>.'
        },
        'proof-spirit': {
            title: 'Proof Spirit Conversion',
            description: 'Convert between % v/v alcohol and proof strength (UK convention).',
            category: 'solutions',
            inputs: [
                { id: 'alcohol', label: 'Alcohol (% v/v)', type: 'number', required: true }
            ],
            formula: '<p>Proof Strength = (% v/v) × (100 / 57.1)</p>',
            assumptions: 'Uses the historical UK standard where Proof Spirit is exactly 57.1% v/v ethanol.',
            references: 'Historical pharmacopoeial conventions.'
        },
        'isotonicity': {
            title: 'Isotonicity (NaCl Equivalent)',
            description: 'Calculate the amount of NaCl required to make a solution isotonic.',
            category: 'solutions',
            inputs: [
                { id: 'e_value', label: 'NaCl Equivalent (E value) of Drug', type: 'number', required: true },
                { id: 'concentration', label: 'Drug Concentration (% w/v)', type: 'number', required: true },
                { id: 'volume', label: 'Final Volume (mL)', type: 'number', required: true }
            ],
            formula: '<p>Step 1: Calculate amount of drug (g) = (Conc × Vol) / 100</p><p>Step 2: Calculate NaCl equivalent of drug = Amount × E_value</p><p>Step 3: Calculate NaCl for isotonic vehicle = Vol × 0.009</p><p>Step 4: NaCl to add = (Step 3) - (Step 2)</p>',
            assumptions: 'Assumes blood/tears are isotonic with 0.9% w/v NaCl.',
            references: 'USP General Chapter <1160>.'
        },
        'displacement-value': {
            title: 'Displacement Value',
            description: 'Calculate the displacement value for suppositories.',
            category: 'dosage',
            inputs: [
                { id: 'base_weight', label: 'Weight of Base-Only Suppository (g)', type: 'number', required: true },
                { id: 'medicated_weight', label: 'Weight of Medicated Suppository (g)', type: 'number', required: true },
                { id: 'drug_percent', label: 'Drug Percentage in Medicated Suppository (%)', type: 'number', required: true }
            ],
            formula: '<p>DV = Drug Weight / Weight of Base Displaced</p>',
            assumptions: 'Assumes uniform mixing and complete filling of moulds.',
            references: 'Pharmaceutical compounding standard texts.'
        },
        'density': {
            title: 'Density',
            description: 'Calculate simple density (mass/volume).',
            category: 'powder-flow',
            inputs: [
                { id: 'mass', label: 'Mass (g)', type: 'number', required: true },
                { id: 'volume', label: 'Volume (mL)', type: 'number', required: true }
            ],
            formula: '<p>Density (ρ) = Mass / Volume</p>',
            assumptions: 'Standard mass and volume measurements.',
            references: 'General scientific principles.'
        },
        'bulk-density': {
            title: 'Bulk Density',
            description: 'Calculate the bulk density of a powder.',
            category: 'powder-flow',
            inputs: [
                { id: 'mass', label: 'Mass of Powder (g)', type: 'number', required: true },
                { id: 'bulk_volume', label: 'Bulk Volume (mL)', type: 'number', required: true }
            ],
            formula: '<p>ρ_bulk = Mass / V_bulk</p>',
            assumptions: 'Unsettled powder volume.',
            references: 'USP <616> Bulk Density and Tapped Density.'
        },
        'tapped-density': {
            title: 'Tapped Density',
            description: 'Calculate the tapped density of a powder.',
            category: 'powder-flow',
            inputs: [
                { id: 'mass', label: 'Mass of Powder (g)', type: 'number', required: true },
                { id: 'tapped_volume', label: 'Tapped Volume (mL)', type: 'number', required: true }
            ],
            formula: '<p>ρ_tapped = Mass / V_tapped</p>',
            assumptions: 'Mechanically tapped until no further volume change.',
            references: 'USP <616> Bulk Density and Tapped Density.'
        },
        'carrs-index': {
            title: 'Carr\'s Compressibility Index',
            description: 'Evaluate powder flowability.',
            category: 'powder-flow',
            inputs: [
                { id: 'bulk_density', label: 'Bulk Density (g/mL)', type: 'number', required: true },
                { id: 'tapped_density', label: 'Tapped Density (g/mL)', type: 'number', required: true }
            ],
            formula: '<p>Carr\'s Index = ((ρ_tapped - ρ_bulk) / ρ_tapped) × 100</p>',
            assumptions: 'Calculated from accurate bulk and tapped densities.',
            references: 'USP <1174> Powder Flow.'
        },
        'hausner-ratio': {
            title: 'Hausner Ratio',
            description: 'Evaluate powder interparticulate friction.',
            category: 'powder-flow',
            inputs: [
                { id: 'bulk_density', label: 'Bulk Density (g/mL)', type: 'number', required: true },
                { id: 'tapped_density', label: 'Tapped Density (g/mL)', type: 'number', required: true }
            ],
            formula: '<p>Hausner Ratio = ρ_tapped / ρ_bulk</p>',
            assumptions: 'Calculated from accurate bulk and tapped densities.',
            references: 'USP <1174> Powder Flow.'
        },
        'angle-of-repose': {
            title: 'Angle of Repose',
            description: 'Calculate angle of repose from cone dimensions.',
            category: 'powder-flow',
            inputs: [
                { id: 'height', label: 'Height of Cone (cm)', type: 'number', required: true },
                { id: 'radius', label: 'Radius of Base (cm)', type: 'number', required: true }
            ],
            formula: '<p>θ = arctan(Height / Radius)</p>',
            assumptions: 'Symmetrical conical heap formed freely.',
            references: 'USP <1174> Powder Flow.'
        },
        'first-order-kinetics': {
            title: 'First-Order Kinetics',
            description: 'Calculate rate constant, half-life, and shelf-life.',
            category: 'kinetics',
            inputs: [
                { id: 'c0', label: 'Initial Concentration (C0)', type: 'number', required: true },
                { id: 'ct', label: 'Concentration at time t (Ct)', type: 'number', required: true },
                { id: 't', label: 'Time (t)', type: 'number', required: true }
            ],
            formula: '<p>k = (ln(C₀) - ln(Ct)) / t<br>t₁/₂ = 0.693 / k<br>t₉₀ = 0.105 / k</p>',
            assumptions: 'Reaction rate depends on the concentration of one reactant.',
            references: 'Standard pharmacokinetics texts.'
        },
        'zero-order-kinetics': {
            title: 'Zero-Order Kinetics',
            description: 'Calculate concentration over time for zero-order reactions.',
            category: 'kinetics',
            inputs: [
                { id: 'c0', label: 'Initial Concentration (C0)', type: 'number', required: true },
                { id: 'k0', label: 'Rate Constant (k0)', type: 'number', required: true },
                { id: 't', label: 'Time (t)', type: 'number', required: true }
            ],
            formula: '<p>Ct = C₀ - k₀t<br>t₁/₂ = C₀ / (2k₀)</p>',
            assumptions: 'Reaction rate is independent of concentration.',
            references: 'Standard pharmacokinetics texts.'
        },
        'dissolution': {
            title: 'Noyes-Whitney Equation',
            description: 'Understand the relationship between parameters and dissolution rate.',
            category: 'kinetics',
            inputs: [
                { id: 'surface_area', label: 'Surface Area (A)', type: 'number', required: true },
                { id: 'diffusion_coeff', label: 'Diffusion Coefficient (D)', type: 'number', required: true },
                { id: 'solubility', label: 'Saturation Solubility (Cs)', type: 'number', required: true },
                { id: 'bulk_conc', label: 'Bulk Concentration (Ct)', type: 'number', required: true },
                { id: 'layer_thickness', label: 'Diffusion Layer Thickness (h)', type: 'number', required: true }
            ],
            formula: '<p>dC/dt = (D × A × (Cs - Ct)) / h</p>',
            assumptions: 'Simplified educational model of dissolution.',
            references: 'Noyes AA, Whitney WR. J Am Chem Soc. 1897.'
        },
        'dose-conversion': {
            title: 'Dose Conversion',
            description: 'Convert between common pharmaceutical units.',
            category: 'dosage',
            inputs: [
                { id: 'value', label: 'Value', type: 'number', required: true },
                { id: 'from_unit', label: 'From Unit', type: 'select', options: ['g', 'mg', 'mcg', 'L', 'mL'], required: true },
                { id: 'to_unit', label: 'To Unit', type: 'select', options: ['g', 'mg', 'mcg', 'L', 'mL'], required: true }
            ],
            formula: '<p>Standard metric conversions.</p>',
            assumptions: 'Basic metric system rules.',
            references: 'USP General Chapter <1160>.'
        }
    };

    function validatePositive(val, name) {
        if (isNaN(val) || val <= 0) {
            throw new Error(`${name} must be a positive number.`);
        }
    }

    function calculate(type, inputs) {
        try {
            let result = null;
            let steps = [];
            let interpretation = disclaimer;
            const formula = types[type]?.formula || '';

            switch (type) {
                case 'percentage-strength': {
                    const solute = parseFloat(inputs.solute);
                    const prep = parseFloat(inputs.prep);
                    const calcType = inputs.type;
                    validatePositive(solute, 'Amount of Solute');
                    validatePositive(prep, 'Amount of Preparation');
                    
                    const percent = (solute / prep) * 100;
                    result = `${percent.toFixed(2)} ${calcType}`;
                    steps.push(`Identify the amount of solute: ${solute}`);
                    steps.push(`Identify the amount of total preparation: ${prep}`);
                    steps.push(`Divide solute by preparation and multiply by 100: (${solute} / ${prep}) × 100 = ${percent.toFixed(2)}%`);
                    interpretation += " The percentage represents the parts of solute per 100 parts of total preparation.";
                    break;
                }
                case 'dilution': {
                    const solveFor = inputs.solve_for;
                    const c1 = parseFloat(inputs.c1);
                    const v1 = parseFloat(inputs.v1);
                    validatePositive(c1, 'C1');
                    validatePositive(v1, 'V1');

                    if (solveFor.includes('V2')) {
                        const c2 = parseFloat(inputs.c2);
                        validatePositive(c2, 'C2');
                        if (c2 >= c1) throw new Error("Final concentration (C2) must be less than initial concentration (C1) for a dilution.");
                        const v2 = (c1 * v1) / c2;
                        result = `V2 = ${v2.toFixed(2)}`;
                        steps.push(`Rearrange C₁V₁ = C₂V₂ to solve for V₂: V₂ = (C₁ × V₁) / C₂`);
                        steps.push(`Substitute values: V₂ = (${c1} × ${v1}) / ${c2}`);
                        steps.push(`Calculate V₂: ${v2.toFixed(2)}`);
                        interpretation += ` The final volume required is ${v2.toFixed(2)}. You need to add ${ (v2 - v1).toFixed(2) } of diluent.`;
                    } else {
                        const v2 = parseFloat(inputs.v2);
                        validatePositive(v2, 'V2');
                        if (v2 <= v1) throw new Error("Final volume (V2) must be greater than initial volume (V1) for a dilution.");
                        const c2 = (c1 * v1) / v2;
                        result = `C2 = ${c2.toFixed(2)}`;
                        steps.push(`Rearrange C₁V₁ = C₂V₂ to solve for C₂: C₂ = (C₁ × V₁) / V₂`);
                        steps.push(`Substitute values: C₂ = (${c1} × ${v1}) / ${v2}`);
                        steps.push(`Calculate C₂: ${c2.toFixed(2)}`);
                        interpretation += ` The resulting concentration after dilution will be ${c2.toFixed(2)}.`;
                    }
                    break;
                }
                case 'alligation': {
                    const higher = parseFloat(inputs.higher);
                    const lower = parseFloat(inputs.lower);
                    const desired = parseFloat(inputs.desired);
                    if (higher <= desired || lower >= desired) {
                        throw new Error("Desired strength must be between higher and lower strengths.");
                    }
                    const partsHigher = desired - lower;
                    const partsLower = higher - desired;
                    const totalParts = partsHigher + partsLower;
                    result = `Higher: ${partsHigher.toFixed(2)} parts, Lower: ${partsLower.toFixed(2)} parts`;
                    steps.push(`Setup alligation cross.`);
                    steps.push(`Parts of higher strength needed = Desired - Lower = ${desired} - ${lower} = ${partsHigher}`);
                    steps.push(`Parts of lower strength needed = Higher - Desired = ${higher} - ${desired} = ${partsLower}`);
                    steps.push(`Total parts = ${partsHigher} + ${partsLower} = ${totalParts}`);
                    interpretation += ` Mix ${partsHigher} parts of the ${higher}% preparation with ${partsLower} parts of the ${lower}% preparation.`;
                    break;
                }
                case 'proof-spirit': {
                    const alcohol = parseFloat(inputs.alcohol);
                    validatePositive(alcohol, 'Alcohol %');
                    const proof = alcohol * (100 / 57.1);
                    const overUnder = proof - 100;
                    result = `${proof.toFixed(2)} Proof`;
                    steps.push(`Proof spirit standard is 57.1% v/v = 100 Proof.`);
                    steps.push(`Multiply actual % v/v by (100 / 57.1).`);
                    steps.push(`(${alcohol}) × 1.7513 = ${proof.toFixed(2)}`);
                    let overUnderText = overUnder > 0 ? `${overUnder.toFixed(2)} Over Proof (O.P.)` : `${Math.abs(overUnder).toFixed(2)} Under Proof (U.P.)`;
                    interpretation += ` The equivalent is ${proof.toFixed(2)} Proof, which is considered ${overUnderText} historically.`;
                    break;
                }
                case 'isotonicity': {
                    const evalue = parseFloat(inputs.e_value);
                    const conc = parseFloat(inputs.concentration);
                    const vol = parseFloat(inputs.volume);
                    validatePositive(evalue, 'E-Value');
                    validatePositive(conc, 'Concentration');
                    validatePositive(vol, 'Volume');
                    
                    const drugWeight = (conc * vol) / 100;
                    const naclEquiv = drugWeight * evalue;
                    const naclForVehicle = vol * 0.009;
                    const naclToAdd = naclForVehicle - naclEquiv;
                    
                    result = naclToAdd > 0 ? `${naclToAdd.toFixed(4)} g of NaCl` : `0 g (Hypertonic)`;
                    steps.push(`1. Drug amount in solution = (${conc}% × ${vol} mL) / 100 = ${drugWeight.toFixed(4)} g`);
                    steps.push(`2. NaCl equivalent of drug = ${drugWeight.toFixed(4)} g × ${evalue} = ${naclEquiv.toFixed(4)} g`);
                    steps.push(`3. Total NaCl needed for ${vol} mL isotonic vehicle = ${vol} × 0.009 = ${naclForVehicle.toFixed(4)} g`);
                    steps.push(`4. NaCl to add = Total NaCl - NaCl equivalent of drug = ${naclForVehicle.toFixed(4)} - ${naclEquiv.toFixed(4)} = ${naclToAdd.toFixed(4)} g`);
                    interpretation += naclToAdd < 0 ? " The solution is already hypertonic, no NaCl should be added." : ` Add ${naclToAdd.toFixed(4)} g of NaCl to make the solution isotonic.`;
                    break;
                }
                case 'displacement-value': {
                    const baseWt = parseFloat(inputs.base_weight);
                    const medWt = parseFloat(inputs.medicated_weight);
                    const drugPct = parseFloat(inputs.drug_percent);
                    
                    const drugWt = medWt * (drugPct / 100);
                    const baseInMed = medWt - drugWt;
                    const baseDisplaced = baseWt - baseInMed;
                    
                    if (baseDisplaced <= 0) throw new Error("Invalid weights. Displaced base must be > 0.");
                    
                    const dv = drugWt / baseDisplaced;
                    result = `DV = ${dv.toFixed(2)}`;
                    steps.push(`Calculate weight of drug in medicated suppository: ${medWt} × (${drugPct}/100) = ${drugWt.toFixed(4)} g`);
                    steps.push(`Calculate weight of base in medicated suppository: ${medWt} - ${drugWt.toFixed(4)} = ${baseInMed.toFixed(4)} g`);
                    steps.push(`Calculate weight of base displaced: ${baseWt} - ${baseInMed.toFixed(4)} = ${baseDisplaced.toFixed(4)} g`);
                    steps.push(`Calculate Displacement Value (DV) = Drug Weight / Displaced Base Weight = ${drugWt.toFixed(4)} / ${baseDisplaced.toFixed(4)} = ${dv.toFixed(2)}`);
                    interpretation += ` A displacement value of ${dv.toFixed(2)} means ${dv.toFixed(2)} parts of the drug displaces 1 part of the suppository base.`;
                    break;
                }
                case 'density': {
                    const mass = parseFloat(inputs.mass);
                    const volume = parseFloat(inputs.volume);
                    validatePositive(mass, 'Mass');
                    validatePositive(volume, 'Volume');
                    const d = mass / volume;
                    result = `${d.toFixed(4)} g/mL`;
                    steps.push(`Density = Mass / Volume`);
                    steps.push(`Density = ${mass} / ${volume} = ${d.toFixed(4)} g/mL`);
                    interpretation += ` The density is ${d.toFixed(4)} g/mL.`;
                    break;
                }
                case 'bulk-density': {
                    const mass = parseFloat(inputs.mass);
                    const vol = parseFloat(inputs.bulk_volume);
                    validatePositive(mass, 'Mass');
                    validatePositive(vol, 'Bulk Volume');
                    const d = mass / vol;
                    result = `${d.toFixed(4)} g/mL`;
                    steps.push(`Bulk Density = Mass / Bulk Volume`);
                    steps.push(`Bulk Density = ${mass} / ${vol} = ${d.toFixed(4)} g/mL`);
                    interpretation += ` The bulk density (untapped) is ${d.toFixed(4)} g/mL.`;
                    break;
                }
                case 'tapped-density': {
                    const mass = parseFloat(inputs.mass);
                    const vol = parseFloat(inputs.tapped_volume);
                    validatePositive(mass, 'Mass');
                    validatePositive(vol, 'Tapped Volume');
                    const d = mass / vol;
                    result = `${d.toFixed(4)} g/mL`;
                    steps.push(`Tapped Density = Mass / Tapped Volume`);
                    steps.push(`Tapped Density = ${mass} / ${vol} = ${d.toFixed(4)} g/mL`);
                    interpretation += ` The tapped density is ${d.toFixed(4)} g/mL.`;
                    break;
                }
                case 'carrs-index': {
                    const bd = parseFloat(inputs.bulk_density);
                    const td = parseFloat(inputs.tapped_density);
                    validatePositive(bd, 'Bulk Density');
                    validatePositive(td, 'Tapped Density');
                    if (bd > td) throw new Error("Bulk density cannot be greater than tapped density.");
                    
                    const ci = ((td - bd) / td) * 100;
                    result = `${ci.toFixed(2)} %`;
                    steps.push(`Carr's Index = ((Tapped - Bulk) / Tapped) × 100`);
                    steps.push(`Carr's Index = ((${td} - ${bd}) / ${td}) × 100 = ${ci.toFixed(2)}%`);
                    
                    let flow = '';
                    if (ci <= 10) flow = "Excellent";
                    else if (ci <= 15) flow = "Good";
                    else if (ci <= 20) flow = "Fair";
                    else if (ci <= 25) flow = "Passable";
                    else if (ci <= 31) flow = "Poor";
                    else if (ci <= 37) flow = "Very poor";
                    else flow = "Very, very poor";
                    
                    interpretation += ` Carr's Index is ${ci.toFixed(2)}%. Flow character is considered: ${flow} (according to USP <1174>).`;
                    break;
                }
                case 'hausner-ratio': {
                    const bd = parseFloat(inputs.bulk_density);
                    const td = parseFloat(inputs.tapped_density);
                    validatePositive(bd, 'Bulk Density');
                    validatePositive(td, 'Tapped Density');
                    if (bd > td) throw new Error("Bulk density cannot be greater than tapped density.");
                    
                    const hr = td / bd;
                    result = hr.toFixed(2);
                    steps.push(`Hausner Ratio = Tapped Density / Bulk Density`);
                    steps.push(`Hausner Ratio = ${td} / ${bd} = ${hr.toFixed(2)}`);
                    
                    let flow = '';
                    if (hr <= 1.11) flow = "Excellent";
                    else if (hr <= 1.18) flow = "Good";
                    else if (hr <= 1.25) flow = "Fair";
                    else if (hr <= 1.34) flow = "Passable";
                    else if (hr <= 1.45) flow = "Poor";
                    else flow = "Very poor";
                    
                    interpretation += ` Hausner Ratio is ${hr.toFixed(2)}. Flow character is considered: ${flow} (according to USP <1174>).`;
                    break;
                }
                case 'angle-of-repose': {
                    const h = parseFloat(inputs.height);
                    const r = parseFloat(inputs.radius);
                    validatePositive(h, 'Height');
                    validatePositive(r, 'Radius');
                    
                    const thetaRad = Math.atan(h / r);
                    const thetaDeg = thetaRad * (180 / Math.PI);
                    result = `${thetaDeg.toFixed(2)} °`;
                    
                    steps.push(`tan(θ) = Height / Radius = ${h} / ${r} = ${(h/r).toFixed(4)}`);
                    steps.push(`θ = arctan(${(h/r).toFixed(4)}) in degrees`);
                    steps.push(`θ = ${thetaDeg.toFixed(2)}°`);
                    
                    let flow = '';
                    if (thetaDeg < 25) flow = "Excellent";
                    else if (thetaDeg <= 30) flow = "Good";
                    else if (thetaDeg <= 40) flow = "Passable (may hang up)";
                    else flow = "Very poor";
                    
                    interpretation += ` The angle of repose is ${thetaDeg.toFixed(2)}°. Flow character is considered: ${flow}.`;
                    break;
                }
                case 'first-order-kinetics': {
                    const c0 = parseFloat(inputs.c0);
                    const ct = parseFloat(inputs.ct);
                    const t = parseFloat(inputs.t);
                    validatePositive(c0, 'C0');
                    validatePositive(ct, 'Ct');
                    validatePositive(t, 't');
                    if (ct >= c0) throw new Error("Ct must be less than C0 for degradation kinetics.");
                    
                    const k = (Math.log(c0) - Math.log(ct)) / t;
                    const t12 = 0.693 / k;
                    const t90 = 0.105 / k;
                    
                    result = `k = ${k.toFixed(4)}, t1/2 = ${t12.toFixed(2)}, t90 = ${t90.toFixed(2)}`;
                    steps.push(`k = (ln(C₀) - ln(Ct)) / t = (ln(${c0}) - ln(${ct})) / ${t} = ${k.toFixed(4)}`);
                    steps.push(`Half-life (t₁/₂) = 0.693 / k = 0.693 / ${k.toFixed(4)} = ${t12.toFixed(2)}`);
                    steps.push(`Shelf-life (t₉₀) = 0.105 / k = 0.105 / ${k.toFixed(4)} = ${t90.toFixed(2)}`);
                    interpretation += ` This is a first-order process. The rate constant is ${k.toFixed(4)} time⁻¹, half-life is ${t12.toFixed(2)}, and shelf-life is ${t90.toFixed(2)}.`;
                    break;
                }
                case 'zero-order-kinetics': {
                    const c0 = parseFloat(inputs.c0);
                    const k0 = parseFloat(inputs.k0);
                    const t = parseFloat(inputs.t);
                    validatePositive(c0, 'C0');
                    validatePositive(k0, 'k0');
                    validatePositive(t, 't');
                    
                    const ct = c0 - (k0 * t);
                    const t12 = c0 / (2 * k0);
                    
                    if (ct < 0) throw new Error("Concentration becomes negative at this time point.");
                    
                    result = `Ct = ${ct.toFixed(2)}, t1/2 = ${t12.toFixed(2)}`;
                    steps.push(`Ct = C₀ - k₀t = ${c0} - (${k0} × ${t}) = ${ct.toFixed(2)}`);
                    steps.push(`Half-life (t₁/₂) = C₀ / (2k₀) = ${c0} / (2 × ${k0}) = ${t12.toFixed(2)}`);
                    interpretation += ` This is a zero-order process. The concentration at time ${t} is ${ct.toFixed(2)}, and half-life is ${t12.toFixed(2)}.`;
                    break;
                }
                case 'dissolution': {
                    const area = parseFloat(inputs.surface_area);
                    const d = parseFloat(inputs.diffusion_coeff);
                    const cs = parseFloat(inputs.solubility);
                    const ct = parseFloat(inputs.bulk_conc);
                    const h = parseFloat(inputs.layer_thickness);
                    
                    validatePositive(area, 'Area');
                    validatePositive(d, 'Diffusion Coefficient');
                    validatePositive(cs, 'Solubility');
                    validatePositive(h, 'Layer Thickness');
                    if (ct >= cs) throw new Error("Bulk concentration (Ct) cannot be greater than or equal to saturation solubility (Cs).");
                    
                    const rate = (d * area * (cs - ct)) / h;
                    result = `dC/dt = ${rate.toExponential(4)}`;
                    
                    steps.push(`Rate = (D × A × (Cs - Ct)) / h`);
                    steps.push(`Rate = (${d} × ${area} × (${cs} - ${ct})) / ${h}`);
                    steps.push(`Rate = ${rate.toExponential(4)}`);
                    
                    interpretation += ` According to the Noyes-Whitney equation, the dissolution rate is ${rate.toExponential(4)}. To increase rate, you can increase surface area (e.g., micronization) or solubility.`;
                    break;
                }
                case 'dose-conversion': {
                    const val = parseFloat(inputs.value);
                    const from = inputs.from_unit;
                    const to = inputs.to_unit;
                    
                    const factors = { 'g': 1, 'mg': 0.001, 'mcg': 0.000001, 'L': 1, 'mL': 0.001 };
                    
                    if (!factors[from] || !factors[to]) throw new Error("Invalid units selected.");
                    if ((['g','mg','mcg'].includes(from) && ['L','mL'].includes(to)) || 
                        (['L','mL'].includes(from) && ['g','mg','mcg'].includes(to))) {
                        throw new Error("Cannot convert between mass and volume without density.");
                    }
                    
                    const baseVal = val * factors[from];
                    const converted = baseVal / factors[to];
                    
                    result = `${converted} ${to}`;
                    steps.push(`Convert from ${from} to base unit: ${val} × ${factors[from]} = ${baseVal}`);
                    steps.push(`Convert from base unit to ${to}: ${baseVal} / ${factors[to]} = ${converted} ${to}`);
                    interpretation += ` Converted ${val} ${from} to ${converted} ${to}.`;
                    break;
                }
                default:
                    throw new Error("Unknown calculator type.");
            }
            
            return { result, steps, formula, interpretation, error: null };
            
        } catch (e) {
            return { result: null, steps: [], formula: types[type]?.formula || '', interpretation: disclaimer, error: e.message };
        }
    }

    function getInfo(type) {
        return types[type] || null;
    }

    // Expose the API
    PharmHub.calculators = {
        types,
        calculate,
        getInfo
    };

})();
