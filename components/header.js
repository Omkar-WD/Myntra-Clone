function header() {
  return `    <div class="navbar">
  <a href="../index.html">
  <div class="company-logo">
    <img
      src="../images/logo.png"
      alt=""
    />
  </div>
  </a>
  <div id="menu" class="categories">
  <ul>
    <li class="dropdown-content1 dropdown-content">
      <a href="">Men</a>
    </li>
    <li class="dropdown-content2 dropdown-content">
      <a href="">Women</a>
    </li>
    <li class="dropdown-content3 dropdown-content">
      <a href="">Kids</a>
    </li>
    <li class="dropdown-content4 dropdown-content">
      <a href="">Beauty</a>
    </li>
  </ul>
</div>
  <div class="search-bar">
    <img
      id="searchpng"
      src="https://image.flaticon.com/icons/png/128/49/49116.png"
      alt=""
    />
    <input type="text" placeholder="Search for products, brands and more" />
  </div>
  <div class="nav-last">
  <div class="dropdown-menu5 dropdown-menu" id="dropdown-menu5">
  <ul>
    <li id="loginMenubar"><a id="loginModal">Login</a></li>
    <li id="signupMenubar"><a id="signUpModal">SignUp</a></li>
    <li id="fullname"><a></a></li>
    <li id="profile"><a></a></li>
    <li id="orders"><a></a></li>
    <li id="logout"><a></a></li>
  </ul>
  </div>
    <div class="dropdown-content5 dropdown-content" id= "profile_div">
      <a href="">
        <img
          id="svg"
          src="https://www.svgrepo.com/show/198180/user-profile.svg"
          alt=""
        />
      </a>
      <div>Profile</div>
    </div>
    <div id="wishlist_div">
      <a>
        <img
          id="svg"
          src="https://www.svgrepo.com/show/14970/heart.svg"
          alt=""
        />
      </a>

      <div>Wishlist</div>
      <div id="wishlist-items"></div>
    </div>

    <div id="bagdiv">
      <a >
        <img
          id="svg"
          src="https://www.svgrepo.com/show/17522/bag.svg"
          alt=""
        />
      </a>
      <div>Bag</div>
      <div id="bag-items"></div>
    </div>
  </div>
  <img
    id="menuIcon"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8oEovY6qaEOkBZX9UOv2Or9F_Y-H6NMZ9M3EjRdJFRAeHN9IBCHiuawugBprC_REcw4&usqp=CAU"
    width="50px"
  />
</div>
<div id="myLinks">
<a href="">MEN</a>
<a href="">WOMEN</a>
<a href="">KIDS</a>
<a href="">BEAUTY</a>
</div>
<div class="dropdown-menu1 dropdown-menu">
<ul>
  <li><a href="">Shirts</a></li>
  <li><a href="../productSection( P )/product.html">Tshirts</a></li>
  <li><a href="">Jeans</a></li>
  <li><a href="">Shoes</a></li>
  <li><a href="">Accessories</a></li>
</ul>
</div>

<div class="dropdown-menu2 dropdown-menu">
<ul>
  <li><a href="">Ethnic</a></li>
  <li><a href="">western wear</a></li>
  <li><a href="">Footwear</a></li>
  <li><a href="">sports wear</a></li>
  <li><a href="">Accessories</a></li>
</ul>
</div>

<div class="dropdown-menu3 dropdown-menu">
<ul>
  <li><a href="">Boys Clothing</a></li>
  <li><a href="">Girls Clothing</a></li>
  <li><a href="">infants</a></li>
  <li><a href="">boys footwear</a></li>
  <li><a href="">girls footwear</a></li>
</ul>
</div>

<div class="dropdown-menu4 dropdown-menu">
<ul>
  <li><a href="">make up</a></li>
  <li><a href="">skincare</a></li>
  <li><a href="">haircare</a></li>
  <li><a href="">fragrances</a></li>
  <li><a href="">mens grooming</a></li>
</ul>
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
