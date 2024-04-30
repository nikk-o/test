document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.textContent = 'Connect Phantom Wallet';
    
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.border = '1px solid #ccc';
    button.style.backgroundColor = '#f0f0f0';

    document.body.appendChild(button);

    button.addEventListener('click', function() {
        if (typeof window.solana !== 'undefined' && window.solana.isPhantom) {
            console.log('Phantom wallet is available!');
            // Attempt to connect to Phantom Wallet
            window.solana.connect()
                .then(function(response) {
                    if (response.publicKey) {
                        console.log('Connected to Phantom Wallet: ', response.publicKey.toString());
                        alert('Connected to Phantom Wallet with public address: ' + response.publicKey.toString());
                    } else {
                        console.log('No public key found.');
                        alert('Failed to connect: No public key found.');
                    }
                })
                .catch(function(error) {
                    console.error('Failed to connect to Phantom Wallet:', error);
                    alert('Failed to connect to Phantom Wallet. Please try again.');
                });
        } else {
            console.log('Phantom wallet is not available!');
            alert('Phantom wallet is not available. Please install it.');
        }
    });
});
