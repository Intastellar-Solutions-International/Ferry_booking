CREATE TABLE ships(
    id INT AUTO_INCREMENT,
    passengers INT,
    `name` VARCHAR(900),
    bicycles INT,
    PRIMARY KEY (id)
); CREATE TABLE routes(
    id INT AUTO_INCREMENT,
    `name` VARCHAR (900),
    PRIMARY KEY (id)
); CREATE TABLE stops(
    id INT AUTO_INCREMENT,
    `name` VARCHAR (900),
    PRIMARY KEY (id)
); CREATE TABLE stops_per_route(
    id INT AUTO_INCREMENT,
    stop_id INT,
    route_id INT
    PRIMARY KEY (id)
); CREATE TABLE customers(
    id INT AUTO_INCREMENT,
    `name` VARCHAR(900),
    email VARCHAR(900),
    phone VARCHAR,
    street VARCHAR(900),
    street2 VARCHAR(900),
    zip VARCHAR(900),
    city VARCHAR(900),
    county VARCHAR(900),
    country VARCHAR(900)
    PRIMARY KEY (id)
); CREATE TABLE customer_types(
    id INT AUTO_INCREMENT,
    `name` VARCHAR(900)
    PRIMARY KEY (id)
); CREATE TABLE prices_per_route(
    route_id INT,
    customer_type INT,
    base_price DECIMAL(6, 3)
); CREATE TABLE coupons(
    id INT AUTO_INCREMENT,
    `code` VARCHAR(900),
    active BOOLEAN,
    `type` ENUM('fixed', 'percentage'),
    `value` DECIMAL(6, 3),
    PRIMARY KEY (id)
); CREATE TABLE bookings(
    customer_id INT,
    routes_id INT,
    ships_id INT,
    start_stop INT,
    end_stop INT,
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    coupon_id INT,
    final_price DECIMAL(6, 3),
    PRIMARY KEY (customer_id)
); CREATE TABLE seats_per_booking(
    booking_id INT,
    timetable_id INT,
    seat_type ENUM("passenger", "bicycle"),
    seat_name VARCHAR(900),
    seat_value INT
    PRIMARY KEY (booking_id)
); CREATE TABLE names_per_language(
    `name` VARCHAR(900),
    lang ENUM("dk", "de", "en"),
    translation VARCHAR
); CREATE TABLE timetables(
    id INT AUTO_INCREMENT,
    stops_per_route_id INT,
    `weekday` VARCHAR,
    times TIME,
    active_from TIMESTAMP,
    active_to TIMESTAMP,
    PRIMARY KEY (customer_id)
);
CREATE TABLE harbors (
    id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE orders(
    Id INT NOT NULL PRIMARY KEY,
    fromHarborId int(11) NOT NULL,
    toHarborId int(11) NOT NULL,
    passenger varchar(11) NOT NULL,
    cycle int(2) NOT NULL,
    departureTimeAndDate DATETIME NOT NULL
)