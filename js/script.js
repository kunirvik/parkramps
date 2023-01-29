var acc = document.getElementsByClassName("accordion"),
    i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        for (j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.classList.remove("show");

            } else {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }

        }

    }
}


var typed = new Typed('.typed', {
    strings: ["виробництво скейтпарків","тренування скейт|bmx|скут", "івенти та змагання", "локація для фото|відео"],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true

  });

  


  
