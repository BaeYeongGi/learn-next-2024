import { fetchProductsById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ productDetail }) {
	return (
		<>
			<ProductHeader title="상품 상세 정보 페이지" />
			<ProductInfo productDetail={productDetail} />
		</>
	);
}

// server side rendering
// Next.js 에서 제공하는 데이터 호출 메소드
export async function getServerSideProps(context) {
	const id = context.params.id;
	const { data } = await fetchProductsById(id);
	// response.data
	return {
		props: {
			productDetail: data,
		},
	};
}

/**
 *
 *
 */
