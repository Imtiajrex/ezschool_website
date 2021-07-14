import { createContext, useState } from "react";
export const ModalContext = createContext();

export default function ModalProvider({ children }) {
	const [open, setOpen] = useState(false);
	const [pack, setPackage] = useState(0);
	return (
		<ModalContext.Provider value={{ setOpen, open, pack, setPackage }}>
			{children}
		</ModalContext.Provider>
	);
}
