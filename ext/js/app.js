/*Built With Vanilla JavaScript in Conjunction With jquery-3.6.0.slim*/

/*jQuery Ready Function*/
$('document').ready(function(){
            /*For Mobile Tap-Highlight-Color*/
            $('body').css("-webkit-tap-highlight-color", "transparent");

            /*For Close and Open of Chat*/
            $('#close__chat').on("click", ()=>{
                $('.main__chat').fadeOut("fast");
                $('.open__chat').removeClass("chat__shadow");
            });

            $('.open__chat').on("click", ()=>{
                $('.main__chat').fadeToggle("fast");
                $('.open__chat').toggleClass("chat__shadow");
            });

            $(document).click(function() {
                var container = $(".main__chat");
                var open__chat = $(".open__chat");
                if (!container.is(event.target) && !container.has(event.target).length && !open__chat.is(event.target) && !open__chat.has(event.target).length) {
                    container.fadeOut("fast");
                    $('.open__chat').removeClass("chat__shadow");
                }

                

            });

            /*End of Close and Open of Chat*/

            /*For Scroll Button Onscroll*/

            $(window).on("scroll", ()=>{
                if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20){
                    $('.nav').css({"background": "rgba(51, 51, 51, 0.98)", "borderBottom": "1px rgba(51, 51, 51, 0.98) solid", "borderTop": "1px rgba(51, 51, 51, 0.98) solid"});
                    
                    // $('.nav__menu-btn1').hover(()=>{
                    //     $('.nav__menu-btn1').css("border", "1px white solid");
                    // });

                    $('.main__scrolltop-container').css({"transform": "rotate("+document.documentElement.scrollTop+"deg)", "right": "15px",});
                    $('.main__scrolltop').css("right", "15px");
                    $('#logo').attr("src", "ext/images/logoc1.png");
                }

                else{
                    $('.nav').css({"background": "", "borderBottom": "", "borderTop": ""});

                    $('.nav__menu-btn1').hover(()=>{
                        $('.nav__menu-btn1').css("border", "");
                    });

                    $('#logo').attr("src", "ext/images/logoc.png");

                    $('.main__scrolltop-container').css("right", "-50px");
                    $('.main__scrolltop').css("right", "-50px");
                }
            });

            // For Scroll Button Onclick
            $('.main__scrolltop').on("click", ()=>{
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            });


            // For Scroll Percentage
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                var docHeight = $(document).height();
                var winHeight = $(window).height();
                var scrollPercent = (scrollTop) / (docHeight - winHeight);
                var scrollPercentRounded = Math.round(scrollPercent*100);

                $('.main__scroll-percentage').html(scrollPercentRounded +"%");
            });
            // End of Scroll Percentage

            // For Reload Scroll
            if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20){
                $('.nav').css({"background": "rgba(51, 51, 51, 0.98)", "borderBottom": "1px rgba(51, 51, 51, 0.98) solid", "borderTop": "1px rgba(51, 51, 51, 0.98) solid"});
                
                // $('.nav__menu-btn1').hover(()=>{
                //     $('.nav__menu-btn1').css("border", "1px white solid");
                // });

                $('.main__scrolltop-container').css({"transform": "rotate("+document.documentElement.scrollTop+"deg)", "right": "15px",});
                $('.main__scrolltop').css("right", "15px");
            }

            else{
                $('.nav').css({"background": "", "borderBottom": "", "borderTop": ""});

                $('.nav__menu-btn1').hover(()=>{
                    $('.nav__menu-btn1').css("border", "");
                });

                $('.main__scrolltop-container').css("right", "-50px");
                $('.main__scrolltop').css("right", "-50px");
            }
            // End of Reload Scroll

            /*End of Scroll Button*/

            /*For Mobile Nav Hidden on PC*/
            $('.nav__menu-btn1').on("click", ()=>{
                $('.nav__menu-btn1').toggleClass("mobile__border");
                $('.main__mobile-nav').toggleClass("mobile__hide");
                $('.nav').toggleClass("mobile__background");
            });
            /*End of Mobile Nav*/

            /*For Onclick of Property Slider Link*/
            $('.main__properties-link-1').click(()=>{
                $('.main__properties-link-1').removeClass("change__color");
                $('.main__properties-link-2').removeClass("change__color1");
            });

            $('.main__properties-link-2').click(()=>{
                $('.main__properties-link-2').addClass("change__color1");
                $('.main__properties-link-1').addClass("change__color");
            });
            /*End of Onclick of Property Slider Link*/



    
});
/*End of jQuery Ready*/