import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export type FindByCursor = (
	x: number | null,
) => Promise<{
	id: number;
	name: string;
	category: string;
	subcategory: string;
}[]>;
const findByCursor:FindByCursor = async (cursor: number | null) => {
	const productPPage = 10;

	let cursorOpt = {};
	if (cursor) {
		cursorOpt = { cursor: { id: cursor }, skip: 1 };
	}

	return await client.product.findMany({
		take: productPPage,
		orderBy: {
			id: "asc",
		},
		...cursorOpt,
	});
};

export interface ProductServices{
	findByCursor:FindByCursor
}
module.exports = { findByCursor };
