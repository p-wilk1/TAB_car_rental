import React from 'react';
import ButtonMultipurposeCSS from './ButtonMultipurpose.module.css';

function ButtonMultipurpose({ url, children }) {
	return (
		<button className={ButtonMultipurposeCSS.btn} href={url}>
			{children}
		</button>
	);
}

export default ButtonMultipurpose;
