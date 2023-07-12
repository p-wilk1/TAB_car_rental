import React from "react";
import styles from "../sectionUserPanel/GeneralInfo.module.css";

export default function GeneralInfo({ user }) {
  const { userId: id, firstName, email, lastName } = user;
  return (
    <div className={styles.generalInfoContainer}>
      <h1>
        Witaj, {firstName} {lastName}!
      </h1>
      <h2>{email}</h2>
    </div>
  );
}
