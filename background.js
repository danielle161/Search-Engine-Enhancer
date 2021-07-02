let color = '#ffa500';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %corange', `color: ${color}`);
});