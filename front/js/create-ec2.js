create_ec2 = () => {
    //Get user input
    let name = document.getElementById('name').value;
    let id = document.getElementById('id').value;
    let amount = document.getElementById('amount').value;
    let genre = document.getElementById('genre').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('createMessage').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://xovnxdcilk.execute-api.us-east-1.amazonaws.com/prod/store`);

    //Sending our request
    let request = {'id': id, 'name': name, 'cost': amount, 'genre': genre}
    xhr.send(JSON.stringify(request));
}