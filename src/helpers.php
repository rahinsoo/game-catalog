<?php
function dump_block(string $title, $value): void {
    echo "<h2>$title</h2>";
    var_dump($value);
}