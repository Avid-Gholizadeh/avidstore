import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {APP_NAME} from '@/lib/constants'
import {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CredentialsSignInFrom from './credentials-signin-form'
import {auth} from '@/auth'
import {redirect} from 'next/navigation'

export const metadata: Metadata = {
    title: 'Sign In',
}

const SignInPage = async (props: {searchParams: Promise<{callbackUrl: string}>}) => {
    const session = await auth()

    const {callbackUrl} = await props.searchParams

    if (session) {
        redirect(callbackUrl || '/')
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <Card>
                <CardHeader className="flex-center space-y-4">
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt={`${APP_NAME} logo`}
                            width={100}
                            height={100}
                            priority
                        />
                    </Link>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Sing In to your account</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <CredentialsSignInFrom />
                </CardContent>
            </Card>
        </div>
    )
}

export default SignInPage
