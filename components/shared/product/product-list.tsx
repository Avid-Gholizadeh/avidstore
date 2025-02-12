import {ProductType} from '@/types'
import ProductCard from './product-card'

const ProductList = ({
    data,
    title,
    limit,
}: {
    data: ProductType[]
    title?: string
    limit?: number
}) => {
    //

    const limitedData = limit ? data.slice(0, limit) : data

    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>

            {data.length > 0 ? (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {limitedData.map((product: ProductType) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            ) : (
                <div>Not product found</div>
            )}
        </div>
    )
}

export default ProductList
