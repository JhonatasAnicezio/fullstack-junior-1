import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex items-center pt-[46px] gap-10 text-lg font-normal">
            <Link href={'/market'}>Market</Link>
            <Link href={'/works'}>How it works</Link>
            <Link href={'/galerry'}>Galerry</Link>
            <Link href={'/about'}>About</Link>
        </nav>
    )
}