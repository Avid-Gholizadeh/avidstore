import {insertProductSchema} from '@/lib/validators'
import {z} from 'zod'

export type ProductType = z.infer<typeof insertProductSchema> & {
    id: string
    createdAt: Date
    rating: string
}
