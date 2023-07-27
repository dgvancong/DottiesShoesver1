function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}


function ShowLaptop1(url) {
    document.getElementById('Main-Content-Adidas').src=url;
    }
    function ShowLaptop2(e) {
        let list = document.getElementsByClassName('img-item');
        for(let x of list) {
            x.style.opacity  = 0.5;
        }
        document.getElementById('Main-Content-Adidas').src=e.src;
        e.style.opacity  = 1;
}