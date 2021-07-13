import Marquee from "react-fast-marquee";
import { IoSchool, IoNotifications } from "react-icons/io5";
import {
	FaChalkboardTeacher,
	FaCashRegister,
	FaFileSignature,
	FaFingerprint,
	FaUsers,
} from "react-icons/fa";
import { HiLibrary } from "react-icons/hi";
import { MdWeb } from "react-icons/md";
import { IconContext } from "react-icons/lib";
export default function Features() {
	return (
		<div className="features-wrapper">
			<BG />
			<div className="features">
				<div className="title large">FEATURES</div>
				<div className="underline" />
				<Marquee speed={100} pauseOnClick pauseOnHover gradientWidth={50}>
					<Feature Icon={IoSchool} name="Students Portal" />
					<Feature Icon={FaChalkboardTeacher} name="Teachers Portal" />
					<Feature Icon={HiLibrary} name="Library Portal" />
					<Feature Icon={FaCashRegister} name="Accounts Portal" />
					<Feature Icon={FaFileSignature} name="Results System" />
					<Feature Icon={FaFileSignature} name="Results System" />
					<Feature Icon={FaFingerprint} name="Attendance System" />
					<Feature Icon={IoNotifications} name="Notification System" />
					<Feature Icon={MdWeb} name="Web Portal" />
					<Feature Icon={FaUsers} name="User Portal" />
				</Marquee>
				<button className="button">TRY FOR FREE</button>
			</div>
		</div>
	);
}
function BG() {
	function randomNum(type) {
		let num = Math.floor(Math.random() * 100);
		if (type != "left")
			while (num > 50 && num < 85) num = Math.floor(Math.random() * 100);
		return num;
	}

	return (
		<div className="bg">
			<div className="bg-container">
				{[...Array(20).keys()].map((el) => (
					<div
						className="circle"
						style={{
							top: `${randomNum()}%`,
							left: `${randomNum("left")}%`,
							transform: `scale(${randomNum()}%)`,
						}}
						key={el}
					/>
				))}
			</div>
		</div>
	);
}
function Feature({ Icon, name }) {
	return (
		<div className="feature">
			<IconContext.Provider value={{ color: "black", size: 35 }}>
				<div className="icon">
					<Icon />
				</div>
			</IconContext.Provider>
			<div className="name">{name}</div>
		</div>
	);
}
