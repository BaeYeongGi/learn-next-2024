import Layout from '@/layouts/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<p>레이아웃 칠드런</p>
			</Layout>
			<Component {...pageProps} />
		</>
	);
}
