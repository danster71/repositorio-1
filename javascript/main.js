let links = document.querySelectorAll(".close");

links.forEach(function (link) {
    link.addEventListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content')
        content.classList.remove("animate__backInUp");
        content.classList.remove("animate__animated");


        content.classList.add("animate__backOutDown");
        content.classList.add("animate__animated");

        setInterval(function () {
            location.href = "/proyecto";
        }, 500)
        //setInterval()


    });

});

let iconos = document.querySelectorAll(".i")

iconos.forEach(function (icono) {
    icono.classList.remove("fa-star");

});



