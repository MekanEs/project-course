module.exports = {
    diffingEngine: 'pixelmatch',
    chromeEnableAnimations: false,
    verboseRenderer: true,
    chromeFlags:
        '--headless --disable-gpu --hide-scrollbars --wm-window-animations-disabled',
    configurations: {
        'chrome.laptop': {
            target: 'chrome.app',
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false,
            preset: 'Retina Macbook Pro 15',
        },
        'chrome.iphone7': {
            target: 'chrome.app',
            preset: 'iPhone 7',
        },
    },
};