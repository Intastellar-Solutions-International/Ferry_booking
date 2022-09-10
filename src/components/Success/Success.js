import "./Style/Success.css";
export default function SuccessWindow(props) {
    return (
        <>
            <article className="successWindow">
                <section className="successWindow__content">
                    <h2>Tak for din afstemmelse</h2>
                    <p>Du afstemmte for {props.name}</p>
                </section>
            </article>
        </>
    )
}