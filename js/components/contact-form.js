


    /*
      ============================================================
      CONTACT FORM (FR-4)
      ============================================================
      Shows a placeholder success message until a real backend is wired in.
      To use a real backend: remove event.preventDefault() and let the form
      submit normally, OR replace the timeout with a fetch() call.
    */

    function initContactForm() {
      const form = document.getElementById('contact-form');
      const statusEl = document.getElementById('form-status');
      const submitBtn = document.getElementById('contact-submit');

      form.addEventListener('submit', function (event) {
        event.preventDefault(); // REMOVE this line once you have a real endpoint

        if (!form.checkValidity()) { form.reportValidity(); return; }

        // Disable to prevent double-submit
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending\u2026';

        // Simulate round-trip (swap for fetch() when ready)
        setTimeout(function () {
          statusEl.textContent = '\u2713 Message received! I\u2019ll get back to you soon.';
          statusEl.className = 'text-sm text-green-600';
          form.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }, 800);
      });
    }

    initContactForm();