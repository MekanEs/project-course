module.exports = {
    diffingEngine: 'pixelmatch',
    pixelmatch: {
        threshold: 0.5,
        options: {
            threshold: 0.5,
        },
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
