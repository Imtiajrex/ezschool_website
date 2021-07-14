/* eslint-disable @next/next/no-img-element */
import Marquee from "react-fast-marquee";
import { IoSchool, IoNotifications } from "react-icons/io5";
import { useContext } from "react";
import { ModalContext } from "./ModalContext";

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
	const modal = useContext(ModalContext);
	return (
		<div className="features-wrapper">
			<div className="features">
				<img src="/images/circle-bg.svg" alt="bg" className="bg" />
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
				<button className="button" onClick={() => modal.setOpen(true)}>
					TRY FOR FREE
				</button>
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
