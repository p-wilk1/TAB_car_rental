import CarAttributeCss from './CarAttribute.module.css';

function CarAttribute({ emoji, text }) {
	return (
		<div className={CarAttributeCss.carAttribute}>
			{emoji}
			<b>{text}</b>
		</div>
	);
}

export default CarAttribute;
