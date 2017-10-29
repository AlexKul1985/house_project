$( document ).ready(function() {
$('.block-photo')
            .slick({
                infinite: false,
                slidesToShow: 4,
                draggable:false,
              variableWidth: false,
              nextArrow: '.nextArrow',
                prevArrow: '.prevArrow',

              responsive: [
                            {
                              breakpoint: 900,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                variableWidth: false
                                
                              }
                            },
                           
                             {
                              breakpoint: 600,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                variableWidth: false
                              }
                            },
                            {
                              breakpoint: 580,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                variableWidth: false
                              }
                            }
                            
                          ]
            });

            $('.reviews_list').slick({
               autoplay: true,
                autoplaySpeed: 5000,
                nextArrow:'.next_review',
                prevArrow:'.prev_review',
                dots: true,
                speed: 1000,
                infinite: false,
                responsive: [
                        {
                          breakpoint: 768,
                          settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                          }
                        }
                    ]

            });
    
$('html,body').css({
    scrollTop:0
});
$('#Capa_1').fadeIn(4000);
   
var  thisScroll;

var svg = new Walkway({
                  selector: '#Capa_1',
                  duration: '4000',
                  redrawOnFocus:true
                  
                });
                svg.draw();  

    var timer;
    
    var stopF = true;
    $(window).on('scroll',function() {
   
     if($(this).scrollTop() > 0) {
             $('.top_header').fadeOut(400);
         }
         
    

        
     
  
    if(stopF) {
        clearTimeout(timer);
    }
    timer = setTimeout(stopScroll,500);

  scrollTop();
    });
function stopScroll() {
  $('#Capa_1').css('display','none');
    clearTimeout(timer);
    thisScroll = $(document).scrollTop();


    if($(window).scrollTop()>=0) {
         setTimeout(function(){
             $('.top_header').fadeIn(400,function(){
                 $('#Capa_1').css('display','block');
                 var svg = new Walkway({
                  selector: '#Capa_1',
                  duration: '4000',
                  redrawOnFocus:true
                  
                });
                svg.draw();  
             });
    },400);
       
    }
    
     
    console.log('остановка скролла!');
    }
    function scrollTop(){
        if($(document).scrollTop() < thisScroll) {
        console.log('Скроллинг вверх!');
    
}
    }
   
var elem = $('.icon-arrow_down');
var elem_up = $('.icon-arrow_up');
var elem_fix = $('.opacity1');
var id1;
var id2;
var id3;
function elemPulse(time,elem) {
    id1 = setInterval(function(){
    if(elem.hasClass('bounce')) {
        elem.removeClass('bounce');
    }
    else {
        elem.addClass('bounce');
    }

},time);
}


// elemPulse(2000,elem);
elem.on('click',function(){
    var sentence_elem = $('#sentence');
    var pos_ses = sentence_elem.offset().top;
        clearInterval(id1);
        elem.animate({
        top:  '140%'

        },1000,$.bez([0,.54,1,-1.19]),function(){
            $('html,body').stop(true,true).animate({
                scrollTop: pos_ses-120
            },1000);
            setTimeout(function(){
                elem.addClass('bounceOutRight');
            },500);
            setTimeout(function(){
                elem.css({
                  top:  '700px'  
                }).removeClass('bounceOutRight');
            },800);
            // setTimeout(function(){
            //    elemPulse(2000,elem); 

            // },900);
            
        });
        
});

$(window).on('scroll',function(){

    

    elem_up.css({
        opacity:'0'
        
        
    });

if(1) { clearTimeout(id2);}
    id2 = setTimeout(function(){
        setTimeout(function(){
            if($(window).scrollTop()>=400) {
                elem_up.css({
                opacity:'0'

            }).stop(true,true).animate({
                top: elem_fix.offset().top+100,
                opacity:'1'
            },4000,$.bez([.16,.68,.54,.76]));

            }
            else if($(window).scrollTop()<400) {
                 elem_up.fadeIn(400,function(){
                    $(this).css({
                top:'-100px',
                color:'#222'

                    });
                
                 });
            }
            
        },1200);
    },200);
});
elem_up.on('click',function(){
$('html,body').stop(true,true).animate({
    scrollTop:0
},1200,function(){
elem_up.css({
    color:'#222'
});
});
});






    
elem_up.on('mouseover',function(){
    elem_up.css({
        color:'#0E6594'
    });
    
}); 
elem_up.on('mouseout',function(){
    elem_up.css({
        color:'#222'
    });
    
}); 

   
var btn_menu = $('#btn_menu');
var right_move = $('.right_move');
var left_move = $('.left_move');
var flag_effect = false;
var menu_item = $('.menu_item');
var block_menu = $('.block_menu');
var video_menu = document.querySelector('.video_menu');
var $video_menu = $('.video_menu');

