<?php
    class DBConfig {

        public $database;
        public $hostname;
        public $username;
        public $password;
        
        function __construct()
        {
            return array(
                "database" => $this->database,
                "hostname" => $this->hostname,
                "username" => $this->username,
                "password" => $this->password
            );
        }


    }