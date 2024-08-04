const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const faBars = document.querySelector('.fa-bars');
const faTimes = document.querySelector('.fa-times');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    faBars.style.display = faBars.style.display === 'none' ? 'block' : 'none';
    faTimes.style.display = faTimes.style.display === 'none' ? 'block' : 'none';
});


// Smooth scrolling on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})


  // JavaScript to handle active link switching
 // Function to handle scroll and set active link
 document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); // सारे सेक्शन को चुनना
    const navLinks = document.querySelectorAll('.nav-link'); // सारे नेविगेशन लिंक को चुनना
    let isScrolling = false; // फ्लैग जो बताता है कि प्रोग्रामेटिक स्क्रॉल हो रहा है या नहीं

    // यह फंक्शन एक्टिव लिंक सेट करता है
    function setActiveLink(targetSection) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${targetSection.id}`);
        });
    }

    // यह फंक्शन स्क्रॉल इवेंट को हैंडल करता है
    function onScroll() {
        if (isScrolling) return; // अगर प्रोग्रामेटिक स्क्रॉल हो रहा है, तो कुछ नहीं करना

        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50; // हेडर के हिसाब से एडजस्ट करना
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveLink(section);
            }
        });
    }

    // यह फंक्शन क्लिक इवेंट को हैंडल करता है
    function onClick(event) {
        isScrolling = true; // प्रोग्रामेटिक स्क्रॉल फ्लैग सेट करना
        event.preventDefault(); // लिंक के डिफॉल्ट बर्ताव को रोकना
        const targetSection = document.querySelector(event.target.getAttribute('href'));

        // टारगेट सेक्शन तक स्मूथ स्क्रॉल करना
        window.scrollTo({
            top: targetSection.offsetTop - 50, // हेडर के हिसाब से एडजस्ट करना
            behavior: 'smooth'
        });

        setActiveLink(targetSection); // एक्टिव लिंक सेट करना
        setTimeout(() => { isScrolling = false; }, 1000); // स्क्रॉल खत्म होने के बाद फ्लैग रीसेट करना
    }

    navLinks.forEach(link => link.addEventListener('click', onClick)); // क्लिक इवेंट लिसनर जोड़ना
    window.addEventListener('scroll', onScroll); // स्क्रॉल इवेंट लिसनर जोड़ना

    onScroll(); // पेज लोड होने पर एक्टिव लिंक सेट करना
});


//1 पेज लोड होते ही कोड चलाना:

// जब पूरा वेबपेज लोड हो जाता है, तब यह कोड चलाना शुरू होता है। DOMContentLoaded इवेंट का मतलब है कि HTML का पूरा ढांचा तैयार हो चुका है।
//2 सारे सेक्शन्स और नेविगेशन लिंक को चुनना:

// sections में सभी <section> टैग्स को चुनते हैं।
// navLinks में सभी .nav-link क्लास वाले लिंक को चुनते हैं।
//3 एक्टिव लिंक सेट करने का फंक्शन (setActiveLink):

// यह फंक्शन यह चेक करता है कि कौन सा लिंक एक्टिव होना चाहिए।
// सभी नेविगेशन लिंक के बीच जाकर, अगर लिंक का href उस सेक्शन से मेल खाता है, तो उसे एक्टिव (active) क्लास दे देता है।
//4 स्क्रॉल इवेंट को हैंडल करने का फंक्शन (onScroll):

// जब पेज स्क्रॉल होता है, यह फंक्शन चेक करता है कि वर्तमान में कौन सा सेक्शन स्क्रीन पर है।
// यह फंक्शन उस सेक्शन के हिसाब से सही नेविगेशन लिंक को एक्टिव करता है।
//5 क्लिक इवेंट को हैंडल करने का फंक्शन (onClick):

// जब कोई नेविगेशन लिंक क्लिक किया जाता है, तो यह फंक्शन स्मूथ स्क्रॉल के साथ उस लिंक को एक्टिव करता है।
// यह प्रोग्रामेटिक स्क्रॉल को पहचानने के लिए एक फ्लैग (isScrolling) सेट करता है और कुछ समय बाद उसे रीसेट करता है।
//6 इवेंट लिसनर्स जोड़ना:

// सभी नेविगेशन लिंक पर क्लिक इवेंट लिसनर जोड़ना।
// विंडो पर स्क्रॉल इवेंट लिसनर जोड़ना।
//7 पेज लोड होने पर सही लिंक एक्टिव करना:

// पेज लोड होते ही onScroll फंक्शन को कॉल करना ताकि सही लिंक को एक्टिव किया जा सके।



// script.js

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});


//animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animation, .slide-in-right,  .slide-in-left,   .slide-in-up, .slide-in-down ');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    elements.forEach(element => observer.observe(element));
  });
  