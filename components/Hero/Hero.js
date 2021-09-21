import React from "react";
import classes from "./Hero.module.scss";
import BtnPulseSass from "../BtnRoundPulse/BtnRoundPulse";
import Image from "next/image";
import logo from "./Logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__textBox}>
        <h1 className={classes.headingPrimary}>
          <span className={classes.headingPrimary__main}> Peint tes rêves</span>
        </h1>
        <span className={classes.headingPrimary__sub}>
          Un cadeau idéal pour les personnes que vous aimez ! Un cadeau idéal
          pour les personnes que vous aimez ! <br />
          Une toile unique et personnalisable !
        </span>
        <span className={classes.headingPrimary__sub}>
          voici notre réalisation sous le signe de la famille.
        </span>
        <h2>Arbre de l'amour éternel</h2>
        <div> IMAGE </div>
        <div className={classes.BtnPulseSass}>
          {" "}
          <Link href="/produits">
            <BtnPulseSass
              text="Personnaliser mon tableau!"
              color="white"
              path="/produits"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
