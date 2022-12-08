/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';


$(document).click(function(){
    $.ajax({
        method:"POST",
        url:"http://localhost:8000/ok",
        data:{},
        success:function(res){
            // console.log(res);
        }
    });
    console.log("ok");
})

Echo.channel('my_chanel')
.listen('.my_event', (e) => {

    console.log(e);

});