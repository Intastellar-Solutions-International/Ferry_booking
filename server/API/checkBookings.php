<?php
    require("./classes/class.order.php");
    require("./classes/class.recommendations.php");

    $order = new Order();

    echo $order->Mysql();