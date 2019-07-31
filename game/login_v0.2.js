/*

 login v0.2 
	
 横版改竖版     								【完成】

 1. 按钮加图片								

 2. 背景动画									【完成】

 3. 加入声音									【完成】


*/


/*

 login v0.3 
	
 登录接口对接

 注册接口对接
 

*/



//声明变量
//游戏主层，进度条显示层，背景层，障碍层
var backLayer,loadingLayer,background,stageLayer,login_button;

var main_sound;
var button_sound;

//保存图像资源
var imglist = {};
//输入框
var input_bk_show;

//资源
var imgData = new Array(
		{name:"background_image",path:"../ui/login/login_back_1.png"},
		{name:"hore",path:"../ui/login/login_hore_1.png"},
		{name:"input_bk",path:"../ui/login/input_bk.png"},
		//tx 1
		{name:"bk_tx1_1",path:"../ui/tx/login_1/1.png"},
		{name:"bk_tx1_2",path:"../ui/tx/login_1/2.png"},
		{name:"bk_tx1_3",path:"../ui/tx/login_1/3.png"},
		{name:"bk_tx1_4",path:"../ui/tx/login_1/4.png"},
		{name:"bk_tx1_5",path:"../ui/tx/login_1/5.png"},
		{name:"bk_tx1_6",path:"../ui/tx/login_1/6.png"},
		{name:"bk_tx1_7",path:"../ui/tx/login_1/7.png"},
		// tx 2
		{name:"bk_tx2_1",path:"../ui/tx/login_2/1.png"},
		{name:"bk_tx2_2",path:"../ui/tx/login_2/2.png"},
		{name:"bk_tx2_3",path:"../ui/tx/login_2/3.png"},
		{name:"bk_tx2_4",path:"../ui/tx/login_2/4.png"},
		{name:"bk_tx2_5",path:"../ui/tx/login_2/5.png"},
		{name:"bk_tx2_6",path:"../ui/tx/login_2/6.png"},
		{name:"bk_tx2_7",path:"../ui/tx/login_2/7.png"},
		{name:"bk_tx2_8",path:"../ui/tx/login_2/8.png"},
		{name:"bk_tx2_9",path:"../ui/tx/login_2/9.png"},
		{name:"bk_tx2_10",path:"../ui/tx/login_2/10.png"},
		{name:"bk_tx2_11",path:"../ui/tx/login_2/11.png"},
		{name:"bk_tx2_12",path:"../ui/tx/login_2/12.png"}
		);

//声明显示
var showList = new Array();

function main(){
	if(LGlobal.canTouch){
		LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
		LSystem.screen(LStage.FULL_SCREEN);
	}else{
		LGlobal.stageScale = LStageScaleMode.NO_SCALE;
		LSystem.screen(LStage.FULL_SCREEN);
	}
	loadingLayer = new LoadingSample4();
	addChild(loadingLayer);

	var title = new LTextField();
	title.x = 50;
	title.y = 100;
	title.size = 56;
	title.color = "#ffffff";
	title.text = "加载中,请等待";
	loadingLayer.addChild(title);

	

	/**读取图片*/
	LLoadManage.load(imgData,
		function(progress){
			loadingLayer.setProgress(progress);
		},gameInit);
}

//读取完所有图片，进行游戏标题画面的初始化工作
function gameInit(result){
	dataList = result;
	removeChild(loadingLayer);
	loadingLayer = null;
	//定义游戏背景层
	backLayer = new LSprite();
	addChild(backLayer);
	
	//主音乐
	main_sound = new LSound();
    main_sound.load("../ui/sound/login_sound_C32kbps.mp3");
	main_sound.addEventListener(LEvent.COMPLETE,function(e){
		if(main_sound){
            main_sound.play();
        }
		console.log(main_sound);
	});
	//按钮声音
	button_sound = new LSound();
	button_sound.load("../ui/sound/login_button_C32kbps.mp3");


	//显示游戏背景
	background_show();
	//显示游戏登录按钮
	login_button_pg();
	//显示游戏注册按钮
	register_show_pg();
	
	
	
	//backLayer.removeChild(login_button);

	

}

