let allowedWebsites = ['codecademy.com', 'openai.com'];
let allowedRequests = {};

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = new URL(details.url);
    let originUrl = new URL(details.originUrl || details.documentUrl || '');

    for (let site of allowedWebsites) {
      if (url.hostname.endsWith(site)) {
        allowedRequests[details.requestId] = true;
        return;
      }
      if (originUrl.hostname.endsWith(site) && allowedRequests[details.requestId]) {
        return;
      }
    }

    return {redirectUrl: 'https://www.codecademy.com/'};
  },
  {urls: ['<all_urls>']},
  ['blocking']
);

chrome.webRequest.onCompleted.addListener(
  function(details) {
    delete allowedRequests[details.requestId];
  },
  {urls: ['<all_urls>']}
);

chrome.webRequest.onErrorOccurred.addListener(
  function(details) {
    delete allowedRequests[details.requestId];
  },
  {urls: ['<all_urls>']}
);
