<?php
    require("./API/headers.php");
    require("./API/classes/class.order.php");
    require("./API/classes/class.recommendations.php");
    require("./API/get.request.php");

    /* Creating a new order */
    $order = new Order(GetIncome());

    echo $order->search();