/*
function main_sound_play(e){
	
}
*/




//定义游戏背景
function background_show(){
	background = new LSprite();
	backLayer.addChild(background);
	//背景图片显示
	var bitmap = new LBitmap(new LBitmapData(dataList["background_image"]));
	background.addChild(bitmap);

	//背景图片显示
	var hore_bitmap = new LBitmap(new LBitmapData(dataList["hore"]));
	hore_bitmap.x = -10;
	hore_bitmap.y = 150;
	background.addChild(hore_bitmap);

	
	LTweenLite.to(hore_bitmap,1,{x:0,y:160,loop:true,ease:LEasing.Sine.easeInOut,tweenTimeline:LTweenLite.TYPE_FRAME})
				.to(hore_bitmap,1,{x:-10,y:150,ease:LEasing.Quad.easeInOut});
	

	//显示特效
	//特效光环
	var datas = [];
	var listChild = [];
	for (var i = 0; i < 7; i++) {
		datas.push(new LBitmapData(dataList["bk_tx1_" + (i + 1)]));
		listChild.push({dataIndex : i, x : 0, y : 0, width : 240, height : 80, sx : 0, sy : 0});
	}
	var playerRight = new LAnimationTimeline(datas, [listChild]);
	playerRight.speed = 8;
	playerRight.x = 100;
	playerRight.y = 720;
	backLayer.addChild(playerRight);

	var tx_1_show = playerRight.clone();
	tx_1_show.x = 250;
	tx_1_show.y = 720;
	backLayer.addChild(tx_1_show);
	var tx_2_show = playerRight.clone();
	tx_2_show.x = 20;
	tx_2_show.y = 720;
	backLayer.addChild(tx_2_show);


	var datas2 = [];
	var listChild2 = [];
	for (var i = 0; i <12 ; i++) {
		datas2.push(new LBitmapData(dataList["bk_tx2_" + (i + 1)]));
		listChild2.push({dataIndex : i, x : 0, y : 0, width : 240, height : 140, sx : 0, sy : 0});
	}
	var tx2_temp = new LAnimationTimeline(datas2, [listChild2]);
	tx2_temp.speed = 8;
	tx2_temp.x = 280;
	tx2_temp.y = 10;
	backLayer.addChild(tx2_temp);



	//显示游戏标题
	var title = new LTextField();
	title.x = 20;
	title.y = 30;
	title.size = 56;
	title.color = "#ffffff";
	title.text = "黑暗堡垒·炼狱传奇";
	backLayer.addChild(title);

	var version_number = new LTextField();
	version_number.x = 300;
	version_number.y = 90;
	version_number.size = 25;
	version_number.color = "#ffffff";
	version_number.text = "version A0.1";
	backLayer.addChild(version_number);

	//input bk show
	input_bk_show = new LBitmap(new LBitmapData(dataList["input_bk"]));
	//background.addChild(bitmap);
}
//定义游戏登录button
function login_button_pg(){
	login_button = new LSprite();
	backLayer.addChild(login_button);
	var login_show = new LButtonSample1("   登录   ",30);
	login_show.backgroundColor = "#000";
	login_show.width = 200;
	login_show.height = 50;
	login_show.x = LGlobal.width/3;
	login_show.y = 520;
	login_button.addChild(login_show);
	login_button.addEventListener(LMouseEvent.MOUSE_UP,function(e){
            
            button_play(e); 
            
            
            login_ui();
        });

}

//定义游戏注册button
function register_show_pg(){
	register_button = new LSprite();
	backLayer.addChild(register_button);
	var register_show = new LButtonSample1("   注册   ",30);
	register_show.backgroundColor = "#000";
	register_show.width = 200;
	register_show.height = 50;
	register_show.x = LGlobal.width/3;
	register_show.y = 630;
	register_button.addChild(register_show);
	register_button.addEventListener(LMouseEvent.MOUSE_UP,function(e){
		button_play(e); 
		register_ui();
	});
}

