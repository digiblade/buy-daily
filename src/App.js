import React from "react";
import "./App.css";
import bannermodal from "./Assets/banner/bannermodal.png";
import headphone from "./Assets/product/headphone.png";
import security from "./Assets/icons/security.png";
import cloud from "./Assets/icons/cloud.png";
import menu from "./Assets/icons/menu.png";
import heart from "./Assets/icons/heart.png";
export default function App() {
  return (
    <div>
      <header>
        <div className="logo">Buy Daily</div>
        <div className="menu-item">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Categories</a>
        </div>
        <div className="auth">
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      </header>
      <section>
        <div className="banner">
          <div className="banner-text">
            <div className="banner-title">
              Every Purchase Will Be Made With Pleasure
            </div>
            <div className="banner-subtitle">
              Buying and selling of goods or services using the internet.
            </div>
          </div>
          <img
            className="banner-image"
            src={bannermodal}
            alt="banner"
            srcset=""
          />
        </div>
      </section>
      <section className="search-bar-bg">
        <div className="search-bar">
          <div className="search-filter">
            <label htmlFor="">Location</label>
            <select name="" id="">
              <option value="">India</option>
              <option value="">United states</option>
              <option value="">Austrelia</option>
              <option value="">United Kingdom</option>
            </select>
          </div>
          <div className="search-filter">
            <label htmlFor="">Category</label>
            <select name="" id="">
              <option value="">Men's Fashion</option>
              <option value="">Woman's Fashion</option>
              <option value="">Kids Fashion</option>
              <option value="">Toys</option>
            </select>
          </div>
          <div className="search-filter">
            <label htmlFor="">Product</label>
            <input type="text" className="search-field" placeholder="search" />
          </div>
          <div className="">
            <button type="submit">Search</button>
          </div>
        </div>
      </section>
      <section className="feature-board-bg">
        <div>
          <div className="feature-title">Millions of people use: Buy-Daily</div>
          <div className="feature-board">
            <div className="feature">
              <img className="feature-icon" src={security} alt="security" />
              <div className="">Free Shipping</div>
            </div>
            <div className="feature">
              <img className="feature-icon" src={cloud} alt="security" />
              <div className="">24/7 Hour Support</div>
            </div>
            <div className="feature">
              <img className="feature-icon" src={menu} alt="security" />
              <div className="">100% Moneyback</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="feature-title">Hot Deals</div>
        <div className="product-list">
        <div className="product-card">
            <img className="fevorite" src={heart} alt="" />
            <img
              className="product-image"
              src={headphone}
              alt="headphones"
              srcset=""
            />
            <span className="product-name">Boat Headphones</span>
            <span className="product-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              cumque est neque obcaecati error debitis exercitationem eveniet
              eum odio, accusantium quidem tempora autem aliquid suscipit ipsum.
              Amet id similique sed.
            </span>
            <div className="price-box">
              <div className="offer">
                <span className="price cut-line">$99/-</span> 10% off
              </div>
              <span className="price ">$79/-</span>{" "}
            </div>
            <div className="btn-group">
              <button className="btn">Buy</button>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="product-card">
            <img className="fevorite" src={heart} alt="" />
            <img
              className="product-image"
              src={headphone}
              alt="headphones"
              srcset=""
            />
            <span className="product-name">Boat Headphones</span>
            <span className="product-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              cumque est neque obcaecati error debitis exercitationem eveniet
              eum odio, accusantium quidem tempora autem aliquid suscipit ipsum.
              Amet id similique sed.
            </span>
            <div className="price-box">
              <div className="offer">
                <span className="price cut-line">$99/-</span> 10% off
              </div>
              <span className="price ">$79/-</span>{" "}
            </div>
            <div className="btn-group">
              <button className="btn">Buy</button>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="product-card">
            <img className="fevorite" src={heart} alt="" />
            <img
              className="product-image"
              src={headphone}
              alt="headphones"
              srcset=""
            />
            <span className="product-name">Boat Headphones</span>
            <span className="product-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              cumque est neque obcaecati error debitis exercitationem eveniet
              eum odio, accusantium quidem tempora autem aliquid suscipit ipsum.
              Amet id similique sed.
            </span>
            <div className="price-box">
              <div className="offer">
                <span className="price cut-line">$99/-</span> 10% off
              </div>
              <span className="price ">$79/-</span>{" "}
            </div>
            <div className="btn-group">
              <button className="btn">Buy</button>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="product-card">
            <img className="fevorite" src={heart} alt="" />
            <img
              className="product-image"
              src={headphone}
              alt="headphones"
              srcset=""
            />
            <span className="product-name">Boat Headphones</span>
            <span className="product-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              cumque est neque obcaecati error debitis exercitationem eveniet
              eum odio, accusantium quidem tempora autem aliquid suscipit ipsum.
              Amet id similique sed.
            </span>
            <div className="price-box">
              <div className="offer">
                <span className="price cut-line">$99/-</span> 10% off
              </div>
              <span className="price ">$79/-</span>{" "}
            </div>
            <div className="btn-group">
              <button className="btn">Buy</button>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="product-card">
            <img className="fevorite" src={heart} alt="" />
            <img
              className="product-image"
              src={headphone}
              alt="headphones"
              srcset=""
            />
            <span className="product-name">Boat Headphones</span>
            <span className="product-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              cumque est neque obcaecati error debitis exercitationem eveniet
              eum odio, accusantium quidem tempora autem aliquid suscipit ipsum.
              Amet id similique sed.
            </span>
            <div className="price-box">
              <div className="offer">
                <span className="price cut-line">$99/-</span> 10% off
              </div>
              <span className="price ">$79/-</span>{" "}
            </div>
            <div className="btn-group">
              <button className="btn">Buy</button>
              <button className="btn">Add to cart</button>
            </div>
          </div><div className="product-card">
            <img className="fevorite" src={heart} alt="" />
            <img
              className="product-image"
              src={headphone}
              alt="headphones"
              srcset=""
            />
            <span className="product-name">Boat Headphones</span>
            <span className="product-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              cumque est neque obcaecati error debitis exercitationem eveniet
              eum odio, accusantium quidem tempora autem aliquid suscipit ipsum.
              Amet id similique sed.
            </span>
            <div className="price-box">
              <div className="offer">
                <span className="price cut-line">$99/-</span> 10% off
              </div>
              <span className="price ">$79/-</span>{" "}
            </div>
            <div className="btn-group">
              <button className="btn">Buy</button>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="product-card">
            <img className="fevorite" src={heart} alt="" />
            <img
              className="product-image"
              src={headphone}
              alt="headphones"
              srcset=""
            />
            <span className="product-name">Boat Headphones</span>
            <span className="product-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              cumque est neque obcaecati error debitis exercitationem eveniet
              eum odio, accusantium quidem tempora autem aliquid suscipit ipsum.
              Amet id similique sed.
            </span>
            <div className="price-box">
              <div className="offer">
                <span className="price cut-line">$99/-</span> 10% off
              </div>
              <span className="price ">$79/-</span>{" "}
            </div>
            <div className="btn-group">
              <button className="btn">Buy</button>
              <button className="btn">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="">
          <span>Buy-daily</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo
            dolores perferendis vitae quis impedit est alias autem!
            Necessitatibus rem iure nisi impedit harum placeat suscipit mollitia
            quis doloremque reiciendis!
          </span>
        </div>
        <div className="">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Category</li>
            <li>Products</li>
          </ul>
        </div>
        <div className="">
          <address>Bilaspur chhatisgarh India</address>
          <address>+91 8871714381</address>
        </div>
      </footer>
    </div>
  );
}
