console.log("connected");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("connected", request?.message);
  let SetTimeOut;
  if (request?.message) {
    SetTimeOut = setTimeout(() => {
      Connect();
    }, [5000]);
  } else {
    clearTimeout(SetTimeOut);
  }
});

const Connect = () => {
  const data =
    document &&
    document?.getElementsByClassName(
      "artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"
    );
  let x,
    i = 0,
    y = data?.length;
  x = setInterval(() => {
    let key = data[i];
    if (key?.innerText == "Connect") {
      key?.click();
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
    }
    i++;
    if (i == y) clearInterval(x);
  }, 1600);
};
