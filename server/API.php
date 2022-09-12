<?php
    require("./API/classes/class.order.php");
    require("./API/classes/class.recommendations.php");

    $order = new Order();

    echo $order->Mysql();