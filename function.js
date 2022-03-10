$('.conteiner-slide').slick({
    dots:true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false,
        responsive:[{
            breakpoint:768,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        }],
  });


  //js puro
  var menuBTN = document.querySelector('.itens-menu-mobile i');
  menuBTN.addEventListener('click', function(){
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.classList.contains('show')){
        menuMobile.classList.remove('show');
        menuMobile.classList.add('hide');
    }else{
        menuMobile.classList.remove('hide');
        menuMobile.classList.add('show');
    }
    
  });
  