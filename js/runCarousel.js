$('.carousel').carousel({
    interval: 4500
});

//i is used to track the current position in the slider
//iMax is how many total events we have in the slider
var i = 1, iMax = $(".sliderData").length;


//Could use slide.bs.carousel or slid.bs.carousel (slide happens before the event and slid happens after)
$('.carousel').on('slide.bs.carousel', function changeEventInformation(sliderInformation) {
    "use strict";
    switch (sliderInformation.direction) {
    case "left":
        if (i < iMax) {
            $('#sliderData' + i).fadeOut('medium', function returnNextSliderInformation() {
                i++;
                $('#sliderData' + i).fadeIn('medium');
            });
        } else {
            $('#sliderData' + i).fadeOut('medium', function returnFirstSliderInformation() {
                i = 1; //since we have exceeded the number of items we have, reset to the first and continue looping
                $('#sliderData' + i).fadeIn('medium');
            });
        }
        break;
    case "right":
        if (i > 1) {
            $('#sliderData' + i).fadeOut('medium', function returnPreviousSliderInformation() {
                i--;
                $('#sliderData' + i).fadeIn('medium');
            });
        } else {
            $('#sliderData' + i).fadeOut('medium', function returnLastSliderInformation() {
                i = iMax;  //since we have gotten back to the first item we have, reset to the last item and continue looping
                $('#sliderData' + i).fadeIn('medium');
            });
        }
        break;
    default:
        alert("You moved the slider a direction other than left or right. We aren't sure how you did this though...");
    } //end switch statement
});
