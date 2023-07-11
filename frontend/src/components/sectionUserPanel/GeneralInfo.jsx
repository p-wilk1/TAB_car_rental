import React from "react";
import styles from "../sectionUserPanel/GeneralInfo.module.css";

const testUser = {
  userId: 1,
  name: "Gabriel",
  email: "zmitac@wp.pl",
};

export default function GeneralInfo({ user }) {
  const { userId: id, name, email } = testUser;
  return (
    <div className={styles.generalInfoContainer}>
      <h1>Witaj, {name}!</h1>
      <h2>{email}</h2>
    </div>
  );
}
