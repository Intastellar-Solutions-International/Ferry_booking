<?php
    require("./API/classes/class.order.php");
    require("./API/classes/class.recommendations.php");
    require("./API/get.request.php");

    $harbor = GetIncome()["harbor"];


    $order = new Order();


    print_r($harbor);