/*Built With Vanilla JavaScript in Conjunction With jquery-3.6.0.slim*/
/*jQuery Ready Function*/
$(document).ready(function(){

    /*For The Slider*/
    /*Declaring Useful Variables*/
    var a = 0; //used;
    var b = 0; //used;
    var c  = 0;
    var d = 0;
    var e = 0;
    
    const video1 = $('#header__video-one');
    const video2 = $('#header__video-two');
    const video3 = $('#header__video-three');
    const video4 = $('#header__video-four');
    const box1 = $('.header__mini-text-container-one');
    const box2 = $('.header__mini-text-container-two');
    const box3 = $('.header__mini-text-container-three');
    const box4 = $('.header__mini-text-container-four');

    const cntrl1 = $('.header__control-texts-one');
    const cntrl2 = $('.header__control-texts-two');
    const cntrl3 = $('.header__control-texts-three');
    const cntrl4 = $('.header__control-texts-four');

    const cntrl__btn1 = $('.cntrl__btn1');
    const cntrl__btn2 = $('.cntrl__btn2');
    /*End of Declaring Useful Variables*/

    /*For Automatic Slide*/
    setInterval(()=>{
        a++;
        console.log(a);
        switch (true){
            case a == 1:
                video1.slideUp(1000);
                video2.slideDown(1000);
                video3.slideUp(1000);
                video4.slideUp(1000);
                box1.css("transform", "translateX(100%)");
                box1.css("opacity", "0%");
                box2.css("transform", "translateX(-100%)");
                box2.css("opacity", "100%");
                box3.css("transform", "translateX(-100%)");
                box4.css("transform", "translateX(-200%)");
                cntrl1.css("transform", "translateX(109.2%)");
                cntrl2.css("transform", "translateX(-109.2%)");
                cntrl3.css("transform", "translateX(-109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;
            case a == 2:
                video2.slideUp(1000);
                video3.slideDown(1000);
                video1.slideUp(1000);
                video4.slideUp(1000);
                box2.css("transform", "translateX(0)");
                box2.css("opacity", "0%");
                box3.css("transform", "translateX(-200%)");
                box3.css("opacity", "100%");
                box1.css("transform", "translateX(100%)");
                box4.css("transform", "translateX(-200%)");
                cntrl2.css("transform", "translateX(0)");
                cntrl3.css("transform", "translateX(-218.4%)");
                cntrl1.css("transform", "translateX(109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;
            case a == 3:
                video3.slideUp(1000);
                video4.slideDown(1000);
                video1.slideUp(1000);
                video2.slideUp(1000);
                box3.css("transform", "translateX(-100%)");
                box3.css("opacity", "0%");
                box4.css("transform", "translateX(-300%)");
                box4.css("opacity", "100%");
                box1.css("transform", "translateX(100%)");
                box2.css("transform", "translateX(0)");
                cntrl3.css("transform", "translateX(-100%)");
                cntrl4.css("transform", "translateX(-327.6%)");
                cntrl1.css("transform", "translateX(109.4%)");
                cntrl2.css("transform", "translateX(0)");
            case a == 4:
                a = 0;
                video4.slideUp(1000);
                video1.slideDown(1000);
                video2.slideUp(1000);
                video3.slideUp(1000);
                box1.css("transform", "translateX(0)");
                box1.css("opacity", "100%");
                box2.css("transform", "translateX(0)");
                box2.css("opacity", "0%");
                box3.css("transform", "translateX(-100%)");
                box3.css("opacity", "0%");
                box4.css("transform", "translateX(-200%)");
                box4.css("opacity", "0%");
                cntrl1.css("transform", "translateX(0)");
                cntrl2.css("transform", "translateX(0)");
                cntrl3.css("transform", "translateX(-109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;
        }
 
    }, 11000);
    /*End of Automatic Slide*/

    /*For Manual Slide*/
    cntrl__btn1.on("click", ()=>{
        a++;
        cntrl__btn1.toggleClass("rotate__btns");
        switch (true){
            case a == 1:
                video1.slideUp(1000);
                video2.slideDown(1000);
                video3.slideUp(1000);
                video4.slideUp(1000);
                box1.css("transform", "translateX(100%)");
                box1.css("opacity", "0%");
                box2.css("transform", "translateX(-100%)");
                box2.css("opacity", "100%");
                box3.css("transform", "translateX(-100%)");
                box3.css("opacity", "0%");
                box4.css("transform", "translateX(-200%)");
                box4.css("opacity", "0%");
                cntrl1.css("transform", "translateX(109.2%)");
                cntrl2.css("transform", "translateX(-109.2%)");
                cntrl3.css("transform", "translateX(-109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;
            case a == 2:
                video2.slideUp(1000);
                video3.slideDown(1000);
                video1.slideUp(1000);
                video4.slideUp(1000);
                box2.css("transform", "translateX(0)");
                box2.css("opacity", "0%");
                box3.css("transform", "translateX(-200%)");
                box3.css("opacity", "100%");
                box1.css("transform", "translateX(100%)");
                box1.css("opacity", "0%");
                box4.css("transform", "translateX(-200%)");
                box4.css("opacity", "0%");
                cntrl2.css("transform", "translateX(0)");
                cntrl3.css("transform", "translateX(-218.4%)");
                cntrl1.css("transform", "translateX(109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;
            case a == 3:
                video3.slideUp(1000);
                video4.slideDown(1000);
                video1.slideUp(1000);
                video2.slideUp(1000);
                box3.css("transform", "translateX(-100%)");
                box3.css("opacity", "0%");
                box4.css("transform", "translateX(-300%)");
                box4.css("opacity", "100%");
                box1.css("transform", "translateX(100%)");
                box1.css("opacity", "0%");
                box2.css("transform", "translateX(0)");
                box2.css("opacity", "0%");
                cntrl3.css("transform", "translateX(-100%)");
                cntrl4.css("transform", "translateX(-327.6%)");
                cntrl1.css("transform", "translateX(109.4%)");
                cntrl2.css("transform", "translateX(0)");
            break;
            case a == 4:
                a = 0;
                video4.slideUp(1000);
                video1.slideDown(1000);
                video2.slideUp(1000);
                video3.slideUp(1000);
                box1.css("transform", "translateX(0)");
                box1.css("opacity", "100%");
                box2.css("transform", "translateX(0)");
                box2.css("opacity", "0%");
                box3.css("transform", "translateX(-100%)");
                box3.css("opacity", "0%");
                box4.css("transform", "translateX(-200%)");
                box4.css("opacity", "0%");
                cntrl1.css("transform", "translateX(0)");
                cntrl2.css("transform", "translateX(0)");
                cntrl3.css("transform", "translateX(-109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;
        }

    });

    cntrl__btn2.on("click", ()=>{
        a--;
        cntrl__btn2.toggleClass("rotate__btns");
        switch (true){
            case a == -1:
                a = 3;
                video1.slideUp(1000);
                video4.slideDown(1000);
                video2.slideUp(1000);
                video3.slideUp(1000);
                box3.css("transform", "translateX(-100%)");
                box3.css("opacity", "0%");
                box4.css("transform", "translateX(-300%)");
                box4.css("opacity", "100%");
                box1.css("transform", "translateX(100%)");
                box1.css("opacity", "0%");
                box2.css("transform", "translateX(0)");
                box2.css("opacity", "0%");
                cntrl3.css("transform", "translateX(-100%)");
                cntrl4.css("transform", "translateX(-327.6%)");
                cntrl1.css("transform", "translateX(109.4%)");
                cntrl2.css("transform", "translateX(0)");
            break;
            case a == 0:
                video4.slideUp(1000);
                video1.slideDown(1000);
                video2.slideUp(1000);
                video3.slideUp(1000);
                box1.css("transform", "translateX(0)");
                box1.css("opacity", "100%");
                box2.css("transform", "translateX(0)");
                box2.css("opacity", "0%");
                box3.css("transform", "translateX(-100%)");
                box3.css("opacity", "0%");
                box4.css("transform", "translateX(-200%)");
                box4.css("opacity", "0%");
                cntrl1.css("transform", "translateX(0)");
                cntrl2.css("transform", "translateX(0)");
                cntrl3.css("transform", "translateX(-109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;
            case a == 1:
                video1.slideUp(1000);
                video2.slideDown(1000);
                video3.slideUp(1000);
                video4.slideUp(1000);
                box1.css("transform", "translateX(100%)");
                box1.css("opacity", "0%");
                box2.css("transform", "translateX(-100%)");
                box2.css("opacity", "100%");
                box3.css("transform", "translateX(-100%)");
                box3.css("opacity", "0%");
                box4.css("transform", "translateX(-200%)");
                box4.css("opacity", "0%");
                cntrl1.css("transform", "translateX(109.2%)");
                cntrl2.css("transform", "translateX(-109.2%)");
                cntrl3.css("transform", "translateX(-109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;
            case a == 2:
                video2.slideUp(1000);
                video3.slideDown(1000);
                video1.slideUp(1000);
                video2.slideUp(1000);
                box2.css("transform", "translateX(0)");
                box2.css("opacity", "0%");
                box3.css("transform", "translateX(-200%)");
                box3.css("opacity", "100%");
                box1.css("transform", "translateX(100%)");
                box1.css("opacity", "0%");
                box4.css("transform", "translateX(-200%)");
                box4.css("opacity", "0%");
                cntrl2.css("transform", "translateX(0)");
                cntrl3.css("transform", "translateX(-218.4%)");
                cntrl1.css("transform", "translateX(109.2%)");
                cntrl4.css("transform", "translateX(-218.4%)");
            break;


            
        }
    });
    /*End of Manual Slide*/
    
    /*For Property Slider*/
    // setInterval(()=>{
    //     $('#properties__slider1').scrollLeft($('#properties__slider1').scrollLeft() + 150);
    //     $('#properties__slider2').scrollLeft($('#properties__slider2').scrollLeft() + 60);
    // }, 4000);

    /*End of Property Slider*/
    
//     if (properties__slider1.scrollLeft == properties__scroller1){
//         properties__slider1.scrollLeft += 150;
// }

// else if (properties__slider1.scrollLeft == properties__scroller){
// properties__slider1.scrollLeft -= 150;
// }

    
    
});


/*End of jQuery Ready*/