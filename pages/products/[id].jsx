import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ message, productInfo }) {
	return (
		<>
			<ProductHeader title="상품 상세 정보 페이지" />
			<div>{message}</div>
			<p>{productInfo.name}</p>
		</>
	);
}

// server side rendering
// Next.js 에서 제공하는 데이터 호출 메소드
export async function getServerSideProps(context) {
	const id = context.params.id;
	const response = await axios.get(`http://localhost:4000/products/${id}`);

	return {
		props: {
			message: '서버에서 보내준 메세지',
			productInfo: response.data,
		},
	};
}

/**
 *
 *
 */
