/* filepath: /c:/Users/user/Desktop/airbnb/script.js */
document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('bookingModal');
      const btn = document.getElementById('openModalBtn');
      const span = document.getElementsByClassName('close')[0];
      const form = document.getElementById('bookingForm');
  
      btn.onclick = () => {
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
      }
  
      span.onclick = () => {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  
      window.onclick = (event) => {
          if (event.target == modal) {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto';
          }
      }
  
      form.onsubmit = (e) => {
          e.preventDefault();
          alert('Booking submitted successfully!');
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
          form.reset();
      }
  });



  /* filepath: /c:/Users/user/Desktop/airbnb/script.js */
document.addEventListener('DOMContentLoaded', () => {
    const detailBtns = document.querySelectorAll('.book-btn');
    const modal = document.getElementById('roomDetailModal');
    const closeBtn = document.querySelector('.close-detail');
    const mainImage = document.getElementById('mainRoomImage');
    const thumbnails = document.querySelectorAll('.thumb');

    // Define image paths for each room
    const roomImages = {
        'Luxury Ocean Suite': {
            main: 'img/room1.jpeg',
            details: ['img/room1-1.jpeg', 'img/room1-2.jpeg', 'img/room1-3.jpeg']
        },
        'Garden Villa': {
            main: 'img/room2.jpeg',
            details: ['img/room2-1.jpeg', 'img/room2-2.jpeg', 'img/room2-3.jpeg']
        },
        'Beach Bungalow': {
            main: 'img/room5.jpeg',
            details: ['img/room5-1.jpeg', 'img/room5-2.jpeg', 'img/room5-3.jpeg']
        }
        // Add more rooms as needed
    };

    detailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.room-card');
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal functionality
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Thumbnail click functionality
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});

/* filepath: /c:/Users/user/Desktop/airbnb/script.js */
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollPosition = 0;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        // Determine scroll direction
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
            // Scrolling down & past 100px from top
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollPosition = currentScrollPosition;
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968 && isMenuOpen) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            isMenuOpen = false;
            document.body.style.overflow = 'auto';
        }
    });
});

/* filepath: /c:/Users/user/Desktop/airbnb/script.js */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = isMenuOpen ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.menu-toggle')) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            isMenuOpen = false;
            document.body.style.overflow = 'auto';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968 && isMenuOpen) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            isMenuOpen = false;
            document.body.style.overflow = 'auto';
        }
    });
});


