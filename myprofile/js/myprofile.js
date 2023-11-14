setInterval(myWatch, 1000);

function myWatch(){
    const now = new Date();
    let time = now.toLocaleTimeString();
    console.log(time);

    let watch = document.getElementById("demo")
    watch.innerHTML = time;
    watch.style.color = "red"
}