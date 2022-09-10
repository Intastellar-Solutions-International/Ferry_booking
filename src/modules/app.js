import "./App.css";
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

import VoteForm from "../components/BookingForm/BookingForm";
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
                            <section className="booking__nav">
                                <a className="booking__navitem booking__navitem--selected" id="one-way">Enkelt</a>
                                <a className="booking__navitem" id="event">Event</a>
                            </section>
                            <VoteForm title="Stem på din favorit" from={from} to={to} />
                        </main>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    )
}