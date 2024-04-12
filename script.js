document.addEventListener("DOMContentLoaded", function () {
  // Detect device mobile
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var backgroundContainer = document.getElementById("backgroundContainer");

  backgroundContainer.style.backgroundImage =
    "url(./assets/images/image-background.png)";

  var language = navigator.language || navigator.userLanguage;

  if (language.toLowerCase().startsWith("en")) {
    document.getElementById("btnInstall").setAttribute("title", "Install app");
  }

  // var platform = getPlatform();
  // if (platform === "ios") {
  //   window.location.href = "kidsclubdev://homeee";
  // } else if (platform === "android") {
  //   // window.open("intent://homeee#Intent;package=com.kd.aeonkids.beta;scheme=kidsclubdev;end;");
  //   // document.getElementById("alo").click();
  // }
    document.getElementById("alo").click();
});

document.getElementById("btnOpen").addEventListener("click", function () {
  var platform = getPlatform();

  if (platform === "ios") {
    window.location.href = "kidsclubdev://homeee";
  } else if (platform === "android") {
    document.getElementById("alo").click();
  } else {
    alert("Platform không được hỗ trợ!");
  }
});

document.getElementById("btnInstall").addEventListener("click", function () {
  var platform = getPlatform();

  window.open(
    "intent://homeee#Intent;package=com.kd.aeonkids.beta;scheme=kidsclubdev;end;"
  );

  if (platform === "ios") {
    window.location.href =
      "https://apps.apple.com/app/apple-store/id6473516617";
  } else if (platform === "android") {
    alert("Android");
    window.location.href =
      "https://play.google.com/store/apps/details?id=vn.com.aeon.kidsclub";
  } else {
    alert("Platform không được hỗ trợ!");
  }
});

function getPlatform() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  } else if (/android/i.test(userAgent)) {
    return "android";
  } else {
    return null;
  }
}
