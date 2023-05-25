import React from 'react'
import SectionAboutCSS from './SectionAbout.module.css'

function SectionAbout({children}) {
  return (
    <div className={SectionAboutCSS.sectionAbout}>{children}</div>
  )
}

export default SectionAbout;