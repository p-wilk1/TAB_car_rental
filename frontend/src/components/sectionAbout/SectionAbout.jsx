import React from 'react';
import SectionAboutCSS from './SectionAbout.module.css';
import AboutHeader from './AboutHeader';
import ColumnContainerAbout from './ColumnContainerAbout';

function SectionAbout() {
	return (
		<div className={SectionAboutCSS.sectionAbout}>
			<AboutHeader />
			<ColumnContainerAbout />
		</div>
	);
}

export default SectionAbout;
