import React from 'react';
import styles from '../shared/Modal.module.css';
import ButtonMultipurpose from './ButtonMultipurpose';

export default function Modal({ onClose }) {
	return (
		<>
			<div className={styles.modalBackdrop}>
				<div className={styles.modalContainer}>
					<h2>
						Twój samochód będzie na ciebie czekać w miejscu odbioru
					</h2>
					<p>Po pełne informacje przejdź do swojego profilu</p>
					<ButtonMultipurpose onClick={onClose}>
						Zamknij
					</ButtonMultipurpose>
				</div>
			</div>
		</>
	);
}
