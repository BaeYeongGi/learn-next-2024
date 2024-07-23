import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/ProductList';

// '/' 에 해당되는 페이지 컴포넌트

function ProductPage() {
	return (
		<>
			<ProductHeader title="상품 목록 페이지" />
			<ProductList />
		</>
	);
}
/**
 *  1. 상품 목록 페이지 - '/'
 * 	2. 상품 상세 페이지 - '/product/productId'
 * 	3. 장바구니 페이지 - '/carts'
 */
export default ProductPage;
