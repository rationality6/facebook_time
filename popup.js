const requestFriends = document.getElementById("requestFriends");

requestFriends.addEventListener("click", async () => {
  chrome.runtime.sendMessage({ msg: "startFunc" });
  // var bgPage = chrome.extension.getBackgroundPage();
  // var dat = bgPage.mainRun(); // Here paste() is a function that returns value.

  // chrome.runtime.getBackgroundPage(function() {
  //   mainRun()
  // })

  // const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // if (tab.url?.startsWith("chrome://")) return;
});
