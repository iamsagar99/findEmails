// When the Generate button is clicked, send a message to the content script to extract email addresses
document.getElementById("generate-button").addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "extractEmails" }, function(response) {
      console.log(response.message);
    });
  });
});

// When the content script sends a message with email addresses, display them in the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "displayEmails") {
    var emails = request.emails;

    // Clear any existing email list items
    var emailList = document.getElementById("email-list");
    emailList.innerHTML = "";

    // Create a new list item for each email and append it to the email list
    if(emails.length<1){
      var nullMessage = document.createElement("h3");
      nullMessage.textContent = "No emails found on this page."
      emailList.appendChild(nullMessage);
    }else{
    for (var i = 0; i < emails.length; i++) {
      var emailListItem = document.createElement("li");
      emailListItem.textContent = emails[i];
      emailList.appendChild(emailListItem);
    }}

    sendResponse({ message: "Emails displayed successfully" });
  }
});
