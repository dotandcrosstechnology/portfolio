/**
* Template Name: Arsha
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  // function initSwiper() {
  //   document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
  //     let config = JSON.parse(
  //       swiperElement.querySelector(".swiper-config").innerHTML.trim()
  //     );

  //     if (swiperElement.classList.contains("swiper-tab")) {
  //       initSwiperWithCustomPagination(swiperElement, config);
  //     } else {
  //       new Swiper(swiperElement, config);
  //     }
  //   });
  // }

  // window.addEventListener("load", initSwiper);
 



  //slider


    // Initialize Swiper
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      }
    });
  
    // Fix for Swiper height calculation
    function updateSwiperHeight() {
      const swiper = document.querySelector('.testimonial-swiper');
      const slides = swiper.querySelectorAll('.swiper-slide');
      let maxHeight = 0;
      
      slides.forEach(slide => {
        const height = slide.offsetHeight;
        if (height > maxHeight) maxHeight = height;
      });
      
      swiper.style.height = maxHeight + 'px';
    }
  
    // Initial height calculation
    updateSwiperHeight();
    
    // Recalculate on window resize
    window.addEventListener('resize', updateSwiperHeight);




  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


//contact us email form script


const form = document.querySelector(".php-email-form");
const submitBtn = form.querySelector(".submit-btn");
const customAlert = document.getElementById("customAlert");
const alertMessage = customAlert.querySelector(".custom-alert-message");
const alertIcon = customAlert.querySelector(".custom-alert-icon");
const alertClose = customAlert.querySelector(".custom-alert-close");

// Function to show alert
function showAlert(type, message) {
  customAlert.className = `custom-alert ${type} show`;
  alertMessage.textContent = message;
  alertIcon.textContent = type === 'success' ? '✓' : '!';
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    customAlert.classList.remove('show');
  }, 5000);
}

// Close alert when X is clicked
alertClose.addEventListener('click', () => {
  customAlert.classList.remove('show');
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Show loading state
  submitBtn.classList.add('loading');
  submitBtn.textContent = 'Sending...';

  emailjs.send("service_uoir788", "template_dffljlm", {
    from_name: document.getElementById("name-field").value,
    from_email: document.getElementById("email-field").value,
    subject: document.getElementById("subject-field").value,
    message: document.getElementById("message-field").value
  })
  .then(response => {
    showAlert('success', 'Email sent successfully!');
    
    // Clear form
    document.getElementById("name-field").value = '';
    document.getElementById("email-field").value = '';
    document.getElementById("subject-field").value = '';
    document.getElementById("message-field").value = '';
    
    // Reset button
    submitBtn.classList.remove('loading');
    submitBtn.textContent = 'Send E-mail';
    
    // Add a little celebration animation to the button
    submitBtn.style.animation = 'buttonPulse 0.5s';
    setTimeout(() => {
      submitBtn.style.animation = '';
    }, 500);
  })
  .catch(error => {
    console.error("Error sending email:", error);
    showAlert('error', 'Failed to send email. Please try again.');
    
    // Reset button
    submitBtn.classList.remove('loading');
    submitBtn.textContent = 'Send E-mail';
  });
});

// Chatbot logic
(function() {
  // Q&A pairs with multiple possible answers for variety
  const qaPairs = [
    { q: /hosting|host/i, a: ["Web hosting lets your website be accessible online. We can help you choose the best hosting!", "We offer advice on hosting options for your website."] },
    { q: /responsive|mobile/i, a: ["We build fully responsive websites that look great on all devices.", "Your site will look awesome on phones, tablets, and desktops!"] },
    { q: /seo|search engine/i, a: ["SEO helps your website rank higher on Google. We follow best practices for SEO.", "We optimize your site for search engines to boost your visibility."] },
    { q: /cost|price|charge/i, a: ["The cost depends on features and complexity. Contact us for a free quote!", "Website pricing varies—let's discuss your needs for an exact quote."] },
    { q: /time|duration|long/i, a: ["A typical website takes 2-4 weeks, but it depends on your requirements.", "Project timelines vary, but most sites are ready in a few weeks."] },
    { q: /e-?commerce|shop|store/i, a: ["We develop e-commerce websites using WooCommerce and Shopify.", "Want to sell online? We build powerful e-commerce stores!"] },
    { q: /maintenance|support/i, a: ["We offer ongoing support and maintenance after launch.", "Our team is here for updates and support whenever you need."] },
    { q: /technology|stack/i, a: ["We use HTML5, CSS3, JavaScript, Bootstrap, and more!", "Our stack includes modern web technologies for best results."] },
    { q: /contact|reach/i, a: ["Contact us via the form, or call/email us directly!", "You can reach us anytime through our contact section."] },
    { q: /portfolio|work|project/i, a: ["Check out our portfolio to see recent projects.", "Our portfolio section showcases our latest work."] },
    { q: /custom|unique/i, a: ["Yes, we create custom websites tailored to your needs.", "Every site we build is unique and personalized."] },
    { q: /cms|wordpress/i, a: ["We work with WordPress and other CMS platforms.", "Content management is easy with WordPress—ask us how!"] },
    { q: /security|secure|ssl|https/i, a: ["We implement SSL and follow best security practices.", "Your website's security is our priority—SSL included!"] },
    { q: /speed|performance|optimi[sz]e|fast/i, a: ["We optimize websites for fast loading times.", "Speed matters! We make sure your site loads quickly."] },
    { q: /domain|register|buy domain/i, a: ["We can help you register and set up your domain name.", "Need a domain? We handle registration and setup."] },
    { q: /redesign|update|refresh/i, a: ["We offer redesign services for a fresh, modern look.", "Time for a refresh? We can update your website!"] },
    { q: /analytics|track|google analytics/i, a: ["We integrate Google Analytics so you can track performance.", "Analytics help you understand your visitors—let us set it up!"] },
    { q: /content writing|copywriting|write content/i, a: ["We provide content writing services for your website.", "Need help with words? Our copywriters can assist!"] },
    { q: /ui\/?ux|user experience|user interface/i, a: ["We focus on UI/UX for intuitive, user-friendly sites.", "Great design is about user experience—let's make it awesome!"] },
    { q: /payment|checkout|gateway|stripe|paypal/i, a: ["We integrate payment gateways like Stripe and PayPal.", "Secure online payments? We handle the integration!"] },
    { q: /multilingual|language|translate/i, a: ["We build multilingual websites for global reach.", "Want your site in multiple languages? We can do that!"] },
    { q: /accessibility|a11y|disability|screen reader/i, a: ["We follow accessibility standards (WCAG) for all users.", "Accessibility is important—your site will be usable by everyone."] }
  ];

  // Greetings, thanks, farewells, and small talk
  const greetings = [/^hi$|^hello$|^hey$|good (morning|afternoon|evening)/i];
  const thanks = [/thank(s| you)?|appreciate/i];
  const farewells = [/bye|goodbye|see you|later/i];
  const smallTalk = [
    { q: /how are you/i, a: ["I'm great, thanks for asking! How can I help you today?", "Doing well! Ready to answer your website questions."] },
    { q: /who are you|your name/i, a: ["I'm Webby, your website assistant bot!", "You can call me Webby. I'm here to help!"] }
  ];

  const defaultReplies = [
    "I'm here to help with any website development questions! Please ask something specific.",
    "Sorry, I didn't quite get that. Try asking about SEO, hosting, or website pricing!",
    "Can you rephrase your question? I'm best with website-related topics."
  ];

  const suggestions = [
    "How much does a website cost?",
    "Do you build e-commerce stores?",
    "What is SEO?",
    "How long does it take to make a website?",
    "Can you redesign my old site?",
    "Do you offer support after launch?"
  ];

  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function addMessage(msg, from, animate = true) {
    const chat = document.getElementById('chatbotMessages');
    const div = document.createElement('div');
    div.className = (from === 'user' ? 'd-flex justify-content-end mb-2' : 'd-flex justify-content-start mb-2');
    div.innerHTML = from === 'user'
      ? `<div class="d-flex align-items-end"><span class="badge bg-primary me-2">${msg}</span><img src="https://ui-avatars.com/api/?name=You&background=0d6efd&color=fff&rounded=true&size=32" style="width:32px;height:32px;object-fit:cover;border-radius:50%;"></div>`
      : `<div class="d-flex align-items-end"><span class='d-inline-flex align-items-center justify-content-center bg-light border rounded-circle me-2' style='width:32px;height:32px;'><i class='bi bi-robot' style='font-size:1.1rem;color:#0d6efd;'></i></span><span class="badge bg-secondary">${msg}</span></div>`;
    if (animate) {
      div.style.opacity = 0;
      chat.appendChild(div);
      setTimeout(() => { div.style.transition = 'opacity 0.4s'; div.style.opacity = 1; }, 10);
    } else {
      chat.appendChild(div);
    }
    chat.scrollTop = chat.scrollHeight;
  }

  function showTyping(show) {
    const typing = document.getElementById('chatbotTyping');
    if (typing) typing.style.display = show ? '' : 'none';
  }

  function showSuggestions(sugs) {
    const sugDiv = document.getElementById('chatbotSuggestions');
    if (!sugDiv) return;
    sugDiv.innerHTML = '';
    if (sugs && sugs.length) {
      sugs.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-sm btn-outline-primary me-1 mb-1';
        btn.textContent = s;
        btn.onclick = function() {
          document.getElementById('chatbotInput').value = s;
          document.getElementById('chatbotForm').dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}));
        };
        sugDiv.appendChild(btn);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chatbotForm');
    const input = document.getElementById('chatbotInput');
    const chat = document.getElementById('chatbotMessages');
    if (!form || !input || !chat) return;
    chat.innerHTML = '';
    addMessage("👋 Hello! I'm <b>Webby</b>, your website expert. How can I help you today?", 'bot', false);
    showSuggestions(suggestions);
    form.onsubmit = function(e) {
      e.preventDefault();
      const userMsg = input.value.trim();
      if (!userMsg) return;
      addMessage(userMsg, 'user');
      input.value = '';
      showSuggestions([]);
      // Handle greetings
      if (greetings.some(r => r.test(userMsg))) {
        showTyping(true);
        setTimeout(() => {
          showTyping(false);
          addMessage(random(["Hi there! How can I help you with your website?", "Hello! Ask me anything about web development."]), 'bot');
          showSuggestions(suggestions);
        }, 700);
        return;
      }
      // Handle thanks
      if (thanks.some(r => r.test(userMsg))) {
        showTyping(true);
        setTimeout(() => {
          showTyping(false);
          addMessage(random(["You're welcome! 😊", "Glad I could help!", "Anytime! Let me know if you have more questions."]), 'bot');
          showSuggestions(suggestions);
        }, 700);
        return;
      }
      // Handle farewells
      if (farewells.some(r => r.test(userMsg))) {
        showTyping(true);
        setTimeout(() => {
          showTyping(false);
          addMessage(random(["Goodbye! Have a great day!", "See you next time!", "Bye! Come back if you have more questions."]), 'bot');
        }, 700);
        return;
      }
      // Handle small talk
      for (const st of smallTalk) {
        if (st.q.test(userMsg)) {
          showTyping(true);
          setTimeout(() => {
            showTyping(false);
            addMessage(random(st.a), 'bot');
            showSuggestions(suggestions);
          }, 700);
          return;
        }
      }
      // Handle Q&A
      let found = false;
      for (const pair of qaPairs) {
        if (pair.q.test(userMsg)) {
          showTyping(true);
          setTimeout(() => {
            showTyping(false);
            addMessage(random(pair.a), 'bot');
            showSuggestions(suggestions.filter(s => !pair.q.test(s)));
          }, 900);
          found = true;
          break;
        }
      }
      if (!found) {
        showTyping(true);
        setTimeout(() => {
          showTyping(false);
          addMessage(random(defaultReplies), 'bot');
          showSuggestions(suggestions);
        }, 900);
      }
    };
    // Allow Enter to send
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        form.dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}));
      }
    });
  });
})();