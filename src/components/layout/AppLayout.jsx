import { NavLink, Outlet, Link } from "react-router-dom";

const navigationItems = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Study plan", to: "/study-plan" },
    { label: "Resume", to: "/resume" },
    { label: "Jobs", to: "/jobs" },
    { label: "Interview", to: "/interview" },
    { label: "Profile", to: "/profile" },
    { label: "Settings", to: "/settings" },
];

function AppLayout() {
    return (
        <div className="app-shell">
            <aside className="app-sidebar">
                <div className="app-sidebar__brand">
                    <span>AI Study Planner</span>
                    <h1>Study with structure and keep the next step visible.</h1>
                    <p>Use the sidebar to move between the main areas of the app.</p>
                </div>

                <nav className="app-nav" aria-label="Primary">
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="app-sidebar__footer">
                    <p>Need a fresh start? Sign out and return to the login screen.</p>
                </div>
            </aside>

            <div className="app-main">
                <header className="app-topbar">
                    <div>
                        <p>Workspace</p>
                        <h1>Build your study system.</h1>
                    </div>

                    <Link className="topbar-button" to="/login">
                        Sign out
                    </Link>
                </header>

                <main className="app-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AppLayout;
