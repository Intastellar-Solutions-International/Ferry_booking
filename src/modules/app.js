import "./App.css";
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

import BookingForm from "../components/BookingForm/BookingFormFunctionality";
import Nav from "../components/Nav/Nav";

export default function App() {
    const from = [
        {
            id: "1",
            harbor: "Egernsund"
        },
        {
            id: "2",
            harbor: "Marina Minde (Rendbjerg)",
        },
        {
            id: "3",
            harbor: "Brunsnæs",
        },
        {
            id: "4",
            harbor: "Langballigau",
        },
        {
            id: "5",
            harbor: "Flensborg",
        },
        {
            id: "6",
            harbor: "Sønderhav",
        }
    ]

    const to = [
        {
            id: "2",
            harbor: "Marina Minde (Rendbjerg)",
        },
        {
            id: "3",
            harbor: "Brunsnæs",
        },
        {
            id: "4",
            harbor: "Langballigau",
        },
        {
            id: "5",
            harbor: "Flensborg",
        },
        {
            id: "6",
            harbor: "Sønderhav",
        },
        {
            id: "1",
            harbor: "Egernsund"
        }
    ]

    return (
        <>
            <Router>
                <header className="main-header">
                    <Link className="logo" to="/">Ferry Booking</Link>
                    <Nav />
                </header>
                <Switch>
                    <Route path="/" exact>
                        <main className="content">
                            <BookingForm from={from} to={to} />
                        </main>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    )
}