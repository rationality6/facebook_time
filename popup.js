const requestFriends = document.getElementById("requestFriends");
const listFriends = document.getElementById("listFriends");

requestFriends.addEventListener("click", async () => {
  chrome.runtime.sendMessage({ msg: "startFunc" });
});

requestFriends.addEventListener("click", async () => {
  chrome.runtime.sendMessage({ msg: "listFriends" });
});
