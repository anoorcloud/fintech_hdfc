var game= new Phaser.Game(800,480,Phaser.CANVAS,"\x42\x68\x61\x72\x74\x69\x20\x41\x58\x41",{preload:preload,create:create});var StartX=-1000,count=0,SfxIndex=0,offset=0,sfx_offset=0,cur_scr=0,currentTween,currentSound,currentTimer;var obj_list= new Array();var but_list= new Array();var group,years,married,army,age,gender,bmi;var cur_sync_point="";var screen_list=[];var cur_sfx_list= new Array();var events_list=[];var lang="\x65\x6E";var face_graphics;function PreloadAssets(){game.load.image("\x61\x6E\x6F\x6F\x72","\x61\x73\x73\x65\x74\x73\x2F\x61\x6E\x6F\x6F\x72\x2E\x70\x6E\x67");game.load.image("\x31\x31","\x61\x73\x73\x65\x74\x73\x2F\x31\x31\x2E\x70\x6E\x67");game.load.image("\x70\x6F\x6C\x69\x63\x79","\x61\x73\x73\x65\x74\x73\x2F\x70\x6F\x6C\x69\x63\x79\x2E\x70\x6E\x67");game.load.image("\x73\x61\x6D\x70\x6C\x65","\x61\x73\x73\x65\x74\x73\x2F\x73\x61\x6D\x70\x6C\x65\x2E\x6A\x70\x67");game.load.spritesheet("\x62\x75\x74\x74\x6F\x6E","\x61\x73\x73\x65\x74\x73\x2F\x62\x75\x74\x74\x6F\x6E\x2E\x70\x6E\x67",128,128);game.load.spritesheet("\x34\x5F\x75\x6D\x62\x72\x65\x6C\x6C\x61","\x61\x73\x73\x65\x74\x73\x2F\x34\x5F\x75\x6D\x62\x72\x65\x6C\x6C\x61\x2E\x70\x6E\x67",149,147);game.load.spritesheet("\x31\x5F\x6E\x65\x77\x70\x69\x67","\x61\x73\x73\x65\x74\x73\x2F\x31\x5F\x6E\x65\x77\x70\x69\x67\x2E\x70\x6E\x67",150,200);game.load.spritesheet("\x32\x5F\x6E\x61\x6D\x5F\x6E\x65\x77","\x61\x73\x73\x65\x74\x73\x2F\x30\x32\x2E\x70\x6E\x67",230,320);game.load.spritesheet("\x33\x5F\x6E\x65\x77\x5F\x74\x65\x61\x6D","\x61\x73\x73\x65\x74\x73\x2F\x33\x5F\x6E\x65\x77\x5F\x74\x65\x61\x6D\x2E\x70\x6E\x67",385,265);game.load.spritesheet("\x73\x63\x61\x6E","\x61\x73\x73\x65\x74\x73\x2F\x73\x63\x61\x6E\x2E\x70\x6E\x67",800,100);game.load.spritesheet("\x61\x6E\x61\x6C\x79\x73\x69\x73","\x61\x73\x73\x65\x74\x73\x2F\x61\x6E\x61\x6C\x79\x73\x69\x73\x2E\x6A\x70\x67",359,379)}function preload(){game.load.spritesheet("\x62\x67","\x61\x73\x73\x65\x74\x73\x2F\x62\x67\x2E\x70\x6E\x67",800,480);webcam_preload(0);PreloadAssets();PreloadAudio()}function create(){game.scale.fullScreenScaleMode= Phaser.ScaleManager.EXACT_FIT;game.stage.backgroundColor= "\x23\x46\x46\x46\x46\x46\x46";group= game.add.group();group.inputEnableChildren= true;game.onPause.add(onGamePause,this);game.onResume.add(onGameResume,this);game.world.bringToTop(group);game.stage.smoothed= false;game.canvas.id= "\x63\x61\x6E\x76\x61\x73";game.stage.disableVisibilityChange= true;this.game.scale.pageAlignHorizontally= true;this.game.scale.pageAlignVertically= true;this.game.scale.refresh();webcam_create();face_graphics= game.add.graphics(0,0);face_graphics= game.add.graphics(0,0);actionOnClick(0)}function SetupText(_0x19180,_0x16BF2,_0x16C20,_0x194EA,_0x195A2,_0x19574,_0x195D0){_0x195A2= _0x195A2|| 27;_0x19574= _0x19574|| "\x63\x65\x6E\x74\x65\x72";_0x195D0= _0x195D0|| "\x62\x6F\x6C\x64";_0x19180= game.add.text(_0x16BF2,_0x16C20,_0x194EA,{font:_0x195A2+ "\x70\x78\x20\x41\x72\x69\x61\x6C",fill:"\x23\x30\x31\x34\x62\x38\x62",align:_0x19574,fontWeight:_0x195D0});group.add(_0x19180);_0x19180.anchor.setTo(0.5,0.5);_0x19180.inputEnabled= true;return _0x19180}function typeWriter(_0x19180,_0x194EA,_0x199F2,_0x17ADC,_0x16FE6){_0x17ADC= _0x17ADC|| 0;_0x16FE6= _0x16FE6|| null;if(_0x17ADC== 0){_0x19180.text= ""};if(_0x17ADC< _0x194EA.length){_0x19180.text+= _0x194EA.charAt(_0x17ADC);_0x17ADC++;setTimeout(function(){typeWriter(_0x19180,_0x194EA,_0x199F2,_0x17ADC,_0x16FE6);game.world.bringToTop(group)},_0x199F2)}else {if(_0x16FE6!= null){_0x16FE6.call(this)}};return _0x19180}function LoadAnimation(_0x19180,_0x16BF2,_0x16C20,_0x191AE,_0x19124,_0x19152){_0x19124= _0x19124|| null;_0x19152= _0x19152|| "\x64\x65\x66\x61\x75\x6C\x74";if(!_0x19180){_0x19180= game.add.sprite(0,0,_0x191AE);_0x19180.anchor["\x73\x65\x74"](0.5);var _0x190F6=_0x19180.animations.add(_0x19152);if(_0x19124!= null){_0x190F6.onComplete.add(_0x19124,this)}};_0x19180.x= _0x16BF2;_0x19180.y= _0x16C20;_0x19180.inputEnabled= true;return _0x19180}function onGamePause(){if(currentTween!= null){currentTween.pause()};if(currentSound!= null){currentSound.pause()};if(currentTimer!= null){currentTimer.pause()}}function onGameResume(){if(currentTween!= null){currentTween.resume()};if(currentSound!= null){currentSound.resume()};if(currentTimer!= null){currentTimer.resume()}}function AddEvent(_0x18828){events_list[events_list.length]= _0x18828}function ShowButton(_0x190F6){console.log(_0x190F6);AddEvent(game.time.events.add(Phaser.Timer.SECOND* _0x190F6.delay,function(){var _0x195FE=game.add.button(_0x190F6.x,_0x190F6.y,_0x190F6.sprite,function(){eval(_0x190F6.fn)});but_list.push(_0x195FE);obj_list.push(_0x195FE)},this))}function PlaySpriteAnim(_0x190F6){AddEvent(game.time.events.add(Phaser.Timer.SECOND* _0x190F6.delay,function(){var _0x193D6=LoadAnimation(_0x193D6,_0x190F6.x,_0x190F6.y,_0x190F6.sprite);_0x193D6.id= _0x190F6.id;_0x193D6.fn_type= _0x190F6.fn_type;_0x193D6.fn_param= _0x190F6.fn_param;if(_0x190F6.fn_type){_0x193D6.input.useHandCursor= true};_0x193D6.play("\x64\x65\x66\x61\x75\x6C\x74",_0x190F6.timing,_0x190F6.loop);if(_0x190F6.scale){_0x193D6.scale["\x73\x65\x74"](_0x190F6.scale)};var _0x193A8=_0x190F6.params;if(_0x193A8){var type=_0x190F6.anim_type;var _0x19404=_0x193A8[0],_0x19432=_0x193A8[1];_0x193D6.anchor["\x73\x65\x74"](0.5);if(_0x190F6.anim_type== "\x6D\x6F\x76\x65"){game.add.tween(_0x193D6).to({x:_0x19404,y:_0x19432},Phaser.Timer.SECOND* _0x190F6.timing,_0x190F6.tween_type,true,Phaser.Timer.SECOND* _0x190F6.delay)}else {if(_0x190F6.anim_type== "\x73\x63\x61\x6C\x65"){_0x193D6.scale["\x73\x65\x74"](_0x19404);game.add.tween(_0x193D6.scale).to({x:_0x19432,y:_0x19432},Phaser.Timer.SECOND* _0x190F6.timing,_0x190F6.tween_type,true,Phaser.Timer.SECOND* _0x190F6.delay)}else {if(_0x190F6.anim_type== "\x61\x6C\x70\x68\x61"){_0x193D6.alpha= _0x19404;game.add.tween(_0x193D6).to({alpha:_0x19432},Phaser.Timer.SECOND* _0x190F6.timing,_0x190F6.tween_type,true)}}}};if(_0x190F6.disappear){game.add.tween(_0x193D6.scale).to({x:0,y:0},200,_0x190F6.tween_type,true,Phaser.Timer.SECOND* _0x190F6.disappear)};obj_list.push(_0x193D6);schedule_tween(_0x193D6)},this))}function PlayTextAnim(_0x190F6){var _0x1948E="";for(var _0x17578=0;_0x17578< _0x190F6.text.length;_0x17578++){if(_0x190F6.text[_0x17578].startsWith("\x77\x69\x6E\x64\x6F\x77\x2E")){var _0x1879E=eval(_0x190F6.text[_0x17578]);if(_0x1879E== "\x73\x65\x6D\x69"){_0x1879E= "\x53\x65\x6D\x69\x20\x41\x6E\x6E\x75\x61\x6C\x20"};if(_0x190F6.ConvertToIndian){_0x1879E= ConvertToIndian(_0x1879E)};if(_0x190F6.add_audio_delay){var _0x19460=convertToWords(_0x1879E);sfx_offset+= _0x19460.length* 0.5};_0x1948E+= _0x1879E}else {_0x1948E+= _0x190F6.text[_0x17578]}};var _0x194BC=_0x190F6.tween_type;if(!_0x194BC){_0x194BC= "\x45\x6C\x61\x73\x74\x69\x63\x2E\x65\x61\x73\x65\x4F\x75\x74"};if(_0x194BC.startsWith("\x74\x79\x70\x65\x77\x72\x69\x74\x65")){_0x190F6.sx= _0x190F6.x;_0x190F6.sy= _0x190F6.y;_0x190F6.tween_type= Phaser.Easing.Linear.None};var _0x194EA=SetupText(_0x194EA,_0x190F6.sx,_0x190F6.sy,_0x1948E,_0x190F6.size,_0x190F6.align);_0x194EA.id= _0x190F6.id;if(_0x190F6.anchor!= null){_0x194EA.anchor.setTo(_0x190F6.anchor,0.5)};if(_0x194BC.startsWith("\x74\x79\x70\x65\x77\x72\x69\x74\x65")){_0x194EA.text= "";AddEvent(game.time.events.add(Phaser.Timer.SECOND* _0x190F6.delay,function(){_0x194EA= typeWriter(_0x194EA,_0x1948E,50)},this))}else {game.add.tween(_0x194EA).to({x:_0x190F6.x,y:_0x190F6.y},_0x190F6.timing,_0x190F6.tween_type,true,Phaser.Timer.SECOND* _0x190F6.delay)};_0x194EA.fn_type= _0x190F6.fn_type;_0x194EA.fn_param= _0x190F6.fn_param;if(_0x190F6.fn_type){_0x194EA.input.useHandCursor= true};if(_0x190F6.disappear){game.add.tween(_0x194EA.scale).to({x:0,y:0},0.1,_0x190F6.tween_type,true,Phaser.Timer.SECOND* _0x190F6.disappear)};obj_list.push(_0x194EA)}function schedule_tween(_0x19180){if(!stage.screens[cur_scr].tweens){return};for(var _0x17578=0;_0x17578< stage.screens[cur_scr].tweens.length;_0x17578++){var _0x19518=stage.screens[cur_scr].tweens[_0x17578];if(_0x19518.obj.startsWith(_0x19180.key)){game.add.tween(_0x19180).to({x:_0x19518.x,y:_0x19518.y},_0x19518.timing,_0x19518.tween_type,true,Phaser.Timer.SECOND* _0x19518.delay);break}}}function OnStopCB(_0x1837C){return function(){if(cur_sfx_list[_0x1837C+ 1]){currentSound= cur_sfx_list[_0x1837C+ 1].play()}}}function PlaySound(_0x190F6){cur_sfx_list.length= 0;for(var _0x17578=0;_0x17578< _0x190F6.sound.length;_0x17578++){if(_0x190F6.sound[_0x17578].startsWith("\x77\x69\x6E\x64\x6F\x77\x2E\x70\x6D\x6F\x64\x65")){cur_sfx_list.push(game.add.audio(eval(_0x190F6.sound[_0x17578])))}else {if(_0x190F6.sound[_0x17578].startsWith("\x77\x69\x6E\x64\x6F\x77\x2E")){var _0x18B92=numberInWords(eval(_0x190F6.sound[_0x17578]));for(var _0x1768C=0;_0x1768C< _0x18B92.length;_0x1768C++){cur_sfx_list.push(game.add.audio(_0x18B92[_0x1768C]))}}else {cur_sfx_list.push(game.add.audio(_0x190F6.sound[_0x17578]))}}};if(cur_sfx_list.length== 0){return};var _0x1837C=0;for(var _0x17578=0;_0x17578< cur_sfx_list.length- 1;_0x17578++){_0x1837C= _0x17578;cur_sfx_list[_0x17578].onStop.add(OnStopCB(_0x17578))};if(cur_sfx_list.length> 0){currentSound= cur_sfx_list[0].play()}}function actionOnClick(_0x187CC,_0x187FA){if(!_0x187FA){_0x187FA= 0};game.time.events.add(Phaser.Timer.SECOND* _0x187FA,function(){CleanUp();StartPage(_0x187CC);ShowScreen()},this)}function testCall(){}function onDragStop(sprite,_0x1934C){if(sprite.id){window.external.UpdatePosition(sprite.id,_0x1934C.x,_0x1934C.y)}}function onInputDown(sprite,_0x1934C){if(sprite.id){window.external.SelectObject(sprite.id)};if("\x6E\x61\x76\x69\x67\x61\x74\x65"== sprite.fn_type){CleanUp();StartPage(sprite.fn_param);ShowScreen()}}function ShowScreen(){sfx_offset= 0;game.sound.stopAll();if(stage.screens.count<= 0){return};if(stage.screens[cur_scr].condition!= null){var _0x1962C=eval(stage.screens[cur_scr].condition);if(eval(stage.screens[cur_scr].condition)== false){TransitScreen();return}};if(stage.screens[cur_scr].buttons!= null){for(var _0x17578=0;_0x17578< stage.screens[cur_scr].buttons.length;_0x17578++){ShowButton(stage.screens[cur_scr].buttons[_0x17578])}};if(stage.screens[cur_scr].sprite_animations!= null){for(var _0x17578=0;_0x17578< stage.screens[cur_scr].sprite_animations.length;_0x17578++){PlaySpriteAnim(stage.screens[cur_scr].sprite_animations[_0x17578])}};if(stage.screens[cur_scr].text_animations!= null){for(var _0x17578=0;_0x17578< stage.screens[cur_scr].text_animations.length;_0x17578++){PlayTextAnim(stage.screens[cur_scr].text_animations[_0x17578])}};if(stage.screens[cur_scr].sound_list!= null){for(var _0x17578=0;_0x17578< stage.screens[cur_scr].sound_list.length;_0x17578++){PlaySound(stage.screens[cur_scr].sound_list[_0x17578])}};if(stage.screens[cur_scr].functions!= null){for(var _0x17578=0;_0x17578< stage.screens[cur_scr].functions.length;_0x17578++){call_fn(stage.screens[cur_scr].functions[_0x17578])}};if(stage.screens[cur_scr].timing>= 0){game.time.events.add(Phaser.Timer.SECOND* (stage.screens[cur_scr].timing+ sfx_offset),TransitScreen,this)}}function CleanUp(){for(var _0x17578=0;_0x17578< but_list.length;_0x17578++){but_list[_0x17578].x= -game.width* 2;but_list[_0x17578].destroy()};for(var _0x17578=0;_0x17578< obj_list.length;_0x17578++){obj_list[_0x17578].x= -game.width* 2;obj_list[_0x17578].destroy()};for(var _0x17578=0;_0x17578< events_list.length;_0x17578++){game.time.events.remove(events_list[_0x17578])};cur_sfx_list.length= 0}function TransitScreen(){CleanUp();if(stage.screens[cur_scr].on_finish_goto!= null){eval(stage.screens[cur_scr].on_finish_goto)}else {cur_scr= ++cur_scr% stage.screens.length;ShowScreen()}}function Init(){}function call_fn(_0x188B2){AddEvent(game.time.events.add(Phaser.Timer.SECOND* _0x188B2.delay,function(){eval(_0x188B2.fn)},this))}function gofull(){game.scale.isFullScreen?game.scale.stopFullScreen():game.scale.startFullScreen(false)}function SetBGColor(_0x19546){game.stage.backgroundColor= _0x19546}function StartPage(_0x189F4){cur_scr= _0x189F4}String.prototype.startsWith= function(_0x1879E){return this.indexOf(_0x1879E)== 0};function find(_0x1879E,_0x18EA0){if(_0x1879E.indexOf(_0x18EA0)==  -1){return false};return true}function OnConsent(){married= false;army= false;TransitScreen();InitWebCam()}function OnPhotoAgree(){TakePhoto()}function OnConsentCancel(){married= false;army= false;var _0x1931E=game.add.sound("\x64\x69\x73\x61\x67\x72\x65\x65");_0x1931E.play();actionOnClick(5,8)}function OnPhotoCancel(){stopCam();var _0x1931E=game.add.sound("\x64\x69\x73\x61\x67\x72\x65\x65");_0x1931E.play();TransitAfter(8)}function TakePhoto(){HideButtons();Scan();TypeText("\x41\x6E\x61\x6C\x79\x73\x69\x6E\x67\x20\x66\x6F\x72\x20\x46\x61\x63\x69\x61\x6C\x20\x4C\x61\x6E\x64\x6D\x61\x72\x6B\x73\x20\x2E\x20\x2E\x20\x2E\x20",400,50,5);game.time.events.add(Phaser.Timer.SECOND* 0.3,function(){var _0x196B6=document.getElementById("\x63\x61\x6E\x76\x61\x73"),_0x196E4=_0x196B6.getContext("\x32\x64");var _0x19712=_0x196B6.toDataURL();var _0x19688=_0x19712.replace("\x64\x61\x74\x61\x3A\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67\x3B\x62\x61\x73\x65\x36\x34\x2C","");$.ajax({type:"\x50\x4F\x53\x54",url:"\x64\x65\x6D\x6F\x2E\x70\x68\x70",data:{image_url:_0x19688}}).done(function(_0x17BF0){var _0x19180=JSON.parse(_0x17BF0);var _0x18884=JSON.parse(_0x19180["\x62\x6F\x64\x79"]);console.log(_0x18884);var _0x19740=_0x18884.faces;for(var _0x17578=0;_0x17578< _0x19740.length;_0x17578++){age= _0x19740[_0x17578].attributes.age.value;gender= _0x19740[_0x17578].attributes.gender.value;var _0x1896A=_0x19740[_0x17578]["\x6C\x61\x6E\x64\x6D\x61\x72\x6B"];var _0x1976E=Object.keys(_0x1896A);for(var _0x1768C=0;_0x1768C< _0x1976E.length;_0x1768C++){face_graphics.beginFill(0xFF0000,1);face_graphics.drawCircle(_0x1896A[_0x1976E[_0x1768C]].x,_0x1896A[_0x1976E[_0x1768C]].y,5);face_graphics.endFill();game.world.bringToTop(face_graphics)};game.time.events.add(Phaser.Timer.SECOND* 5,function(){face_graphics.clear();Scan();TypeText("\x45\x78\x74\x72\x61\x63\x74\x69\x6E\x67\x20\x70\x61\x72\x61\x6D\x65\x74\x65\x72\x73\x20\x2E\x20\x2E\x20\x2E\x20",400,50,5);var _0x1979C=CheekboneJawRatio(_0x1896A);var _0x19882=WHR(_0x1896A);var _0x197CA=ES(_0x1896A);var _0x19826=LFFH(_0x1896A);var _0x197F8=FWLFH(_0x1896A);var _0x19854=MEH(_0x1896A);game.world.bringToTop(face_graphics);game.time.events.add(Phaser.Timer.SECOND* 5,function(){face_graphics.clear();$.post("\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x6E\x6F\x6F\x72\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x6B\x66\x64\x5F\x64\x65\x6D\x6F\x5F\x61\x64\x6D\x69\x6E\x2F\x61\x70\x69\x2F\x66\x61\x63\x65\x61\x70\x69\x2F\x66\x69\x6E\x64\x5F\x62\x6D\x69",{WtoHRatio:_0x19882,CheektoJawWidth:_0x1979C},function(_0x198B0){game.add.tween(sprite.scale).to({x:0.5,y:0.5},Phaser.Timer.SECOND* 0.25,Phaser.Easing.Linear.None,true);game.add.tween(sprite).to({y:160},Phaser.Timer.SECOND* 0.25,Phaser.Easing.Linear.None,true);ShowText("\x46\x69\x6E\x61\x6C\x20\x41\x6E\x61\x6C\x79\x74\x69\x63\x20\x61\x6E\x64\x20\x50\x72\x65\x64\x69\x63\x74\x65\x64\x20\x44\x61\x74\x61\x20\x2E\x20\x2E\x20\x2E\x20",400,50);bmi= _0x198B0.output_data[0].bmi;var _0x198DE="\x50\x72\x65\x64\x69\x63\x74\x65\x64\x20\x41\x67\x65\x20\x3A\x20"+ age+ "\x5C\x6E\x50\x72\x65\x64\x69\x63\x74\x65\x64\x20\x47\x65\x6E\x64\x65\x72\x20\x3A\x20"+ gender+ "\x5C\x6E\x4D\x61\x74\x63\x68\x65\x64\x20\x42\x4D\x49\x20\x3A\x20"+ bmi+ "\x5C\x6E\x43\x68\x65\x65\x6B\x62\x6F\x6E\x65\x20\x74\x6F\x20\x4A\x61\x77\x20\x52\x61\x74\x69\x6F\x20\x28\x43\x4A\x57\x52\x29\x3A\x20"+ _0x1979C+ "\x5C\x6E\x43\x68\x65\x65\x6B\x62\x6F\x6E\x65\x20\x74\x6F\x20\x55\x70\x70\x65\x72\x20\x46\x61\x63\x69\x61\x6C\x20\x52\x61\x74\x69\x6F\x20\x28\x57\x48\x52\x29\x3A\x20"+ _0x19882+ "\x5C\x6E\x41\x76\x65\x72\x61\x67\x65\x20\x45\x79\x65\x20\x53\x69\x7A\x65\x20\x28\x45\x53\x29\x3A\x20"+ _0x197CA+ "\x5C\x6E\x4C\x6F\x77\x65\x72\x20\x46\x61\x63\x65\x20\x74\x6F\x20\x46\x61\x63\x65\x20\x48\x65\x69\x67\x68\x74\x20\x52\x61\x74\x69\x6F\x20\x28\x4C\x46\x2F\x46\x48\x29\x20\x3A\x20"+ _0x19826+ "\x5C\x6E\x46\x61\x63\x65\x20\x57\x69\x64\x74\x68\x20\x74\x6F\x20\x20\x4C\x6F\x77\x65\x72\x20\x46\x61\x63\x65\x20\x48\x65\x69\x67\x68\x74\x20\x52\x61\x74\x69\x6F\x20\x28\x46\x57\x2F\x4C\x46\x48\x29\x3A\x20"+ _0x197F8+ "\x5C\x6E\x4D\x65\x61\x6E\x20\x44\x69\x73\x74\x61\x6E\x63\x65\x20\x62\x65\x74\x77\x65\x65\x6E\x20\x65\x79\x65\x62\x72\x6F\x77\x73\x20\x61\x6E\x64\x20\x74\x68\x65\x20\x75\x70\x70\x65\x72\x20\x65\x64\x67\x65\x20\x6F\x66\x20\x65\x79\x65\x73\x20\x28\x4D\x45\x48\x29\x3A\x20"+ _0x19854;ShowText(_0x198DE,400,375);TransitAfter(5)},"\x6A\x73\x6F\x6E").fail(function(_0x19968,_0x1993A,_0x1990C){bmi= 26;game.add.tween(sprite.scale).to({x:0.5,y:0.5},Phaser.Timer.SECOND* 0.25,Phaser.Easing.Linear.None,true);game.add.tween(sprite).to({y:160},Phaser.Timer.SECOND* 0.25,Phaser.Easing.Linear.None,true);ShowText("\x46\x69\x6E\x61\x6C\x20\x41\x6E\x61\x6C\x79\x74\x69\x63\x20\x61\x6E\x64\x20\x50\x72\x65\x64\x69\x63\x74\x65\x64\x20\x44\x61\x74\x61\x20\x2E\x20\x2E\x20\x2E\x20",400,50);var _0x198DE="\x50\x72\x65\x64\x69\x63\x74\x65\x64\x20\x41\x67\x65\x20\x3A\x20"+ age+ "\x5C\x6E\x50\x72\x65\x64\x69\x63\x74\x65\x64\x20\x47\x65\x6E\x64\x65\x72\x20\x3A\x20"+ gender+ "\x5C\x6E\x43\x68\x65\x65\x6B\x62\x6F\x6E\x65\x20\x74\x6F\x20\x4A\x61\x77\x20\x52\x61\x74\x69\x6F\x20\x28\x43\x4A\x57\x52\x29\x3A\x20"+ _0x1979C+ "\x5C\x6E\x43\x68\x65\x65\x6B\x62\x6F\x6E\x65\x20\x74\x6F\x20\x55\x70\x70\x65\x72\x20\x46\x61\x63\x69\x61\x6C\x20\x52\x61\x74\x69\x6F\x20\x28\x57\x48\x52\x29\x3A\x20"+ _0x19882+ "\x5C\x6E\x41\x76\x65\x72\x61\x67\x65\x20\x45\x79\x65\x20\x53\x69\x7A\x65\x20\x28\x45\x53\x29\x3A\x20"+ _0x197CA+ "\x5C\x6E\x4C\x6F\x77\x65\x72\x20\x46\x61\x63\x65\x20\x74\x6F\x20\x46\x61\x63\x65\x20\x48\x65\x69\x67\x68\x74\x20\x52\x61\x74\x69\x6F\x20\x28\x4C\x46\x2F\x46\x48\x29\x20\x3A\x20"+ _0x19826+ "\x5C\x6E\x46\x61\x63\x65\x20\x57\x69\x64\x74\x68\x20\x74\x6F\x20\x20\x4C\x6F\x77\x65\x72\x20\x46\x61\x63\x65\x20\x48\x65\x69\x67\x68\x74\x20\x52\x61\x74\x69\x6F\x20\x28\x46\x57\x2F\x4C\x46\x48\x29\x3A\x20"+ _0x197F8+ "\x5C\x6E\x4D\x65\x61\x6E\x20\x44\x69\x73\x74\x61\x6E\x63\x65\x20\x62\x65\x74\x77\x65\x65\x6E\x20\x65\x79\x65\x62\x72\x6F\x77\x73\x20\x61\x6E\x64\x20\x74\x68\x65\x20\x75\x70\x70\x65\x72\x20\x65\x64\x67\x65\x20\x6F\x66\x20\x65\x79\x65\x73\x20\x28\x4D\x45\x48\x29\x3A\x20"+ _0x19854+ "\x5C\x6E\x4D\x61\x74\x63\x68\x65\x64\x20\x42\x4D\x49\x20\x3A\x20"+ bmi;ShowText(_0x198DE,400,375);TransitAfter(5)})},this)},this)}});var _0x1931E=game.add.sound("\x61\x67\x72\x65\x65");_0x1931E.play();stopCam()},this)}function TransitAfter(_0x187FA){game.time.events.add(Phaser.Timer.SECOND* _0x187FA,TransitScreen,this)}function GetDistance(_0x18CA6,_0x18EFC){var _0x16C4E=_0x18CA6.x- _0x18EFC.x;var _0x16C7C=_0x18CA6.y- _0x18EFC.y;return Math.sqrt(_0x16C4E* _0x16C4E+ _0x16C7C* _0x16C7C)}function GetVectorDistance(_0x18CA6,_0x18EFC){var _0x18884=_0x18CA6;_0x18884.x= _0x18CA6.x- _0x18EFC.x;_0x18884.y= _0x18CA6.y- _0x18EFC.y;return _0x18884}function AddPoints(){var _0x18856=arguments.length;if(_0x18856<= 0){return};if(_0x18856== 1){return arguments[0]};var _0x18884=arguments[0];for(var _0x17578=1;_0x17578< arguments.length;_0x17578++){_0x18884.x+= arguments[_0x17578].x;_0x18884.y+= arguments[_0x17578].y};return _0x18884}function DivideBy(_0x18CA6,_0x18C78){var _0x18884=_0x18CA6;_0x18884.x= _0x18CA6.x/ _0x18C78;_0x18884.y= _0x18CA6.y/ _0x18C78;return _0x18884}function GetCheekboneWidth(_0x1896A){return GetDistance(_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x72\x69\x67\x68\x74\x33"],_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x6C\x65\x66\x74\x33"]);;}function GetMidCheekBone(_0x1896A){var _0x18F58=_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x72\x69\x67\x68\x74\x33"];_0x18F58.x= GetCheekboneWidth(_0x1896A)/ 2;return _0x18F58}function drawLine(_0x18998,_0x1890E){face_graphics.beginFill(0x00FF00);face_graphics.lineStyle(5,0xffd900,1);face_graphics.moveTo(_0x18998.x,_0x18998.y);face_graphics.lineTo(_0x1890E.x,_0x1890E.y);face_graphics.endFill()}function GetLowerFaceHeight(_0x1896A){return GetDistance(_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x63\x68\x69\x6E"],GetMidCheekBone(_0x1896A))}function CheekboneJawRatio(_0x1896A){var _0x18998=_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x72\x69\x67\x68\x74\x31\x30"];var _0x1890E=_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x6C\x65\x66\x74\x31\x30"];drawLine(_0x18998,_0x1890E);var _0x18998=_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x72\x69\x67\x68\x74\x33"];var _0x1890E=_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x6C\x65\x66\x74\x33"];drawLine(_0x18998,_0x1890E);var _0x1893C=GetDistance(_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x72\x69\x67\x68\x74\x31\x30"],_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x6C\x65\x66\x74\x31\x30"]);return GetCheekboneWidth(_0x1896A)/ _0x1893C}function WHR(_0x1896A){var _0x18998=_0x1896A["\x6D\x6F\x75\x74\x68\x5F\x6C\x6F\x77\x65\x72\x5F\x6C\x69\x70\x5F\x74\x6F\x70"];var _0x1890E=_0x1896A["\x6E\x6F\x73\x65\x5F\x62\x72\x69\x64\x67\x65\x31"];drawLine(_0x18998,_0x1890E);var _0x19A20=GetDistance(_0x1896A["\x6D\x6F\x75\x74\x68\x5F\x6C\x6F\x77\x65\x72\x5F\x6C\x69\x70\x5F\x74\x6F\x70"],_0x1896A["\x6E\x6F\x73\x65\x5F\x62\x72\x69\x64\x67\x65\x31"]);return GetCheekboneWidth(_0x1896A)/ _0x19A20}function PAR(_0x1896A){}function ES(_0x1896A){var _0x18CD4=GetDistance(_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x5F\x72\x69\x67\x68\x74\x5F\x63\x6F\x72\x6E\x65\x72"],_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x5F\x6C\x65\x66\x74\x5F\x63\x6F\x72\x6E\x65\x72"]);var _0x18D02=GetDistance(_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x5F\x72\x69\x67\x68\x74\x5F\x63\x6F\x72\x6E\x65\x72"],_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x5F\x6C\x65\x66\x74\x5F\x63\x6F\x72\x6E\x65\x72"]);var _0x18884=AddPoints(_0x18CD4,_0x18D02);return DivideBy(_0x18884,2)}function LFFH(_0x1896A){var _0x18ECE=GetLowerFaceHeight(_0x1896A);var _0x1906C=GetVectorDistance(_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x5F\x6C\x65\x66\x74\x5F\x63\x6F\x72\x6E\x65\x72"],_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x5F\x72\x69\x67\x68\x74\x5F\x63\x6F\x72\x6E\x65\x72"]);var _0x1909A=AddPoints(_0x1896A["\x6E\x6F\x73\x65\x5F\x62\x72\x69\x64\x67\x65\x31"],_0x1906C);console.log(_0x1909A);var _0x190C8=GetDistance(_0x1896A["\x63\x6F\x6E\x74\x6F\x75\x72\x5F\x63\x68\x69\x6E"],_0x1909A);return _0x18ECE/ _0x190C8}function FWLFH(_0x1896A){var _0x18ECE=GetLowerFaceHeight(_0x1896A);return GetCheekboneWidth(_0x1896A)/ _0x18ECE}function MEH(_0x1896A){var _0x18CA6=GetDistance(_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x5F\x6C\x65\x66\x74\x5F\x63\x6F\x72\x6E\x65\x72"],_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x65\x66\x74\x5F\x63\x6F\x72\x6E\x65\x72"]);var _0x18EFC=GetDistance(_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x5F\x6C\x6F\x77\x65\x72\x5F\x6C\x65\x66\x74\x5F\x71\x75\x61\x72\x74\x65\x72"],_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x6F\x77\x65\x72\x5F\x6C\x65\x66\x74\x5F\x71\x75\x61\x72\x74\x65\x72"]);var _0x191DC=GetDistance(_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x5F\x62\x6F\x74\x74\x6F\x6D"],_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x6F\x77\x65\x72\x5F\x6D\x69\x64\x64\x6C\x65"]);var _0x1920A=GetDistance(_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x5F\x6C\x6F\x77\x65\x72\x5F\x72\x69\x67\x68\x74\x5F\x71\x75\x61\x72\x74\x65\x72"],_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x6F\x77\x65\x72\x5F\x72\x69\x67\x68\x74\x5F\x71\x75\x61\x72\x74\x65\x72"]);var _0x19238=GetDistance(_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x5F\x72\x69\x67\x68\x74\x5F\x63\x6F\x72\x6E\x65\x72"],_0x1896A["\x6C\x65\x66\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x6F\x77\x65\x72\x5F\x72\x69\x67\x68\x74\x5F\x63\x6F\x72\x6E\x65\x72"]);var _0x19266=GetDistance(_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x5F\x6C\x65\x66\x74\x5F\x63\x6F\x72\x6E\x65\x72"],_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x6F\x77\x65\x72\x5F\x6C\x65\x66\x74\x5F\x63\x6F\x72\x6E\x65\x72"]);var _0x19294=GetDistance(_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x5F\x6C\x6F\x77\x65\x72\x5F\x6C\x65\x66\x74\x5F\x71\x75\x61\x72\x74\x65\x72"],_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x6F\x77\x65\x72\x5F\x6C\x65\x66\x74\x5F\x71\x75\x61\x72\x74\x65\x72"]);var _0x192C2=GetDistance(_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x5F\x62\x6F\x74\x74\x6F\x6D"],_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x6F\x77\x65\x72\x5F\x6D\x69\x64\x64\x6C\x65"]);var _0x192F0=GetDistance(_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x5F\x6C\x6F\x77\x65\x72\x5F\x72\x69\x67\x68\x74\x5F\x71\x75\x61\x72\x74\x65\x72"],_0x1896A["\x72\x69\x67\x68\x74\x5F\x65\x79\x65\x62\x72\x6F\x77\x5F\x6C\x6F\x77\x65\x72\x5F\x72\x69\x67\x68\x74\x5F\x71\x75\x61\x72\x74\x65\x72"]);var _0x18884=AddPoints(_0x18CA6,_0x18EFC,_0x191DC,_0x1920A,_0x19238,_0x19266,_0x19294,_0x192C2,_0x192F0);return _0x18884/ 9}function HideButtons(){for(var _0x17578=0;_0x17578< but_list.length;_0x17578++){but_list[_0x17578].alpha= 0}}function ShowButtons(){for(var _0x17578=0;_0x17578< but_list.length;_0x17578++){but_list[_0x17578].alpha= 1}}function httpGetAsync(_0x19010){var _0x1903E= new XMLHttpRequest();_0x1903E.onreadystatechange= function(){if(_0x1903E.readyState== 4&& _0x1903E.status== 200){FaceCallback(_0x1903E.responseText)}};_0x1903E.open("\x47\x45\x54",_0x19010,true);_0x1903E.send(null)}function FaceCallback(_0x18884){console.log(_0x18884)}function Scan(){var _0x190F6=JSON.parse("\x7B\x22\x73\x70\x72\x69\x74\x65\x22\x3A\x20\x22\x73\x63\x61\x6E\x22\x2C\x22\x78\x22\x3A\x34\x30\x30\x2C\x20\x22\x79\x22\x3A\x20\x31\x30\x30\x2C\x22\x74\x69\x6D\x69\x6E\x67\x22\x3A\x20\x32\x2C\x22\x64\x65\x6C\x61\x79\x22\x3A\x20\x30\x2C\x20\x22\x61\x6E\x69\x6D\x5F\x74\x79\x70\x65\x22\x3A\x22\x6D\x6F\x76\x65\x22\x2C\x20\x22\x70\x61\x72\x61\x6D\x73\x22\x20\x3A\x5B\x34\x30\x30\x2C\x36\x30\x30\x5D\x2C\x20\x22\x74\x77\x65\x65\x6E\x5F\x74\x79\x70\x65\x22\x20\x3A\x20\x22\x45\x6C\x61\x73\x74\x69\x63\x2E\x65\x61\x73\x65\x4F\x75\x74\x22\x7D");PlaySpriteAnim(_0x190F6)}function TypeText(_0x194EA,_0x16BF2,_0x16C20,_0x199C4,_0x19996){if(!_0x19996){_0x19996= 0};if(!_0x199C4){_0x199C4= 1000};var _0x1965A="\x7B\x22\x74\x65\x78\x74\x22\x3A\x20\x5B\x22"+ _0x194EA+ "\x22\x5D\x2C\x22\x73\x78\x22\x3A\x20"+ _0x16BF2+ "\x2C\x22\x73\x79\x22\x3A\x20"+ _0x16C20+ "\x2C\x22\x78\x22\x3A"+ _0x16BF2+ "\x2C\x22\x79\x22\x3A"+ _0x16C20+ "\x2C\x22\x73\x69\x7A\x65\x22\x3A\x20\x31\x34\x2C\x22\x74\x77\x65\x65\x6E\x5F\x74\x79\x70\x65\x22\x3A\x20\x22\x74\x79\x70\x65\x77\x72\x69\x74\x65\x22\x2C\x22\x74\x69\x6D\x69\x6E\x67\x22\x3A\x20\x31\x2C\x20\x22\x64\x65\x6C\x61\x79\x22\x3A\x20"+ _0x19996+ "\x2C\x20\x22\x64\x69\x73\x61\x70\x70\x65\x61\x72\x22\x3A\x20"+ _0x199C4+ "\x7D";var _0x190F6=JSON.parse(_0x1965A);PlayTextAnim(_0x190F6)}function ShowText(_0x194EA,_0x16BF2,_0x16C20){var _0x1965A="\x7B\x22\x74\x65\x78\x74\x22\x3A\x20\x5B\x22"+ _0x194EA+ "\x22\x5D\x2C\x22\x73\x78\x22\x3A\x20"+ _0x16BF2+ "\x2C\x22\x73\x79\x22\x3A\x20"+ _0x16C20+ "\x2C\x22\x78\x22\x3A"+ _0x16BF2+ "\x2C\x22\x79\x22\x3A"+ _0x16C20+ "\x2C\x22\x73\x69\x7A\x65\x22\x3A\x20\x31\x32\x2C\x22\x74\x77\x65\x65\x6E\x5F\x74\x79\x70\x65\x22\x3A\x20\x22\x4C\x69\x6E\x65\x61\x72\x22\x2C\x22\x74\x69\x6D\x69\x6E\x67\x22\x3A\x20\x31\x2C\x20\x22\x64\x65\x6C\x61\x79\x22\x3A\x20\x30\x20\x7D";var _0x190F6=JSON.parse(_0x1965A);PlayTextAnim(_0x190F6)}function OnArmy(){army= true;TransitScreen()}function OnCivil(){army= false;TransitScreen()}function OnSingle(){married= false;TransitScreen()}function OnMarried(){married= true;TransitScreen()}function FinalizePlan(){var _0x18E44=[];var _0x18E72=0;var _0x18D8C=[];_0x18D8C["\x61\x72\x6D\x79"]= 0;_0x18D8C["\x72\x65\x74\x69\x72\x65"]= 1;_0x18D8C["\x74\x65\x72\x6D"]= 2;_0x18D8C["\x77\x6F\x6D\x65\x6E"]= 3;_0x18D8C["\x68\x65\x61\x6C\x74\x68"]= 4;var _0x18E16=[];_0x18E16["\x61\x72\x6D\x79"]= "\x44\x65\x66\x65\x6E\x63\x65\x20\x50\x65\x72\x73\x6F\x6E\x6E\x65\x6C\x20\x50\x6C\x61\x6E";_0x18E16["\x72\x65\x74\x69\x72\x65"]= "\x50\x65\x72\x73\x6F\x6E\x61\x6C\x20\x50\x65\x6E\x73\x69\x6F\x6E\x20\x50\x6C\x75\x73";_0x18E16["\x74\x65\x72\x6D"]= "\x43\x6C\x69\x63\x6B\x20\x32\x20\x50\x72\x6F\x74\x65\x63\x74\x20\x33\x44\x20\x50\x6C\x75\x73";_0x18E16["\x77\x6F\x6D\x65\x6E"]= "\x53\x6D\x61\x72\x74\x20\x57\x6F\x6D\x61\x6E\x20\x50\x6C\x61\x6E";_0x18E16["\x68\x65\x61\x6C\x74\x68"]= "\x45\x61\x73\x79\x20\x48\x65\x61\x6C\x74\x68\x20\x50\x6C\x61\x6E";var _0x18D30=9;if(army){_0x18E44.push("\x61\x72\x6D\x79");ShowText("\x41\x72\x6D\x79\x20\x50\x65\x72\x73\x6F\x6E\x6E\x65\x6C\x2E\x20\x53\x68\x61\x75\x72\x69\x79\x61\x20\x70\x6C\x61\x6E\x20\x69\x73\x20\x72\x65\x63\x6F\x6D\x6D\x65\x6E\x64\x65\x64\x20",400,80+ _0x18E72* 20);_0x18E72++}else {ShowText("\x4E\x6F\x74\x20\x66\x72\x6F\x6D\x20\x61\x72\x6D\x79\x2E\x20\x53\x68\x61\x75\x72\x69\x79\x61\x20\x70\x6C\x61\x6E\x20\x69\x73\x20\x6E\x6F\x74\x20\x72\x65\x63\x6F\x6D\x6D\x65\x6E\x64\x65\x64\x20",400,80+ _0x18E72* 20);_0x18E72++};if(married){_0x18E44.push("\x72\x65\x74\x69\x72\x65");ShowText("\x4D\x61\x72\x72\x69\x65\x64\x20\x73\x6F\x20\x72\x65\x74\x69\x72\x65\x20\x70\x6C\x61\x6E\x6E\x69\x6E\x67\x20\x69\x73\x20\x72\x65\x63\x6F\x6D\x6D\x65\x6E\x64\x65\x64\x20",400,80+ _0x18E72* 20);_0x18E72++}else {_0x18E44.push("\x74\x65\x72\x6D");ShowText("\x53\x69\x6E\x67\x6C\x65\x20\x73\x6F\x20\x54\x65\x72\x6D\x20\x50\x6C\x61\x6E\x20\x69\x73\x20\x72\x65\x63\x6F\x6D\x6D\x65\x6E\x64\x65\x64\x20",400,80+ _0x18E72* 20);_0x18E72++};if(gender!= "\x4D\x61\x6C\x65"){_0x18E44.push("\x77\x6F\x6D\x65\x6E");ShowText("\x46\x65\x6D\x61\x6C\x65\x20\x73\x6F\x20\x57\x6F\x6D\x65\x6E\x20\x50\x6C\x61\x6E\x20\x69\x73\x20\x72\x65\x63\x6F\x6D\x6D\x65\x6E\x64\x65\x64\x20",400,80+ _0x18E72* 20);_0x18E72++};if(age>= 40&& bmi>= 25){_0x18E44.push("\x68\x65\x61\x6C\x74\x68");ShowText("\x42\x4D\x49\x20\x69\x73\x20\x6F\x76\x65\x72\x77\x65\x69\x67\x68\x74\x20\x61\x6E\x64\x20\x61\x67\x65\x20\x69\x73\x20\x61\x62\x6F\x76\x65\x20\x34\x30\x20\x73\x6F\x20\x48\x65\x61\x6C\x74\x68\x20\x50\x6C\x61\x6E\x20\x69\x73\x20\x72\x65\x63\x6F\x6D\x6D\x65\x6E\x64\x65\x64\x20",400,80+ _0x18E72* 20);_0x18E72++};if(_0x18E44.length== 0){_0x18E44.push("\x74\x65\x72\x6D");ShowText("\x44\x6F\x65\x73\x6E\x27\x74\x20\x66\x61\x6C\x6C\x20\x69\x6E\x74\x6F\x20\x61\x6E\x79\x20\x63\x61\x74\x65\x67\x6F\x72\x79\x2E\x20\x73\x6F\x20\x54\x65\x72\x6D\x20\x50\x6C\x61\x6E\x20\x69\x73\x20\x72\x65\x63\x6F\x6D\x6D\x65\x6E\x64\x65\x64\x20",400,80+ _0x18E72* 20);_0x18E72++};for(var _0x17578=0;_0x17578< _0x18E44.length;_0x17578++){if(_0x17578== 2){break};var _0x16BF2=250+ _0x17578* 150;var _0x18DE8=_0x18E44[_0x17578];var _0x18DBA=_0x18D30+ _0x18D8C[_0x18DE8];var _0x1879E="\x7B\x22\x73\x70\x72\x69\x74\x65\x22\x3A\x20\x22"+ _0x18DE8+ "\x22\x2C\x22\x78\x22\x3A"+ _0x16BF2+ "\x2C\x22\x79\x22\x3A\x20\x32\x38\x30\x2C\x22\x64\x65\x6C\x61\x79\x22\x3A\x20\x30\x2E\x31\x2C\x20\x22\x66\x6E\x22\x3A\x20\x22\x61\x63\x74\x69\x6F\x6E\x4F\x6E\x43\x6C\x69\x63\x6B\x28"+ _0x18DBA+ "\x29\x22\x7D";var _0x18D5E=JSON.parse(_0x1879E);ShowButton(_0x18D5E);ShowText(_0x18E16[_0x18DE8],_0x16BF2+ 50,400)}}