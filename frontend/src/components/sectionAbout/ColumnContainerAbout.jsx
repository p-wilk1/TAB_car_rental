import React from 'react'
import ColumnContainerAboutCSS from '../sectionAbout/ColumnContainerAbout.module.css'

function ColumnContainerAbout() {
  return (
    <div className={ColumnContainerAboutCSS.columnContainer}>
        <div className={ColumnContainerAboutCSS.row}>
            <div className={ColumnContainerAboutCSS.column1of3}>
            <p>{placeholderMarkup}</p>
            </div>
            <div className={ColumnContainerAboutCSS.column1of3}>
                <p>{placeholderMarkup}</p>
            </div>
            <div className={ColumnContainerAboutCSS.column1of3}>
                <p>{placeholderMarkup}</p>
            </div>
        </div>
    </div>
  )
}
const placeholderMarkup='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat laoreet mi eget mollis. Etiam venenatis, sem in accumsan fringilla, nisi nulla fringilla arcu, a placerat turpis quam eget risus. Curabitur porttitor ut magna eu efficitur. Ut commodo ligula mi, id posuere quam rhoncus eget. Aenean sed lorem pharetra, ornare nisi ac, feugiat lacus. Donec a odio eu lorem molestie sodales. Suspendisse vulputate, mi vitae vehicula interdum, mauris libero ultricies orci, sed feugiat elit nisi non ligula. Nam ex arcu, consectetur quis elit vel, rhoncus convallis diam. Curabitur non ex vitae mauris cursus rutrum. Proin et tincidunt libero. Sed viverra leo et nibh dictum, a aliquet urna eleifend. Vestibulum dolor diam, tempor vitae congue ac, tincidunt at magna. Ut ullamcorper pretium varius. Curabitur posuere nibh at massa ornare condimentum. Fusce fringilla mollis elementum.Curabitur dignissim mauris nisl, sed hendrerit risus aliquam vitae. Mauris sed placerat ante. Nam aliquam placerat nulla, ac semper tortor aliquet a. Curabitur finibus at ante vitae porta. Donec ornare ornare viverra. Curabitur vel elit ac lorem commodo pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed porta diam, sed congue ante. Nam vehicula purus quis orci lacinia, ut posuere eros posuere. Etiam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat laoreet mi eget mollis. Etiam venenatis, sem in accumsan fringilla, nisi nulla fringilla arcu, a placerat turpis quam eget risus. Curabitur porttitor ut magna eu efficitur. Ut commodo ligula mi, id posuere quam rhoncus eget. Aenean sed lorem pharetra, ornare nisi ac, feugiat lacus. Donec a odio eu lorem molestie sodales. Suspendisse vulputate, mi vitae vehicula interdum, mauris libero ultricies orci, sed feugiat elit nisi non ligula. Nam ex arcu, consectetur quis elit vel, rhoncus convallis diam. Curabitur non ex vitae mauris cursus rutrum. Proin et tincidunt libero. Sed viverra leo et nibh dictum, a aliquet urna eleifend. Vestibulum dolor diam, tempor vitae congue ac, tincidunt at magna. Ut ullamcorper pretium varius. Curabitur posuere nibh at massa ornare condimentum. Fusce fringilla mollis elementum.Curabitur dignissim mauris nisl, sed hendrerit risus aliquam vitae. Mauris sed placerat ante. Nam aliquam placerat nulla, ac semper tortor aliquet a. Curabitur finibus at ante vitae porta. Donec ornare ornare viverra. Curabitur vel elit ac lorem commodo pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed porta diam, sed congue ante. Nam vehicula purus quis orci lacinia, ut posuere eros posuere. Etiam.'

export default ColumnContainerAbout
