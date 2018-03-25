<?php
require_once('voicerss_tts.php');
$text = $_REQUEST[text];
$format = $_REQUEST[format];
$name = $_REQUEST[name];
if (!file_exists("audio"))
	mkdir("audio");
if ($text==null)
	$text=" ";
if($name==null)
	$name="empty";
$filename = "audio/" . $name . "." .$format;
if (file_exists($filename))
{
	echo $filename;
	return;
}
$tts = new VoiceRSS;
$voice = $tts->speech([
    'key' => 'ed9796af940648a0b1dd67dc849ca9bc',
    'hl' => 'en-in',
    'src' => $text,
    'r' => '0',
    'c' => $format,
    'f' => '8khz_8bit_stereo',
    'ssml' => 'false',
    'b64' => 'false'
]);
file_put_contents ($filename, $voice);
echo $filename;
?>