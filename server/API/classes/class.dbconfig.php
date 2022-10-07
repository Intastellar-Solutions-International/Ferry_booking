<?php
    class DBConfig {

        public $database = "FerryBooking";
        public $hostname = "127.0.0.1";
        public $username = "root";
        public $password = "";
        
        function __construct()
        {
            return array(
                "database" => $this->database,
                "hostname" => $this->hostname,
                "username" => $this->username,
                "password" => $this->password
            );
        }

        function DB(){
            $this -> connectionString = mysqli_connect($this -> hostname,$this -> username,$this -> password);
            mysqli_select_db($this -> connectionString, $this -> database);
            return $this -> connectionString;
        }

    }