document.addEventListener('DOMContentLoaded', function() {
    //Navigation button click event to scroll to the respective section smoothly
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => 
    {
        button.addEventListener('click', function() 
        {
            const section = document.querySelector('.' + button.dataset.section);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
    //Slider functional
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let slideIndex = 0;
    const slidesToShow = 3;
    const totalSlides = slides.length;
    const maxSlideIndex = totalSlides - slidesToShow;
    //Display slides
    const showSlides = () => 
    {
        if (slideIndex > maxSlideIndex) 
            {
                slideIndex = maxSlideIndex;
            }
        if (slideIndex < 0) 
            {
                slideIndex = 0;
            }
        const offset = -slideIndex * (100 / slidesToShow);
        slider.style.transform = `translateX(${offset}%)`;
    };
    //Move to next slide
    const moveToNextSlide = () => 
    {
        if (slideIndex < maxSlideIndex) 
        {
            slideIndex++;
            showSlides();
        }
    };
    //Move to previous slide
    const moveToPrevSlide = () => 
    {
        if (slideIndex > 0) 
        {
            slideIndex--;
            showSlides();
        }
    };
    //Event listeners for slider buttons
    prevButton.addEventListener('click', moveToPrevSlide);
    nextButton.addEventListener('click', moveToNextSlide);

    //Auto-slide functionality to slide right every 10 seconds
    setInterval(moveToNextSlide, 10000);

    //Timer
    const countdownTimer = document.getElementById('countdown-timer');
    const stoopSaleDate = new Date('2024-08-01T14:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = stoopSaleDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = `${days}<span>days</span>`;
        document.getElementById('hours').innerHTML = `${hours}<span>hours</span>`;
        document.getElementById('minutes').innerHTML = `${minutes}<span>mins</span>`;
        document.getElementById('seconds').innerHTML = `${seconds}<span>secs</span>`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownTimer.innerHTML = "The stoop sale has started!";
        }
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    //Music Controls
    const music = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');
    const stopButton = document.getElementById('stop-music');
    //Play music
    playButton.addEventListener('click', () => 
    {
        music.play();
    });
    //Stop music
    stopButton.addEventListener('click', () => 
    {
        music.pause();
    });
    //Autoplay music on page load
    music.play().then(() => 
    {
        setTimeout(() => 
        {
            music.muted = false;
        }, 1000);
    }).catch(error => 
    {
        console.log("Autoplay was prevented by the browser.");
    });

    //Share Buttons
    const copyUrlButton = document.getElementById('copy-url');
    const shareFacebookButton = document.getElementById('share-facebook');
    const shareTwitterButton = document.getElementById('share-twitter');

    //Copy URL to clipboard
    copyUrlButton.addEventListener('click', () => 
    {
        navigator.clipboard.writeText(window.location.href).then(() => 
        {
            alert('URL copied to clipboard successfully! Thank you for willing to share!');
        }).catch(err => {
            console.error('Could nott copy text: ', err);
        });
    });
    //Share on Facebook
    shareFacebookButton.addEventListener('click', () => 
    {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    });
    //Share on Twitter
    shareTwitterButton.addEventListener('click', () => 
    {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank');
    });

    //Ensure slider is displayed properly on load
    showSlides();
});
