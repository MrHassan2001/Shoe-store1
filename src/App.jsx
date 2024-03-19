
import './App.css'
import H1 from './assets/logo.png'
import H2 from './assets/cart.png'
import H3 from './assets/menu.png'
import H4 from './assets/image1.png'
import H5 from './assets/category-1.jpg'
import H6 from './assets/category-2.jpg'
import H7 from './assets/category-3 (2).jpg'
import H8 from './assets/product-11.jpg'
import H9 from './assets/product-2.jpg'
import A1 from './assets/product-3.jpg'
import A2 from './assets/product-5.jpg'
import A3 from './assets/product-3.jpg'
import A4 from './assets/product-7.jpg'
import A5 from './assets/product-2.jpg'
import A6 from './assets/product-7.jpg'
import A7 from'./assets/product-10.jpg'
import A8 from'./assets/product-11.jpg'
import A9 from'./assets/product-12.jpg'
import S1 from './assets/image1.png'
import S2 from './assets/user-1.png'
import S3 from './assets/user-2.png'
import S4 from './assets/user-3.png'
import X1 from './assets/logo-godrej.png'
import X2 from './assets/logo-oppo.png'
import X3 from './assets/logo-coca-cola.png'
import X4 from './assets/logo-paypal.png'
import X5 from './assets/logo-philips.png'
import L1 from './assets/play-store.png'
import L2 from './assets/app-store.png'
import L3 from './assets/logo-white.png'

function App() {
  var menuItems=document.getElementById("MenuItems");
            
  MenuItems.style.maxHeight="0px";
  function menutoggle(){
      if(MenuItems.style.maxHeight == "0px"){
          MenuItems.style.maxHeight="200px";
      }
      else{
          MenuItems.style.maxHeight="0px";
      }
  }
  

  return (
    <>
    <div class="header">
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <a href="#">
              <img src={H1}width="125px"></img>
            </a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About</a></li> 
              <li><a href="#">Contact</a></li>
              <li><a href="#">Acount</a></li>
            </ul> 
          </nav>
          <a href="#"><img src={H2} width="30px" height="30px"></img></a>
          <img src={H3} class="menu-icon" onClick="menutoggle()"></img>
        </div>
        <div class="row">
          <div class="col-2">
            <h1>Give your workout </h1>
            <p>Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come.</p>
            <a href="#" CLASS="btn">Explore Now &#8594;</a>
          </div>
          <div class="col-2">
            <img src={H3}></img>
          </div>
        </div>
      </div>
    </div>
    <div class="categories">
      <div class="small-container">
        <div class="row">
          <div class="col-3">
            <img src={H5}></img>
          </div>
          <div class="col-3">
            <img src={H6}></img>
          </div>
          <div class="col-2">
            <img src={H7}></img>
          </div>
        </div>
      </div>
    </div>
    <div class="small-container">
      <h2 class="title">Featured Products</h2>
      <div class="row">
        <div class="col-4">
          <a href="#"><img src={H8}></img></a>
          <a href="#"><h4>Downshifter Sports Shoes</h4></a>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>
        <div class="col-4">
          <a href="#"><img src={H9}></img></a>
          <h4>Lace-Up Running Shoes</h4>
          <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                        </div>
                        <p>$35.00</p>
                        <div class="col-4">
                          <a href="#"><img src={A1}></img></a>
                          <h4>Lace Fastening Shoes</h4>
                          <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>$15.00</p>
                        </div>
                        <div class="col-4">
                          <a href ="#"><img src={A2}></img></a>
                          <h4>Flat Lace-Fastening Shoes</h4>
                          <div class="rating">
                          <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                            <i class="fa fa-star-o" ></i>
                          </div>
                          <p>$48.00</p>
                        </div>
        </div>
        <h2 class="title">Latest Products</h2>
        <div class="row">
          <div class="col-4">
            <a href="#"><img src={A2}></img></a>
            <h4>Flat Heel gray hoes</h4>
            <div class="rating">
            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                            <i class="fa fa-star-o" ></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <a href="#"><img src={A3}></img></a>
            <h4>Lace-Fastening black Shoes</h4>
          </div>
          <p>$21.00</p>
        </div>
        <div class="col-4">
                      <a href="#"><img src={A4}></img></a>
                        <h4>HRX Men's cotton socks</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>$09.00</p>
                    </div>
                    <div class="col-4">
                       <a href="#"><img src={A5}></img></a>
                        <h4>Lace-Up Running Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>$35.00</p>
                    </div>  
      </div>
      <div class="row">
      <div class="col-4">
                        <a href="#"><img src={A6}></img></a>
                        <h4>HRX cotton socks</h4>
                        <div class="rating">
                           
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>$10.00</p>
                    </div>
                    <div class="col-4">
                       <a href="#"><img src={A7}></img></a>
                        <h4>Flat Lace-Fastening Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-half-o" ></i>
                        </div>
                        <p>$48.00</p>
                    </div>
                    <div class="col-4">
                        <a href="#"><img src={A8}></img></a>
                        <h4>Loafers Men (Gray)</h4>
                        <div class="rating">
                            <i class="fa fa-star-o" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>$15.00</p>
                    </div>
                    <div class="col-4">
                        <a href="#"><img src={A9}></img></a>
                        <h4>Lace-Fastening white Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <p>$21.00</p>
                    </div>  
      </div>

    </div>
    <div class="offer">
      <div class="small-container">
        <div class="row">
          <div class="col-2">
            <img src={S1}></img>
          </div>
          <div class="col-2">
            <p>Exclusively Available on RedStore</p>
            <h1>sports shoes</h1>
           <a href="#" class="btn">Bay Now &#8594;</a>
            <small> Buy latest collections of sports shoes online on Redstore at best prices from top brands such as Adidas, Nike, Puma, Asics, and Sparx at your leisure at best prices.</small>
          </div>
        </div>
      </div>
    </div>


    <div class="testimonial">
            <div class="small-container">
                <div class="row">
                    <div class="col-3">
                        <i class="fa fa-quote-left" ></i>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <div class="rating"> 
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <img src={S2}></img>
                    
                        <h3>Sean Parkar</h3>
                    </div>
                    <div class="col-3">
                        <i class="fa fa-quote-left" ></i>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div class="rating">
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <img src={S3}></img>
                       
                        <h3>Mike Smith</h3>
                    </div>
                    <div class="col-3">
                        <i class="fa fa-quote-left" ></i>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <div class="rating"> 
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star" ></i>
                            <i class="fa fa-star-o" ></i>
                        </div>
                        <img src={S4}></img>
                     
                        <h3>Mabel Joe</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="brands">
            <div class="small-container">
                <div class="row">
                    <div class="col-5">
                   <img src={X1}></img>
                    </div>
                    <div class="col-5">
                       <img src={X2}></img>
                    </div>
                    <div class="col-5">
                      <img src={X3}></img>
                    </div>
                    <div class="col-5">
                      <img src={X4}></img>
        
                    </div>
                    <div class="col-5">
                  
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col-1">
              <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div class="app-logo">
                      <img src={L1}></img>
                      <img src={L2}></img>
                    </div>
              </div>
              <div class="footer-col-2">
              <img src={L3}></img>
                    <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                   <ul>
                       <li>Coupons</li>
                       <li>Blog Post</li>
                       <li>Return Policy</li>
                       <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow us</h3>
                   <ul>
                       <li>Facebook</li>
                       <li>Twitter</li>
                       <li>Instagram</li>
                       <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <p class="copyright">Copyright 2021 - Apurba Kr. Pramanik</p>
          </div>
        </div>

      
        
      
    </>

  )
}

export default App