//定义游戏登录界面
function login_pg(){
	//定义登录界面
	login = new LSprite();
	backLayer.addChild(login);
	//账号 Lable
	var nameLabel = new LTextField();
	nameLabel.text = " 账 号 ： ";
	nameLabel.size = 25;
	nameLabel.color = "#ffffff";
	nameLabel.x = 70;
	nameLabel.y = 400+10;
	login.addChild(nameLabel);
	var zhanghao_bk_show = input_bk_show.clone();
	zhanghao_bk_show.x = 160;
	zhanghao_bk_show.y = 410;
	login.addChild(zhanghao_bk_show);
	//账号 输入框
	var name = new LTextField();
	name.size = 30;
	name.width = 250;
	name.color = "#ffffff";
	name.x = 170;
	name.y = 400+20;
	name.setWordWrap(true);
	name.setType(LTextFieldType.INPUT);
	
	login.addChild(name);
	name.focus();
	//密码 Lable
	var passLabel = new LTextField();
	passLabel.text = " 密 码 ： ";
	passLabel.size = 25;
	passLabel.color = "#ffffff";
	passLabel.x = 70;
	passLabel.y = 500+10;
	login.addChild(passLabel);

	var zhanghao_bk_show = input_bk_show.clone();
	zhanghao_bk_show.x = 160;
	zhanghao_bk_show.y = 510;
	login.addChild(zhanghao_bk_show);

	//密码 输入框
	var pass = new LTextField();
	pass.size = 30;
	pass.width = 250;
	pass.color = "#ffffff";
	pass.x = 170;
	pass.y = 500+20;
	pass.displayAsPassword = true;
	pass.setType(LTextFieldType.INPUT);
	
	login.addChild(pass);


	//login_ok 确认登录
	var login_ok = new LButtonSample1("确定");
	login_ok.width = 100;
	login_ok.height = 30;
	login_ok.size = 30;
	login_ok.x = LGlobal.width/5*2;
	login_ok.y = 620;
	login.addChild(login_ok);

	login_ok.addEventListener(LMouseEvent.MOUSE_UP,function(){
		button_play();

		//获取输入的账号
		var name_data = name.text;
		//获取输入的密码
		var pass_data = pass.text;
		var params= [];
		params.push(name_data);
		params.push(pass_data);

		var json = JSON.stringify(params);
		//alert(json);
		
		LMessageBox.show({
			title:"message",
			message:json
		});
		window.location.href="../game/home_v0.5.html";
	});

	//注册 register_ok
	var register_ok = new LButtonSample1("注册");
	register_ok.width = 100;
	register_ok.height = 30;
	register_ok.size = 30;
	register_ok.x = LGlobal.width/5*3;
	register_ok.y = 620;
	login.addChild(register_ok);
	register_ok.addEventListener(LMouseEvent.MOUSE_UP,function(){
		button_play();
		register_ok_event();
	});
	
}


