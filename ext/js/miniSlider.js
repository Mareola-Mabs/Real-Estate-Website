// Using The jQuery Library
$(document).ready(()=>{

        var properties__slider1 = $('#properties__slider1');
        var properties__slider2 = $('#properties__slider2');
        var properties__scroller;
        var properties__scroller1;
        const arr =[];
        const arr1 =[];

        properties__slider1.scrollLeft(properties__slider1.scrollLeft()+ 50000);
        properties__slider2.scrollLeft(properties__slider2.scrollLeft() + 50000);

        arr[0] = properties__slider1.scrollLeft();
        arr1[0] = properties__slider2.scrollLeft();

        setTimeout(()=>{
                                properties__slider1.scrollLeft(0);
                                properties__slider2.scrollLeft(0);
        arr[1] = properties__slider1.scrollLeft();
        arr1[1] = properties__slider2.scrollLeft();

        }, 1000);

        setInterval(() => {
                console.log(arr[1]);
                if (properties__slider1.scrollLeft() >= arr[1]){
                                        properties__slider1.scrollLeft(0);
                }

                else{
                                        properties__slider1.scrollLeft(properties__slider1.scrollLeft() + 150);
                }

        }, 4000);

        setInterval(() => {
                console.log(arr[1]);
                if (properties__slider2.scrollLeft() >= arr1[1]){
                                        properties__slider2.scrollLeft(0);
                }

                else{
                                        properties__slider2.scrollLeft(properties__slider2.scrollLeft() + 40);
                }

        }, 4000);


        $(window).resize(()=>{

                                
        properties__slider1.scrollLeft(properties__slider1.scrollLeft()+ 50000);
        properties__slider2.scrollLeft(properties__slider2.scrollLeft() + 50000);

        arr[0] = properties__slider1.scrollLeft();
        arr1[0] = properties__slider2.scrollLeft();

        setTimeout(()=>{
                                properties__slider1.scrollLeft(0);
                                properties__slider2.scrollLeft(0);
        arr[1] = properties__slider1.scrollLeft();
        arr1[1] = properties__slider2.scrollLeft();

        }, 1000);


        });



});
// End of jQuery Library
                
