const Link = window.ReactRouterDOM.Link;
import "./Style/Nav.css";

export default function Nav() {
    return (
        <>
            <nav className="navigation">
                <Link className="navigation__link" to="/">Home</Link>
                <Link className="navigation__link" to="/vote">Vote</Link>
            </nav>
        </>
    )
}