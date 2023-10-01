// Add click event listener to the "Aku sakit" button
sakitButton.addEventListener('click', function () {
    sendMessage('Ada orang sakit!!!!');
    window.location.href = "./assets/Flash/sakit.gif";
});

// Add click event listener to the "Aku ga baik-baik aja" button
daruratButton.addEventListener('click', function () {
    sendMessage('Keadaan darurat!!!!');
    window.location.href = "./assets/Flash/darurat.gif";
});

function sendMessage(messageContent) {
    // Replace 'your-formcarry-endpoint' with your actual Formcarry endpoint
    const formcarryEndpoint = 'https://formcarry.com/s/LxVEbStyS';

    // You can send the message here using an AJAX request to Formcarry
    fetch(formcarryEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageContent }), // Use the provided message content
    })
        .then(response => {
            // Handle the response as needed
            // For example, you can show a confirmation message to the user
            console.log('Message sent successfully');
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error('Error sending message:', error);
        });
}