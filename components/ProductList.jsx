import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { fetchProducts } from '@/api';

const ProductList = () => {
	const [products, setProducts] = useState();

	// client side rendering
	useEffect(() => {
		fetchProducts().then(response => {
			setProducts(response.data);
		});

		// axios.get('http://localhost:4000/products').then(response => {
		// 	setProducts(response.data);
		// });
	}, []);

	console.log(products);

	return (
		<ul>
			{products &&
				products.map(product => {
					return (
						<li key={product.id} class={styles.item}>
							<Link href={`/products/${product.id}`}>
								<div>
									<Image
										src={product.imageUrl}
										alt={product.name}
										width={300}
										height={250}
									></Image>
								</div>
								<div>{product.name}</div>
							</Link>
						</li>
					);
				})}
		</ul>
	);
};

export default ProductList;
