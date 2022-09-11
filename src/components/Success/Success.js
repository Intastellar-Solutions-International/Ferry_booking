const { useState } = React;
import Payment from "../Payment/Payment";
import "./Style/Success.css";
export default function SuccessWindow(props) {
    const [priceTag, setPriceTag] = useState();
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
            <section>
                <h2>Tilgængelige afgange:</h2>
                <section>
                    {
                        props?.values.map((item, key) => {
                            const searchResult = JSON.parse(item);
                            return (
                                <>
                                    <article key={key} className="result">
                                        <p>From: {searchResult.fromharbor.harborName}</p>
                                        <p>To: {searchResult.toharbor.harborName}</p>
                                        <p>Antal Personer: {searchResult.passangerCount}</p>
                                        <p>Dato: {formatDate(new Date(searchResult.dep))}</p>
                                        <p>Pris: { searchResult.price } kr.</p>
                                        {(!!+searchResult.bicycle.yesNo) ? <p>Inkl. { searchResult.bicycle.type }</p> : null}
                                        <button className="cta" onClick={() => { setPopUp(!popup); setPriceTag(searchResult.price); } }>Køb ticket</button>
                                    </article>
                                </>
                            )
                        })
                    }
                </section>
            </section>
            {(popup) ? <article className="successWindow">
                <button className="" onClick={() => setPopUp(!popup)}>Close</button>
                <section className="successWindow__content grid gx2">
                    <h2 className="order_Title">Order overview</h2>
                    <section className="orderOverview">
                        <p>Fra: {fromHarbor}</p>
                        <p>Til: {toHarbor}</p>
                        <p>Dato: {formatDate(new Date(order.orderDateTime))}</p>
                        <p>Pris: {priceTag} kr.</p>
                        <p>Antal Personer: { order.passangerCount }</p>
                        {(!!+order.bicycle.trueFalse) ? <p>Inkl. { order.bicycle.type }</p> : null}
                    </section>
                    <Payment order={order} payment={priceTag} />
                </section>
            </article> : null }
        </>
    )
}