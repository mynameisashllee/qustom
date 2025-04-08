// Show/hide header on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const logoImg = document.querySelector('.logo-img');
    
    if (window.scrollY > 100) {
        header.classList.add('visible');
        logoImg.style.height = '30px'; // Smaller logo in header
    } else {
        header.classList.remove('visible');
        logoImg.style.height = '40px'; // Default logo size
    }
});

// Case study tabs functionality
function openCaseStudy(studyId) {
    // Hide all case study contents
    const contents = document.getElementsByClassName('case-study-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    // Remove active class from all tabs
    const tabs = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Show the selected case study and mark its tab as active
    document.getElementById(studyId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        alert('There was a problem sending your message. Please try again later.');
        console.error('Error:', error);
    });
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JS to show text on click
const messages = [
    "Understanding your business goals and challenges.",
    "Conducting a thorough analysis of your current technical environments.",
    "Developing actionable recommendations aligned with your objectives.",
    "Assisting in executing the proposed solutions for maximum impact."
  ];
  
  function showText(index) {
    const textDiv = document.getElementById("timelineText");
    textDiv.style.opacity = 0;
    setTimeout(() => {
      textDiv.textContent = messages[index];
      textDiv.style.opacity = 1;
    }, 200);
  }
  