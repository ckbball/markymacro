// content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "url_added" ) {
       // probably want to get the new url and add it in the display in the popup.html
       chrome.storage.local.get(['macro_urls'], function(result) {
         d = result;
      });
      console.log(request.result);
      console.log("url received on page");
    }
  }
);