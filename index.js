document.addEventListener("DOMContentLoaded", RunScript);
function RanDomNumer(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
let A={},n=1;
function RunScript() {
  let random = RanDomNumer(6, 9);
  let start = false;
  document?.getElementById("btn").addEventListener("click", () => {
    start = !start;
    if (start) {
      document.getElementById("coutnText").style.display = "block";
      document.getElementById("ConnectText").style.display = "none";
      document.getElementById("btn").innerText = "Stop Connecting";
      document.getElementById("btn").style.border = "1px solid red";
    } else {
      document.getElementById("coutnText").style.display = "none";
      document.getElementById("ConnectText").style.display = "block";
      document.getElementById("btn").innerText = "Start Connecting";
      document.getElementById("btn").style.border = "1px solid green";
    }
    popup(start, random);
  });
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg?.count && !A[msg?.count]) {
      A[msg.count] =1;
      document.getElementById("count").innerText = n++;
    }
    
    if(msg?.end){
        document.getElementById("Body").style.display="none"
              chrome.management.onDisabled.addListener((a) => {
                console.log(a?.name, "disabled");
              });
    }

  });
}

function popup(data, num) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: data, start: num });
  });
}