var flag_menu_btn = false;
btn_menu.on('click',function(){
    if(flag_menu_btn) return;
    flag_menu_btn = true;
    if(flag_effect) {
        video_menu.pause();
        $video_menu.css({
            display:'none'
        });

block_menu.css({
            display:'none'
         });
        menu_item.css({
        opacity:'0'
    });
        btn_menu.removeClass('cross');
right_move.animate({width:'0%',
                    left:'100%'
                    },300,$.bez([.47,.44,.48,.45]));
left_move.animate({width:'0%'},300,$.bez([.47,.44,.48,.45]),function(){
    flag_effect = false;
    flag_menu_btn = false;
    right_move.css({
            opacity:'1'
        });
         left_move.css({
            opacity:'1'
        });
    

});
    }
    else {
       
        
         block_menu.css({
            display:'block'
         })
        btn_menu.addClass('cross');
             right_move.animate({width:'100%',
                    left:'50%'
                    },300,$.bez([.47,.44,.48,.45]));
             left_move.animate({width:'50%'},300,$.bez([.47,.44,.48,.45]),function(){
            flag_effect = true;
            $video_menu.css({
            display:'block'
        });
             video_menu.play();
             right_move.animate({
                opacity:'0.65'
             },1200);
             left_move.animate({
                opacity:'0.65'
             },1200);
            id_menu = setTimeout(function(){
                    menu_item.animate({opacity:'1'},800,function(){
                        flag_menu_btn = false;
                    });
            },300);
});

    }



});


var menu_item__link = $('.menu_item__link');

menu_item__link.on('click',function(e){
    e.preventDefault();
    var attr_id = $(this).attr('href');
    var elem_h = $(attr_id.toString());
    var px_position = elem_h.offset().top;

     video_menu.pause();
        $video_menu.css({
            display:'none'
        });

block_menu.css({
            display:'none'
         });
        menu_item.css({
        opacity:'0'
    });
        btn_menu.removeClass('cross');
right_move.animate({width:'0%',
                    left:'100%'
                    },300,$.bez([.47,.44,.48,.45]));
left_move.animate({width:'0%'},300,$.bez([.47,.44,.48,.45]),function(){
    setTimeout(function(){
          $('html,body').animate({
        scrollTop:px_position-120
        },1500,function(){
        flag_effect = false;
        flag_menu_btn = false;
        right_move.css({
            opacity:'1'
        });
         left_move.css({
            opacity:'1'
        });
    });

    },500);
       
    

});
    

});

var img_link = $('.block-photo li a');
var body_el = $('body');
var hidden_bg_close = $('.hidden_bg, .hidden_bg .close');
var hidden_bg = $('.hidden_bg');
var hidden_bg_plan_close = $('.hidden_bg_plan, .hidden_bg_plan .close');
var hidden_bg_plan = $('.hidden_bg_plan');

var plan = $('.plan a img');

var flag_plan = false;
var id_plan_link;
var id_plan_bg;
var id_img;
var big_img; 

       
        img_link.on('click',function(){
            var this_attr = $(this).children().attr('src');
            
            body_el.append('<img class = "img_style" src = ' +this_attr+ ' >');
            big_img = $('.img_style');
            hidden_bg.fadeIn(400);
            id_img = setTimeout(function(){

            big_img.fadeIn(400,function(){
                clearTimeout(id_img);
            });
            },1000);
        
        });
        hidden_bg.on('click',function(){
            $(this).fadeOut(600);
            big_img.fadeOut(600,function(){

            big_img.remove();
            });
        });
            
plan.on('click',function(){
    if(flag_plan) return;
    flag_plan = true;
    var plan_i = $(this);
    plan_i.fadeOut(700);
    id_plan_link = setTimeout(function(){
        plan_i.addClass('plan_big');
        plan_i.fadeIn(1000,function(){
            clearTimeout(id_plan_link);
        });
    },1000);
    hidden_bg_plan.fadeIn(800);
   

});
hidden_bg_plan.on('click',function(){
   flag_plan = false;

plan.fadeOut(500,function(){
        hidden_bg_plan.fadeOut(500);

        plan.removeClass('plan_big');
      id_plan_bg = setTimeout(function(){
                plan.fadeIn(500,function(){
                    clearTimeout(id_plan_bg);
                });
            },300);
       });
});

$('.nextArrow,.prevArrow').on('mouseover',function(){
     $('.block-photo li .zoom_plus').css({
opacity:'1'
     });
    console.log('hover');
});
$('.nextArrow,.prevArrow').on('mouseout',function(){
     $('.block-photo li .zoom_plus').css({
opacity:'0'
     });
    console.log('hover');
});
$('.block-photo li').on('mouseover',function(){
     $(this).children('.zoom_plus').css({
opacity:'1'
     });
    console.log('hover');
});
$('.block-photo li').on('mouseout',function(){
     $(this).children('.zoom_plus').css({
opacity:'0'
     });
    console.log('hover');
});
var arr_op = ['','-'];
function func(){
    var rand = Math.floor(Math.random()*2);
    return arr_op[rand];
}

