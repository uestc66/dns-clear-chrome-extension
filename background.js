const CLEAR_DNS = 'clear dns';
const SOCKETS_URL = 'chrome://net-internals/#sockets';

var tabs = chrome.tabs;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  var action = request.action;
  var bmmode = request.bmmode;

  switch (action) {
    case CLEAR_DNS:
      clearDns(bmmode);
      break;
  }
});

function clearDns(bmmode) {
  var bm = chrome.benchmarking;
  if (bm && bmmode === 'true') {
    bm.clearHostResolverCache();
    bm.clearCache();
    bm.closeConnections();
  } else {
    tabs.query({ url: SOCKETS_URL }, function(tabArr) {
      if (tabArr.length > 0) {
        tabs.update(tabArr[0].id, { active: true }, function() {
          tabs.reload();
        });
      } else {
        tabs.create({ url: SOCKETS_URL, active: true }, function() {
          tabs.reload();
        });
      }
    });
    // https://stackoverflow.com/questions/24600495/chrome-tabs-executescript-cannot-access-a-chrome-url
    // tabs.create({ url: SOCKETS_URL, active: false }, function(newTab) {
    //   tabs.executeScript(newTab.id, { file: 'inject/action.js' }, function() {
    //     tabs.reload();
    //   });
    // });
  }
}
