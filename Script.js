console.log("connected");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("connected", request?.message, request?.start);
  let SetTimeOut;
  if (request?.message) {
    SetTimeOut = setTimeout(() => {
      Connect(request?.message);
    }, request?.start);
  } else {
    clearTimeout(SetTimeOut);
  }
});

const Connect = (event) => {
  const data =
    document &&
    document?.getElementsByClassName(
      "artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"
    );
  let x,
    count = 0,
    i = 0,
    y = data?.length;
  x = setInterval(async () => {
    let key = data[i];
    if (key?.innerText == "Connect") {
      count++;
      key?.click();
      await SetTimeO();
    }
    if (!event) clearInterval(x);
    i++;
    if (i == y) clearInterval(x);
    console.log(count, "Count");
    chrome.runtime.sendMessage({ count, end: i==y }, (res) => {});
  }, 1700);
};

function SetTimeO() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document
        .getElementsByClassName(
          "artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--choice ember-view mt2"
        )?.[0]
        ?.click();
      document
        .getElementsByClassName(
          "artdeco-button artdeco-button--2 artdeco-button--primary ember-view"
        )?.[0]
        ?.click();
      document
        .getElementsByClassName(
          "artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1"
        )?.[0]
        ?.click();
    }, 900);
  });
}
