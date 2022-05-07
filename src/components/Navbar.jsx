import React from "react";
import { TopNav, TopP } from "../Styled/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { DropdownButton } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import styles from "../Styled/navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";

export const Navbar = ({cartToggle,setCartToggle}) => {
  let CartData = JSON.parse(localStorage.getItem("Cart")) || [];
  console.log(cartToggle)
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
            src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
            alt="company_logo"
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
          { CartData.length!==0 ? <button style={{backgroundColor:"lightgreen"}}  onClick={()=>setCartToggle(true)}>
              <MdOutlineShoppingCart style={{ width: "20px", height: "40px" }} /> {CartData.length} {CartData.length===1 ? "ITEM IN CART" :"ITEMS IN CART" }
            </button>
            :
            <button onClick={()=>setCartToggle(true)}>
              <MdOutlineShoppingCart style={{ width: "20px", height: "40px" }} /> MY CART
            </button>
          }
          
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
          <div>
            Women <RiArrowDropDownFill />
          </div>
          <div>
            Men
            <RiArrowDropDownFill />
          </div>
          <div>
            Kids <RiArrowDropDownFill />
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
        <div>Sign In / Register</div>
      </div>
      <div className={styles.movingText}>
        <p>Be the first to shop the newest home styles - Now on Zappos ! <strong>Shop Home Now</strong></p>
      </div>
    </nav>
  );
};
