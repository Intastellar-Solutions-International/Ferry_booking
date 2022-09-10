import "./Style/Success.css";
export default function SuccessWindow(props) {

    return (
        <>
            <article>
                <section className="successWindow__content">
                    <h2>Tilgængelige ruter:</h2>
                    <p>From: { props.values.harbor.from }</p>
                    <p>To: {props.values.harbor.to}</p>
                    {(props.values.cycle.trueFalse) ? <p>Inkl. cykel</p> : null}
                    <button >Køb ticket</button>
                </section>
            </article>
        </>
    )
}