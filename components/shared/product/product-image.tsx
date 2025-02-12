'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useState} from 'react'

const ProductImage = ({image}: {image: string[]}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    return (
        <div>
            <Image
                src={image[currentImageIndex]}
                alt={image[currentImageIndex]}
                height={1000}
                width={1000}
                className="min-h-[300px]"
            />
            <div className="flex">
                {image.map((img, index) => (
                    <Image
                        width={100}
                        height={100}
                        key={img}
                        src={img}
                        alt="small product img"
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                            'border mr-2 hover:border-orange-600',
                            index === currentImageIndex && ' border-orange-500'
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductImage
