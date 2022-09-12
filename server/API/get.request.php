<?php
    function GetIncome(){
        $incoming = json_decode(file_get_contents("php://input"));
        $data = json_decode(json_encode($incoming), True);

        return $data;
    }