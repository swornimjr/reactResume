const TopBar = () => {
  return (
    <div className="paddingContainer">
      <div className="topBarContainer">
        <div className="nameTag">
          <div className="circleImage"></div>
          <div>
            Swornim Maharjan <br />
            <div className="availableText">- Available for work</div>
          </div>
        </div>

        <div className="iconsContainer">
          <div>
            <i class="fa-solid fa-user"></i>
          </div>
          <div>
            <i class="fa-solid fa-id-badge"></i>
          </div>
          <div>
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div>
            <i class="fa-solid fa-folder"></i>
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
