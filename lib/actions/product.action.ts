'use server'
import {prisma} from '@/db/prisma'
import {convertPrismaObjectToJsObject} from '@/lib/utils'
import {LATEST_PRODUCT_LIMIT} from '../constants'

// get latest products
export async function getLatestProducts() {
    const products = await prisma.product.findMany({
        take: LATEST_PRODUCT_LIMIT,
        orderBy: {createdAt: 'desc'},
    })

    return convertPrismaObjectToJsObject(products)
}

// get single product by its slug
export async function getProductBySlug(slug: string) {
    return prisma.product.findFirst({
        where: {slug: slug},
    })
}
