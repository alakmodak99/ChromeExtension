document.addEventListener("DOMContentLoaded", RunScript);
function RunScript() {
  console.log("HTML Connected");
  let start = false;
  let btn = document?.getElementById("btn").addEventListener("click", () => {
    let count = 5,
      x;
    start = !start;
    if (start) {
      document.getElementById("coutnText").style.display = "block";
      document.getElementById("ConnectText").style.display = "none";
      document.getElementById("btn").innerText = "Stop Connecting";
      document.getElementById("btn").style.border = "1px solid red";
      x = setInterval(() => {
        document.getElementById("count").innerText = count--;
        if (count < 0) {
          clearInterval(x);
          document.getElementById("coutnText").innerText = "Started";
        }
      }, 1000);
    } else {
      document.getElementById("coutnText").style.display = "none";
      document.getElementById("ConnectText").style.display = "block";
      document.getElementById("btn").innerText = "Start Connecting";
      document.getElementById("btn").style.border = "1px solid green";
    }
    popup(start);
  });
}
function popup(data) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: data });
  });
}
