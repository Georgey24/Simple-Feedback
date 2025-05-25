<?php

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $file=fopen("feedback.txt","a");

    if ($file) {
        fwrite($file, $name . " || " . $email . " || " . $message . "\n");
        fclose($file);
        echo "Feedback submitted successfully!";
    } else {
        echo "Unable to write to file.";
    }
}
?>
