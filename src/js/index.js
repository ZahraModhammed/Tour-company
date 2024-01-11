import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import "../sass/style.scss";
import '@fortawesome/fontawesome-free/js/all';
import { data } from 'jquery';


var link = document.querySelectorAll(".nav-link ");


link.forEach(function (el){
    el.onclick = function(){
        link.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
});

var year = document.getElementById("year").innerHTML = new Date().getFullYear();
