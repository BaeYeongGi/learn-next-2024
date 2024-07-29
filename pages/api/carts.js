// http://localhost:3000/carts

import { removeCartItem } from '@/api';

// FE서버가 api 역할
export default async function handler(req, res) {
	const id = req.body.id;
	const { data } = await removeCartItem(id);
	console.log('# id:', id);
	res.status(200).send(`${data.name} 삭제가 되었습니다`);
}
