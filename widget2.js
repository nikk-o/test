document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('metamask-widget-container');
    if (!container) {
        console.error('MetaMask widget container not found');
        return;
    }

    const connectButton = document.createElement('button');
    connectButton.innerText = 'Connect to MetaMask';
    connectButton.onclick = function() {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                if (accounts.length > 0) {
                    const userAccount = accounts[0];
                    alert('Connected: ' + userAccount);
                } else {
                    alert('MetaMask not found. Please check your installation.');
                }
            })
            .catch(error => {
                console.error('An error occurred while connecting to MetaMask:', error);
                alert('Error connecting to MetaMask. See console for details.');
            });
        } else {
            alert('MetaMask is not installed. Please install it to connect.');
        }
    };

    container.appendChild(connectButton);
});
