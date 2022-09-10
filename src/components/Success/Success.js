const { useState } = React;
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
    function makePurchase(order) {
        setPopUp(!popup);
        console.log(order);
    }

    const order = JSON.parse(props.order);
    const fromHarbor = JSON.parse(order.harbor.from).harbor;
    const toHarbor = JSON.parse(order.harbor.to).harbor;

    return (
        <>
            <article>
                <section>
                    <h2>Tilgængelige afgange:</h2>
                    <p>From: {props.values.fromharbor.harborName}</p>
                    <p>To: {props.values.toharbor.harborName}</p>
                    <p>Antal Personer: {props.values.passangerCount}</p>
                    <p>Dato: { formatDate(new Date(props.values.dep)) }</p>
                    {(!!+props.values.cycle) ? <p>Inkl. cykel</p> : null}
                    <button className="cta" onClick={ () =>  makePurchase(props.order) }>Køb ticket</button>
                </section>
            </article>
            {(popup) ? <article className="successWindow">
                <section className="successWindow__content">
                    <button className="" onClick={() => setPopUp(!popup)}>Close</button>
                    <section className="orderOverview">
                        <p>Order nr.: {order.orderId}</p>
                        <p>Dato: {order.orderDateTime}</p>
                        <p>Fra: {fromHarbor} - til: {toHarbor }</p>
                    </section>
                </section>
            </article> : null }
        </>
    )
}