(function() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.text = `
    (function() {
      chrome.send('clearHostResolverCache');
      chrome.send('flushSocketPools');
      window.close();
    })()
  `;
  document.body.appendChild(script);
})();
