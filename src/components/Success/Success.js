const { useState } = React;
import "./Style/Success.css";
export default function SuccessWindow(props) {
    const [popup, setPopUp] = useState(false);
    function makePurchase(order) {
        console.log(order);
        setPopUp(!popup);
    }


    return (
        <>
            <article>
                <section>
                    <h2>Tilgængelige ruter:</h2>
                    <p>From: { props.values.fromharbor }</p>
                    <p>To: {props.values.toharbor}</p>
                    {(!!+props.values.cycle) ? <p>Inkl. cykel</p> : null}
                    <button onClick={ () =>  makePurchase(props.order) }>Køb ticket</button>
                </section>
            </article>
            {(popup) ? <article className="successWindow">
                <section className="successWindow__content">
                    <button onClick={ () =>  setPopUp(!popup) }>Close</button>
                </section>
            </article> : null }
        </>
    )
}