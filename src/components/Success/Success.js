import "./Style/Success.css";
export default function SuccessWindow(props) {
    console.log(props);
    return (
        <>
            <article>
                <section className="successWindow__content">
                    <h2>Tilgængelige ruter:</h2>
                    <p>From: { props.values.fromharbor }</p>
                    <p>To: {props.values.toharbor}</p>
                    {(!!+props.values.cycle) ? <p>Inkl. cykel</p> : null}
                    <button >Køb ticket</button>
                </section>
            </article>
        </>
    )
}