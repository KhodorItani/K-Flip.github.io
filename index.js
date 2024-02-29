var TrandingSlider = new Swiper('.category-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  // cards

  // Get all elements with the class 'card__inner'
const cards = document.querySelectorAll('.card__inner');

// Function to flip the card
function flipCard(card) {
    // Check if the card is in a cooldown state
    if (!card.classList.contains('is-cooldown') && !card.classList.contains('is-flipping')) {
        // Toggle the 'is-flipped' class on the clicked card
        card.classList.toggle('is-flipped');
        
        // Set the flag to indicate that the card is in the process of flipping
        card.classList.add('is-flipping');

        // Play the associated audio when card is flipped
        const audioId = card.dataset.audio;
        const audio = document.getElementById(audioId);
        if (audio) {
            audio.play();
        }

        // Set a timeout to remove the 'is-flipped' class after a certain delay (e.g., 2 seconds)
        setTimeout(function () {
            card.classList.remove('is-flipped');

            // Set the cooldown state to prevent flipping and playing again until timeout period passes
            card.classList.add('is-cooldown');

            // Reset the flag after the cooldown period
            setTimeout(function () {
                card.classList.remove('is-cooldown');
                card.classList.remove('is-flipping'); // Reset the flag
            }, 0);
        }, 3000);
    }
}

// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', function () {
        flipCard(card);
    });
});


  
