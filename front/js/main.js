window.onload = () => {
    //Prime Lambda Event Listener
    document.getElementById('calculate').addEventListener('click', primer)

    //Create EC2 Lambda Event Listener
    document.getElementById('create').addEventListener('click', create_ec2);

    //Get all EC2s Listener
    document.getElementById('list').addEventListener('click', getAllCustomers);

    //Get Image
    document.getElementById('image').addEventListener('click', getImage);

    //Get By Genre
    document.getElementById('listGenre').addEventListener('click', getGenre);
}