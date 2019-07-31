//声明变量
//游戏主层，进度条显示层，背景层
var backLayer,loadingLayer,background;
var user_show_L;

var player;
var data;

var tx_show;
//资源
var imgData = new Array(
		//游戏界面资源
		{name:"user1",path:"../ui/user/user1.png"},
		{name:"user2",path:"../ui/user/user2.png"},
		{name:"tx1_1",path:"../ui/tx/1/tx1_1.png"},
		{name:"tx1_2",path:"../ui/tx/1/tx1_2.png"},
		{name:"tx1_3",path:"../ui/tx/1/tx1_3.png"},
		{name:"tx1_4",path:"../ui/tx/1/tx1_4.png"},
		{name:"tx1_5",path:"../ui/tx/1/tx1_5.png"},
		{name:"tx1_6",path:"../ui/tx/1/tx1_6.png"}
		//{name:"tx1",path:"../ui/tx/1.swf"}
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

	user1_img = dataList["user1"];
	user2_img = dataList["user2"];

	var user_list = new Array;

	user_list.push(user1_img);
	user_list.push(user2_img);

	user_show(user_list[0]);
	
	var button = new LButtonSample1("  下一个  ",18);
	button.backgroundColor = "#000";
		button.width = 80;
		button.height = 30;
		button.x = 100;
		button.y = 200;
		backLayer.addChild(button);
		button.addEventListener(LMouseEvent.MOUSE_UP,function(){

			user_show(user_list[1]);
		});


	//特效光环
	var datas = [];
	var listChild = [];
	for (var i = 0; i < 6; i++) {
		datas.push(new LBitmapData(dataList["tx1_" + (i + 1)]));
		listChild.push({dataIndex : i, x : 0, y : 0, width : 75, height : 40, sx : 0, sy : 0});
	}
	var playerRight = new LAnimationTimeline(datas, [listChild]);
	playerRight.speed = 5;
	playerRight.x = 5;
	playerRight.y = 55;
	backLayer.addChild(playerRight);

	

}


function user_show(user_img){

	if(user_show_L){
		backLayer.removeChild(user_show_L);
		user_show_L = null;
		player = null;
		data = null;
	}

	user_show_L = new LSprite();
	backLayer.addChild(user_show_L);

	user_show_L.x = 10;
	user_show_L.y = 10;

	var list = LGlobal.divideCoordinate(192,256,4,3);
	data = new LBitmapData(user_img);
	//player = new LAnimation(user_show_L,data,list);
	player = new LAnimationTimeline(data,list);
	player.speed = 12;
	user_show_L.addChild(player);
	player.addEventListener(LEvent.ENTER_FRAME,onframe);

}


function onframe(){
	player.onframe();

}
