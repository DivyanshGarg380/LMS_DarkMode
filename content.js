const observer = new MutationObserver(() => {
  document.body.style.backgroundColor = "#121212";
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
