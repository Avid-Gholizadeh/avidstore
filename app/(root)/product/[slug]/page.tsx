import ProductPrice from '@/components/shared/product/product-price'
import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {Card, CardContent} from '@/components/ui/card'
import {getProductBySlug} from '@/lib/actions/product.action'
import {notFound} from 'next/navigation'

const ProductDetailPage = async (props: {params: Promise<{slug: string}>}) => {
    //

    const {slug} = await props.params
    const product = await getProductBySlug(slug)
    if (!product) notFound()

    return (
        <>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-5">
                    {/* Image column */}
                    <div className="col-span-2"></div>
                    {/* Details column */}
                    <div className="col-span-2 flex flex-col gap-6 p-5">
                        <p>
                            {product.brand} {product.category}
                        </p>
                        <h1 className="h3-bold">{product.name}</h1>
                        <p>
                            {product.rating} of {product.numReviews} reviews
                        </p>
                        <div className="w-24 bg-green-100 text-green-700 rounded-full py-2 text-center">
                            <ProductPrice value={product.price} />
                        </div>
                        <div className="mt-10">
                            <p className="font-semibold">Description:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    {/* Action column */}
                    <div>
                        <Card>
                            <CardContent className="p-4 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <p>Price</p>
                                    <ProductPrice value={product.price} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>Status</p>
                                    {product.stock > 0 ? (
                                        <Badge variant="outline">In Stock</Badge>
                                    ) : (
                                        <Badge variant="destructive">Out Of Stock</Badge>
                                    )}
                                </div>
                                {product.stock > 0 && <Button>Add To Cart</Button>}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetailPage
