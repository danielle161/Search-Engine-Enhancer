const redirectTo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

chrome.webRequest.onBeforeRequest.addListener(
    (d) => {
        console.log(d);
        // if (d.initiator.indexOf("youtube") > -1 || d.url.indexOf("youtube") > -1 || d.url.indexOf("youtube") > -1) {
        //     return {}
        // }
        if (d.url.indexOf("google.com") === -1 && d.initiator.indexOf("google.com" > -1) && d.url.indexOf("youtube.com") === -1) {
            return {redirectUrl: redirectTo};
        }
    },
    {urls: ["*://*/*"]},
    ["blocking", "requestBody"]
)
