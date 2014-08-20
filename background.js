chrome.alarms.create('popup', {
  when: Date.now() + 3600000, // 1 hour from now
  periodInMinutes: 60
});

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.tabs.create({url: "break.html"});
});
