/**
 * Pharmaceutics Hub - Charts Module
 * Provides standardized Chart.js visualizations for pharmaceutical concepts.
 */
(function() {
    'use strict';

    window.PharmHub = window.PharmHub || {};

    const chartInstances = {};

    function getCSSVar(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function registerChart(containerId, chartInstance) {
        if (chartInstances[containerId]) {
            chartInstances[containerId].destroy();
        }
        chartInstances[containerId] = chartInstance;
    }

    function getDefaultOptions(titleText) {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: !!titleText,
                    text: titleText,
                    color: getCSSVar('--text')
                },
                legend: {
                    labels: { color: getCSSVar('--text-light') }
                },
                subtitle: {
                    display: true,
                    text: 'Illustrative educational data',
                    color: getCSSVar('--text-light'),
                    font: { style: 'italic' }
                }
            },
            scales: {
                x: {
                    grid: { color: getCSSVar('--border') },
                    ticks: { color: getCSSVar('--text') }
                },
                y: {
                    grid: { color: getCSSVar('--border') },
                    ticks: { color: getCSSVar('--text') }
                }
            }
        };
    }

    function createDissolutionChart(containerId, options = {}) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        const dataPoints = options.data || {
            labels: [0, 5, 10, 15, 30, 45, 60],
            values: [0, 15, 35, 55, 75, 88, 95]
        };

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dataPoints.labels,
                datasets: [{
                    label: '% Drug Released',
                    data: dataPoints.values,
                    borderColor: getCSSVar('--primary'),
                    backgroundColor: getCSSVar('--primary-light') + '80', // semi-transparent
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                ...getDefaultOptions('Dissolution Profile'),
                scales: {
                    x: { ...getDefaultOptions().scales.x, title: { display: true, text: 'Time (min)', color: getCSSVar('--text') } },
                    y: { ...getDefaultOptions().scales.y, title: { display: true, text: '% Released', color: getCSSVar('--text') }, min: 0, max: 100 }
                }
            }
        });
        registerChart(containerId, chart);
        return chart;
    }

    function createFirstOrderChart(containerId, params = { C0: 100, k: 0.05, tMax: 60 }) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        const labels = [];
        const dataC = [];
        const dataLnC = [];

        for (let t = 0; t <= params.tMax; t += Math.max(1, Math.floor(params.tMax/20))) {
            labels.push(t);
            const c = params.C0 * Math.exp(-params.k * t);
            dataC.push(c);
            dataLnC.push(c > 0 ? Math.log(c) : 0);
        }

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Concentration (C)',
                        data: dataC,
                        borderColor: getCSSVar('--primary'),
                        tension: 0.4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'ln(C)',
                        data: dataLnC,
                        borderColor: getCSSVar('--secondary'),
                        borderDash: [5, 5],
                        tension: 0,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                ...getDefaultOptions('First-Order Kinetics'),
                scales: {
                    x: { ...getDefaultOptions().scales.x, title: { display: true, text: 'Time (t)' } },
                    y: { ...getDefaultOptions().scales.y, type: 'linear', display: true, position: 'left', title: { display: true, text: 'Concentration' } },
                    y1: { ...getDefaultOptions().scales.y, type: 'linear', display: true, position: 'right', title: { display: true, text: 'ln(Concentration)' }, grid: { drawOnChartArea: false } }
                }
            }
        });
        registerChart(containerId, chart);
        return chart;
    }

    function createZeroOrderChart(containerId, params = { C0: 100, k0: 2, tMax: 50 }) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        const labels = [];
        const dataC = [];

        for (let t = 0; t <= params.tMax; t += Math.max(1, Math.floor(params.tMax/10))) {
            const c = params.C0 - (params.k0 * t);
            if (c < 0) break;
            labels.push(t);
            dataC.push(c);
        }

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Concentration (C)',
                    data: dataC,
                    borderColor: getCSSVar('--primary'),
                    tension: 0
                }]
            },
            options: {
                ...getDefaultOptions('Zero-Order Kinetics'),
                scales: {
                    x: { ...getDefaultOptions().scales.x, title: { display: true, text: 'Time (t)' } },
                    y: { ...getDefaultOptions().scales.y, title: { display: true, text: 'Concentration' }, min: 0 }
                }
            }
        });
        registerChart(containerId, chart);
        return chart;
    }

    function createPKCurveChart(containerId) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        const labels = [];
        const values = [];
        // Simulated one-compartment extravascular model
        const ka = 1.2;
        const ke = 0.2;
        const dose = 500;
        const Vd = 10;
        const F = 1;

        for (let t = 0; t <= 24; t += 0.5) {
            labels.push(t);
            if (t === 0) {
                values.push(0);
            } else {
                const c = (F * dose * ka) / (Vd * (ka - ke)) * (Math.exp(-ke * t) - Math.exp(-ka * t));
                values.push(c);
            }
        }

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Plasma Concentration',
                    data: values,
                    borderColor: getCSSVar('--secondary'),
                    backgroundColor: getCSSVar('--secondary-light') + '40',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                ...getDefaultOptions('Pharmacokinetic Curve (Oral Dose)'),
                plugins: {
                    ...getDefaultOptions().plugins,
                    annotation: {
                        // Assuming chartjs-plugin-annotation might be added later, or just visual text
                        annotations: {
                            cmaxLine: {
                                type: 'line',
                                yMin: Math.max(...values),
                                yMax: Math.max(...values),
                                borderColor: 'red',
                                borderDash: [5, 5],
                                label: { content: 'Cmax', enabled: true }
                            }
                        }
                    }
                },
                scales: {
                    x: { ...getDefaultOptions().scales.x, title: { display: true, text: 'Time (hr)' } },
                    y: { ...getDefaultOptions().scales.y, title: { display: true, text: 'Concentration (mg/L)' }, min: 0 }
                }
            }
        });
        registerChart(containerId, chart);
        return chart;
    }

    function createSedimentationChart(containerId) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        const labels = ['0', '1', '2', '3', '4', '5', '10', '24'];
        
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Flocculated System',
                        data: [1.0, 0.8, 0.6, 0.5, 0.45, 0.4, 0.35, 0.35],
                        borderColor: getCSSVar('--primary'),
                        tension: 0.2
                    },
                    {
                        label: 'Deflocculated System',
                        data: [1.0, 0.98, 0.95, 0.9, 0.8, 0.7, 0.3, 0.1],
                        borderColor: getCSSVar('--danger'),
                        tension: 0.2
                    }
                ]
            },
            options: {
                ...getDefaultOptions('Sedimentation Volume (F) over Time'),
                scales: {
                    x: { ...getDefaultOptions().scales.x, title: { display: true, text: 'Time (Days)' } },
                    y: { ...getDefaultOptions().scales.y, title: { display: true, text: 'Sedimentation Volume (F)' }, min: 0, max: 1.1 }
                }
            }
        });
        registerChart(containerId, chart);
        return chart;
    }

    function createPSDChart(containerId, data) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        const defaultData = {
            labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70'],
            values: [2, 10, 25, 40, 15, 5, 3]
        };

        const plotData = data || defaultData;

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: plotData.labels,
                datasets: [{
                    label: 'Frequency (%)',
                    data: plotData.values,
                    backgroundColor: getCSSVar('--primary'),
                }]
            },
            options: {
                ...getDefaultOptions('Particle Size Distribution'),
                scales: {
                    x: { ...getDefaultOptions().scales.x, title: { display: true, text: 'Particle Size (µm)' } },
                    y: { ...getDefaultOptions().scales.y, title: { display: true, text: 'Frequency (%)' } }
                }
            }
        });
        registerChart(containerId, chart);
        return chart;
    }

    function createRheogramChart(containerId, type = 'all') {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        const labels = [0, 10, 20, 30, 40, 50];
        const datasets = [];

        if (type === 'all' || type === 'newtonian') {
            datasets.push({
                label: 'Newtonian',
                data: [0, 10, 20, 30, 40, 50],
                borderColor: getCSSVar('--primary'),
                tension: 0
            });
        }
        if (type === 'all' || type === 'pseudoplastic') {
            datasets.push({
                label: 'Pseudoplastic (Shear-thinning)',
                data: [0, 15, 25, 33, 39, 43],
                borderColor: getCSSVar('--secondary'),
                tension: 0.4
            });
        }
        if (type === 'all' || type === 'dilatant') {
            datasets.push({
                label: 'Dilatant (Shear-thickening)',
                data: [0, 5, 12, 22, 35, 50],
                borderColor: getCSSVar('--warning'),
                tension: 0.4
            });
        }
        if (type === 'all' || type === 'plastic') {
            datasets.push({
                label: 'Plastic (Bingham body)',
                data: [null, null, 0, 10, 20, 30],
                borderColor: getCSSVar('--danger'),
                tension: 0,
                spanGaps: true
            });
        }

        const chart = new Chart(ctx, {
            type: 'line',
            data: { labels, datasets },
            options: {
                ...getDefaultOptions('Rheograms (Flow Curves)'),
                scales: {
                    x: { ...getDefaultOptions().scales.x, title: { display: true, text: 'Shear Rate (γ)' } },
                    y: { ...getDefaultOptions().scales.y, title: { display: true, text: 'Shear Stress (τ)' } }
                }
            }
        });
        registerChart(containerId, chart);
        return chart;
    }

    function createReleaseProfileChart(containerId) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        const labels = [0, 1, 2, 4, 6, 8, 12, 16, 20, 24];
        
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Immediate Release',
                        data: [0, 85, 95, 98, 99, 100, 100, 100, 100, 100],
                        borderColor: getCSSVar('--primary'),
                        tension: 0.3
                    },
                    {
                        label: 'Sustained Release (First-Order)',
                        data: [0, 20, 35, 55, 70, 80, 90, 95, 97, 99],
                        borderColor: getCSSVar('--secondary'),
                        tension: 0.4
                    },
                    {
                        label: 'Controlled Release (Zero-Order)',
                        data: [0, 5, 10, 20, 30, 40, 60, 80, 100, 100],
                        borderColor: getCSSVar('--success'),
                        tension: 0
                    }
                ]
            },
            options: {
                ...getDefaultOptions('Modified Release Profiles'),
                scales: {
                    x: { ...getDefaultOptions().scales.x, title: { display: true, text: 'Time (hours)' } },
                    y: { ...getDefaultOptions().scales.y, title: { display: true, text: '% Drug Released' }, min: 0, max: 110 }
                }
            }
        });
        registerChart(containerId, chart);
        return chart;
    }

    function destroyAll() {
        Object.keys(chartInstances).forEach(id => {
            chartInstances[id].destroy();
            delete chartInstances[id];
        });
    }

    // Expose the API
    PharmHub.charts = {
        createDissolutionChart,
        createFirstOrderChart,
        createZeroOrderChart,
        createPKCurveChart,
        createSedimentationChart,
        createPSDChart,
        createRheogramChart,
        createReleaseProfileChart,
        destroyAll
    };

})();
