Phaser.Plugin.Webcam= function(game,_0x16AB0){Phaser.Plugin.call(this,game,_0x16AB0);if(!game.device.getUserMedia){return false};navigator.getUserMedia= navigator.getUserMedia|| navigator.webkitGetUserMedia|| navigator.mediaDevices.getUserMedia|| navigator.msGetUserMedia;this.context= null;this.stream= null;this.video= document.createElement("\x76\x69\x64\x65\x6F");this.video.autoplay= true};Phaser.Plugin.Webcam.prototype= Object.create(Phaser.Plugin.prototype);Phaser.Plugin.Webcam.prototype.constructor= Phaser.Plugin.Webcam;Phaser.Plugin.Webcam.prototype.start= function(_0x16B3A,_0x16B0C,_0x16ADE){console.log("\x57\x65\x62\x63\x61\x6D\x20\x73\x74\x61\x72\x74",_0x16B3A,_0x16B0C);this.context= _0x16ADE;if(!this.stream){navigator.getUserMedia({video:{mandatory:{minWidth:_0x16B3A,minHeight:_0x16B0C}}},this.connectCallback.bind(this),this.errorCallback.bind(this))}};Phaser.Plugin.Webcam.prototype.stop= function(){if(this.stream){stream.getTracks().forEach(function(_0x16B68){_0x16B68.stop()});this.stream= null}};Phaser.Plugin.Webcam.prototype.connectCallback= function(_0x16B96){this.stream= _0x16B96;this.video.src= window.URL.createObjectURL(this.stream)};Phaser.Plugin.Webcam.prototype.errorCallback= function(_0x16BC4){console.log("\x56\x69\x64\x65\x6F\x20\x53\x74\x72\x65\x61\x6D\x20\x72\x65\x6A\x65\x63\x74\x65\x64",_0x16BC4)};Phaser.Plugin.Webcam.prototype.grab= function(_0x16ADE,_0x16BF2,_0x16C20){if(this.stream){_0x16ADE.drawImage(this.video,_0x16BF2,_0x16C20)}};Phaser.Plugin.Webcam.prototype.update= function(){if(this.stream){this.context.drawImage(this.video,0,0)}};Object.defineProperty(Phaser.Plugin.Webcam.prototype,"\x61\x63\x74\x69\x76\x65",{get:function(){return (this.stream)}})