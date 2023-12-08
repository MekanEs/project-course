module.exports = {
    diffingEngine: 'looks-same',
    'looks-same': {
        ignoreCaret: true,
    },
    verboseRenderer: true,
    configurations: {
        'chrome.laptop': {
            target: 'chrome.app',
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false,
            preset: 'Retina Macbook Pro 15',
        },
    },
};
