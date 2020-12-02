(function () {
    let slides = $('.slider-inner');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        let currentSlide = $(slides[currentIndex]);
        let newSlide = $(slides[index]);

        currentSlide.removeClass('active');
        newSlide.addClass('active');

        currentIndex = index;
    }

    showSlide(0);

    $('.next').on('click', function () {
        showSlide(currentIndex + 1);
    });

    $('.prev').on('click', function () {
        showSlide(currentIndex - 1);
    });
})();



