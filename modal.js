document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('myModal');
    const sakitButton = document.getElementById('sakitButton');
    const daruratButton = document.getElementById('daruratButton');
    const formcarryEndpoint = 'https://formcarry.com/s/j7pCRt6VKb';

    // Function to send a message to Formcarry
    function sendMessage(messageContent) {
        fetch(formcarryEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: messageContent }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully');
            } else {
                console.error('Error sending message:', response.status);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        })
        .finally(() => {
            modal.style.display = 'none'; // Close the modal after sending the message
        });
    }

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
});
