
var slides = document.querySelectorAll('.main__bg__slides .main__bg__slides-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
function nextSlide() {
    goToSlide(currentSlide + 1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'main__bg__slides-slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'main__bg__slides-slide showing';
}

// testimotionals____________
function setActiveSlides(slides, index, direction) {
    if (direction == -1) {
        prev(slides, index, direction);
    } else {
        next(slides, index, direction);
    }
}

function getPrevNexSlides(slides, index) {
    var length = slides.length;

    return {
        prevIndex: (index - 1) > -1 ? index - 1 : length - 1,
        nextIndex: (index + 1) === length ? 0 : index + 1
    }
}

function getCurrentSlide(length, index) {
    return index === length
        ? 0
        : index === -1
            ? length - 1
            : index;
}

function prev(slides, activeSlide, direction) {
    var activeSlides = getPrevNexSlides(slides, activeSlide);

    var currentSlide = getCurrentSlide(slides.length, activeSlide + direction);
    var nextPrevSlides = getPrevNexSlides(slides, currentSlide);

    $(slides[activeSlides.nextIndex]).removeClass('nextTestimonials');
    $(slides[activeSlide]).addClass('nextTestimonials').removeClass('activeTestimonials');
    $(slides[activeSlides.prevIndex]).addClass('activeTestimonials').removeClass('prevTestimonials');
    $(slides[nextPrevSlides.prevIndex]).addClass('prevTestimonials');
}

function next(slides, activeSlide, direction) {
    var activeSlides = getPrevNexSlides(slides, activeSlide);

    var currentSlide = getCurrentSlide(slides.length, activeSlide + direction);
    var nextPrevSlides = getPrevNexSlides(slides, currentSlide);

    $(slides[activeSlides.prevIndex]).removeClass('prevTestimonials');
    $(slides[activeSlide]).addClass('prevTestimonials').removeClass('activeTestimonials');
    $(slides[activeSlides.nextIndex]).addClass('activeTestimonials').removeClass('nextTestimonials');
    $(slides[nextPrevSlides.nextIndex]).addClass('nextTestimonials');
}

function InitTestimonialSlider() {
    var slides = document.querySelectorAll('.down__review__crl .down__review__crl-slide');
    var activeSlide = 0;

    setActiveSlides(slides, slides.length - 1, 1);

    $(document).on('click', '#prev', function () {
        setActiveSlides(slides, activeSlide, -1);
        activeSlide = getCurrentSlide(slides.length, activeSlide - 1);
    });
    $(document).on('click', '#next', function () {
        setActiveSlides(slides, activeSlide, 1);
        activeSlide = getCurrentSlide(slides.length, activeSlide + 1);
    });
}

InitTestimonialSlider();

