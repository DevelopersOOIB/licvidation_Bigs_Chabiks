var count = 0;
document.getElementById("myButton").onclick = function () {
    count ++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://s.digitalocean.ru/upload/1698126205_Screenshot_41.jpg";
        document.getElementById('demo').appendChild(img);
    }
}