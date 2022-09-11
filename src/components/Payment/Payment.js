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
                <section className="contactDetails">

                </section>
                <section className="creditCardDetails">
                    <label for="ccnum">Credit card number</label>
                    <section className="cardNumber">
                        <div class="icon-container">
                            <i class="cards visa" data-card-type="Visa"></i>
                            <i class="cards mastercard" data-card-type="Mastercard"></i>
                        </div>
                        <input type="tel" className="creditCard-input" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" maxlength="19" />
                    </section>
                    <div class="row newCards">
                        <div class="col-33">
                            <label for="expmonth">Exp Month</label>
                            <input type="tel" className="creditCard-input" id="expmonth" name="expmonth" placeholder="September" maxlength="2" />
                        </div>
                        <div class="col-33">
                            <label for="expyear">Exp Year</label>
                            <input type="tel" className="creditCard-input" id="expyear" name="expyear" placeholder="2018" maxlength="4" />
                        </div>
                        <div class="col-33">
                            <label for="cvv">CVV / CVC</label>
                            <input type="tel" className="creditCard-input" id="cvv" name="cvv" placeholder="CVC" maxlength="3" />
                        </div>
                    </div>
                </section>
                <button onClick={ (e) => continueToPayment() }>Pay</button>
            </article>
        </>
    )
}