<?php

$distance = $_POST["distance"];
$epm = $_POST["epm"];
$bc = $_POST["bc"];

function calc(int $distance, int $epm, int $bc){
    $ter = $distance * $epm;
    $bm = ceil($ter/$bc);
    $ue = ($bm * $bc) - ($ter);

    $status = "";

    if($ue <= ($bc*$bm)*0.1){
        $status = "Efficient";
    }else if($ue >= (($bc*$bm)*0.1) && ($ue <= (($bc*$bm)*0.25))){
        $status = "Acceptable";
    }else if($ue >= (($bc*$bm)*0.25)){
        $status = "Wasteful";
    }

    echo "Total Energy Required: " . $ter . "<br>" . "Battery Modules: " . $bm . "<br>"  . "Unused Energy: " . $ue . "<br>" . "Status: " . $status ;
}

calc($distance, $epm, $bc);
?>