module.exports = {
    diffingEngine: 'pixelmatch',
    verboseRenderer: true,
    configurations: {
        'chrome.laptop': {
            target: 'chrome.docker',
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false,
            preset: 'Retina Macbook Pro 15',
        },
    },
};
