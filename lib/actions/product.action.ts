'use server'
import {PrismaClient} from '@prisma/client'
import {convertPrismaObjectToJsObject} from '@/lib/utils'
import {LATEST_PRODUCT_LIMIT} from '../constants'

export async function getLatestProducts() {
    const prisma = new PrismaClient()
    const products = await prisma.product.findMany({
        take: LATEST_PRODUCT_LIMIT,
        orderBy: {createdAt: 'desc'},
    })

    return convertPrismaObjectToJsObject(products)
}
