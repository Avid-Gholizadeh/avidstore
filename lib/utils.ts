import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function convertPrismaObjectToJsObject<T>(value: T): T {
    return JSON.parse(JSON.stringify(value))
}

export function formatProductPrice(price: number) {
    const [integer, decimal] = price.toString().split('.')
    return decimal ? `${integer}.${decimal.padEnd(2, '0')}` : `${integer}.00`
}
