function header() {
  return `    <div class="navbar">
  <a href="../index.html">
  <div class="company-logo">
    <img
      src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.png"
      alt=""
    />
  </div>
  </a>
  <div id="menu" class="categories">
  <ul>
    <li class="dropdown-content1 dropdown-content">
      <a href="mens.html">Men</a>
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
  </div>
  <img
    id="menuIcon"
    src="https://via.placeholder.com/50"
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
  <li><a href="products.html">Shirts</a></li>
  <li><a href="../productSection( P )/product.html">Tshirts</a></li>
  <li><a href="products.html">Jeans</a></li>
  <li><a href="products.html">Shoes</a></li>
  <li><a href="products.html">Accessories</a></li>
</ul>
</div>

<div class="dropdown-menu2 dropdown-menu">
<ul>
  <li><a href="products.html">Ethnic</a></li>
  <li><a href="products.html">western wear</a></li>
  <li><a href="products.html">Footwear</a></li>
  <li><a href="products.html">sports wear</a></li>
  <li><a href="products.html">Accessories</a></li>
</ul>
</div>

<div class="dropdown-menu3 dropdown-menu">
<ul>
  <li><a href="products.html">Boys Clothing</a></li>
  <li><a href="products.html">Girls Clothing</a></li>
  <li><a href="products.html">infants</a></li>
  <li><a href="products.html">boys footwear</a></li>
  <li><a href="products.html">girls footwear</a></li>
</ul>
</div>

<div class="dropdown-menu4 dropdown-menu">
<ul>
  <li><a href="products.html">make up</a></li>
  <li><a href="products.html">skincare</a></li>
  <li><a href="products.html">haircare</a></li>
  <li><a href="products.html">fragrances</a></li>
  <li><a href="products.html">mens grooming</a></li>
</ul>
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
