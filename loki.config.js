module.exports = {
    diffingEngine: 'looks-same',
    'looks-same': {
        ignoreCaret: true,
        strict: false, // strict comparsion
        tolerance: 5,
        pixelRatio: 2,
        ignoreAntialiasing: true,
        antialiasingTolerance: 3,
    },

    verboseRenderer: true,
    configurations: {
        'chrome.laptop': {
            target: 'chrome.app',
            width: 1366,
            height: 768,
            deviceScaleFactor: 2,
            mobile: false,
            preset: 'Retina Macbook Pro 15',
        },
        'chrome.iphone7': {
            target: 'chrome.app',
            preset: 'iPhone 7',
        },
    },
};
