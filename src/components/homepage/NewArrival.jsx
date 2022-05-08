import React from "react";
import styles from "../../Styled/homepage-style/newArrival.module.css";

export const NewArrival = () => {
  return (
    <div className={styles.newArrival}>
      <div className={styles.backImg}>
        <img
          src="https://m.media-amazon.com/images/G/01/2021/homepage11.01/COOP-NEW-ARRIVAL-LOGO-1X_3.svg"
          alt=""
        />
        <p>
          Have a Mommy & Me moment with UGGⓇ. Get matching brights for you and
          your little -- all in comfy, playful styles you can dress up!
        </p>
        <button>SHOP NEW MATCHING UGGⓇ STYLES & MORE</button>
      </div>
      <div>
        <img 
          height="100%"
          width={"100%"}
          src="https://m.media-amazon.com/images/G/01/2022/homepage5.02/COOP-UGG-NEW-ARRIVALS-DESKTOP-RIGHT-1X-634x634_1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
