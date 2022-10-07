<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    require("../API/headers.php");
    require("./classes/class.order.php");
    require("./classes/class.recommendations.php");
    require("../API/get.request.php");

    $order = new Order(GetIncome());

    echo $order->search();