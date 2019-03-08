function getImage() {

    let image = document.getElementById('img').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Present the data to the user
            document.getElementById("projectImage").src = data.response;
        }
    };

    //Doing a HTTP to a specific endpoint
    xhr.open('POST', `https://xovnxdcilk.execute-api.us-east-1.amazonaws.com/prod/image`);

    //Sending our request
    let request = {'image': image}
    xhr.send(JSON.stringify(request));
}