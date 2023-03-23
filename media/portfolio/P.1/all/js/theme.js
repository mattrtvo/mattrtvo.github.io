$("#darkTrigger").click(function(){
/* Partie 1*/
/*1*/
    if ($("body").hasClass("bg2-dark")){
      $("body").removeClass("bg2-dark");
    }
    else{
      $("body").addClass("bg2-dark");
    }

/*2*/
    if ($(".bg-light").hasClass("bg2-light")){
      $(".bg-light").removeClass("bg2-light");
    }
    else{
      $(".bg-light").addClass("bg2-light");
    }

/*3*/
    if ($(".text-muted").hasClass("text2-muted")){
      $(".text-muted").removeClass("text2-muted");
    }
    else{
      $(".text-muted").addClass("text2-muted");
    }

/*4*/
    if ($(".masthead").hasClass("masthead2")){
      $(".masthead").removeClass("masthead2");
    }
    else{
      $(".masthead").addClass("masthead2");
    }
    
/*5*/
    if ($(".portfolio-caption").hasClass("portfolio2-caption")){
      $(".portfolio-caption").removeClass("portfolio2-caption");
    }
    else{
      $(".portfolio-caption").addClass("portfolio2-caption");
    }

/*6*/
    if ($(".container").hasClass("container2")){
      $(".container").removeClass("container2");
    }
    else{
      $(".container").addClass("container2");
    }


    if ($(".nav-link").hasClass("nav-link2")){
      $(".nav-link").removeClass("nav-link2");
    }
    else{
      $(".nav-link").addClass("nav-link2");
    }

/*8*/
  if ($(".phone-border").hasClass("phone-border2")){
    $(".phone-border").removeClass("phone-border2");
  }
  else{
    $(".phone-border").addClass("phone-border2");
  }

/*9*/
  if ($(".contact-map-bg").hasClass("contact-map2-bg2")){
    $(".contact-map-bg").removeClass("contact-map2-bg2");
  }
  else{
    $(".contact-map-bg").addClass("contact-map2-bg2");
  }

/*10*/
  if ($(".modal-content").hasClass("modal-content2")){
    $(".modal-content").removeClass("modal-content2");
  }
  else{
    $(".modal-content").addClass("modal-content2");
  }

/*11*/
  if ($(".timeline-image").hasClass("timeline-image2")){
    $(".timeline-image").removeClass("timeline-image2");
  }
  else{
    $(".timeline-image").addClass("timeline-image2");
  }

/*12*/
  if ($(".timeline").hasClass("timeline2")){
    $(".timeline").removeClass("timeline2");
  }
  else{
    $(".timeline").addClass("timeline2");
  }

/*13*/
  if ($(".navbar-toggler").hasClass("navbar-toggler2")){
    $(".navbar-toggler").removeClass("navbar-toggler2");
  }
  else{
    $(".navbar-toggler").addClass("navbar-toggler2");
  }
});

/* Partie 2 (changement selon l'heure)*/
  $(document).ready(function () {
    var d = new Date();
    var n = d.getHours();
  
    if(n < 17 || n < 8){
      $("body").addClass("bg2-dark");
      $(".bg-light").addClass("bg2-light");
      $(".text-muted").addClass("text2-muted");
      $(".masthead").addClass("masthead2");
      $(".portfolio-caption").addClass("portfolio2-caption");
      $(".container").addClass("container2");
      $(".nav-link").addClass("nav-link2");
      $(".phone-border").addClass("phone-border2");
      $(".contact-map-bg").addClass("contact-map2-bg2");
      $(".modal-content").addClass("modal-content2");
      $(".timeline-image").addClass("timeline-image2");
      $(".timeline").addClass("timeline2");
      $(".navbar-toggler").addClass("navbar-toggler2");
    }
  });

  


























  


  
















































/* copy/past test */

  $("#darkTrigger").click(function(){
    if ($("").hasClass("")){
      $("").removeClass("");
    }
    else{
      $("").addClass("");
    }
  });
  
  $(document).ready(function () {
    var d = new Date();
    var n = d.getHours();
  
    if(n > 17 || n < 8){
      $("").addClass("");
    }
  });