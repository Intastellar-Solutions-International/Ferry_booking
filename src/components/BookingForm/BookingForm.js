import "./Style/BookingForm.css";
import SuccessWindow from "../Success/Success";
const { useState, useSWR } = React;
import Order from "../../class/Order";

export default function BookingForm(props) {

    const [first, setfirst] = useState(false);
    const [fromHarbor, setFromHarbor] = useState("");
    const [toHarbor, setToHarbor] = useState("");
    const [date, setDate] = useState("12.08.22 15:00");
    const [cycle, setCycle] = useState(false);
    const [passagener, setPassagner] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const [viewResult, setviewResult] = useState(false);
    const [apiResults, setAPIresults] = useState("");

    /* 
        "Egernsund",
        "Marina Minde (Rendbjerg)",
        "Brunsnæs",
        "Langballigau",
        "Flensborg",
        "Sønderhav"
    */

    function checkValue(v) {
        if (v == "Flensborg" || v == "Sønderhav") {
            removeFirst(props?.to, "Marina Minde (Rendbjerg)");
            removeFirst(props?.to, "Brunsnæs");
            removeFirst(props?.to, "Langballigau");
        } else if (v == "Marina Minde (Rendbjerg)" || v == "Langballigau" || v == "Brunsnæs") {
            removeFirst(props?.to, "Flensborg");
            removeFirst(props?.to, "Sønderhav");

            if (props?.to.indexOf("Marina Minde (Rendbjerg)") == -1 && props?.to.indexOf("Langballigau") == -1 && props?.to.indexOf("Brunsnæs") == -1) {
                props?.to.push("Marina Minde (Rendbjerg)")
                props?.to.push("Brunsnæs")
                props?.to.push("Langballigau")
            }
        } else if (v == "Egernsund") {
            if (props?.to.indexOf("Marina Minde (Rendbjerg)") == -1 && props?.to.indexOf("Langballigau") == -1 && props?.to.indexOf("Brunsnæs") == -1 && props?.to.indexOf("Flensborg") == -1 && props?.to.indexOf("Sønderhav") == -1) {
                props?.to.push("Marina Minde (Rendbjerg)")
                props?.to.push("Brunsnæs")
                props?.to.push("Langballigau")
                props?.to.push("Flensborg")
                props?.to.push("Sønderhav")
            }

            if (props?.to.indexOf("Flensborg") == -1 && props?.to.indexOf("Sønderhav") == -1) {
                props?.to.push("Flensborg")
                props?.to.push("Sønderhav")
            }
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
        var idx = arr.indexOf(target);
        if (idx > -1) {
          arr.splice(idx, 1);
        }
        return arr;
      }

    const [order, setOrder] = useState(new Order(makeid(10)));

    const headers = {
        "ContentType":'application/json'
    };

    const o = {
        "fromHarbor": fromHarbor,
        "toHarbor": toHarbor,
        "date": date,
        "passagener": passagener,
        "cycle": cycle
    }
    
    const searchItem = function () {
        order.harbor.to = toHarbor;
        order.harbor.from = fromHarbor;
        order.orderDateTime = date;
        order.passangerCount = passagener;
        order.cycle.trueFalse = cycle;
        fetch("https://www.cykelfaergen.info/booking/test.php", {
            body: JSON.stringify(order),
            /* headers: {
                "Content-Type": "application/json",
            }, */
            method: "post"
        }).then((r) => r.json()).then((r) => {
            if (r != "") {
                setAPIresults(r);
                setviewResult(true);
            }
        });
    }

    return (
        <>
            <section className="booking__form">
                <form className="booking" method="POST" onSubmit={(e) => { e.preventDefault(); searchItem() }}>
                    <section className="booking__harbor">
                        <label className="booking__label booking__label--rightcircle" for="start">
                            <span className="booking__labelsize">Fra:</span>
                            <select className="booking__input" id="start" defaultValue={"Start location"} onChange={e => {
                                checkValue(e.target.value);
                                setFromHarbor(e.target.value);
                                if (e.target.value != "") {
                                    setDisabled(true);
                                }
                            }}>
                                <option value={"Start location"} disabled>Vælg havn</option>
                                {
                                    props?.from?.map((item, key) => {
                                        return (
                                            <option value={item} key={key}>{ item }</option>
                                        )
                                    })
                                }
                            </select>
                        </label>
                        <span className="material-icons change"></span>
                        <label className="booking__label booking__label--indent booking__label--leftcircle" for="end">
                            <span className="booking__labelsize">Til:</span>
                            <select className="booking__input" id="end" disabled={!disabled} defaultValue="End location" onChange={e => { setToHarbor(e.target.value) }}>
                                <option value={"End location"} disabled>Vælg havn</option>
                                {
                                    props?.to?.map((item, key) => {
                                        return (
                                            <option value={item} key={key}>{ item }</option>
                                        )
                                    })
                                }
                            </select>
                        </label>
                    </section>
                    <label className="booking__label" for="date">
                        <span className="booking__labelsize">Dato:</span>
                        <input type="datetime" id="date" className="booking__input" value={ date } onChange={e => { setDate(e.target.value) }} />
                    </label>
                    <label className="booking__label" for="date">
                        <span className="booking__labelsize">Antal personer:</span>
                        <input type="tel" className="booking__input" value="1" placeholer="0" onChange={e => { setPassagner(e.target.value) }} />
                    </label>
                    <input type="checkbox" id="cycle" name="cycle" onChange={e => { setCycle(!cycle) }} /> <label for="cycle">cykel</label>
                    <button className="booking__submit" disabled={!disabled} type="submit">Søg færge afgang</button>
                </form>
            </section>
            {
                (viewResult) ? <SuccessWindow values={apiResults} /> : null
            }
        </>
    )
}