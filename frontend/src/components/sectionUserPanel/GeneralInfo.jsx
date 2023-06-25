import React from 'react';
import styles from '../sectionUserPanel/GeneralInfo.module.css';

const testUser = {
	userId: 1,
	name: 'Gabriel',
	email: 'zmitac@wp.pl',
};

export default function GeneralInfo({ userId }) {
	return (
		<div className={styles.generalInfoContainer}>
			<h1>Witaj, {testUser.name}!</h1>
			<h2>{testUser.email}</h2>
		</div>
	);
}
