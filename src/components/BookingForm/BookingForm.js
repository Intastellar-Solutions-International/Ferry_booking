import "./Style/BookingForm.css";
import SuccessWindow from "../Success/Success.js";
const { useState, useSWR } = React;
import Fetch from "../../fetch.js";
import Order from "../../class/Order";

export default function BookingForm(props) {

    const [first, setfirst] = useState(false);
    const [fromHarbor, setFromHarbor] = useState("");
    const [toHarbor, setToHarbor] = useState("");
    const [date, setDate] = useState("");
    const [cycle, setCycle] = useState(false);
    const [passagener, setPassagner] = useState(1);

    
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
        console.log(order);    
    }

    return (
        <>
            <section className="booking__form">
                <form className="booking" method="POST" onSubmit={(e) => { e.preventDefault(); searchItem() }}>
                    <section className="booking__harbor">
                        <label className="booking__label booking__label--rightcircle" for="start">
                            <span class="booking__labelsize">Fra:</span>
                            <select className="booking__input" id="start" defaultValue={"Start location"} onChange={e => { setFromHarbor(e.target.value) }}>
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
                        <span class="material-icons change"></span>
                        <label className="booking__label booking__label--indent booking__label--leftcircle" for="end">
                            <span class="booking__labelsize">Til:</span>
                            <select className="booking__input" id="end" defaultValue="End location" onChange={e => { setToHarbor(e.target.value) }}>
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
                        <span class="booking__labelsize">Dato:</span>
                        <input type="datetime" id="date" className="booking__input" value="12.08.22 15:00" onChange={e => { setDate(e.target.value) }} />
                    </label>
                    <label className="booking__label" for="date">
                        <span class="booking__labelsize">Antal personer:</span>
                        <input type="tel" className="booking__input" placeholer="0" onChange={e => { setPassagner(e.target.value) }} />
                    </label>
                    <input type="checkbox" id="cycle" name="cycle" onChange={e => { setCycle(!cycle) } } /> <label for="cycle">Cycle</label>
                </form>
            </section>
        </>
    )
}