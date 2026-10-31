/**
 * APEX RACING SYNDICATE - MAIN INTERACTIONS
 * Handles navigation, mobile drawer, form interactions, and toast notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Navigation Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  const toggleMobileNav = () => {
    const isOpen = mobileDrawer?.classList.contains('open');
    if (isOpen) {
      mobileDrawer?.classList.remove('open');
      mobileOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      mobileDrawer?.classList.add('open');
      mobileOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  mobileToggle?.addEventListener('click', toggleMobileNav);
  mobileOverlay?.addEventListener('click', toggleMobileNav);

  // 3. Enquiry Form Handling & Interaction
  const enquiryForm = document.getElementById('syndicateEnquiryForm');
  const toastNotice = document.getElementById('toastNotice');

  if (enquiryForm) {
    // Check if URL has a horse preselection query param (e.g., ?horse=2yo-colt)
    const urlParams = new URLSearchParams(window.location.search);
    const selectedHorse = urlParams.get('horse');
    const interestSelect = document.getElementById('interestSelect');
    
    if (selectedHorse && interestSelect) {
      for (let option of interestSelect.options) {
        if (option.value.toLowerCase().includes(selectedHorse.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }

    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Submit button state
      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg> Sending Enquiry...
      `;

      // Simulate instantaneous responsive feedback
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `✓ Enquiry Received`;
        submitBtn.style.background = '#2E7D32';
        submitBtn.style.color = '#FFFFFF';

        // Show Toast
        showToast("Thank you for your enquiry. Our Syndicate Director will contact you within 24 hours with the prospectus.");

        // Reset form after delay
        setTimeout(() => {
          enquiryForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
        }, 4000);
      }, 1000);
    });
  }

  // Toast Helper
  function showToast(message) {
    if (!toastNotice) return;
    const toastMsgEl = toastNotice.querySelector('.toast-msg');
    if (toastMsgEl) toastMsgEl.textContent = message;
    
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 5500);
  }
});
