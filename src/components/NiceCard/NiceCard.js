import React from "react";
import styles from "./NiceCard.module.css";
import { MDBBtn } from "mdbreact";
import ButtonNeon from "../ButtonNeon/ButtonNeon";

export const NiceCard = ({
  onClick,
  title,
  description,
  about,
  price,
  priceDescription,
  type,
  typeDescription,
  imageAdress,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardImage}>
        <img width="100%" height="99%" src={imageAdress} />
      </div>
      <div className={styles.cardText}>
        <span className={styles.date}></span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.cardStats}>
        <div className={styles.stats}>
          <div className={styles.value}>asd</div>
          <div className={styles.type}>asdasd</div>
        </div>
      </div>
      <div className={styles.cardStats}>
        <div className={styles.stats}>
          <div className={styles.value}>{price}</div>
          <div className={styles.type}>{priceDescription} Points</div>
        </div>
        <div className={styles.stats}>
          <div className={styles.value}>
            <ButtonNeon text="BUY" onClick={onClick} />
          </div>
          <div className={styles.type}></div>
        </div>
        <div className={styles.stats}>
          <div className={styles.value}>{type}</div>
          <div className={styles.type}>{typeDescription}</div>
        </div>
      </div>
    </div>
  );
};
