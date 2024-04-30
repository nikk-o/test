document.addEventListener('load', function() {
    var button = document.createElement('button');
    button.textContent = 'Connect MetaMa2sk';

    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.border = '1px solid #ccc';
    button.style.backgroundColor = '#f0f0f0';

    document.body.appendChild(button);

    button.addEventListener('click', function() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is available!');
            // Attempt to connect to MetaMask
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(function(accounts) {
                    if (accounts.length > 0) {
                        console.log('Connected to account: ', accounts[0]);
                        alert('Connected to account: ' + accounts[0]);
                    } else {
                        console.log('No accounts found.');
                        alert('No accounts found. Please create an account in MetaMask.');
                    }
                })
                .catch(function(error) {
                    console.error('Failed to connect MetaMask:', error);
                    alert('Failed to connect to MetaMask. Please try again.');
                });
        } else {
            console.log('MetaMask is not available!');
            alert('MetaMask is not available. Please install it.');
        }
    });
});
