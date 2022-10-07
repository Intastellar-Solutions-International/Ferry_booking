<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    require("./headers.php");
    require_once("./classes/class.dbconfig.php");
    require("./get.request.php");

    $db = new DBConfig();

    $sql = "SELECT routes.name AS 'routename', stops.name AS 'stopsname', routes.id AS id FROM routes INNER JOIN stops ON routes.id = stops.id WHERE routes.id = ".GetIncome()."";
    $query = mysqli_query($db->DB(), $sql);

    $num = mysqli_num_rows($query);

    $harbor = [];

    foreach(mysqli_fetch_all ($query, MYSQLI_ASSOC) as $row){
        $h = (object) array("routeId" => $row["id"], "harbor" => $row["stopsname"], "route" => $row["routename"]);
        array_push($harbor, $h);
    }

    echo json_encode($harbor);

?>