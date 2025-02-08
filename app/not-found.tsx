'use client'

import {Button} from '@/components/ui/button'
import {APP_NAME} from '@/lib/constants'
import Image from 'next/image'

const NotFoundPage = () => {
    return (
        <div className="flex-center min-h-screen  flex-col">
            <Image
                src={'/images/logo.svg'}
                alt={`${APP_NAME} logo`}
                width={48}
                height={48}
                priority
            />

            <div className="rounded-lg p-6 shadow-md text-center">
                <h1 className="text-3xl-font-bold ">Not Found</h1>
                <p className="mt-4 text-destructive">Could not find requested page</p>
                <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => (window.location.href = '/')}
                >
                    Back To Home
                </Button>
            </div>
        </div>
    )
}

export default NotFoundPage
