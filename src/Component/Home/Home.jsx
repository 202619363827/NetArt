

import React from "react";
import logo from "../../assest/logo.png";
import styles from "./Home.module.css";
import image2 from "../../assest/2.png";
import image3 from "../../assest/1.png";
import image4 from "../../assest/3.png";


import WifiCalling3RoundedIcon from "@mui/icons-material/WifiCalling3Rounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";






const AwardInformation = () => {
    return (
      <div className={styles.container}>
        <img src={logo} alt="C.R.I. Pumps Logo" className={styles.logo} />
        <h4 className={styles.text}>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h4>
        <ul className={styles.big}>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for <br />
            various projects across the globe to save energy.{" "}
          </li>
          <li>
            {" "}
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the <br />
            old inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.{" "}
          </li>
        </ul>
        <img src={image2} alt="C.R.I. Pumps Logo" className={styles.color} />
        
        <p className={styles.para}>
          Government of India has awarded the <b>"National Energy Conservation
          Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director <br />
          of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker
          of Lok Sabha & Shri. Raj Kumar Singh, Honorable
          <br /> Minister of State.
        </p>
        <h4 className={styles.install}>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </h4>
        <img
          src={image3}
          alt="C.R.I. Pumps Logo"
          className={styles.colorimage}
        />
        <img src={image4} alt="C.R.I. Pumps Logo" className={styles.machine} />
        <p className={styles.some}>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
        <hr className={styles.redline} />
  
        <h3 className={styles.heading}>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h3>
  
        <p className={styles.segmentText}>
          CHEMICALS & PROCESS <span className={styles.horizontalLine}>|</span>{" "}
          POWER <span className={styles.horizontalLine}>|</span> WATER & WASTE
          WATER <span className={styles.horizontalLine}>|</span> OILS & GAS{" "}
         
          <span className={styles.horizontalLine}>|</span> PHARMA{" "}
          <span className={styles.horizontalLine}>|</span> SUGARS & DISTILLERIES{" "}
        
          <span className={styles.horizontalLine}>|</span> PAPER & PULP{" "}
       
          <span className={styles.horizontalLine}>|</span> MARINE & DEFENCE{" "}
       
          <span className={styles.horizontalLine}>|</span> METAL & MINING{" "}
         
       
          <span className={styles.horizontalLine}>|</span> FOOD BEVERAGE <br />
          PETROCHEMICAL & REFINERIES{" "}
          <span className={styles.horizontalLine}>|</span>{" "}
          <span className={styles.horizontalLine}>|</span> SOLAR{" "}
          <span className={styles.horizontalLine}>|</span> BUILDING{" "}
          <span className={styles.horizontalLine}>|</span> HVAC{" "}
          <span className={styles.horizontalLine}>|</span> FIRE FIGHTING{" "}
          <span className={styles.horizontalLine}>|</span> AGRICULTURE &
          RESIDENTIAL{" "}
        
        </p>
  
        <div>
          <div className={styles.iconContainer}>
            <div className={styles.iconItem}>
              <WifiCalling3RoundedIcon className={styles.icon} />
              <p>Toll free 1800 200 1234</p>
            </div>
            <div className={styles.iconItem}>
              <FacebookRoundedIcon className={styles.icon} />
              <p>www.facebook.com/cripumps</p>
            </div>
            <div className={styles.iconItem}>
              <LanguageRoundedIcon className={styles.icon} />
              <p>www.crigroups.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AwardInformation;
  





  