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

        function __construct()
        {
            
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
        function add($order){
            $i = "INSERT INTO orders() VALUES()";

        }

        /* Function to check if there is a free route */
        function freeRoute(){

        }

    }