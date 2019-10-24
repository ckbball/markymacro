// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);
/*
document.addEventListener('DOMContentLoaded', function() {
  var addPageButton = document.getElementById('addPage');
  addPageButton.addEventListener('click', function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];

      d = 0;
      // get current urls in macro key
      chrome.storage.local.get(['macro_urls'], function(result) {
         message(result);
         d = result
      });

      // append new url to macro key
      
      // set macro key to new set of urls
      chrome.storage.local.set({'macro_urls': tab.url}, function() {
        message("URL saved to macro");
      });
      chrome.tabs.sendMessage(activeTab.id, {"message": "url_added", "result": d});
    });

  }, false);
}, false);*/