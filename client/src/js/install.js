const btnInstall = document.getElementById('buttonInstall');
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  btnInstall.classList.remove('hidden');
});

btnInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  deferredPrompt.prompt();
  
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);

  deferredPrompt = null;

  btnInstall.classList.add('hidden');
});

window.addEventListener('appinstalled', (event) => {
  console.log('App install success');
});