chrome.storage.sync.get("color", ({ color }) => {
  enhance.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
enhance.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: startEnhancing,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function startEnhancing() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }