// const delay = (miliS: number) => new Promise(resolve => setTimeout(resolve, miliS))

import ProductList from '@/components/shared/product/product-list'
// import sampleData from '@/db/sample-data'
import {getLatestProducts} from '@/lib/actions/product.action'

export default async function HomePage() {
    //

    const latestProduct = await getLatestProducts()

    return (
        <>
            <ProductList data={latestProduct} title="New Arivals" limit={4} />
        </>
    )
}
