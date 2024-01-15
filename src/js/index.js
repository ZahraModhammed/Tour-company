import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../../node_modules/jquery/dist/jquery';
import "popper.js/dist/popper";
import "../sass/style.scss";
import '@fortawesome/fontawesome-free/js/all';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';



var link = document.querySelectorAll(".nav-link");


link.forEach(function (el){
    el.onclick = function(){
        link.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
});

var year = document.getElementById("year").innerHTML = new Date().getFullYear();


var $ = require('jquery');

var up = document.getElementById("#Up")

$(document).ready(function(){
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

const mql = window.matchMedia("(max-width:992px)");
   
const changeslide = (slide) =>{
  
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay:true,
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
