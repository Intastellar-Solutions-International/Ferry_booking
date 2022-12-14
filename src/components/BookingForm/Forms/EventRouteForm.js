import LoadingBar from "../../LoadingBar/LoadingBar";
export default function EventRouteForm(props) {
    const setDisabled = props.setDisabled;
    const setButtonDisabled = props.setButtonDisabled;

    const disabled = props.disabled;
    const date = props.date;
    const passagener = props.passagener;
    const buttonDisabled = props.buttonDisabled;
    const isLoading = props.isLoading;
    const shipsId = props.shipsId;

    return (
        <>
            <section className="booking__form">
                <form className="booking" method="POST" onChange={() => setButtonDisabled(!buttonDisabled)} onSubmit={(e) => { e.preventDefault(); props.searchItem() }}>
                    <input type="radio" id="dkk" name="currency" checked={(props.currency === "DKK") ? true : false} value="dkk" onChange={() => { props.setCurrency("DKK") }} /> <label for="dkk">Kroner</label>
                    <input type="radio" id="euro" name="currency" checked={(props.currency === "EURO") ? true : false} value="euro" onChange={() => { props.setCurrency("EURO") }} /> <label for="euro">Euro (€)</label>
                    <section className="booking__harbor">
                        <label className="booking__label" for="start">
                            <span className="booking__labelsize">Fra:</span>
                            <select className="booking__input" id="start" defaultValue={"Start location"} onChange={e => {
                                props.checkValue(e.target.value);
                                props.setFromHarbor(e.target.value);
                                if (e.target.value != "") {
                                    props.setDisabled(false);
                                }
                            }}>
                                <option value={"Start location"} disabled>Vælg havn</option>
                                {
                                    props?.from?.map((item, key) => {
                                        return (
                                            <option value={JSON.stringify({id: parseInt(item.id), harbor: item.harbor})} key={key}>{ item.harbor }</option>
                                        )
                                    })
                                }
                            </select>
                        </label>
                    </section>
                    <label className="booking__label" for="date">
                        <span className="booking__labelsize">Dato:</span>
                        <input type="date" id="date" className="booking__input" value={ date } onChange={e => { props.setDate(e.target.value) }} />
                    </label>
                    <label className="booking__label" for="date">
                        <span className="booking__labelsize">Tid:</span>
                        <input type="time" id="date" className="booking__input" value={ date } onChange={e => { props.setDate(e.target.value) }} />
                    </label>
                    <label className="booking__label" for="date">
                        <span className="booking__labelsize">Antal personer:</span>
                        <input type="tel" className="booking__input" value={passagener} placeholer="0" onChange={e => { props.setPassagner(e.target.value) }} />
                    </label>
                    <input type="hidden" name="shipsId" value={shipsId} />
                    <div style={{clear:"both"}}></div>
                    <section className="booking__advancedSettings">
                        <input type="radio" id="cycle" name="cycle"  onChange={e => { props.setCycle(!cycle); props.setCycleType("cycle") }} /> <label for="cycle">cykel</label>
                        <input type="radio" id="cycleWithTrailer" name="cycle"  onChange={e => { props.setCycle(!cycle); props.setCycleType("cycleWithTrailer")  }} /> <label for="cycleWithTrailer">cykel med trailer</label>
                        <input type="radio" id="cycleWithThreeWheel" name="cycle"  onChange={e => { props.setCycle(!cycle); props.setCycleType("cycleWithThreeWheel") }} /> <label for="cycleWithThreeWheel">3 hjuls cykel</label>
                    </section>
                    <button className="booking__submit" disabled={isLoading} type="submit">{(isLoading) ? <LoadingBar /> : "Søg færge afgang"}</button>
                </form>
            </section>
        </>
    )
}