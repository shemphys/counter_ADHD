var target = 'codecademy.com';
var exceptions = ['codecademy.com', 'chat.openai.com'];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = new URL(details.url);
        var host = url.hostname;

        // Si el host está en las excepciones, no redirigir.
        for (var i = 0; i < exceptions.length; i++) {
            if (host == exceptions[i] || host.endsWith('.' + exceptions[i])) {
                return;
            }
        }
        // Si el host no es el objetivo, redirigir al objetivo.
        if (host != target && !host.endsWith('.' + target)) {
            return {redirectUrl: 'https://' + target};
        }
    },
    {urls: ["<all_urls>"], types: ["main_frame"]},
    ["blocking"]
);
