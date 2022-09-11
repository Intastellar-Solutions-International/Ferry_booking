const { useState } = React;
import "./Style/Payment.css";
export default function Payment(props) {
    props.order.price = props.payment;
    function continueToPayment(e) {
        const price = props.payment;
        const order = props.order;

        console.log(order);
    }

    function makePurchase() {
        const order = props.order;
    }

    return (
        <>
            <article className="payment__grid">
                <section className="creditCardDetails">
                    <label for="ccnum">Credit card number</label>
                    <section className="cardNumber">
                        <div className="icon-container">
                            <i className="cards visa" data-card-type="Visa"></i>
                            <i className="cards mastercard" data-card-type="Mastercard"></i>
                        </div>
                        <input type="tel" className="creditCard-input" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" maxLength="19" />
                    </section>
                    <div className="row newCards">
                        <div className="col-33">
                            <label for="expmonth">Exp Month</label>
                            <input type="tel" className="creditCard-input" id="expmonth" name="expmonth" placeholder="September" maxLength="2" />
                        </div>
                        <div className="col-33">
                            <label for="expyear">Exp Year</label>
                            <input type="tel" className="creditCard-input" id="expyear" name="expyear" placeholder="2018" maxLength="4" />
                        </div>
                        <div className="col-33">
                            <label for="cvv">CVV / CVC</label>
                            <input type="tel" className="creditCard-input" id="cvv" name="cvv" placeholder="CVC" maxLength="3" />
                        </div>
                    </div>
                </section>
                <button className="payment_cta" onClick={ (e) => continueToPayment() }>Betal</button>
            </article>
        </>
    )
}