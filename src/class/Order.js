export default class Order {
    constructor(orderId = Number) {
        this.orderId = orderId;
        this.orderEmail = String;
        this.orderAddress = {
            street: String,
            secondStreet: String,
            houseNumber: Number,
            postalCode: Number,
            country: String
        };
        this.orderPhone = Number;
        this.departureTimeAndDate = Date;
        this.harbor = {
            to: Object,
            from: Object
        };
        this.bicycle = {
            trueFalse: false,
            count: 0,
            type: "cycle"
        };
        this.passangerCount = 1;
        this.orderContactPerson = {
            firstName: String,
            lastName: String
        }
        this.price = Number;
        this.valuta = "DKK";
    }
}