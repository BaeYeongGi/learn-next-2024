import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<>
			<nav>
				<Link href="/">상품 목록</Link> | <Link href="/cart">장바구니</Link>
			</nav>
			<div>{children}</div>
		</>
	);
};

export default Layout;

/**
 *  /login
 *  /main
 *  /home
 *  /product/productId'
 */
