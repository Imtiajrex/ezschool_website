export default function Features() {
	return (
		<div className="features">
			<div className="title large">FEATURES</div>
			<div className="underline" />
			<Feature />
			<Feature />
			<Feature />
			<Feature />
		</div>
	);
}
function Feature() {
	return (
		<div className="feature">
			<span className="icon"></span>
			<div className="name"></div>
		</div>
	);
}
