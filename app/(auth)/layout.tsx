import Footer from '@/components/footer'
import Header from '@/components/shared/header'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <div className="flex-center min-h-screen w-full">{children}</div>
}
