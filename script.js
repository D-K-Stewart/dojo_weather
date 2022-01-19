function pagealert(){
    alert("Loading weather alert...");
}

function remove(){
    var myobj = document.getElementById("delete");
    myobj.remove();
}



async function getCoderData() {
    // The await keyword lets js know that it needs to wait until it gets a response back to continue.
    var response = await fetch("api.openweathermap.org/data/2.5/weather?q=(puyallup){a33dfaf0df1403f15022a2950364521c}");
    // We then need to convert the data into JSON format.
    var coderData = await response.json();
    return coderData;
}
    
console.log(getCoderData());

