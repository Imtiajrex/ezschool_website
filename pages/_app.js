import ModalProvider from "@components/ModalContext";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
	return (
		<ModalProvider>
			<Component {...pageProps} />
		</ModalProvider>
	);
}

export default MyApp;
