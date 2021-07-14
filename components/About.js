/* eslint-disable @next/next/no-img-element */
export default function About() {
	return (
		<div className="about">
			<div className="title large">ABOUT US</div>
			<div className="underline" />
			<div className="details">
				<div className="image">
					<img src="/images/about.svg" alt="about image" />
				</div>
				<div className="text">
					<div className="header">WE CRAFT THINGS THAT MATTER</div>
					<div className="description">
						We are a team of software developers. We craft things that matter
						and work. Helping people to make their work easier has been our goal
						since the beginning.
						<br />
						Our team built ezschool to help the school community of our country
						mainly because our countries school is not digitalised and its quite
						exhausting for the employees to do the work manually.
						<br />
						So we crafted EZschool and made it affordable to every school
						possible.
						<br />
						Thanks,
						<br />
						From the team of ezschool.
					</div>
					<button className="button">TRY FOR FREE</button>
				</div>
			</div>
		</div>
	);
}
