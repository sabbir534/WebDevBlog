import Link from "next/link";
import { MdNoteAlt } from "react-icons/md";
import Container from "./Container";
import Notifications from './Notifications';
import SearchInput from "./SearchInput";
import ThemeToggle from "./ThemeToggle";
import UserButton from "./UserButton";

const NavBar = () => {
    return (
        <nav className="sticky border-b top-0 z-50 bg-white dark:bg-slate-950">
            <Container
            >
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <MdNoteAlt size={24} />
                        <div className="font-bold text-xl">WEBDEV.blog</div>
                    </div>
                    <SearchInput />
                    <div className="flex items-center gap-5 sm:gap-8">
                        <ThemeToggle />
                        <Notifications />
                        <UserButton />
                        <>
                            <Link href={"/login"}>Login</Link>
                            <Link href={"/register"}>Register</Link>

                        </>
                    </div>
                </div>
            </Container>

        </nav>
    )
}

export default NavBar;