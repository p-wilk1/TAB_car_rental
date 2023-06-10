import React from 'react';
import HeaderCSS from './Header.module.css';

// text-transform: uppercase;
// font-weight: 100;
// font-size: 3rem;
// letter-spacing: 5px;
// border-bottom: 1px solid #a1a8c1;
function Header({ textColor, borderColor, children }) {
	return (
		<>
			<div className={HeaderCSS.titleContainer}>
				<h2
					style={{
						color: textColor,
						textTransform: 'uppercase',
						borderBottom: `1px solid ${borderColor}`,
						fontWeight: '100',
						fontSize: '3rem',
						letterSpacing: '5px',
					}}
				>
					{children}
				</h2>
			</div>
		</>
	);
}

export default Header;
