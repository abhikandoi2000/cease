var isYouTubeUrl = function(url) {
  var youtube = "www.youtube.com";

  if (url.indexOf(youtube) == -1) {
    return false;
  }

  return true;
};

var isRdioUrl = function(url) {
  var rdio = "www.rdio.com";

  if (url.indexOf(rdio) == -1) {
    return false;
  }

  return true;
};

var togglePlayback = function() {
  chrome.windows.getAll(undefined, function(windows) {

    for (var i = 0, win; win = windows[i]; i++) {

      chrome.tabs.getAllInWindow(win.id, function(tabs) {

        for (var j = 0, tab; tab = tabs[j]; j++) {

          if (tab.url && isYouTubeUrl(tab.url)) {
            chrome.tabs.executeScript(tabs[j].id, {file: "toggle.js"});
          } else if(tab.url && isRdioUrl(tab.url)) {
            chrome.tabs.executeScript(tabs[j].id, {file: "toggle-rdio.js"});
          }

        }
        return;
      });
    }
    return;
  });
};

chrome.commands.onCommand.addListener(function(command) {
  if (command == "toggle-playback") {
    togglePlayback();
  }
});