function getRandomNewNumber(number){
    //var mass_obj = mass_obj || number;
    //console.log(mass_obj);
return Math.floor(Math.random()*number);    
} 
function isValueToNewArray(valueX,valueY,arr){
    
    for(var j=0; j<arr.length; j++){
        if((arr[j].x == valueX) && (arr[j].y == valueY)){
            return true;

        }
    }
    return false;
}
var randNumberForDef1 = [100,200,30,40];
var randNumberForDef2 = [4,6,7,5,3];
function generateArrRandObjects(string,randNumberForDef){
    var number = string.length;
    var rand_x;
    var rand_y;
    var rand_def_x;
    var rand_def_y;
    var arr = [];
    if(number == 1){
        rand_def_x = getRandomNewNumber(randNumberForDef.length);
                rand_def_y = getRandomNewNumber(randNumberForDef.length);
                arr.push({
                x:func()+rand_x*randNumberForDef[rand_def_x],
                y:func()+rand_y*randNumberForDef[rand_def_y]
            });
                return arr;
    }
    if(arr.length == 0) {
        while(arr.length != 1){
            rand_x = getRandomNewNumber(number);
            rand_y = getRandomNewNumber(number);
            
            if(rand_x == 0 && rand_y == 0){
                continue;
            }
            else {
                rand_def_x = getRandomNewNumber(randNumberForDef.length);
                rand_def_y = getRandomNewNumber(randNumberForDef.length);
                arr.push({
                x:func()+rand_x*randNumberForDef[rand_def_x],
                y:func()+rand_y*randNumberForDef[rand_def_y]
            });
            }
            
        }
    
    }

    while(arr.length != number){
        rand_x = getRandomNewNumber(number);
        rand_y = getRandomNewNumber(number);
        rand_def_x = getRandomNewNumber(randNumberForDef.length);
        rand_def_y = getRandomNewNumber(randNumberForDef.length);
        if(!isValueToNewArray(rand_x*rand_def_x,rand_y*rand_def_y,arr)) {

        arr.push({
        x:func()+rand_x*randNumberForDef[rand_def_x],
        y:func()+rand_y*randNumberForDef[rand_def_y]
    });
        }
        else continue;

    }
  
  return arr;

}

var titles = $('.lozung');
var text = titles.html();
var new_arr = generateArrRandObjects(text,randNumberForDef1);
var new_arr_pre_and = generateArrRandObjects(text,randNumberForDef2);

console.log(new_arr);





    
    titles.remove();
    console.log(text);
    var b = $('.wrap_lozung');
    var h2 = $('<h1 class="lozung"></h1>');
    h2.prependTo(b);
    for(var t1=0; t1<text.length; t1++) {
        if(text[t1] === " ") {
        $('<span class="two_elem">&nbsp;</span>').appendTo(h2);
            
        }
        else {
            $('<span class="two_elem">'+text[t1]+'</span>').appendTo(h2);
        }
    }



    var elem_text = $('h1.lozung span.two_elem');


for(var k1=0; k1<new_arr.length; k1++) {
    elem_text.eq(k1).css({
transform:'translate('+parseInt(new_arr[k1].x)+'px,'+parseInt(new_arr[k1].y) +'px) rotate('+func()+'175deg)'


});
}
var new_titles = $('.lozung');
setTimeout(function(){
elem_text.css({
    transform:"translate(0,0) rotate(0deg)",
    opacity:'1'
    
});
    new_titles.animate({
        opacity:'1'
    },3000)
    
    
},1000);


var id_h1;
$(window).on('scroll',function(){
for(var n1=0; n1<new_arr.length; n1++) {
    elem_text.eq(n1).css({
transform:'translate('+parseInt(new_arr[n1].x)+'px,'+parseInt(new_arr[n1].y) +'px) rotate('+func()+'175deg)',
transition:'transform 5s, opacity 5s',
opacity:'0'


});
}

if(true){
    clearTimeout(id_h1);

}

id_h1 = setTimeout(function(){
    setTimeout(function(){
        elem_text.css({
    transform:"translate(0,0) rotate(0deg)",
    opacity:'1',
    transition:'transform 3s,opacity 3s'
    
    
});
    },3000);
    
console.log('Остановка!');
},200);
});
var show_review = $('.show_review');
var b_rev = $('body');
var img_rev;
var hidden_bg_rew= $('.hidden_bg_plan');
      show_review.each(function(i){

        $(this).on('click',function(){

            hidden_bg_rew.fadeIn(400);
            img_rev = $('<img src ="img/rewiews/' + (i+1) +'.png" class="img_review" alt="Отзыв № '+(i+1)+'"/>');
           img_rev.appendTo(b_rev);
           img_rev.fadeIn(400);
        })
      });  
      hidden_bg_rew.on('click',function(){
        $(this).fadeOut(400);
        img_rev.fadeOut(400,function(){
           img_rev.remove(); 
        });
      });

});

