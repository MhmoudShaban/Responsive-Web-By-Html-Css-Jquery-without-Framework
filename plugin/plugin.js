$(document).ready(function () {
 
$("html").niceScroll({
  cursorcolor:"#00a8ff",
})

  // Start Scroll To Sections Navbar
  $("header nav li a").on("click",function(e){

    e.preventDefault()
    $("html, body").animate({
      scrollTop:$("#"+$(this).data("scroll")).offset().top -90
    },1000);
   
  })

 
  // change bgcolor For header during scrolling

    $(window).on("scroll",function(){
        if($(window).scrollTop()){
          $("header").addClass("bgc");
        }else{
          $("header").removeClass("bgc");
        }

        // Start button to top
        if($(window).scrollTop()>= 1000){
          $(".fas.fa-chevron-up").fadeIn(400)
        }else{
           $(".fas.fa-chevron-up").fadeOut(400)
        };
    

    })
     $(".fas.fa-chevron-up").click(function(e) {
      e.preventDefault();
        $("html ,body").animate({
           scrollTop:0
    }, 1000)
  })
  // End change bgcolor For header during scrolling
  // Start Toggle between grid and list view
    $('.grid-list i.fa-list').on("click",function(){
      $(".container-pro").removeClass("grid-view");
       $(".container-pro").addClass("list-view")
    })

     $('.grid-list i.fa-th-large').on("click",function(){
      $(".container-pro").removeClass("list-view");
      $(".container-pro").addClass("grid-view");
    })
  // End Toggle between grid and list view

  // Start Testmonials Tabs list
    $(".list-tab li").on("click",function(){

      $(this).addClass("active").siblings().removeClass("active");

      $(".cont-list > div").hide();

      $($(this).data("content")).fadeIn();
    })


  // End Testmonials Tabs list

  // Start our Team 
  var chevronleft = $(".ourTeam .fa-chevron-left");
  var chevronRight = $(".ourTeam .fa-chevron-right");
 
  function checTeam(){
    $(".ourTeam .myteam:first").hasClass("activ")? chevronleft.fadeOut(): chevronleft.fadeIn();
     $(".ourTeam .myteam:last").hasClass("activ")? chevronRight.fadeOut(): chevronRight.fadeIn();
  }
   checTeam()

  $(".ourTeam i").on("click",function(){
    if($(this).hasClass("fa-chevron-right")){
      $(".ourTeam .activ").fadeOut(100,function(){
        $(this).removeClass("activ").next(".myteam").addClass("activ").fadeIn();
         checTeam()
      });

    }else{
       $(".ourTeam .activ").fadeOut(100,function(){
        $(this).removeClass("activ").prev(".myteam").addClass("activ").fadeIn();
         checTeam()
      });

    }
    
  })
  // end our Team 
})