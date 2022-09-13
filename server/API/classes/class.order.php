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
            $this->harbor = $order["harbor"]["from"]["harbor"];
            $this->departureTimeAndDate = $order["departureTimeAndDate"];
            $this->valuta = $order["valuta"];

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
            $harborId = $this->harborId;
            $harbor = $this->harbor;
            $departure = $this->departureTimeAndDate;

            $valuta = $this->valuta;

            $s = "SELECT * FROM bookings WHERE fromHarborId = $harborId";
            $q = mysqli_query($this->dbConnect(), $s);

            $num = mysqli_num_rows($q);
            
            if(!$q) return json_encode("Server error! We couldn´t handle your request.");
            
            if($num > 0) {
                $a = json_encode("No results");
            }else{
                $sql = "SELECT * FROM tickets WHERE start_harbor = '$harbor'";
                $q = mysqli_query($this->dbConnect(), $sql);

                if(!$q) return json_encode("Server error! We couldn´t handle your request.");

                $num = mysqli_num_rows($q);
                if($num === 0){
                    $a = json_encode("No results");
                }else{
                    $orderResults = [];
                    foreach(mysqli_fetch_all ($q, MYSQLI_ASSOC) as $row)
                    {   
                        array_push($orderResults,json_encode(array(
                            "toharbor" => [
                                "harborName" => $row["destination"],
                                "long" => "",
                                "lat" => ""
                            ],
                            "fromharbor" => [
                                "harborName" => $row["start_harbor"],
                                "long" => "",
                                "lat" => ""
                            ],
                            "bicycle" => [
                                "yesNo" => false,
                                "type" => ""
                            ],
                            "dep" => "",
                            "passangerCount" => "",
                            "price" => $row["price_" . strtolower($valuta)] 
                        )));
                    }
                    return json_encode($orderResults);
                }
            }

            return json_encode($a);
        }
    }