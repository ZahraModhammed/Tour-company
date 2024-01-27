import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../../node_modules/jquery/dist/jquery';
import "popper.js/dist/popper";
import "../sass/style.scss";
import '@fortawesome/fontawesome-free/js/all';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { Navigation, Pagination,Autoplay} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { validate } from 'webpack';


//loop for move between nav links elements
var link = document.querySelectorAll(".nav-link");
link.forEach(function (el){
    el.onclick = function(){
        link.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
});
 
// bring the current year
var year = document.getElementById("year").innerHTML = new Date().getFullYear();





  // jQuery function
  var $ = require('jquery');

$(document).ready(function(){
    // hide and show text
    $(".more").hide();
    $("#Btn").click(function(){
        if($(".more").is(":hidden") == true ){
            $(".more").show();
            $("#Btn").val("قراءة اقل")
            $("#dots").hide()
        }else{
            $(".more").hide();
            $("#Btn").val("قراءة المزيد") 
            $("#dots").show()
        }
    });
    
    // scroll Top function
    $(window).scroll(function(){
        if($(this).scrollTop() >= 200){
            $("#Up").show();
        }else{
            $("#Up").hide();
        }
    })
       
    $("#Up").click(function(){
      $("html,body").animate({scrollTop:0},600)
    }); 
   
})

// swiper code to move between images gallery
const mql = window.matchMedia("(max-width:991px)");
   
const changeslide = (slide) =>{
  
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination,Autoplay],
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
    },
    
     loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
}

const changeview = (e) =>{
  if(mql.matches){
    changeslide(1)
  }else{
    changeslide(3)
  }
}

changeview();

mql.onchange = (e) =>{
  changeview(e);
}
    
// function for validate form

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
