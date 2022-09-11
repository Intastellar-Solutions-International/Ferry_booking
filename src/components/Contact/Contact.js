export default function Contact() {
    return (
        <>
            <section className="contactDetails">
                <label>First Name</label>
                <input className="creditCard-input" type="text" placeholder="First Name" />
                <label>Last Name</label>
                <input className="creditCard-input" type="text" placeholder="Last Name" />
                <label>E-Mail</label>
                <input className="creditCard-input" type="text" placeholder="E-Mail" />
                <label>Gade</label>
                <input className="creditCard-input" type="text" placeholder="Gade" />
                <label>Hus Nummer</label>
                <input className="creditCard-input" type="text" placeholder="Hus Nummer" />
                <label>Post Nr.</label>
                <input className="creditCard-input" type="text" placeholder="Post Nr." />
                <label>Land</label>
                <select className="creditCard-input">
                    <option value="Danmark">Danmark</option>
                    <option value="Tyskland">Tyskland</option>
                </select>
            </section>
        </>
    )
}