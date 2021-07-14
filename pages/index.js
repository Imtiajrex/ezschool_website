import About from "@components/About";
import Features from "@components/Features";
import Hero from "@components/Hero";
import Offers from "@components/Offers";
import SocialProof from "@components/SocialProof";
import Footer from "@components/Footer";
import Head from "next/head";
import Modal from "@components/Modal";

export default function Home() {
	return (
		<>
			<Head>
				<title>EZschool - A School Management Application</title>
				<link
					rel="icon"
					href="/images/logo.png"
					sizes="16x16"
					type="image/png"
				/>
			</Head>
			<Hero />
			<SocialProof />
			<Features />
			<Offers />
			<About />
			<Footer />
			<Modal />
		</>
	);
}
