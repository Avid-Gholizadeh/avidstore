import {Button} from '@/components/ui/button'
import {EllipsisVertical, ShoppingCart, UserIcon} from 'lucide-react'
import ModeToggle from './mode-toggle'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

const Menu = () => {
    return (
        <>
            {' '}
            <nav className="hidden md:flex w-full max-w-xs text-right justify-end gap-3">
                <ModeToggle />
                <Button asChild variant="ghost">
                    <Link href="/cart">
                        <ShoppingCart /> Cart
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/sign-in">
                        <UserIcon /> Sign In
                    </Link>
                </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <EllipsisVertical />
                    </SheetTrigger>

                    <SheetContent className="flex flex-col items-start">
                        <SheetTitle>Menu</SheetTitle>

                        <ModeToggle />
                        <Button asChild variant="ghost">
                            <Link href="/cart">
                                <ShoppingCart /> Cart
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/sign-in">
                                <UserIcon /> Sign In
                            </Link>
                        </Button>

                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    )
}

export default Menu
