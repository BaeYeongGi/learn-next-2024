import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

const ProductInfo = ({ productDetail }) => {
	const router = useRouter();
	const { id, name, imageUrl, price } = productDetail;

	const addCart = async () => {
		// 1. 장바구니에 아이템을 담는 API 함수 호출
		// 파라미터를 객체로 표현하면 순서에 구애받지 않음
		const response = await createCartItem(productDetail);
		console.log('response', response);
		alert('장바구니에 추가됨 ㅊㅋㅊㅋ');
		// 2. 장바구니 페이지로 이동
		router.push('/cart');
	};

	return (
		<>
			<div className={styles.container}>
				<Image src={imageUrl} alt={name} width={250} height={250}></Image>
				<div className={styles.description}>
					<p>{name}</p>
					<p>{price}</p>
					<button onClick={addCart}>장바구니에 담기</button>
				</div>
			</div>
		</>
	);
};

export default ProductInfo;
