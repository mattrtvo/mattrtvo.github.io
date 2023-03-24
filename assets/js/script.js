// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');


window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset ||
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop){
    navbar.style.top="-50px";
  } else{
    navbar.style.top="0";
  }
  lastScrollTop= scrollTop;
});





// TYPED

  /* var typed = new Typed('.element', options); */
  var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toutes, je me présente, je m'appelle Matt Colombin, j'ai 17 ans, je suis en terminal SN option RISC", "Après avoir trouvé un stage au sein du siège d'Unibail Rodamco Westfiel","j'ai découvert le développement WEB.","Ainsi, j'ai commencé une formation de Développement WEB, je me suis formé en Autodidacte grâce à plusieurs sites web dont (W3School, freecodecamp.)","Je me suis découvert une passion, celle de coder!"],
    typeSpeed: 20,
  }); 


// compteur LIVE

let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if(compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum : countTo
        },

        {
          duration: 10000,
          easing: 'swing',
          step: function(){
            $this.text(Math.floor(this.countNum));
          },
          complete: function(){
            $this.text(this.countNum);
          }
        });
    });
    compteur = 1;
  }
});

// AOS

AOS.init();