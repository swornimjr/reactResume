const Getin = () => {
  return (
    <section id="contact">
      <center>
        <h4>Get In Touch</h4>
      </center>

      <div class="flex-container get-in-touch-container">
        <a>
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a>
          <i class="fa-brands fa-github"></i>
        </a>
        <a>
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="tel:04161453369">
          <i class="fa-solid fa-mobile"></i>
        </a>
      </div>

      <center>
        <h5>OR</h5>
      </center>

      <div class="mail-container">
        <a href="mailto:myemail@dentedcode.com">
          <button class="download-btn">
            myemail@dentedcode.com <i class="fa-solid fa-paper-plane"></i>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Getin;
