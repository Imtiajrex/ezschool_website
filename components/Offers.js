import { FaCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { ModalContext } from "./ModalContext";

const regularList = [
	{ text: "150 Students" },
	{ text: "500MB image storage" },
	{ text: "2 user roles" },
	{ text: "Admin Portal" },
	{ text: "Teacher Portal" },
	{ text: "Student Portal", inactive: true },
	{ text: "Guardian Portal", inactive: true },
	{ text: "Blogging Portal", inactive: true },
	{ text: "Website", inactive: true },
];
const standardList = [
	{ text: "500 Students" },
	{ text: "1GB image storage" },
	{ text: "4 user roles" },
	{ text: "Admin Portal" },
	{ text: "Teacher Portal" },
	{ text: "Student Portal" },
	{ text: "Guardian Portal" },
	{ text: "Blogging Portal" },
	{ text: "Website", inactive: true },
];
const premiumList = [
	{ text: "500 Students" },
	{ text: "1GB image storage" },
	{ text: "4 user roles" },
	{ text: "Admin Portal" },
	{ text: "Teacher Portal" },
	{ text: "Student Portal" },
	{ text: "Guardian Portal" },
	{ text: "Blogging Portal" },
	{ text: "Website" },
];
export default function Offers() {
	return (
		<div className="offers-wrapper">
			<div className="title large">OFFERS</div>
			<div className="underline" />
			<div className="offers">
				<Offer title="REGULAR" price="1500৳/month" lists={regularList} />
				<Offer title="STANDARD" price="2500৳/month" lists={standardList} />
				<Offer title="PREMIUM" price="6000৳/month" lists={premiumList} />
			</div>
		</div>
	);
}
function Offer({ title, price, lists }) {
	const modal = useContext(ModalContext);
	return (
		<div className={title == "STANDARD" ? "offer-special" : "offer"}>
			<div className="offer-title">{title}</div>
			<div className="price">{price}</div>
			<div className="lists">
				{lists.map((el, idx) => (
					<div className="list" key={idx}>
						<div className={!el.inactive ? "active" : "active special"}>
							<FaCheckCircle
								color={!el.inactive ? "#0fba79" : "#9b9696"}
								size={16}
							/>
						</div>
						<div className={el.inactive ? "disabled-text" : "active-text"}>
							{el.text}
						</div>
					</div>
				))}
			</div>
			<button
				className="button"
				onClick={() => {
					modal.setOpen(true);
					modal.setPackage(title);
				}}
			>
				GET NOW
			</button>
		</div>
	);
}
