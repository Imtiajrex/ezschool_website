/* eslint-disable @next/next/no-img-element */
export default function Hero() {
	return (
		<div className="hero-wrapper">
			<img src="/images/blob-top.svg" alt="hero bg" className="blob-top" />
			<img
				src="/images/blob-bottom.svg"
				alt="hero bg"
				className="blob-bottom"
			/>
			<div className="hero">
				<div className="logo-container">
					<img src="/images/logo.png" alt="logo" />
				</div>
				<div className="value">
					<h1 className="header">An app that helps you manage school</h1>
					<p className="sub-header">
						With this app you get complete management control over your school.
						Students,Teachers,Library we’ve got everything covered. Whatever is
						best for your school we’ve got it.
					</p>
					<button className="button">TRY FOR FREE</button>
					<img
						src="/images/hero_illustration.svg"
						alt="Hero Illustration"
						className="illustration"
					/>
				</div>
			</div>
		</div>
	);
}
