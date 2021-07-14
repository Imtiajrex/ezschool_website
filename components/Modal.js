/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { ModalContext } from "./ModalContext";
import sendGif from "@/images/send.json";
import okGif from "@/images/ok.json";
import Lottie from "react-lottie";
const wrapperVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
	exit: {
		opacity: 0,
	},
};
const modalVariant = {
	initial: {
		scale: 0,
	},
	animate: {
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
		},
	},

	exit: {
		scale: 0,
	},
};
const defaultOptions = {
	loop: false,
	autoplay: true,
	animationData: sendGif,
	rendererSettings: {},
};
export default function Modal() {
	const modal = useContext(ModalContext);
	const [state, handleSubmit] = useForm("xnqlbdve");

	const submit = (e) => {
		e.preventDefault();
		handleSubmit(e);
	};
	return (
		<>
			<AnimatePresence>
				{modal.open && (
					<motion.div
						className="modal-wrapper"
						variants={wrapperVariant}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<motion.div
							className="overlay"
							onClick={() => modal.setOpen(false)}
							variants={wrapperVariant}
						/>
						<motion.div className="modal" variants={modalVariant}>
							<motion.div
								className="close"
								onClick={() => modal.setOpen(false)}
							>
								<FaTimes size={20} color="#2b2b2b" />
							</motion.div>
							{state.succeeded ? (
								<div className="joined">
									<Lottie
										options={{ ...defaultOptions, animationData: okGif }}
									/>
									<div className="thanks large">Thanks for joining.</div>
									<div className="text">We'll get back to you asap!</div>
								</div>
							) : (
								<>
									<motion.div
										className="title-wrapper"
										variants={wrapperVariant}
									>
										<motion.div className="title large">GET STARTED</motion.div>
										<motion.div className="underline" />
									</motion.div>
									<motion.div className="contact" variants={wrapperVariant}>
										<form onSubmit={submit}>
											<Input label="Name">
												<input
													type="text"
													name="name"
													placeholder="Your Name..."
												/>
												<ValidationError
													prefix="Name"
													field="name"
													errors={state.errors}
												/>
											</Input>
											<Input label="Email">
												<input
													type="email"
													name="email"
													placeholder="Your Email..."
												/>
												<ValidationError
													prefix="Email"
													field="email"
													errors={state.errors}
												/>
											</Input>
											<Input label="Institute Name">
												<input
													type="text"
													name="institute_name"
													placeholder="Enter Institute Name..."
												/>
												<ValidationError
													prefix="Institute Name"
													field="text"
													errors={state.errors}
												/>
											</Input>
											<Input label="Package">
												<select name="package" value={modal.pack}>
													<option value="0">Select Package</option>
													<option value="REGULAR">Regular</option>
													<option value="STANDARD">Standard</option>
													<option value="PREMIUM">Premium</option>
												</select>
												<ValidationError
													prefix="Package"
													field="select"
													errors={state.errors}
												/>
											</Input>
											<button className="button">
												{state.submitting ? (
													<Lottie options={defaultOptions} />
												) : (
													"SEND NOW"
												)}
											</button>
										</form>
									</motion.div>
								</>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
function Input({ label, children }) {
	return (
		<motion.div className="input-wrapper">
			<motion.label className="input-label">{label}</motion.label>
			{children}
		</motion.div>
	);
}
