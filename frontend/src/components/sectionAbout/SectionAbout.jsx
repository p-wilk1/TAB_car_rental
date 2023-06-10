import React from 'react';
import SectionAboutCSS from './SectionAbout.module.css';
import AboutHeader from './AboutHeader';
import ColumnContainerAbout from './ColumnContainerAbout';

function SectionAbout({ children }) {
	return <div className={SectionAboutCSS.sectionAbout}>{children}</div>;
}

export default SectionAbout;
