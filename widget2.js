(function() {
  const widget = document.createElement('div');
  widget.id = 'my-widget-container';
  widget.innerHTML = `
    <button id="connectButton">Connect to MetaMask</button>
    <div id="walletInfo" style="display:none;">
      <p>Address: <span id="address"></span></p>
      <p>Balance: <span id="balance"></span> ETH</p>
    </div>
  `;
  document.body.appendChild(widget);

  const connectButton = document.getElementById('connectButton');
  const addressSpan = document.getElementById('address');
  const balanceSpan = document.getElementById('balance');
  const walletInfo = document.getElementById('walletInfo');

  connectButton.addEventListener('click', async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        addressSpan.textContent = account;
        walletInfo.style.display = 'block';
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [account, 'latest']
        });
        const balanceInEther = parseFloat(balance) / 1e18;
        balanceSpan.textContent = balanceInEther.toFixed(4);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
        alert('Failed to connect. Ensure MetaMask is installed and unlocked.');
      }
    } else {
      alert('MetaMask is not available. Please install MetaMask.');
    }
  });
})();
