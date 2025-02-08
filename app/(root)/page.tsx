// const delay = (miliS: number) => new Promise(resolve => setTimeout(resolve, miliS))

import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/db/sample-data'

export default async function HomePage() {
    // await delay(2000)
    return (
        <>
            <ProductList data={sampleData.products} title="New Arivals" limit={4} />
        </>
    )
}
