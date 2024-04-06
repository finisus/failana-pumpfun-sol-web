document.addEventListener('DOMContentLoaded', function() {

  /* Hyperlinks */
  const twitterBtn = document.getElementById('twitter-button');
  twitterBtn.addEventListener('click', function() {
    window.open('https://twitter.com/FAILANA_Sol', '_blank');
  });
 
  const telegramBtn = document.getElementById('telegram-button');
  telegramBtn.addEventListener('click', function() {
    window.open('https://t.me/failanaportal', '_blank');
  });

  const buyBtn = document.getElementById('buy-button');
  buyBtn.addEventListener('click', function() {
    window.open('https://www.pump.fun/7CWNZJ2hLiYiuRhsCznjhm61vWHujXyN76FN4WhTDzvN', '_blank');
  });

  /* Copy button logic */
  const copyButton = document.getElementById('copy-ca-button');
  const textToCopy = "7CWNZJ2hLiYiuRhsCznjhm61vWHujXyN76FN4WhTDzvN";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });

  /* fake-buy page logic */
  const fakeBuyBtn = document.getElementById('fakebuy-button');
  const fakeBuySwitch = document.getElementById('fakebuy-switch');

  const mainPageSwitch = document.getElementById('main-switch');
  const mainPage = document.getElementById('main-page');
  const fakeBuyPage = document.getElementById('fakebuy-page');

  const tradeBtn = document.getElementById('trade-button');
  const tradePage = document.getElementById('tradepage');

  const closeTrade = document.getElementById('close-trade');
  const closeAreaTrade = document.getElementById('close-area');
  const confirmTrade = document.getElementById('confirm-trade');
  const failedTrade = document.getElementById('failedpage');

  mainPage.style.display = 'block';
  fakeBuyPage.style.display = 'none';

  fakeBuyBtn.addEventListener('click', function() {
    mainPage.style.display = 'none';
    fakeBuyPage.style.display = 'block';
  });
  
  fakeBuySwitch.addEventListener('click', function() {
    mainPage.style.display = 'none';
    fakeBuyPage.style.display = 'block';
  });

  mainPageSwitch.addEventListener('click', function() {
    mainPage.style.display = 'block';
    fakeBuyPage.style.display = 'none';
    failedTrade.style.display = 'none';
  });

  tradePage.style.display = 'none';
  failedTrade.style.display = 'none';
  tradeBtn.addEventListener('click', function() {
    tradePage.style.display = 'block';
  });

  closeTrade.addEventListener('click', function() {
    tradePage.style.display = 'none';
    fakeBuyPage.style.display = 'block';
  });
  closeAreaTrade.addEventListener('click', function() {
    tradePage.style.display = 'none';
    fakeBuyPage.style.display = 'block';
  });

  const audio = new Audio('./metadata/womp-womp.mp3');
  audio.loop = false;
  audio.volume = 1.0;
  confirmTrade.addEventListener('click', function() {
    tradePage.style.display = 'none';
    failedTrade.style.display = 'block';
    audio.play();
  });
});