<?php

$students = $_POST["students"];
$sps = $_POST["slices_per_student"];
$spp = $_POST["slices_per_pizza"];
$pep = 1050;

function calc(int $students, int $sps, int $spp, int $pep)
{
    $total_pizzas = ceil(($students * $sps) / $spp);

    $leftover_slices = ($total_pizzas * $spp) - ($students * $sps);

    $wasted_money = ($pep / $spp) * ($leftover_slices);

    echo "Total pizzas: " . $total_pizzas . "<br>" . "Leftover slices: " . $leftover_slices . "<br>" . "Wasted money: " . $wasted_money;
}

calc($students, $sps, $spp, $pep);
