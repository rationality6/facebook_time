function setDelay(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

function createTab() {
  return new Promise((resolve) => {
    chrome.tabs.create({ url: facebookSuggestionsUrl }, resolve);
  });
}

let facebookSuggestionsUrl = "https://www.facebook.com/friends/suggestions";

async function mainRun() {
  const tab = await createTab();

  setTimeout(() => {
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        func: async () => {
          const timer = (ms) => new Promise((res) => setTimeout(res, ms));

          let totalFriendsLength =
            document.querySelectorAll("div.x135pmgq>div").length;

          async function load() {
            for (var i = 1; i < totalFriendsLength; i += 1) {
              document
                .querySelector("div.x135pmgq")
                .children[i].children[0].children[0].click();

              await timer(1200);

              document.querySelector('div.xh8yej3>[role="button"]>div.x1n2onr6.x1ja2u2z').click()

              await timer(200);

              document.querySelector("div.x135pmgq").scrollIntoView(false);

              await timer(300);

              totalFriendsLength =
                document.querySelectorAll("div.x135pmgq>div").length;
            }
          }

          await load();
        },
      })
      .then(() => console.log("injected script file"));
  }, 400);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.msg == "startFunc") mainRun();
});
