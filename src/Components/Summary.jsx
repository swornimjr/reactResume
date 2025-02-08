const Summary = () => {
  return (
    <section>
      <div class="flex-container summary-container">
        <div class="flex-container">
          <i class="fa-solid fa-award"></i>

          <div>
            <span>IT</span>
            <p>Graduate</p>
          </div>
        </div>

        <div class="vertical-line">|</div>

        <div class="flex-container">
          <i class="fa-solid fa-laptop"></i>

          <div>
            <span>5+</span>
            <p>Projects</p>
          </div>
        </div>

        <div class="vertical-line">|</div>

        <div class="flex-container">
          <i class="fa-solid fa-briefcase"></i>

          <div>
            <span>1+</span>
            <p>Years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
