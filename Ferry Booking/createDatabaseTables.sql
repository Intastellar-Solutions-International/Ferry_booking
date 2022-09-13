CREATE TABLE ships(
    id INT AUTO_INCREMENT,
    passengers INT,
    `name` VARCHAR(MAX),
    bicycles INT
); CREATE TABLE routes(
    id INT AUTO_INCREMENT,
    `name` VARCHAR(MAX)
); CREATE TABLE stops(
    id INT AUTO_INCREMENT,
    `name` VARCHAR(MAX)
); CREATE TABLE stops_per_route(
    id INT NOT NULL AUTO_INCREMENT,
    stop_id INT,
    route_id INT
); CREATE TABLE customers(
    id INT AUTO_INCREMENT,
    `name` VARCHAR(MAX),
    email VARCHAR(MAX),
    phone VARCHAR(MAX),
    street VARCHAR(MAX),
    street2 VARCHAR(MAX),
    zip VARCHAR(MAX),
    city VARCHAR(MAX),
    county VARCHAR(MAX),
    country VARCHAR(MAX)
); CREATE TABLE customer_types(
    id INT AUTO_INCREMENT,
    `name` VARCHAR(MAX)
); CREATE TABLE prices_per_route(
    route_id INT,
    customer_type INT,
    base_price DECIMAL(6, 3)
); CREATE TABLE coupons(
    id INT AUTO_INCREMENT,
    `code` VARCHAR(MAX),
    active BOOLEAN,
    `type` ENUM('fixed', 'percentage'),
    `value` DECIMAL(6, 3)
); CREATE TABLE bookings(
    customer_id INT,
    routes_id INT,
    ships_id INT,
    start_stop INT,
    end_stop INT,
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    coupon_id INT,
    final_price DECIMAL(6, 3)
); CREATE TABLE seats_per_booking(
    booking_id INT,
    timetable_id INT,
    seat_type ENUM("passenger", "bicycle"),
    seat_name VARCHAR(MAX),
    seat_value INT
); CREATE TABLE names_per_language(
    `name` VARCHAR(MAX),
    lang ENUM("dk", "de", "en"),
    translation VARCHAR
); CREATE TABLE timetables(
    id INT AUTO_INCREMENT,
    stops_per_route_id INT,
    `weekday` VARCHAR(MAX),
    times TIME,
    active_from TIMESTAMP,
    active_to TIMESTAMP
);