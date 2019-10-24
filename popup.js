document.addEventListener('DOMContentLoaded', function() {
  var addPageButton = document.getElementById('addPage');
  addPageButton.addEventListener('click', function() {
    console.log('hi');
  
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];

      d = "";
      
      // get current urls in macro key
      chrome.storage.local.get(['macro_urls'], function(result) {
         d = result;
      });

      // append new url to macro key
      d += activeTab.url + ",";
      
      // set macro key to new set of urls
      chrome.storage.local.set({'macro_urls': d}, function() {
        console.log("url saved");
      });
      chrome.tabs.sendMessage(activeTab.id, {"message": "url_added", "result": d});
    });
    // */
  }, false);

}, false);