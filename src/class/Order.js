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
        this.orderDateTime = Date;
        this.harbor = {
            to: String,
            from: String
        };
        this.cycle = {
            trueFalse: Boolean,
            count: Number
        };
        this.passangerCount = Number;
        this.orderContactPerson = {
            firstName: String,
            lastName: String
        }
    }
}