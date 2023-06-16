chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      var url = new URL(details.url);
      if (url.hostname === "chat.openai.com" || url.hostname.endsWith(".openai.com") 
        || url.hostname === "www.codecademy.com" || url.hostname.endsWith(".codecademy.com"))
        {
        return;
        }
        return {redirectUrl: "https://www.codecademy.com/"};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );
  