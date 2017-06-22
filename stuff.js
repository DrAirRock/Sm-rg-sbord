

function lunch() {
    var options = ["Option A", "Option B", "Option C"];
    var x = Math.floor((Math.random() * options.length));
    document.getElementById("output").innerHTML= "How about?" + options[x];
}
