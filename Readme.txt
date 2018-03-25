BMI Using Facial Analysis

Instructions to deploy the project
Technical requirements
1)	A webserver with SSL
2)	Server should able to run PHP5.
3)	Write access to the folder “success” in project root directory
4)	Firewall exemptions for API calls requesting external web service

Deployment details
For this documentation purpose, we assume that “\wampstack-5.6.31-0\apache2\htdocs” is the path of webserver’s public root directory. 
1)	In that directory unzip given hack.zip
2)	Now, give write permission to the folder “\wampstack-5.6.31-0\apache2\htdocs\hack\success”. This is necessary because we need to store the captured face image so that it can be used for facial analysis.
3)	Make sure the https access is enabled. This is needed because we will be accessing camera feed from browser. For that we need SSL enabled website
4)	Make sure that PHP module is enabled and has execute privilege. This is needed because both for face API. 
Client-side requirements.
1)	For the Facial analysis feature to work, make sure that webcam is available and necessary permission is ranted
2)	The Illustration engine can run in any modern browsers. Typically the browser should support Webgl or Canvas. 
For any further support, I can be reached via these emails
n.sundarapandian@gmail.com
sundar@anoorcloud.com


