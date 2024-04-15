function send_height_to_server() {
    var height = document.getElementById('height_input')
    height = height.value
    console.log(height)
    fetch('http://127.0.0.1:5000/submit', {
    method: 'POST', // Specifies the method
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        height: height
    })
    })
    .then(response => response.json()) // Parses JSON response into native JavaScript objects
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function delete_data() {
    fetch('http://127.0.0.1:5000/delete', {
    method: 'DELETE', // Specifies the method
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    })
    })
    .then(response => response.json()) // Parses JSON response into native JavaScript objects
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}