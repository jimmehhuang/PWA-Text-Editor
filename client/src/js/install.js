const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler on the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('Boop');
  event.preventDefault();
  window.deferredPrompt = event;

  // removes hidden class from button to display to view
  butInstall.classList.toggle("hidden", false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