//定义游戏注册界面
function register_pg(){
	//定义登录界面
	register = new LSprite();
	backLayer.addChild(register);
	//游戏注册
	var titleLabel = new LTextField();
	titleLabel.text = " 游 戏 账 户 注 册 ";
	titleLabel.size = 20;
	titleLabel.color = "#ffffff";
	titleLabel.x = 180;
	titleLabel.y = 150;
	register.addChild(titleLabel);

	//账号 Lable
	var nameLabel = new LTextField();
	nameLabel.text = "账 号* ：";
	nameLabel.size = 25;
	nameLabel.color = "#ffffff";
	nameLabel.x = 30;
	nameLabel.y = 300;
	register.addChild(nameLabel);

	var zhanghao_bk_show = input_bk_show.clone();
	zhanghao_bk_show.x = 140;
	zhanghao_bk_show.y = 290;
	register.addChild(zhanghao_bk_show);
	//账号 输入框
	var name = new LTextField();
	name.size = 30;
	name.width = 250;
	name.color = "#ffffff";
	name.x = 150;
	name.y = 300;
	name.setWordWrap(true);
	name.setType(LTextFieldType.INPUT);
	register.addChild(name);
	name.focus();
	//密码 Lable
	var passLabel = new LTextField();
	passLabel.text = "密 码* ：";
	passLabel.size = 25;
	passLabel.color = "#ffffff";
	passLabel.x = 30;
	passLabel.y = 360;
	register.addChild(passLabel);

	var zhanghao_bk_show = input_bk_show.clone();
	zhanghao_bk_show.x = 140;
	zhanghao_bk_show.y = 350;
	register.addChild(zhanghao_bk_show);
	//密码 输入框
	var pass = new LTextField();
	pass.size = 30;
	pass.width = 250;
	pass.color = "#ffffff";
	pass.x = 150;
	pass.y = 360;
	pass.displayAsPassword = true;
	pass.setType(LTextFieldType.INPUT);
	register.addChild(pass);

	//密码 Lable
	var passLabel = new LTextField();
	passLabel.text = "确认密码*：";
	passLabel.size = 25;
	passLabel.color = "#ffffff";
	passLabel.x = 30;
	passLabel.y = 420;
	register.addChild(passLabel);

	var zhanghao_bk_show = input_bk_show.clone();
	zhanghao_bk_show.x = 140;
	zhanghao_bk_show.y = 410;
	register.addChild(zhanghao_bk_show);
	//密码 输入框
	var pass = new LTextField();
	pass.size = 30;
	pass.width = 250;
	pass.color = "#ffffff";
	pass.x = 150;
	pass.y = 420;
	pass.displayAsPassword = true;
	pass.setType(LTextFieldType.INPUT);
	register.addChild(pass);


	//密码 Lable
	var passLabel = new LTextField();
	passLabel.text = "手机号码 ：";
	passLabel.size = 25;
	passLabel.color = "#ffffff";
	passLabel.x = 30;
	passLabel.y = 480;
	register.addChild(passLabel);

	var zhanghao_bk_show = input_bk_show.clone();
	zhanghao_bk_show.x = 140;
	zhanghao_bk_show.y = 470;
	register.addChild(zhanghao_bk_show);
	//密码 输入框
	var pass = new LTextField();
	pass.size = 30;
	pass.width = 250;
	pass.color = "#ffffff";
	pass.x = 150;
	pass.y = 480;
	pass.setType(LTextFieldType.INPUT);
	register.addChild(pass);



	//login_ok 确认登录
	var login_ok = new LButtonSample1("确定");
	login_ok.width = 100;
	login_ok.height = 30;
	login_ok.size = 30;
	login_ok.x = LGlobal.width/5*2;
	login_ok.y = 580;
	register.addChild(login_ok);
	login_ok.addEventListener(LMouseEvent.MOUSE_UP,function(){
		button_play();
		LMessageBox.show({
			title:"message",
			message:"点击了登陆按钮"
		});
	});

	//注册 return_ok
	var return_ok = new LButtonSample1("返回");
	return_ok.width = 100;
	return_ok.height = 30;
	return_ok.size = 30;
	return_ok.x = LGlobal.width/5*3;
	return_ok.y = 580;
	register.addChild(return_ok);
	return_ok.addEventListener(LMouseEvent.MOUSE_UP,function(){
		button_play();
		return_event();
	});
	
}

//游戏按钮事件
function login_ui(event){
	login_button.remove();
	register_button.remove();
	login_pg();
}


function register_ui(event){
	login_button.remove();
	register_button.remove();
	register_pg();
}

function register_ok_event(event){
	login.remove();
	register_pg();
}

function return_event(event){
	register.remove();
	//显示游戏登录按钮
	login_button_pg();
	//显示游戏注册按钮
	register_show_pg();
}

//按键声音1播放
function button_play(e){
	
    if(button_sound.playing){
            button_sound.stop();
    }
    else{
            button_sound.playTo(0,10,1);
    }
    
    console.log(main_sound);
    console.log(button_sound);
}