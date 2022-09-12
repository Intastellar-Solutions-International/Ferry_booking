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
        }

        /* Function to connect to db */
        function Mysql() {
            $this -> connectionString = NULL;
            $this -> sqlQuery = NULL;
            $this -> dataSet = NULL;

            $dbPara = new DBConfig();

            $this -> databaseName = $dbPara->database;
            $this -> hostName = $dbPara->hostname;
            $this -> userName = $dbPara->username;
            $this -> passCode = $dbPara->password;

            return $dbPara->database;
        }

        function dbConnect(){
            $this -> connectionString = mysqli_connect($this -> serverName,$this -> userName,$this -> passCode);
            mysqli_select_db($this -> databaseName,$this -> connectionString);
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
            $s = "SELECT * FROM ... WHERE startHarbor=$harbor";
            return $s;
        }
    }