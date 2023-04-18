// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "extractEmails") {
      // Extract email addresses from the current tab's DOM
      var emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
      var matches = document.body.innerText.match(emailRegex);
      var emails = [...new Set(matches)];
  
      // Send a message back to the popup script with the extracted email addresses
      chrome.runtime.sendMessage({ action: "displayEmails", emails: emails }, function(response) {
        console.log(response.message);
      });
  
      sendResponse({ message: "Emails extracted successfully" });
    }
  });
  