<?php
require_once('bitly.php');
$url = $_REQUEST[url];
$short_url = json_decode(file_get_contents("http://api.bit.ly/v3/shorten?login=anoorcloud&apiKey=R_48805a36506040f69fe1f392a23ccb3b&longUrl=".urlencode($url)."&format=json"))->data->url;
echo $short_url
?>