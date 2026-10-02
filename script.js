/**
 * ISKCON Seva Sadan, Vrindavan — Main Script
 * Vanilla JavaScript (ES6+) — Lightweight & Accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Navigation Sticky State & Active Link Highlighting
  // --------------------------------------------------------------------------
  const topNav = document.getElementById('topNav');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const sections = document.querySelectorAll('main section[id]');

  const handleNavScroll = () => {
    if (window.scrollY > 40) {
      topNav.classList.add('nav-scrolled');
    } else {
      topNav.classList.remove('nav-scrolled');
    }

    // ScrollSpy: highlight active nav link
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation
  // --------------------------------------------------------------------------
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');

  const openMobileNav = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('open');
    navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  navBackdrop.addEventListener('click', closeMobileNav);

  // Close drawer when clicking any link inside menu
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // --------------------------------------------------------------------------
  // 3. Smooth Scrolling with Offset
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = topNav.offsetHeight || 80;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Booking Form & Date Management
  // --------------------------------------------------------------------------
  const checkinInput = document.getElementById('checkinDate');
  const checkoutInput = document.getElementById('checkoutDate');
  const guestSelect = document.getElementById('guestSelect');
  const roomCategorySelect = document.getElementById('roomCategorySelect');
  const bookingForm = document.getElementById('bookingForm');
  const bookingFormError = document.getElementById('bookingFormError');

  // Format date helper: YYYY-MM-DD
  const formatDateForInput = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Set default dates: Checkin = today, Checkout = tomorrow
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const todayStr = formatDateForInput(today);
  const tomorrowStr = formatDateForInput(tomorrow);

  if (checkinInput && checkoutInput) {
    checkinInput.min = todayStr;
    checkinInput.value = todayStr;

    checkoutInput.min = tomorrowStr;
    checkoutInput.value = tomorrowStr;

    // When check-in changes, adjust check-out min and value
    checkinInput.addEventListener('change', () => {
      const selectedCheckin = new Date(checkinInput.value);
      if (!isNaN(selectedCheckin.getTime())) {
        const nextDay = new Date(selectedCheckin);
        nextDay.setDate(selectedCheckin.getDate() + 1);
        const nextDayStr = formatDateForInput(nextDay);

        checkoutInput.min = nextDayStr;
        if (new Date(checkoutInput.value) <= selectedCheckin) {
          checkoutInput.value = nextDayStr;
        }
      }
      bookingFormError.style.display = 'none';
    });
  }

  // --------------------------------------------------------------------------
  // 5. Booking Modal (Front-end Stay Availability Request)
  // --------------------------------------------------------------------------
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalStepForm = document.getElementById('modalStepForm');
  const modalStepSuccess = document.getElementById('modalStepSuccess');
  const modalContactForm = document.getElementById('modalContactForm');
  const modalSuccessCloseBtn = document.getElementById('modalSuccessCloseBtn');

  const summaryDates = document.getElementById('summaryDates');
  const summaryRoom = document.getElementById('summaryRoom');
  const summaryGuests = document.getElementById('summaryGuests');

  const openBookingModal = (checkin, checkout, guests, room) => {
    const d1 = new Date(checkin);
    const d2 = new Date(checkout);
    const diffTime = Math.abs(d2 - d1);
    const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    summaryDates.textContent = `${d1.toLocaleDateString('en-US', options)} – ${d2.toLocaleDateString('en-US', options)} (${nights} night${nights > 1 ? 's' : ''})`;
    summaryRoom.textContent = room;
    summaryGuests.textContent = guests;

    modalStepForm.style.display = 'block';
    modalStepSuccess.style.display = 'none';

    if (typeof bookingModal.showModal === 'function') {
      bookingModal.showModal();
    } else {
      bookingModal.setAttribute('open', '');
    }
  };

  const closeBookingModal = () => {
    if (typeof bookingModal.close === 'function') {
      bookingModal.close();
    } else {
      bookingModal.removeAttribute('open');
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBookingModal);
  if (modalSuccessCloseBtn) modalSuccessCloseBtn.addEventListener('click', closeBookingModal);

  // Close on backdrop click
  bookingModal.addEventListener('click', (e) => {
    const rect = bookingModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeBookingModal();
    }
  });

  // Handle Search Bar Submit (if form present)
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const checkin = checkinInput ? checkinInput.value : '';
      const checkout = checkoutInput ? checkoutInput.value : '';
      const guests = guestSelect ? guestSelect.value : '2 Guests';
      const room = roomCategorySelect ? roomCategorySelect.value : 'Any Available Room';

      if (!checkin || !checkout) {
        if (bookingFormError) {
          bookingFormError.textContent = 'Please choose both check-in and check-out dates.';
          bookingFormError.style.display = 'block';
        }
        return;
      }

      if (new Date(checkout) <= new Date(checkin)) {
        if (bookingFormError) {
          bookingFormError.textContent = 'Check-out date must be after check-in date.';
          bookingFormError.style.display = 'block';
        }
        return;
      }

      if (bookingFormError) bookingFormError.style.display = 'none';
      openBookingModal(checkin, checkout, guests, room);
    });
  }

  // Handle Modal Contact Form Submit -> Transition to Success State & Send WhatsApp
  if (modalContactForm) {
    modalContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('guestName')?.value.trim();
      const phone = document.getElementById('guestPhone')?.value.trim();
      const email = document.getElementById('guestEmail')?.value.trim();
      const checkin = document.getElementById('summaryDates')?.textContent || '';
      const room = document.getElementById('summaryRoom')?.textContent || '';
      const guests = document.getElementById('summaryGuests')?.textContent || '';

      if (!name || !phone) {
        alert('Please enter your Name and Phone / WhatsApp number so our team can reach you.');
        return;
      }

      // Format WhatsApp Message for direct booking enquiry
      const text = `Hare Krishna!\n*Stay Availability Request - ISKCON Seva Sadan, Vrindavan*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'Not provided'}\n*Dates:* ${checkin}\n*Room Type:* ${room}\n*Guests:* ${guests}\n\nPlease let me know room availability and confirm my stay.`;
      const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;

      // Switch to polished availability message
      if (modalStepForm) modalStepForm.style.display = 'none';
      if (modalStepSuccess) modalStepSuccess.style.display = 'block';

      // Open WhatsApp with pre-filled message
      window.open(waUrl, '_blank');
    });
  }

  // --------------------------------------------------------------------------
  // 6. Room Card Quick "Check Availability" Action -> Scrolls to Contact Form
  // --------------------------------------------------------------------------
  document.querySelectorAll('.check-room-btn').forEach(button => {
    button.addEventListener('click', function() {
      const roomName = this.getAttribute('data-room');
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        const navHeight = topNav ? topNav.offsetHeight : 80;
        const targetPos = contactSec.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        const contactMsg = document.getElementById('contactMessage');
        if (contactMsg) {
          contactMsg.value = `Hello, I would like to inquire about booking the ${roomName}. Please let me know the availability and rates.`;
          contactMsg.focus();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. FAQ Accordion (Accessible Keyboard & Click Handling)
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerPanel = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';

      // Close all other FAQs
      faqItems.forEach(otherItem => {
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherAns = otherItem.querySelector('.faq-answer');
        otherBtn.setAttribute('aria-expanded', 'false');
        otherAns.hidden = true;
      });

      // Toggle current
      if (!isExpanded) {
        questionBtn.setAttribute('aria-expanded', 'true');
        answerPanel.hidden = false;
      }
    });
  });

  // --------------------------------------------------------------------------
  // 8. Gallery Lightbox with Navigation
  // --------------------------------------------------------------------------
  const galleryItems = [
    {
      src: 'assets/images/guest-house-near-iskcon-temple-vrindavan.webp',
      fallback: 'assets/images/guest-house-near-iskcon-temple-vrindavan.jpg',
      category: 'Temple Courtyard',
      title: 'ISKCON Temple Courtyard & Sacred Tulasi Sanctum'
    },
    {
      src: 'assets/images/deluxe-room-iskcon-seva-sadan-vrindavan.webp',
      fallback: 'assets/images/deluxe-room-iskcon-seva-sadan-vrindavan.jpg',
      category: 'Deluxe Room',
      title: 'Deluxe AC Room at ISKCON Seva Sadan, Vrindavan'
    },
    {
      src: 'assets/images/superior-room-vrindavan-iskcon-seva-sadan.webp',
      fallback: 'assets/images/superior-room-vrindavan-iskcon-seva-sadan.jpg',
      category: 'Superior Room',
      title: 'Superior Room Overlooking Temple Vicinity'
    },
    {
      src: 'assets/images/family-suite-iskcon-seva-sadan-vrindavan.webp',
      fallback: 'assets/images/family-suite-iskcon-seva-sadan-vrindavan.jpg',
      category: 'Family Suite',
      title: 'Spacious Family Suite for Pilgrim Families & Groups'
    },
    {
      src: 'assets/images/gallery-aarti.webp',
      fallback: 'assets/images/gallery-aarti.jpg',
      category: 'Devotion',
      title: 'Evening Sandhya Aarti & Kirtan Experience'
    },
    {
      src: 'assets/images/gallery-yamuna-ghat.webp',
      fallback: 'assets/images/gallery-yamuna-ghat.jpg',
      category: 'Sacred Vrindavan',
      title: 'Sacred Yamuna River & Historical Keshi Ghat at Sunset'
    }
  ];

  let currentGalleryIndex = 0;
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  const updateLightboxContent = (index) => {
    currentGalleryIndex = index;
    const item = galleryItems[index];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
    lightboxCategory.textContent = item.category;
    lightboxTitle.textContent = item.title;

    if (item.fallback) {
      lightboxImage.onerror = () => {
        lightboxImage.src = item.fallback;
      };
    }
  };

  const openLightbox = (index) => {
    updateLightboxContent(index);
    if (typeof lightboxModal.showModal === 'function') {
      lightboxModal.showModal();
    } else {
      lightboxModal.setAttribute('open', '');
    }
  };

  const closeLightbox = () => {
    if (typeof lightboxModal.close === 'function') {
      lightboxModal.close();
    } else {
      lightboxModal.removeAttribute('open');
    }
  };

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-index'), 10) || 0;
      openLightbox(idx);
    });

    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(this.getAttribute('data-index'), 10) || 0;
        openLightbox(idx);
      }
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', () => {
      const newIdx = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightboxContent(newIdx);
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', () => {
      const newIdx = (currentGalleryIndex + 1) % galleryItems.length;
      updateLightboxContent(newIdx);
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (lightboxModal.hasAttribute('open')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        const newIdx = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxContent(newIdx);
      } else if (e.key === 'ArrowRight') {
        const newIdx = (currentGalleryIndex + 1) % galleryItems.length;
        updateLightboxContent(newIdx);
      }
    }
  });

  // --------------------------------------------------------------------------
  // 9. Contact Enquiry Form Submission -> Redirect to WhatsApp
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const contactFormStatus = document.getElementById('contactFormStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim() || '';
      const phone = document.getElementById('contactPhone')?.value.trim() || '';
      const email = document.getElementById('contactEmail')?.value.trim() || '';
      const message = document.getElementById('contactMessage')?.value.trim() || '';

      if (!name || !phone) {
        if (contactFormStatus) {
          contactFormStatus.textContent = 'Please provide your Name and Phone / WhatsApp number.';
          contactFormStatus.className = 'form-status-message';
          contactFormStatus.style.display = 'block';
          contactFormStatus.style.color = '#c13515';
          contactFormStatus.style.backgroundColor = '#fff1f0';
        }
        return;
      }

      // Format WhatsApp Message with full lead details
      const text = `Hare Krishna!\n*New Stay Enquiry - ISKCON Seva Sadan, Vrindavan*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'Not provided'}\n*Dates / Requirement:* ${message || 'I would like to inquire about room availability and booking.'}`;
      const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;

      if (contactFormStatus) {
        contactFormStatus.textContent = 'Connecting to WhatsApp... Our reception team will confirm your stay immediately.';
        contactFormStatus.className = 'form-status-message success';
        contactFormStatus.style.display = 'block';
        contactFormStatus.style.color = '#389e0d';
        contactFormStatus.style.backgroundColor = '#f6ffed';
      }

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank');
      contactForm.reset();
    });
  }
});
