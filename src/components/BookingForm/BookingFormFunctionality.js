import "./Style/BookingForm.css";
import SingleRouteForm from "./Forms/SingleRouteForm";
import EventRouteForm from "./Forms/EventRouteForm";
import SuccessWindow from "../Success/Success";
const { useState, useSWR, useEffect } = React;
import Order from "../../class/Order";
import LoadingBar from "../LoadingBar/LoadingBar";

export default function BookingForm(props) {

    const [fromHarbor, setFromHarbor] = useState({});
    const [toHarbor, setToHarbor] = useState({});
    const [date, setDate] = useState("");
    const [currency, setCurrency] = useState("DKK");
    
    const [cycle, setCycle] = useState(false);

    const [cycleType, setCycleType] = useState("cycle");

    const [passagener, setPassagner] = useState(1);
    const [disabled, setDisabled] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [viewResult, setviewResult] = useState(false);
    const [apiResults, setAPIresults] = useState("");
    const [errorMessage, setErrorMessage] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const [changeBooking, setChangeBooking] = useState();

    const shipsId = props.shipsId;

    /* 
        "Egernsund",
        "Marina Minde (Rendbjerg)",
        "Brunsnæs",
        "Langballigau",
        "Flensborg",
        "Sønderhav"
    */
    
    function checkValue(v) {
        v = JSON.parse(v).harbor;
        if (v == "Flensborg" || v == "Sønderhav") {
            removeFirst(props?.to, "Marina Minde (Rendbjerg)");
            removeFirst(props?.to, "Brunsnæs");
            removeFirst(props?.to, "Langballigau");
        } else if (v == "Marina Minde (Rendbjerg)" || v == "Langballigau" || v == "Brunsnæs") {
            console.log(props?.to, v);
            removeFirst(props?.to, "Flensborg");
            removeFirst(props?.to, "Sønderhav");

            props?.to.find(obj => {
                if (obj.harbor.indexOf("Marina Minde (Rendbjerg)") == -1 && obj.harbor.indexOf("Langballigau") == -1 && obj.harbor.indexOf("Brunsnæs") == -1) {
                    props?.to?.push("Marina Minde (Rendbjerg)")
                    props?.to?.push("Brunsnæs")
                    props?.to?.push("Langballigau")
                }
            })
        } else if (v == "Egernsund") {

            props?.to.find(obj => {
                console.log(obj.harbor);
                if (obj?.harbor == "Marina Minde (Rendbjerg)" && obj?.harbor == "Langballigau" && obj?.harbor == "Brunsnæs" && obj?.harbor == "Flensborg" && obj?.harbor == "Sønderhav") {
                    props?.to?.push("Marina Minde (Rendbjerg)")
                    props?.to?.push("Brunsnæs")
                    props?.to?.push("Langballigau")
                }
            })

            props?.to.find(obj => {
                if (obj?.harbor.indexOf("Flensborg") == -1 && obj?.harbor.indexOf("Sønderhav") == -1) {
                    props?.to?.push("Flensborg")
                    props?.to?.push("Sønderhav")
                }
            })
        }
    }
    
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    function removeFirst(arr, target) {

        var idx = arr.find(obj => {
            return obj.harbor === target;
        })

        if (idx.harbor == target) {
          arr.splice(idx, 1);
        }

        return arr;
      }

    const [order, setOrder] = useState(new Order(makeid(10)));

    const headers = {
        "ContentType":'application/json'
    };
    
    const searchItem = function () {
        
        setIsLoading(true);
        setAPIresults("");
        setviewResult(false);

        order.harbor.to = JSON.parse(toHarbor);
        order.harbor.from = JSON.parse(fromHarbor);
        order.departureTimeAndDate = new Date(date);
        order.passangerCount = passagener;
        order.bicycle.trueFalse = cycle;
        order.bicycle.type = cycleType;
        order.valuta = currency;

        fetch("http://0.0.0.0:3000/server/API/checkBookings.php", {
            body: JSON.stringify(order),
            method: "post"
        }).then(async (r) => r.json()).then((r) => {
            setErrorMessage();
            if (r != "") {
                setIsLoading(false);          
                setAPIresults(r);
            }

            if (r != "No results") {
                setviewResult(true);
            }

        }).catch(async (e) => {
            setIsLoading(false);
            setviewResult(false);
            setErrorMessage("Sorry, we have some API errors!! \n" + e);
        })
    }

    
    const change = document.querySelectorAll(".change");
    for(let i=0; i<change.length; i++){
        change[i].addEventListener("click", function () {
            const from = this.previousElementSibling.childNodes[1];
            const to = this.nextElementSibling.childNodes[1];
            
            const temp = this.previousElementSibling.childNodes[1].value;
            from.value = to.value;
            to.value = temp;
        });
    }

    useEffect(() => {
        setChangeBooking((window.location.hash) ? window.location.hash.split("#")[1] : "single");
    }, [window.location.hash, changeBooking])

    return (
        <>
            <div className="intastellarBooking">
                <section className="booking__nav">
                    <button className={"booking__navitem " + (changeBooking === "single" ? "booking__navitem--selected" : "")} onClick={() => { setChangeBooking("single"); window.location.hash = "single" } }>Enkelt</button>
                    <button className={"booking__navitem " + (changeBooking === "event" ? "booking__navitem--selected" : "")} onClick={() => { setChangeBooking("event"); window.location.hash = "event"; } }>Event</button>
                </section>
                {(changeBooking == "single") ? <SingleRouteForm
                    setFromHarbor={setFromHarbor}
                    setToHarbor={setToHarbor}
                    setDate={setDate}
                    setCurrency={setCurrency}
                    setCycle={setCycle}
                    setCycleType={setCycleType}
                    setPassagner={setPassagner}
                    setDisabled={setDisabled}
                    disabled={disabled}
                    currency={currency}
                    date={date}
                    searchItem={searchItem}
                    checkValue={checkValue}
                    passagener={passagener}
                    isLoading={isLoading}
                    setButtonDisabled={setButtonDisabled}
                    to={props.to}
                    from={props.from}
                    shipsId={shipsId} /> : (changeBooking == "event") ?
                    <EventRouteForm
                        setFromHarbor={setFromHarbor}
                        setToHarbor={setToHarbor}
                        setDate={setDate}
                        setCurrency={setCurrency}
                        setCycle={setCycle}
                        setCycleType={setCycleType}
                        setPassagner={setPassagner}
                        setDisabled={setDisabled}
                        disabled={disabled}
                        currency={currency}
                        searchItem={searchItem}
                        date={date}
                        passagener={passagener}
                        setButtonDisabled={setButtonDisabled}
                        buttonDisabled={buttonDisabled}
                        isLoading={isLoading}
                        to={props.to}
                        from={props.from}
                        shipsId={shipsId}
                    /> :
                    <SingleRouteForm
                        setFromHarbor={setFromHarbor}
                        setToHarbor={setToHarbor}
                        setDate={setDate}
                        setCurrency={setCurrency}
                        setCycle={setCycle}
                        checkValue={checkValue}
                        searchItem={searchItem}
                        setCycleType={setCycleType}
                        setPassagner={setPassagner}
                        setDisabled={setDisabled}
                        disabled={disabled}
                        currency={currency}
                        date={date}
                        passagener={passagener}
                        setButtonDisabled={setButtonDisabled}
                        isLoading={isLoading}
                        to={props.to}
                        from={props.from}
                        shipsId={shipsId}
                    />}
                <section className="departures_Results">
                    {
                        (isLoading) ? <p className="searchBar">Searching a ferry connection for you <LoadingBar /></p> : null
                    }
                    {
                        (viewResult && changeBooking != "event" && Array.isArray(apiResults) && apiResults.length > 0 || typeof apiResults === "object") ? <SuccessWindow values={apiResults} order={ JSON.stringify(order) } /> : null
                    }
                    {
                        (apiResults && typeof apiResults === "string" && apiResults == "No results") ? <p>Sorry we didn´t find any routes. Try mabey to adjust date, time, destination or passagener number.</p> : null
                    }
                    {
                        (errorMessage && errorMessage === "string") ? <p>{ errorMessage }</p> : null
                    }
                </section>
            </div>
        </>
    )
}