'use client'

import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {singInWithCredentials} from '@/lib/actions/user.actions'
import {signInDefaultValues} from '@/lib/constants'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import {useActionState} from 'react'
import {useFormStatus} from 'react-dom'

const CredentialsSignInFrom = () => {
    const [data, action] = useActionState(singInWithCredentials, {success: false, message: ''})

    const callbackUrl = useSearchParams().get('callbackUrl') || '/'

    const SignInButton = () => {
        const {pending} = useFormStatus()

        return (
            <Button disabled={pending} className="w-full">
                {pending ? 'Signing In...' : 'Sign In'}
            </Button>
        )
    }

    return (
        <form action={action}>
            {/* Sending CallbackUrl To Server Action */}
            <input type="hidden" name="callbackUrl" value={callbackUrl} />

            <div className="space-y-6">
                {/* EMAIL INPUT */}
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        defaultValue={signInDefaultValues.email}
                    />
                </div>

                {/* PASSWORD INPUT */}
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="password"
                        defaultValue={signInDefaultValues.password}
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <SignInButton />
                </div>

                {data && !data.success && (
                    <div className="text-center text-destructive">{data.message}</div>
                )}

                <div className="text-sm text-center text-muted-foreground">
                    Don&apos;t hava an account?{' '}
                    <Link href="/sign-up" target="_self" className="link">
                        Sign Up
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default CredentialsSignInFrom
