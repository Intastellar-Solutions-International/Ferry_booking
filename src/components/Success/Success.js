import "./Style/Success.css";
export default function SuccessWindow(props) {
    console.log(props.values.harbor);
    return (
        <>
            <article>
                <section className="successWindow__content">
                    <h2>Her er en liste over aktuelle turer:</h2>
                    <p>From: { props.values.harbor.from }</p>
                    <p>To: { props.values.harbor.to }</p>
                </section>
            </article>
        </>
    )
}