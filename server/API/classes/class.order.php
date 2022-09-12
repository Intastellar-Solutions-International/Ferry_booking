<?php
    require_once("class.dbconfig.php");
    class Order{
        public $connection;
        public $order;
        private $db;

        protected $dbName;
        protected $hostName;
        protected $userName;
        protected $password;

        function __construct($order)
        {
            $this->order = $order;
            $this->harborId = $order["harbor"]["from"]["id"];

            $this -> connectionString = NULL;
            $this -> sqlQuery = NULL;
            $this -> dataSet = NULL;

            $dbPara = new DBConfig();

            $this -> databaseName = $dbPara->database;
            $this -> serverName = $dbPara->hostname;
            $this -> userName = $dbPara->username;
            $this -> passCode = $dbPara->password;
        }

        /* Function to connect to db */

        function dbConnect(){
            $this -> connectionString = mysqli_connect($this -> serverName,$this -> userName,$this -> passCode);
            mysqli_select_db($this -> connectionString, $this -> databaseName);
            return $this -> connectionString;
        }

        /* Function to insert a new order into db */
        function add(){
            $order = $this->order;
            /* Insert  */
            $i = "INSERT INTO orders(fromHarbor, toHarbor, fromHarborId, toHarborId, passenger, cycle, departureTimeAndDate) VALUES()";

        }

        /* Function to calculate price both in EURO & DKK */
        function calculate(){
            
        }

        /* Function to check for a free connection from users start harbor */
        function search(){
            $harbor = $this->harborId;
            $s = "SELECT * FROM bookings WHERE fromHarbor=$harbor";
            $q = mysqli_query($this->dbConnect(), $s);

            $num = mysqli_num_rows($q);

            if(!$q) return $q; exit;
            
            if($num == 0) {
                $a = $num;
            }else{
                $a = "No results";
            }

            return json_encode($a);
        }
    }