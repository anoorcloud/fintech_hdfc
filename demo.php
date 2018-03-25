<?php
require_once 'facepp_sdk.php';
########################
###     example      ###
########################
$facepp = new Facepp();
$facepp->api_key       = 'sic4XfQ8dEkPbPDIPzLPb94hTBfpvhvz';
$facepp->api_secret    = 'Kk6ajXWxyTAreR3VhfCdoKQXCMPpVhh1';

#detect local image 
#$params['img']          = '{image file path}';
#$params['attribute']    = 'gender,age,race,smiling,glass,pose';

#$response               = $facepp->execute('/detection/detect',$params);
#print_r($response);

#detect image by url
//$params['image_url']          = 'http://anoorcloud.com/demo/webcam/success/Abc.png';
$params['image_base64']          =  $_REQUEST[image_url];
$params['return_landmark']          = '2';
$params['return_attributes']          = 'age,gender';
$response               = $facepp->execute('/detect',$params);

echo json_encode($response);

if($response['http_code'] == 200) {
    #json decode 
    $data = json_decode($response['body'], 1);
    
    #get face landmark
    foreach ($data['face'] as $face) {
        $response = $facepp->execute('/detection/landmark', array('face_id' => $face['face_id']));
        print_r($response);
    }
}

