import Image from 'next/image';
import React from 'react';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';
import axios from 'axios';

const CartList = ({ carts }) => {
	const router = useRouter();

	const totalPrice = carts.reduce((accumulator, current) => {
		return accumulator + parseFloat(current.price);
	}, 0);
	// forEach 구문으로로 사용 가능

	const removeCart = async id => {
		// 1. 삭제 API 호출
		// const { data } = await removeCartItem(id);
		const { data } = await axios.post('http://localhost:3000/api/carts', {
			id: id,
		});
		// alert(`${data.name} 삭제가 되었습니다. ㅊㅋㅊㅋ`);
		console.log('response', data);
		// 2. 상품 목록 갱신
		alert(data);
		// push 페이지 이동을 할때 주로 사용
		// replace 이동한 흔적을 남기지 않음
		router.replace(router.asPath);
	};

	return (
		<>
			<ul>
				{carts.map(cart => {
					return (
						<li key={cart.id} className={styles.item}>
							<div>
								<Image
									src={cart.imageUrl}
									alt={cart.name}
									width="70"
									height="70"
								/>
							</div>
							<div className={styles.description}>
								<div>{cart.name}</div>
								<div>{cart.price}</div>
								{/* 인자를 전달할때 화살표 함수 사용하기 */}
								<button onClick={() => removeCart(cart.id)}>삭제하기</button>
							</div>
						</li>
					);
				})}
			</ul>
			<div>
				<p>총 가격: {totalPrice} </p>
				<p>총 수량: {carts.length} 개</p>
			</div>
		</>
	);
};

export default CartList;
