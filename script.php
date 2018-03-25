<?php
	// requires php5
	$dir = $_POST['dir'];
	$img = $_POST['img'];
	$fname = $_POST['fname'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = $dir . '/'. $fname . '.png';
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Unable to save the file.';
?>