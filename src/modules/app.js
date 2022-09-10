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
                            <section class="booking__nav">
                                <a onclick="openCity(event, 'oneway')" class="booking__navitem booking__navitem--selected" id="one-way"><span class="material-icons">
                    arrow_right_alt
                    </span> Enkelt</a>
                                <a onclick="openCity(event, 'route')" class="booking__navitem" id="tur-retur"><span class="material-icons">swap_horiz</span>Tur-retur</a>
                                <a onclick="openCity(event, 'eventsejl')" class="booking__navitem" id="event"><span class="material-icons">
                    event_available
                    </span> Event</a>
                            </section>
                            <VoteForm title="Stem på din favorit" from={
                                [
                                    "Egernsund",
                                    "Marina Minde (Rendbjerg)",
                                    "Brunsnæs",
                                    "Langballigau",
                                    "Flensborg"
                                ]}
                                to={
                                    [
                                        "Marina Minde (Rendbjerg)",
                                        "Brunsnæs",
                                        "Langballigau",
                                        "Flensborg",
                                        "Egernsund"
                                    ]
                                }
                            />
                        </main>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    )
}