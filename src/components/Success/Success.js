const { useState } = React;
import Payment from "../Payment/Payment";
import "./Style/Success.css";
export default function SuccessWindow(props) {
    
    function formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        hours = hours;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes;
        return (date.getDay()) + "." + (date.getMonth()+1) + " " + date.getFullYear() + "  " + strTime;
    }

    const [popup, setPopUp] = useState(false);

    const order = JSON.parse(props.order);
    const fromHarbor = order.harbor.from.harbor;
    const toHarbor = order.harbor.to.harbor;

    return (
        <>
            <article>
                <section>
                    <h2>Tilgængelige afgange:</h2>
                    <p>From: {props.values.fromharbor.harborName}</p>
                    <p>To: {props.values.toharbor.harborName}</p>
                    <p>Antal Personer: {props.values.passangerCount}</p>
                    <p>Dato: {formatDate(new Date(props.values.dep))}</p>
                    <p>Pris: { props.values.price } kr.</p>
                    {(!!+props.values.cycle) ? <p>Inkl. cykel</p> : null}
                    <button className="cta" onClick={ () =>  setPopUp(!popup) }>Køb ticket</button>
                </section>
            </article>
            {(popup) ? <article className="successWindow">
                <button className="" onClick={() => setPopUp(!popup)}>Close</button>
                <section className="successWindow__content grid gx2">
                    <h2 className="order_Title">Order overview</h2>
                    <section className="orderOverview">
                        <p>Order nr.: {order.orderId}</p>
                        <p>Fra: {fromHarbor}</p>
                        <p>Til: {toHarbor}</p>
                        <p>Dato: {formatDate(new Date(order.orderDateTime))}</p>
                        <p>Pris: { props.values.price } kr.</p>
                    </section>
                    <Payment order={order} payment={props.values.price} />
                </section>
            </article> : null }
        </>
    )
}