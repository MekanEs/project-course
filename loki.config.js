module.exports = {
    name: 'my-project',
    version: '1.0.0',
    fileNameFormatter: ({ _, kind, story }) => {
        const unique = Date.now();
        return `${unique + story}`.toLowerCase();
    },
    diffingEngine: 'pixelmatch',
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
