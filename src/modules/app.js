import "./App.css";
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const { useState, useEffect } = React;

import BookingForm from "../components/BookingForm/BookingFormFunctionality";
import Nav from "../components/Nav/Nav";
import Error from "../components/Error/Error";
import LoadingBar from "../components/LoadingBar/LoadingBar";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const shipsId = 1;
    const routeId = 1;
    let from = "";
    let to = "";

    const Fetch = async () => {
        const t = fetch("http://0.0.0.0:3000/server/API/getRoutes.php", {
            body: routeId,
            method: "post"
        }).then((r) => r.json());

        return await t;
    };

    const data = Fetch();

    if (data) {
        console.log(data);
    }

    /* const from = [
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
    ] */

    return (
        <>
            <Router>
                <header className="main-header">
                    <Link className="logo" to="/">Ferry Booking <span>by Intastellar Solutions, International</span></Link>
                    <Nav />
                </header>
                <Switch>
                    <Route path="/" exact>
                        <main className="content">
                            {(!from) ? <LoadingBar /> :
                                <Error>
                                    <BookingForm from={from} to={to} shipsId={shipsId} />
                                </Error>
                            }
                        </main>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    )
}