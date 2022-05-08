import React from "react";
import { TopNav, TopP } from "../Styled/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { DropdownButton } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import styles from "../Styled/navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ cartToggle, setCartToggle }) => {
  let CartData = JSON.parse(localStorage.getItem("Cart")) || [];
  const navigate = useNavigate();
  // console.log(cartToggle)
  return (
    <nav>
      <TopNav>
        <DropdownButton
          style={{ background: "rgb(0,118,189)" }}
          title="Customer Service"
        >
          <ListGroupItem key="1">Contact Info</ListGroupItem>
          <ListGroupItem key="2">FAQ</ListGroupItem>
          <ListGroupItem key="2">Give Us Feedback</ListGroupItem>
        </DropdownButton>
        <TopP>
          Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day
          Return Policy! <strong>More About Shipping & Returns</strong>
        </TopP>
      </TopNav>
      <div className={styles.searchNav}>
        <div>
          <img
            onClick={() => navigate("/")}
            src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
            alt="company_logo"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div>
          <AiOutlineSearch
            style={{ position: "absolute", width: "20px", height: "40px" }}
          />
          <input type="search" placeholder="Search for shoes, clothes, etc." />
          <button>SEARCH</button>
        </div>
        <div>
          {CartData.length !== 0 ? (
            <button
              style={{ backgroundColor: "lightgreen" }}
              onClick={() => setCartToggle(true)}
            >
              <MdOutlineShoppingCart
                style={{ width: "20px", height: "40px" }}
              />{" "}
              {CartData.length}{" "}
              {CartData.length === 1 ? "ITEM IN CART" : "ITEMS IN CART"}
            </button>
          ) : (
            <button onClick={() => setCartToggle(true)}>
              <MdOutlineShoppingCart
                style={{ width: "20px", height: "40px" }}
              />{" "}
              MY CART
            </button>
          )}
        </div>
      </div>
      {/* the dropdown starts */}
      <div className={styles.dropDownPart}>
        <div>
          <div className={styles.dropdown}>
            New <RiArrowDropDownFill />
            <div className={styles.dropdownContent}>
              <div>
                <p className={styles.dropdownHead}>The Find</p>
                <p>The Brightest, Boldest Springs Trends</p>
                <p>Zappos X Beach Riot</p>
                <p>The Ultimate Sneaker Guide</p>
                <p>The Spring Sandal Edit</p>
                <p>Fresh Spring Denim</p>
                <p>Energizing Sporty Looks</p>
                <p>Western-Inspired Wear</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>The Style Room</p>
                <p>Brand Spotlight: Tory Burch</p>
                <p>Need-to-know with AG Jeans</p>
                <p>Collective Review: Sam Edelman</p>
                <p>Retro Resort</p>
                <p>Easy Does It</p>
                <p>Secret Garden</p>
                <p>Men's Retro Poolside</p>
                <p></p>
                <p>Men's AG Jeans</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>New Brands</p>
                <p>Fairfax and Favor</p>
                <p>Milwaukee Boot Co</p>
                <p>Jambys</p>
                <p>Moral Code</p>
                <p>UGGⓇ Universal</p>
                <p>Rebel Nell</p>
                <p>MANGO</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>New Arrivals</p>
                <p>Candles</p>
                <p>Dining & Entertainment</p>
                <p>Bedding & Blankets</p>
                <p>Hunter Meets Mickey</p>
                <p>Toys & Games</p>
              </div>
            </div>
          </div>
          <div className={styles.dropdown}>
            Women <RiArrowDropDownFill />
            <div className={styles.dropdownContent}>
              <div>
                <p className={styles.dropdownHead}>Shoes</p>
                <p onClick={() => navigate("/products/women-sneakers")}>
                  Sneakers & Athletic
                </p>
                <p>Sandals</p>
                <p>Clogs & Mules</p>
                <p>Heels</p>
                <p>Boots & Booties</p>
                <p>Slippers</p>
                <p>Flats</p>
                <p>Loafers</p>
                <p>Comfort</p>
                <p>Wide</p>
                <p>Narrow</p>
                <p>Single Shoes</p>
                <p>Shop All Shoes</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Clothing</p>
                <p onClick={() => navigate("/products/women-tops")}>Shirts & Tops</p>
                <p>Swimwear</p>
                <p>Dresses</p>
                <p>Shorts</p>
                <p>Jeans & Denim</p>
                <p>Underwear & Intimates</p>
                <p>Coats & Outerwear</p>
                <p>Socks</p>
                <p>Sleepwear</p>
                <p>Activewear</p>
                <p>Plus Size</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Accessories & More</p>
                <p>Bags & Handbags</p>
                <p>Backpacks</p>
                <p>Belt Bags</p>
                <p>Hair</p>
                <p>Sunglasses</p>
                <p>Statement Earrings</p>
                <p>Face Masks</p>
                <p>Hats</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Featured</p>
                <p>The Find</p>
                <p>The Style Room</p>
                <p>UFC Shop</p>
                <p>Female Founded</p>
                <p>Influencer Favourites</p>
                <p>Spring Sandal Guide</p>
                <p>Wedding Shop</p>
              </div>
            </div>
          </div>
          <div className={styles.dropdown}>
            Men
            <RiArrowDropDownFill />
            <div className={styles.dropdownContent}>
              <div>
                <p className={styles.dropdownHead}>Shoes</p>
                <p onClick={() => navigate("/products/men-sneakers")}>
                  Sneakers & Athletic
                </p>
                <p>Boots</p>
                <p>Running Shoes</p>
                <p>Oxfords</p>
                <p>Loafers</p>
                <p>Clogs</p>
                <p>Slippers</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Clothing</p>
                <p onClick={() => navigate("/products/men-tees")}>Shirts & Tops</p>
                <p>Shorts</p>
                <p>Swimwear</p>
                <p>Pants</p>
                <p>Jeans</p>
                <p>Underwear</p>
                <p>Activewear</p>
                <p>Hoodies & Sweatshirts</p>
                <p>Big & Tall</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Accessories & More</p>
                <p>Bags</p>
                <p>Hats</p>
                <p>Sunglasses</p>
                <p>Belts</p>
                <p>Watches</p>
                <p>Ties & Pocket Squares</p>
                <p>Gloves</p>
                <p>Wallets</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Featured</p>
                <p>The Style Room</p>
                <p>The Fan Shop</p>
                <p>Big & Tall</p>
                <p>UFC Shop</p>
                <p>Flatheads</p>
                <p>Men's Golf Shoes & Clothing</p>
                <p>Penny Luck</p>
                <p>Fitville</p>
                <p>Breath Walker</p>
                <p>c9 Champion: $40 and Under</p>
              </div>
            </div>
          </div>
          <div className={styles.dropdown}>
            Kids <RiArrowDropDownFill />
            <div className={styles.dropdownContent}>
              <div>
                <p className={styles.dropdownHead}>Girls</p>
                <p>Sneakers</p>
                <p>Sandals</p>
                <p>Swimwear</p>
                <p>Flats</p>
                <p>Shirts & Tops</p>
                <p>Dresses</p>
                <p>Heels</p>
                <p>Shorts</p>
                <p>Clogs</p>
                <p>Light Jackets</p>
                <p>Boots</p>
                <p>Shop All Girls</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Boys</p>
                <p>Sneakers</p>
                <p>Sandals</p>
                <p>Swimwear</p>
                <p>Shirts & Tops</p>
                <p>Pants</p>
                <p>Dresses</p>
                <p>Heels</p>
                <p>Shorts</p>
                <p>Clogs</p>
                <p>Light Jackets</p>
                <p>Boots</p>
                <p>Shop All Boys</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Accessories</p>
                <p>Backpacks</p>
                <p>Sunglasses</p>
                <p>Hats</p>
                <p>Toys & Games</p>
              </div>
              <div>
                <p className={styles.dropdownHead}>Top Brands</p>
                <p>Vans Kids</p>
                <p>Crocs Kids</p>
                <p>Native Kids</p>
                <p>adidas Kids</p>
                <p>SKECHERS KIDS</p>
              </div>
            </div>
          </div>
          <div>
            Departments <RiArrowDropDownFill />
          </div>
          <div>
            Brands <RiArrowDropDownFill />
          </div>
          <div>
            Sale <RiArrowDropDownFill />
          </div>
          <div>
            Clothing <RiArrowDropDownFill />
          </div>
        </div>
        <div onClick={()=>navigate("/create-account")}>Sign In / Register</div>
      </div>
      <div className={styles.movingText}>
        <p>
          Be the first to shop the newest home styles - Now on Zappos !{" "}
          <strong>Shop Home Now</strong>
        </p>
      </div>
    </nav>
  );
};
