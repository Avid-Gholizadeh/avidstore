import {Card, CardContent, CardTitle} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import ProductPrice from './product-price'
import {type ProductType} from '@/types'

const ProductCard = ({product}: {product: ProductType}) => {
    return (
        <Card className="w-full max-w-sm overflow-hidden">
            <CardTitle className="p-0  items-center ">
                <Link href={`/product/${product.slug}`}>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={300}
                        height={300}
                        priority
                        className="w-full borderr border-red-500"
                    />
                </Link>
            </CardTitle>
            <CardContent className="p-4 grid gap-4">
                <div className="text-xs">{product.brand}</div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex-between gap-4">
                    <p>{product.rating} Stars</p>
                    {product.stock > 0 ? (
                        <ProductPrice value={product.price} className="font-bold" />
                    ) : (
                        <p className="text-destructive"> Out Of Stock</p>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard
