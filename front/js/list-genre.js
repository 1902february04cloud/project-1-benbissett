function getGenre() {

    let genre = document.getElementById('gen').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Present the data to the user
            presentGenre(data);
        }
    };

    //Doing a HTTP to a specific endpoint
    xhr.open('POST', `https://xovnxdcilk.execute-api.us-east-1.amazonaws.com/prod/genre`);

    //Sending our request
    let request = {'genre': genre }
    xhr.send(JSON.stringify(request));
}

//Present all EC2
function presentGenre(data) {
    //Get customer list node
    let genreList = document.getElementById("genreList");

    //Clean customer list
    ec2List.innerHTML = "";

    //Iterate over all EC2
    for (var i = data["response"].length - 1; i >= 0; i--) {
        //Creating node of <li>
        let genreNode = document.createElement("li");

        //Add class for styling <li class="something">
        //You can access any HTML fields (id might be useful)
        genreNode.className = "list-group-item";

        //Creating innerHTML object, adding customer name to it.
        //<li class="something">[creating this object]</li>
        let genreNodeText = document.createTextNode(`${data["response"][i].id}, ${data["response"][i].name},
            ${data["response"][i].cost}`);

        //Append innerHTML to the customerNode
        //<li class="something">Perez, Julio</li>
        genreNode.appendChild(genreNodeText);

        //Finally, we append the new customerNode to the customerList
        //<ul id="ec2List">
        //<li class="something">Something</li>
        //</ul>
        genreList.appendChild(genreNode);
    }
}