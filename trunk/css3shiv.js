$(function(){
$.getScript("vendor/jquery.jss.js",function(){
        if($.browser.mozilla){
            $.jss.addBehavior('border-radius', function(selector, value){
                    $(selector).each(function(){ this.style.MozBorderRadius=value})
                        });
        }else if($.browser.msie){
        }else if($.browser.safari){
             $.jss.addBehavior('border-radius', function(selector, value){
                     $(selector).each(function(){ this.style.WebkitBorderRadius=value})
                         });
         }

         $.jss.apply();
         })
         });

