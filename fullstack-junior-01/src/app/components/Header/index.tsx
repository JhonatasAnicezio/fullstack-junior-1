import { Account } from "./Account";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header className="flex absolute top-0 bg-transparent justify-between w-full">
            <div className="flex w-[55%]">
                <Logo />
                <Navbar />
            </div>
            <Account />
        </header>
    )
}