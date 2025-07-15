import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
    return (
        <nav className="sticky border-b top-0 z-50 bg-white dark:bg-slate-950">
            <Container
            >
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <div>Icon</div>
                        <div>WEBDEV.blog</div>
                    </div>
                    <div>Search</div>
                    <div className="flex items-center gap-5 sm:gap-8">
                        <ThemeToggle />
                        <div>Notifications</div>
                        <div>UserMenu</div>
                    </div>
                </div>
            </Container>

        </nav>
    )
}

export default NavBar;