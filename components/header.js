function header() {
  return `<div class="company-logo">
    <img
      src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.png"
      alt=""
    />
  </div>
  <div class="menu-options">
    <div><a href="">MEN</a></div>
    <div><a href="">WOMEN</a></div>
    <div><a href="">KIDS</a></div>
    <div><a href="">HOME & LIVING</a></div>
    <div><a href="">BEAUTY</a></div>
    <div><a href="">STUDIO</a></div>
  </div>
  <div class="search-bar">
    <img
      id="searchpng"
      src="https://image.flaticon.com/icons/png/128/49/49116.png"
      alt=""
    />
    <input type="text" placeholder="Search for products, brands and more" />
  </div>
  <div class="navbar-right">
    <div>
      <a href="">
        <img
          id="svg"
          src="https://www.svgrepo.com/show/198180/user-profile.svg"
          alt=""
        />
      </a>
      <div>Profile</div>
    </div>

    <div>
      <a href="../wishList( O )/wishList.html">
        <img
          id="svg"
          src="https://www.svgrepo.com/show/14970/heart.svg"
          alt=""
        />
      </a>
      <div>Wishlist</div>
    </div>

    <div>
      <a href="../bagSection( O )/bag.html">
        <img
          id="svg"
          src="https://www.svgrepo.com/show/17522/bag.svg"
          alt=""
        />
      </a>
      <div>Bag</div>
    </div>
    <div>
    <button id="loginModal">Login</button>
    <button id="signUpModal">SignUp</button>
    </div>
    <div id="openLoginPage" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div id="loginContainer"></div>
      </div>
    </div>
    <div id="openSignUpPage" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div id="signUpContainer"></div>
      </div>
    </div>`;
}
export default header;
