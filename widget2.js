document.addEventListener('DOMContentLoaded', function() {
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
                    alert('Please install MetaMask!');
                }
            })
            .catch(error => {
                console.error('An error occurred: ', error);
            });
        } else {
            alert('MetaMask is not installed. Please install it to connect.');
        }
    };

    document.body.appendChild(connectButton);
});
