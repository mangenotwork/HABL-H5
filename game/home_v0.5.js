/*
 	home v0.1 

 1. 地图人物  32*32   地图范围  24*21  设计地图            		【完成】
 2. 小地图   坐标（x,y） 显示更新 								【完成】
 3. npc 如果是npc范围 技能图层出现对话按钮  离开则消失				【完成】
 
BUG:
	1. [home] map 移动会卡，需要做优化;							【完成】  
		解决方案： 关log   
*/

/*
 	home v0.2

	横版改为竖版														【完成】
	4. 怪  如果是怪物范围  技能图层出现攻击按钮  离开则消失     			【完成】
 	5. 按钮 长按事件													【需求较低放在后面】
 	6. 界面文字描边													【完成】

BUG:
	1. 按钮添加了点击事件无法移除;										【完成】  
		解决方案：  salk_button_show.setState(LButton.STATE_ENABLE);
				salk_button_show.setState(LButton.STATE_DISABLE);

	
	1.1 小地图添加一个 打开全局地图的按钮                              【完成】 	
 	1.2 在等级上面添加一个游戏的版本号                                	【完成】 
 	1.游戏界面独立json数据   											【完成】 
*/


/*
	home v0.3    2019-03-10
	
 2.1  玩家信息界面 													【完成】
 2. 独立 玩家信息界面 json数据										【完成】
 2.1.1  装备介绍界面													【完成】
 2.2  玩家菜单信息界面												【完成】
 2.3  游戏菜单信息界面												【完成】
 4. 玩家背包界面														【完成】

*/



/*
	
	home v0.4    2019-03-12  ~  2019-03-17

	游戏战斗界面														【完成】
	游戏攻击与技能卡牌图像											【完成】
	游戏战斗玩法 0.1													【完成】	
	技能图像															【完成】
	攻击特效 														【完成】
	技能特效 														【完成】

*/

/*
	home v0.5    2019-03-17  ~  2019-04-14


	游戏玩法 0.2														【】
	游戏战斗json数据													【】
	2.4  游戏地图界面													【】
 	3. 任务界面														【完成】
	 5. 商店界面														【完成】
 	6. 技能界面														【完成】
 	7. 装备打开信息介绍												【】
 	0.1   对话层 													【完成】											【】
	
	任务界面点击打开详情介绍界面 										【】
	技能界面技能加点与点击详情介绍界面 									【】
	商店点击商品详细介绍界面 											【】
	对话层 点击直接显示全部功能 										【】


*/


/*
	home v0.6	2019-04-15 ~  2019-04-31
	0.0.1   游戏背景音乐系统											【】
	0.0.2   游戏按钮音乐												【】
	0.0.3   玩家走路音乐												【】
	
	0.2   游戏战斗层 												【】
	0.3   游戏剧情层													【】
	0.4   游戏玩家地图传送功能 										【】
	0.1 游戏引导开发													【】
	1   第一章游戏剧情开发 											【】

*/


//声明变量
//游戏主层，进度条显示层，背景层
var backLayer,loadingLayer,background,loadingLayer2;

//游戏玩家头像层
var play_Layer;
//玩家血量，能量层
var play_info_Layer;

//操作层
var operate_Layer;
//游戏当前信息层
var now_info_Layer;
//游戏界面层
var interface_Layer;
//玩家经验
var exp_Layer;
//游戏小地图
var map_info_Layer;
//游戏菜单
var menu_Layer;
//游戏当前操作事件
var event_Layer;



//玩家信息界面
var userinfo_Layer;

//玩家菜单界面
var user_menu_Layer;

//游戏菜单界面
var game_menu_Layer;

//装备介绍界面
var zb_jieshao_Layer;


//背包信息界面
var beibaoinfo_Layer;
//背包物品栏显示界面
var beibao_wupin_Layer;
//背包资源加载
var loadingLayer1;






//游戏设置信息界面
var gamesetting_Layer;

//小地图信息界面
var mapsmall_Layer;


// 游戏战斗界面
var game_zhandou_Layer;


//Butthon 点击判断
var apply_button;


//保存图像资源
var imglist = {};

//map
var map;




//地图层
var mapLayer;
//人物层
var charaLayer;
//地图滚动
var mapmove = false;
//方向变量  
var DOWN = 0;
var LEFT = 1;
var RIGHT = 2;
var UP = 3;
//步长
var STEP = 32;
//读取图片位置
var loadIndex = 0;
/**对象变量*/
//玩家
var player;
//判断按键
var isKeyDown = false;
//地图
var map;
//地图渲染
var mapData;
//小地图
var smapdata;



//保存图像资源
var imglist = {};
var imageArray;


//玩家位置 
var posi = new Array(2)
var play_position,play_position_L;


//小地图
var map_s_L;
//npc 图层
var npc_1_L;


//npc  谈话按钮
var now_buttron_Layer;
var salk_button,salk_button_L,salk_button_show;
var attack_button,attack_button_L,attack_button_show;



//任务提示
var task_L_show;
//任务显示层
var task_Layer;
//任务资源加载层
var loadingLayer_task;


//技能显示层
var jineng_Layer;
//技能资源加载层
var loadingLayer_jineng;


//商店信息界面
var shangdian_Layer;
//商店资源加载层
var loadingLayer_shangdian;



//当前地图范围信息
var arca_x = [0,12];
var arca_y = [0,12];


//当前地图滚动次数
var gundong_x=0;
var gundong_y=0;

// 怪物图层
var boss_L;

//当前boss的名字
var now_boss_name='';
//游戏控制键 锁
var KEY_lock = true;

//战斗界面，玩家操作界面
var game_user_chaozuo_Layer;
//回合结束按钮显示层
var huige_end_L;
//物理攻击卡牌
var wuligongji_L;
var wuligongji_bitmap;
var wuligongji_img;
//魔法攻击1
var mf_gongji_1_L;
//魔法攻击2
var mf_gongji_2_L;
//魔法攻击3
var mf_gongji_3_L;
//魔法攻击4
var mf_gongji_4_L;

//npc 对话图层
var npc_duihua_L;
//npc 对话框背景图
var npc_duihua_L_bk;
//npc对话内容
var duihua_data = "TEXTTEXTTEXTTsadasdEXT\n\nTEXTTEXTT\
dasdasdasdEXTTEXTTE\n\nXTTEasdasdasdasdXT";




//游戏玩家信息
var game_play_info_data = {
	user_lv_info : "LV : 100",
	user_hp_info_max : 1500,
	user_hp_info : 151,
	user_ep_info_max : 500,
	user_ep_info : 151,
	user_xp_info_max : 500,
	user_xp_info : 151,
	user_head_image : {name:"user_head",path:"../ui/login/user_image_head.jpg"},
	user_map : "< 黑暗古堡-1 >",
}

/*

{name:"user_head",path:"../ui/login/user_image_head.jpg"}

loader.load("face.jpg","bitmapData");
game_play_info_data.user_map
*/



//资源
var imgData = new Array(
		//游戏界面资源

		//{name:"user_head",path:"../ui/login/user_image_head.jpg"},//玩家界面 头像
		{name:"main",path:"../ui/login/game_bk.png"},//游戏背景
		{name:"play_key_up",path:"../ui/login/play_key_up.png"},// 按钮 上
		{name:"play_key_left",path:"../ui/login/play_key_left.png"},// 按钮 左
		{name:"play_key_right",path:"../ui/login/play_key_right.png"},// 按钮 右
		{name:"play_key_down",path:"../ui/login/play_key_down.png"},// 按钮 下
		{name:"map_shome",path:"../ui/login/map_shome.jpg"},//游戏小地图
		{name:"hp_image",path:"../ui/login/hp_image.jpg"},//血量
		{name:"ep_image",path:"../ui/login/ep_image.jpg"},//能量
		{name:"exp_image",path:"../ui/login/exp_image.jpg"},//经验
		{name:"user_info",path:"../ui/login/user_info_2.png"},//玩家界面 背景
		{name:"user_image",path:"../ui/login/user_image.jpg"},//玩家界面 玩家图
		//{name:"zb_1",path:"../ui/login/zb_1.jpg"},//玩家界面  装备
		{name:"beibao",path:"../ui/game/beibao_bk_2.png"},//背包界面 背景
		{name:"beibao_button1",path:"../ui/login/button_1_1.jpg"},//背包界面 切换按钮
		{name:"beibao_button2",path:"../ui/login/button_1_2.jpg"},//背包界面 切换按钮
		{name:"beibao_button3",path:"../ui/login/button_1_3.jpg"},//背包界面 切换按钮
		{name:"beibao_button4",path:"../ui/login/button_1_4.jpg"},//背包界面 切换按钮
		{name:"beibao_null",path:"../ui/login/beibao_null.jpg"},//背包界面 空背包
		//游戏主体界面 游戏人物与游戏地图
		{name:"hero",path:"../ui/game/user1.png"},//游戏玩家显示
		{name:"map",path:"../ui/game/di_4.png"},//游戏地图场景资源
		{name:"up_go",path:"../ui/game/go.png"},//地图转移图
		//小地图颜色
		{name:"s_map_no",path:"../ui/game/000_2.png"},
		{name:"s_map_yes",path:"../ui/game/fff_1.png"},
		{name:"s_map_my",path:"../ui/game/red_1.png"},
		{name:"s_map_npc",path:"../ui/game/lvse_1.png"},//npc 颜色
		//打开地图
		{name:"open_map",path:"../ui/game/open_map.png"},
		//加载npc 资源
		{name:"npc_1",path:"../ui/npc/npc_2.png"},
		//加载 怪物资源
		{name:"boss1",path:"../ui/npc/boss_1.png"},
		// 任务提示
		{name:"deng",path:"../ui/npc/deng.png"},
		{name:"task_now",path:"../ui/npc/task_now.png"},
		// 游戏操作按钮背景
		{name:"salk_button",path:"../ui/game/new_button_duihua.png"},
		{name:"attack_button",path:"../ui/game/new_button_gongji.png"},
		{name:"attack_button2",path:"../ui/game/new_button_gongji_2.png"},
		{name:"salk_button2",path:"../ui/game/new_button_duihua_2.png"},
		//玩家信息界面1
		{name:"user_info_pg1",path:"../ui/game/user_info_bk_1.png"},
		//菜单背景图
		{name:"menu_bk",path:"../ui/login/menu_bk_1.png"},
		//菜单按钮
		{name:"menu_button",path:"../ui/login/xuanzhe_button.png"},
		//装备介绍框
		{name:"zb_jieshao_bk",path:"../ui/game/zbjieshao_1.png"},
		//npc对话框背景
		{name:"npc_duihua_L_img",path:"../ui/game/npc_duihua_bk.png"},
		//加载时候的背景图
		{name:"loadingLayer_bk",path:"../ui/game/game_sloe.jpg"}
		);

imgData.push(game_play_info_data.user_head_image);

//声明显示
var showList = new Array();

function main(){
	//拖拽
	//LMultitouch.inputMode = LMultitouchInputMode.TOUCH_POINT;

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
	
	apply_button = true;//false;

	removeChild(loadingLayer);
	loadingLayer = null;
	//定义游戏背景层

	backLayer = new LSprite();
	addChild(backLayer);
	
	// FPS测试
	addChild(new FPS());
	
	//显示游戏界面层
	interface_Layer_show();

	//background_show();
	var main_bitmap = new LBitmap(new LBitmapData(dataList["main"]));
	backLayer.addChild(main_bitmap);

	//游戏版本
	var version = new LTextField();
	version.text = "黑暗古堡-炼狱传奇 v0.5.0";
	version.size = 15
	version.color = "#ffffff";
	version.x = 130;
	version.y = 2;
	backLayer.addChild(version);
	
	//var map_s
	
	//显示游戏玩家头像层  显示玩家血量，能量层  显示菜单按钮
	play_Layer_show();

	//游戏小地图
	map_info_Layer_show();

	//游戏菜单
	menu_Layer_show();

	//显示操作层
	operate_Layer_show();

	//显示玩家经验
	exp_Layer_show();

	//显示游戏当前信息层
	now_info_Layer_show();

	
	//npc 对话框背景图
	npc_duihua_L_bk = dataList["npc_duihua_L_img"];
	

	

	//游戏当前操作事件
	event_Layer_show();

	//游戏操作按钮
	now_buttron_show();

	

	//显示游戏背景
	//background_show();
	//显示游戏登录按钮
	//login_button_pg();
	//显示游戏注册按钮
	//register_show_pg();
	

	
	//backLayer.removeChild(login_button);
}




//显示游戏玩家头像层
function play_Layer_show(){
	play_Layer = new LSprite();
   	backLayer.addChild(play_Layer);
   	
	//头像图片  99*96
	var user_head_bitmap = new LBitmap(new LBitmapData(dataList["user_head"]));
	var head_button = new LButton(user_head_bitmap);
	head_button.x = 7;
	head_button.y = 8;
	play_Layer.addChild(head_button);
	//打开玩家信息图  open_user_pg()
	head_button.addEventListener(LMouseEvent.MOUSE_UP,open_user_pg);


	play_info_Layer = new LSprite();
   	backLayer.addChild(play_info_Layer);

	//等级
	var lvLabel = new LTextField();
	lvLabel.text = game_play_info_data.user_lv_info;//玩家等级
	lvLabel.size = 20
	lvLabel.color = "#ffffff";
	lvLabel.x = 180;
	lvLabel.y = 23;
	lvLabel.stroke = true;
	lvLabel.lineWidth = 2;
	lvLabel.lineColor = "#FF0000";
	play_info_Layer.addChild(lvLabel);

	//生命
	var hp_vol_Label = new LTextField();
	hp_vol_Label.text = "生命 ： ";
	hp_vol_Label.size = 15
	hp_vol_Label.color = "#ffffff";
	hp_vol_Label.x = 130;
	hp_vol_Label.y = 48;
	play_info_Layer.addChild(hp_vol_Label);
	//血量   100% = 125    10% = 12  0% = 0  1% = 1.2
	//血量显示长度   user_hp_info/user_hp_info_max*100*1.2
	var now_hp =parseInt((game_play_info_data.user_hp_info/game_play_info_data.user_hp_info_max)*100*1.2);
	console.log("now_hp",now_hp);
	var hp_image = new LBitmap(new LBitmapData(dataList["hp_image"],0,5,now_hp,10));
	hp_image.x = 178;
	hp_image.y = 52;
	play_info_Layer.addChild(hp_image);
	//血量显示
	var now_hp_show = game_play_info_data.user_hp_info+" / "+game_play_info_data.user_hp_info_max;

	var hp = new LTextField();
	hp.text = now_hp_show;
	hp.size = 10
	hp.color = "#000";
	hp.x = 180;
	hp.y = 48;
	play_info_Layer.addChild(hp);


	var now_ep =parseInt((game_play_info_data.user_ep_info/game_play_info_data.user_ep_info_max)*100*1.2);
	console.log("now_ep",now_ep);
	//能量
	var ep_vol_Label = new LTextField();
	ep_vol_Label.text = "能量 ： ";
	ep_vol_Label.size = 15
	ep_vol_Label.color = "#ffffff";
	ep_vol_Label.x = 130;
	ep_vol_Label.y = 68;
	play_info_Layer.addChild(ep_vol_Label);

	var ep_image = new LBitmap(new LBitmapData(dataList["ep_image"],0,5,now_ep,10));
	ep_image.x = 178;
	ep_image.y = 72;
	play_info_Layer.addChild(ep_image);

	var now_ep_show = game_play_info_data.user_ep_info+" / "+game_play_info_data.user_ep_info_max;
	var ep = new LTextField();
	ep.text = now_ep_show;
	ep.size = 10
	ep.color = "#000";
	ep.x = 180;
	ep.y = 68;
	play_info_Layer.addChild(ep);


	var openmap_button = new LBitmap(new LBitmapData(dataList["open_map"]));
	openmap_button_show = new LButton(openmap_button);
	openmap_button_show.x = 415;
	openmap_button_show.y = 95;
	play_info_Layer.addChild(openmap_button_show);

}

//显示当前可操作按钮
function now_buttron_show(){
	now_buttron_Layer = new LSprite();
   	backLayer.addChild(now_buttron_Layer);
   	
   	
	//beibao_button.addEventListener(LMouseEvent.MOUSE_UP,open_beibao);
	//如果没有  对话与攻击按钮图层 则显示
	if(!salk_button_L){
		salk_button_L_show_no();
	}
	if(!attack_button_L){
		attack_button_L_show_no();
	}

	

	/*
	attack_button_L = new LSprite();
	now_buttron_Layer.addChild(attack_button_L);

	attack_button = new LBitmap(new LBitmapData(dataList["attack_button"]));
	attack_button_show = new LButton(attack_button);
	attack_button_show.x = 320;
	attack_button_show.y = 700;
	attack_button_show.alpha = 0.5;
	attack_button_show.setState(LButton.STATE_DISABLE);
	attack_button_L.addChild(attack_button_show);
	*/
	//user_xinxi_button.addEventListener(LMouseEvent.MOUSE_UP,open_user_pg);

}






//显示对话按钮 不可点击
function salk_button_L_show_no(){
	if(salk_button_L){
		salk_button_L.remove();
	}

	salk_button_L = new LSprite();
	now_buttron_Layer.addChild(salk_button_L);

	salk_button = new LBitmap(new LBitmapData(dataList["salk_button"]));
	salk_button_show = new LButton(salk_button);
	salk_button_show.x = 320;
	salk_button_show.y = 620;
	salk_button_show.setState(LButton.STATE_DISABLE);
	salk_button_L.addChild(salk_button_show);
}

//显示对话按钮 可以点击
function salk_button_L_show_yes(name){
	if(salk_button_L){
		salk_button_L.remove();
	}

	salk_button_L = new LSprite();
	now_buttron_Layer.addChild(salk_button_L);

	salk_button = new LBitmap(new LBitmapData(dataList["salk_button2"]));
	salk_button_show = new LButton(salk_button);
	salk_button_show.x = 320;
	salk_button_show.y = 620;
	salk_button_show.setState(LButton.STATE_ENABLE);
	salk_button_L.addChild(salk_button_show);
	
		salk_button_show.addEventListener(LMouseEvent.MOUSE_UP,function(){
			if(KEY_lock){
				console.log("Boss Name：",name);
				//显示对话框
				npc_duihua_show(npc_duihua_L_bk,name,duihua_data);
			}
		});
}


//如果没在攻击范围则调用不可攻击按钮
function attack_button_L_show_no(){
	if(attack_button_L){
		attack_button_L.remove();
	}

	attack_button_L = new LSprite();
	now_buttron_Layer.addChild(attack_button_L);

	attack_button = new LBitmap(new LBitmapData(dataList["attack_button"]));
	attack_button_show = new LButton(attack_button);
	attack_button_show.x = 320;
	attack_button_show.y = 700;
	attack_button_show.setState(LButton.STATE_DISABLE);
	attack_button_L.addChild(attack_button_show);
	
}

//如果在攻击范围则调用可攻击按钮
function attack_button_L_show_yes(name){
	if(attack_button_L){
		attack_button_L.remove();
	}

	attack_button_L = new LSprite();
	now_buttron_Layer.addChild(attack_button_L);

	attack_button = new LBitmap(new LBitmapData(dataList["attack_button2"]));
	attack_button_show = new LButton(attack_button);
	attack_button_show.x = 320;
	attack_button_show.y = 700;
	attack_button_show.setState(LButton.STATE_ENABLE);
	attack_button_L.addChild(attack_button_show);
	
		attack_button_show.addEventListener(LMouseEvent.MOUSE_UP,function(){
			if(KEY_lock){
				//window.location.href="./test.html";
				//进入游戏战斗界面
				console.log("开始战斗",name);
				game_zhandou_Layer_show();
			}
		});
}




//显示操作层
function operate_Layer_show(){
	operate_Layer = new LSprite();
   	backLayer.addChild(operate_Layer);
   	play_Layer_height = LGlobal.width/10;

	//操作按键图片
	//上
	var key_up_image = new LBitmap(new LBitmapData(dataList["play_key_up"]));
	var key_up = new LButton(key_up_image);
	key_up.x = 90;
	key_up.y = LGlobal.height-230;
	operate_Layer.addChild(key_up);
	key_up.addEventListener(LMouseEvent.MOUSE_DOWN,key_up_event);
	key_up.addEventListener(LMouseEvent.MOUSE_UP,mouseup);
	//左
	var key_left_image = new LBitmap(new LBitmapData(dataList["play_key_left"]));
	var key_left = new LButton(key_left_image);
	key_left.x = 5;
	key_left.y = LGlobal.height-165;
	operate_Layer.addChild(key_left);
	key_left.addEventListener(LMouseEvent.MOUSE_DOWN,key_left_event);
	key_left.addEventListener(LMouseEvent.MOUSE_UP,mouseup);
	//右
	var key_right_image = new LBitmap(new LBitmapData(dataList["play_key_right"]));
	var key_right = new LButton(key_right_image);
	key_right.x = 175;
	key_right.y = LGlobal.height-165;
	operate_Layer.addChild(key_right);
	key_right.addEventListener(LMouseEvent.MOUSE_DOWN,key_right_event);
	key_right.addEventListener(LMouseEvent.MOUSE_UP,mouseup);
	//下
	var key_down_image = new LBitmap(new LBitmapData(dataList["play_key_down"]));
	var key_down = new LButton(key_down_image);
	key_down.x = 90;
	key_down.y = LGlobal.height-100;
	operate_Layer.addChild(key_down);
	key_down.addEventListener(LMouseEvent.MOUSE_DOWN,key_down_event);
	key_down.addEventListener(LMouseEvent.MOUSE_UP,mouseup);
}


//按钮事件
function key_up_event(event){
	if(KEY_lock){
		player.changeDir(UP);
		//添加移动事件
		game_updata();
	}
}

function key_left_event(event){
	if(KEY_lock){
		//console.log(event,"key_left_event");
		player.changeDir(LEFT);
		//添加移动事件
		game_updata();
	}
}

function key_right_event(event){
	if(KEY_lock){
		//console.log(event,"key_right_event");
		player.changeDir(RIGHT);
		//添加移动事件
		game_updata();
	}
}

function key_down_event(event){
	if(KEY_lock){
		//console.log(event,"key_down_event");
		player.changeDir(DOWN);
		//添加移动事件
		game_updata();
	}
}

function mouseup(event){
	//console.log(event,"mouseup");
	player.canshoot = false;
	player.shootctrl = player.shootspeed;
	
	//set_posi(posi);
}

//角色移动就更新 地图信息
function game_updata(){
	//获取角色当前位置
	posi=player.get_posi();
	//更新坐标
	set_posi(posi[0],posi[1]);
	//更新小地图
	s_map(posi[0],posi[1]);
	//mpc范围监听
	npc_salk_button(posi[0],posi[1]);
	//npc位置范围
	//npc_now_show(posi[0],posi[1]);
	//getboss_salk(3,8,posi[0],posi[1])
	//console.log("getboss_salk :",all_getboss_attack(posi[0],posi[1]));
	var attack_boss_info = all_getboss_attack(posi[0],posi[1]);
	
	if(attack_boss_info){

		
		/*
		if(now_boss_name!=''){
			now_boss_name = null;
		}*/
		//console.log("attack_boss_info :",attack_boss_info[0],attack_boss_info[1]);
		now_boss_name = attack_boss_info[1]
		//console.log("boss_name :",now_boss_name);
		attack_button_show_event(attack_boss_info[0],now_boss_name);
	}
	else{
		attack_button_show_event(attack_boss_info);
	}
	//清空当前 怪物范围名称
	now_boss_name = null;
	
	//
}

//获取当前的范围   地图滚动 范围值改变  console.log(event,cx,cy); 
//如果npc 的坐标在范围内者显示  否则不在
//function get_area(type,cx,cy)




//当前地图npc 信息
function npc_show(x,y,name,istask=false){
	var x=x;
	var y=y;
	if(npc_1_L){
		npc_1_L.remove();
	}
	//范围坐标

	//gundong_x gundong_y  当前的滚动位置  实现npc 固定坐标
	npc_1_L = new LSprite();
	interface_Layer.addChild(npc_1_L);
	var npc_1_image = new LBitmapData(dataList["npc_1"],0,0,32,32);
	var npc_1_show = new LBitmap(npc_1_image);
	npc_1_show.x = STEP*(x-gundong_x);
	npc_1_show.y = STEP*(y-gundong_y);
	npc_1_L.addChild(npc_1_show);
	
	//如果是当前任务则出现任务提示
	if(istask){
		task_show(STEP*(x-gundong_x)-2,STEP*(y-gundong_y)-25);
	}
	
	

	var npc_name = new LTextField();
	npc_name.text = name;
	npc_name.size = 8;
	npc_name.color = "#FF0000";
	npc_name.x = STEP*(x-gundong_x)-5;
	npc_name.y = STEP*(y-gundong_y)+15;
	npc_1_L.addChild(npc_name);
}


//当前地图怪物显示
var boss_arr = {
				boos1:{x:3,y:8,name:"boss1"},
				boos2:{x:6,y:2,name:"boss2"},
				boos3:{x:7,y:5,name:"boss3"},
}

//var boss_all_arr = boss_arr;
//显示所有的怪物
function boss_all_show(boss_arr){
	var boss_number = Object.keys(boss_arr).length;
	/*
	for(var i=0; i< boss_number; i++){
			console.log("boss",boss_arr[i].x);

	}
	*/
	//怪物显示层消影
	if(boss_L){
		boss_L.remove();
	}
	//定义 怪物显示层
	boss_L = new LSprite();
	interface_Layer.addChild(boss_L);
	//console.log("boss :",Object.keys(boss_arr));
	//删除一个怪物
	//delete boss_arr.boos1;
	//console.log("boss :",Object.keys(boss_arr));
	//遍历怪物
	for(var p in boss_arr){
		//console.log("boss :",boss_arr[p].x,boss_arr[p].y,boss_arr[p].name);
		//遍历显示怪物
		boss_show(boss_arr[p].x,boss_arr[p].y,boss_arr[p].name);
	}
}

//怪物显示方法
function boss_show(x,y,name,istask=false){
	
	var self = this;
	base(self,LSprite,[]);
	//显示怪物图像
	self.boss_image = new LBitmapData(dataList["boss1"],0,0,32,32);
	self.boss_image_show = new LBitmap(boss_image);
	self.boss_image_show.x = STEP*(x-gundong_x);
	self.boss_image_show.y = STEP*(y-gundong_y);
	boss_L.addChild(self.boss_image_show);
	//显示怪物名称
	self.boss_name = new LTextField();
	self.boss_name.text = name;
	self.boss_name.size = 8;
	self.boss_name.color = "#ffffff";
	self.boss_name.x = STEP*(x-gundong_x)-5;
	self.boss_name.y = STEP*(y-gundong_y)+15;
	boss_L.addChild(self.boss_name);

	/*
	var x=x;
	var y=y;
	
	if(boss_L){
		boss_L.remove();
	}
	//范围坐标

	//gundong_x gundong_y  当前的滚动位置  实现npc 固定坐标
	boss_L = new LSprite();
	interface_Layer.addChild(boss_L);
	
	var boss_image = new LBitmapData(dataList["boss1"],0,0,32,32);
	var boss_image_show = new LBitmap(boss_image);
	boss_image_show.x = STEP*(x-gundong_x);
	boss_image_show.y = STEP*(y-gundong_y);
	boss_L.addChild(boss_image_show);
	
	//如果是当前任务则出现任务提示
	if(istask){
		task_show(STEP*(x-gundong_x)-2,STEP*(y-gundong_y)-25);
	}

	var boss_name = new LTextField();
	boss_name.text = name;
	boss_name.size = 8;
	boss_name.color = "#ffffff";
	boss_name.x = STEP*(x-gundong_x)-5;
	boss_name.y = STEP*(y-gundong_y)+15;
	boss_L.addChild(boss_name);
	*/

}



//任务提示灯
function task_show(npc_x,npc_y){
	if(task_L_show){
		task_L_show.remove();
	}

	task_L_show = new LSprite();
	npc_1_L.addChild(task_L_show)
	var deng_image = new image_in_turn(dataList["task_now"],dataList["task_now"]);
	//var deng_show = new LBitmap(deng_image);
	//npc位置
	deng_image.x = npc_x;
	deng_image.y = npc_y;
	task_L_show.addChild(deng_image);
}

//图片交替闪烁
function image_in_turn(bg01,bg02){
	var self = this;
	base(self,LSprite,[]);
	self.bitmapBG01 = new LBitmap(new LBitmapData(bg01));
	self.addChild(self.bitmapBG01);
	self.bitmapBG02 = new LBitmap(new LBitmapData(bg02));
	self.addChild(self.bitmapBG02);
	self.run();
}
//图片交替闪烁循环事件
image_in_turn.prototype.run = function(){
	var self = this;
	var tween = LTweenLite.to(self.bitmapBG02,0.5,{alpha:0,ease:Bounce.easeIn,loop:true}).
	to(self.bitmapBG02,0.5,{alpha:1,ease:Bounce.easeIn});
}




//遇到npc 事件  当玩家进入npc 的范围时 出现对话按钮
function npc_salk_button(play_x,play_y){
	npc_x=1;
	npc_y=3;
	if((play_x==npc_x-1||play_x==npc_x+1||play_x==npc_x)&(play_y==npc_y-1||play_y==npc_y+1||play_y==npc_y)){
		//console.log(event,"YES NPC");
		salk_button_L_show_yes("npc_1");
	}
	else{
		//console.log(event,"NO NPC");

		if(salk_button){
			salk_button_L_show_no();
			
		}
		
	}
}



//npc 对话框
function npc_duihua_show(npc_duihua_L_bk,npc_name,duihua_data){
	if(npc_duihua_L){
		npc_duihua_L.remove();
		npc_duihua_L = null;
	}

	npc_duihua_L = new LSprite();
	backLayer.addChild(npc_duihua_L);
	var npc_duihua_L_bitmap = new LBitmap(new LBitmapData(npc_duihua_L_bk));
	npc_duihua_L.x = 20;
	npc_duihua_L.y = 300;
	npc_duihua_L.addChild(npc_duihua_L_bitmap);

	var npc_nameTextField = new LTextField();
	npc_nameTextField.text = "对话 : "+npc_name;
	npc_nameTextField.x = 120;
	npc_nameTextField.y = 5;
	npc_nameTextField.size = 25;
	npc_nameTextField.color = "#ffffff";
	npc_duihua_L.addChild(npc_nameTextField);



	var theTextField = new LTextField();
	theTextField.setWordWrap(true);
	theTextField.text = duihua_data;
	theTextField.speed = 1;
	theTextField.width = 350;
	theTextField.wind();
	theTextField.x = 30;
	theTextField.y = 60;
	theTextField.size = 20;
	theTextField.color = "#ffffff";
	npc_duihua_L.addChild(theTextField);
	//当对话显示的文字结束时 出现结束按钮
	theTextField.addEventListener(LTextEvent.WIND_COMPLETE, function(){

		var duihua_end_button = new LButtonSample1("  结束  ",18);
		duihua_end_button.backgroundColor = "#000";
		duihua_end_button.width = 80;
		duihua_end_button.height = 30;
		duihua_end_button.x = 330;
		duihua_end_button.y = 200;
		npc_duihua_L.addChild(duihua_end_button);
		duihua_end_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			if(npc_duihua_L){
				npc_duihua_L.remove();
				npc_duihua_L = null;
			}
		});

	});

	


}





//如果玩家在 怪物的攻击范围则显示 攻击按钮
function attack_button_show_event(event_type,now_boss_name){
	if(event_type){
		attack_button_L_show_yes(now_boss_name);
		//attack_button_show.alpha = 1;
		//attack_button_show.setState(LButton.STATE_ENABLE);
		//bug  按钮事件 点击会存在上次的监听事件
		//attack_button_show.addEventListener(LMouseEvent.MOUSE_UP,function(){console.log("Boss Name：",now_boss_name);});
		//boss_name = '';
	}
	else{
		//attack_button_show.alpha = 0.5;
		//attack_button_show.setState(LButton.STATE_DISABLE);
		attack_button_L_show_no();
	}
	
}

function removed(event){
	console.log("Boss Name：",event.currentTarget.objectIndex);
}

//玩家当前位置是否在所有怪物的攻击范围内
function all_getboss_attack(play_x,play_y){
	for(var p in boss_arr){
		//console.log("boss :",boss_arr[p].x,boss_arr[p].y);
		//遍历显示怪物
		if(getboss_attack(boss_arr[p].x,boss_arr[p].y,play_x,play_y)){
			var attack_info = Array;
			attack_info[0] = true;
			attack_info[1] = boss_arr[p].name;
			return attack_info;
		}

	}
	return false;
}


//判断玩家是否处于怪物的范围圈
function getboss_attack(salk_x,salk_y,play_x,play_y){
	if((play_x==salk_x-1||play_x==salk_x+1||play_x==salk_x)
		&
		(play_y==salk_y-1||play_y==salk_y+1||play_y==salk_y)){
		return true;
	}
	else{
		return false;
	}
}

//获取npc 名字
function get_npc_name(name){
	console.log("NPC Name：",name);
}

//显示游戏当前信息层
function now_info_Layer_show(){
	now_info_Layer = new LSprite();
   	backLayer.addChild(now_info_Layer);
   	play_Layer_height = LGlobal.width/10;
	
	set_posi(1,1);
}

//设置 玩家所在位置 显示其坐标
function set_posi(posi1,posi2){
	//消影
	if(play_position_L){
		play_position_L.remove();
	}
	//创建新的图层显现玩家当前所在位置
	play_position_L = new LSprite()
	now_info_Layer.addChild(play_position_L);
	var play_position = new LTextField();

	play_position.text = "X:"+posi1+",Y:"+posi2;
	play_position.size = 10
	play_position.color = "#ffffff";
	play_position.x = 330;
	play_position.y = 95;
	play_position_L.addChild(play_position);
}



//游戏数据资源加载
var script = {
	stage01:{
		// 添加角色信息
		add:[
		     {chara:"player",img:"hero",x:1,y:1}
		    ],
		// 地图渲染
		map:[
			[ 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
			[ 2, 0, 0, 9, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0, 0, 2],//1
			[ 2, 0, 0, 9, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0, 0, 2],
			[ 2, 0, 0, 9, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0,10, 0, 0, 0, 0, 2],
			[ 2, 0, 0, 1, 1, 8, 1, 1, 1, 8, 1, 1, 1, 8, 1, 1, 1, 8, 1, 1, 1, 8, 1, 1, 2],
			[ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],//5
			[ 2, 7, 7, 8, 7, 7, 6, 7, 7, 6, 7, 6, 8, 7, 7, 7, 6, 6, 7, 8, 6, 7, 7, 7, 2],
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0,10, 0, 0, 9, 0, 0, 0, 0,10, 0, 9, 0, 0, 0, 2],
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0,10, 0, 0, 9, 0, 0, 0, 0,10, 0, 9, 0, 0, 0, 2],
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0,10, 0, 9, 0, 0, 0, 2],
			[ 2, 1, 1, 1, 1, 1, 2, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 2],//10
			[ 2, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 0, 0, 9, 0, 0, 0, 0,10, 0, 9, 0, 0, 0, 2],
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0,10, 0, 0, 9, 0, 0, 0, 0,10, 0, 9, 0, 0, 0, 2],
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 8, 1, 1, 1, 0, 1, 1, 8, 1, 2],
			[ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,10, 0, 0, 9, 0, 0, 0, 0,10, 0, 9, 0, 0, 0, 2],
			[ 2, 1, 8, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 9, 0, 0, 0, 0,10, 0, 9, 0, 0, 0, 2],//15
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0,10, 0, 0, 9, 0, 0, 0, 0,10, 0, 9, 0, 0, 0, 2],
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2],
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0,10, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
			[ 2, 0, 0, 0, 0, 0, 2, 0, 0, 0,10, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
			[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			],
		// 地图碰撞数据  1 不可移动 0可移动 2当前玩家位置  25*21
		mapData:[
			[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[ 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],//1
			[ 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[ 1, 3, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[ 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
			[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//5
			[ 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],//10
			[ 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
			[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1],//15
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			],
			// 地图碰撞数据  1 不可移动 0可移动 2当前玩家位置  25*21
		sim_mapData:[
			[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[ 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],//1
			[ 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[ 1, 3, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			[ 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
			[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//5
			[ 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],//10
			[ 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
			[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],//15
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			]

	}

};


//显示游戏界面层
function interface_Layer_show(){
	interface_Layer = new LSprite();
   	backLayer.addChild(interface_Layer);
   	
   	//背景
	interface_Layer.graphics.drawRect(5,'#cccccc',[0,0,
		32*12+5,32*12+5],true,'#cccccc');
	

	// 游戏显示层位置
	interface_Layer.x =  14;
	interface_Layer.y = 115;

	//地图层添加
	mapLayer = new LSprite();
	interface_Layer.addChild(mapLayer);
	//地图图片初始化	
	//initMap();

	//地图位置初始化
	mapLayer.x = 0;
	mapLayer.y = 0;

	//地图层初始化
	mapLayer.removeAllChild();
	//地图数据获取
	var map_info = script.stage01;
	map = map_info.map;
	mapdata = map_info.mapData;
	smapdata =  map_info.sim_mapData
	
	//添加地图
	addMap(0,0);
	
	//initMap()

	delMap();

	

	//人物层添加
	charaLayer = new LSprite();
	interface_Layer.addChild(charaLayer);

	//人物层初始化
	charaLayer.removeAllChild();
	addChara();

	//

	
	

	//监听游戏循环事件
	interface_Layer.addEventListener(LEvent.ENTER_FRAME,onframe);

}


//地图图片初始化
function initMap(){	
	
}

//添加地图
function addMap(cx,cy){
	var i,j,index,indexX,indexY;
	var bitmapdata,bitmap;
	var mapX = mapLayer.x / STEP;
	var mapY = mapLayer.y / STEP;
	var mx = cx<0?-1:0,my = cy<0?-1:0;
	mapLayer.removeAllChild();	
	//在地图层上，画出10*10的小图片
	for(i=my;i<20 +Math.abs(cy) && i-mapY < map.length;i++){
		for(j=mx;j<20 +Math.abs(cx)&& j-mapX < map[0].length;j++){
			//从地图数组中得到相应位置的图片坐标
			//console.log(event,"map",mapX,mapY);
			index = map[parseInt(i-mapY)][parseInt(j-mapX)];
			//小图片的竖坐标 15个小图片的切片
			indexY = Math.floor(index /15);
			//小图片的横坐标
			indexX = index - indexY*15;
			//得到小图片 画地图 map -> 32*32
			bitmapdata = new LBitmapData(dataList["map"],indexX*32,indexY*32,32,32);
			bitmap = new LBitmap(bitmapdata);
			//设置小图片的显示位置
			bitmap.x = j*STEP - mapLayer.x;
			bitmap.y = i*STEP - mapLayer.y;
			//将小图片显示到地图层
			mapLayer.addChild(bitmap);
		}
	}
	
	//地图画完后   绘制npc
	npc_show(1,3,"npc 1",true);
	//boss_show(3,7,"蜘蛛怪");
	//boss_L_show();
	boss_all_show(boss_arr);
	
}

//移除多余地图块
function delMap(){
	var bitmap,i;
	for(i=0;i<mapLayer.childList.length;i++){
		bitmap = mapLayer.childList[i];
		if(bitmap.x + mapLayer.x < 0 || bitmap.x + mapLayer.x >= 32*15 || 
				bitmap.y + mapLayer.y < 0 || bitmap.y + mapLayer.y >= 32*15){
			mapLayer.removeChild(bitmap);
			i--;
		}
	}
}

//添加人物
function addChara(){
	var stage = script.stage01;
	var charaList = stage.add;
	var chara,charaObj;
	for(var i=0;i<charaList.length;i++){
		charaObj = charaList[i];
		if(charaObj.chara == "player"){
			//加入英雄
			bitmapdata = new LBitmapData(dataList[charaObj.img]);
			chara = new Character(true,i,bitmapdata,4,3);
			player = chara;

		}else{
			//加入npc
			bitmapdata = new LBitmapData(dataList[charaObj.img]);
			chara = new Character(false,i,bitmapdata,3,4);
		}
	
		
		chara.x = charaObj.x * 32;
		chara.y = charaObj.y * 32;
		charaLayer.addChild(chara);
	}
}

//游戏事件主循环
//游戏总事件的循环监听
function onframe(){
	//childList 子对象列表
	for(var i=0;i<charaLayer.childList.length;i++){
		charaLayer.childList[i].onframe();
	}
}


/**
 * 循环事件 
 * @param isHero 是否英雄
 * @param index 人物编号
 * @param data 图片数据
 * @param row 图片分割行数
 * @param col 图片分割列数
 * @param speed 人物速度
 **/
function Character(isHero,index,data,row,col,speed){
	base(this,LSprite,[]);
	var self = this;
	self.isHero = isHero;
	self.index = index;
	//设定人物动作速度
	self.speed = speed==null?3:speed;
	self.speedIndex = 0;
	//设定人物大小
	data.setProperties(0,0,data.image.width/col,data.image.height/row);
	//得到人物图片拆分数组
	var list = LGlobal.divideCoordinate(data.image.width,data.image.height,row,col);
	//设定人物动画
	self.anime = new LAnimation(this,data,list);
	/*
	//调整人物位置
	//self.anime.y -= 16;
	*/
	//设定不移动
	self.move = false;
	//在一个移动步长中的移动次数设定
	self.moveIndex = 0;
};


/**
 * 循环事件 
 **/
Character.prototype.onframe = function (){
	var self = this;
	//人物动作速度控制
	if(self.speedIndex++ < self.speed)return;
	self.speedIndex = 0;
	//当人物可移动，则开始移动
	if(self.move){self.onmove();}
	//人物动画播放
	self.anime.onframe();
};
/**
 * 开始移动 
 **/
Character.prototype.onmove = function (){
	var self = this;
	//console.log(event,"play",parseInt(self.x/STEP),parseInt(self.y/STEP));
	//设定一个移动步长中的移动次数
	var ml_cnt = 4;
	//计算一次移动的长度
	var ml = STEP;
	//根据移动方向，开始移动
	switch (self.direction){
		case UP:
			if(mapmove){
				mapLayer.y += ml;
				charaLayer.y += ml;
			}
			self.y -= ml;
			break;
		case LEFT:
			if(mapmove){
				mapLayer.x += ml;
				charaLayer.x += ml;
			}
			self.x -= ml;
			break;
		case RIGHT:
			if(mapmove){
				mapLayer.x -= ml;
				charaLayer.x -= ml;
			}
			self.x += ml;
			break;
		case DOWN:
			if(mapmove){
				mapLayer.y -= ml;
				charaLayer.y -= ml;
			}
			self.y += ml;
			break;
	}
	self.moveIndex++;
	//当移动次数等于设定的次数，开始判断是否继续移动
	if(self.moveIndex >= 0){
		/*
		//一个地图步长移动完成后，判断地图是否跳转
		if(self.isHero && self.moveIndex > 0)checkJump();
		self.moveIndex = 0;
		*/
		//一个地图步长移动完成后，如果地图处于滚动状态，则移除多余地图块
		if(mapmove)delMap();
		//判断方向是否改变
		if(self.direction != self.direction_next){
			self.direction = self.direction_next;
			self.anime.setAction(self.direction);
		}
		//如果已经松开移动键，或者前方为障碍物，则停止移动，否则继续移动
		if(!isKeyDown || !self.checkRoad()){
			self.move = false;
			return;
		}
		//地图是否滚动
		self.checkMap(self.direction);
		
			posi = self.get_posi();
		
		
	}
};


//获取当前玩家坐标
Character.prototype.get_posi = function(dir){
	var self = this;

	
	var tox,toy,myCoordinate;
	//当判断方向为空的时候，默认当前方向
	if(dir==null)dir=self.direction;
	//获取人物坐标
	myCoordinate = self.getCoordinate();
	//开始计算移动目的地的坐标
	switch (dir){
		case UP:
			tox = myCoordinate.x;
			toy = myCoordinate.y - 1;
			break;
		case LEFT:
			tox = myCoordinate.x - 1;
			toy = myCoordinate.y ;
			break;
		case RIGHT:
			tox = myCoordinate.x + 1;
			toy = myCoordinate.y;
			break;
		case DOWN:
			tox = myCoordinate.x;
			toy = myCoordinate.y + 1;
			break;
	}
	


	//return {x:parseInt(self.x/STEP),y:parseInt(self.y/STEP)};
	/*
	posi[0] = self.x/STEP;
	posi[1] = self.y/STEP;
	*/
	//如果是障碍物者返回玩家当前位置，如果不是者返回当前移动到的位置
	if(mapdata[toy][tox] != 1 & mapdata[toy][tox] != 3){
		posi[0] = tox;
		posi[1] = toy;
		//console.log(event,"玩家位置",posi);
		
	}
	else{
		posi[0] = self.x/STEP;
		posi[1] = self.y/STEP;
	}
	return posi;
}


/**
 * 障碍物判断
 * @param 判断方向 
 **/
Character.prototype.checkRoad = function (dir){
	var self = this;
	var tox,toy,myCoordinate;
	//当判断方向为空的时候，默认当前方向
	if(dir==null)dir=self.direction;
	//获取人物坐标
	myCoordinate = self.getCoordinate();
	//开始计算移动目的地的坐标
	switch (dir){
		case UP:
			tox = myCoordinate.x;
			toy = myCoordinate.y - 1;
			break;
		case LEFT:
			tox = myCoordinate.x - 1;
			toy = myCoordinate.y ;
			break;
		case RIGHT:
			tox = myCoordinate.x + 1;
			toy = myCoordinate.y;
			break;
		case DOWN:
			tox = myCoordinate.x;
			toy = myCoordinate.y + 1;
			break;
	}
	
	//posi = "X:"+tox+",Y:"+toy;
	//console.log(event,"玩家位置",posi);

	//console.log(event,"移动位置",mapdata[toy][tox]);
	//如果移动的范围超过地图的范围，则不可移动
	if(toy <= 0 || tox <= 0)return false;
	//if(toy >= mapdata.length || tox >= mapdata[0].length)return false;
	//如果目的地为障碍，则不可移动
	if(mapdata[toy][tox] == 1 || mapdata[toy][tox] == 3){
		return false
	};

	

	return true;
};
/**
 * 设定人物坐标
 * @param x方向坐标，y方向坐标 
 **/
Character.prototype.setCoordinate = function (sx,sy){
	var self = this;
	//根据人物坐标，计算人物显示位置
	self.x = sx*STEP;
	self.y = sy*STEP;
};
/**
 * 获取人物坐标
 **/
Character.prototype.getCoordinate = function (){
	var self = this;

	return {x:parseInt(self.x/STEP),y:parseInt(self.y/STEP)};

};
/**
 * 改变人物方向，并判断是否可移动
 **/
Character.prototype.changeDir = function (dir){
	var self = this;
	//如果正在移动，则无效
	if(!self.move){
		//设定人物方向
		self.direction = dir;
		self.direction_next = dir;
		//设定图片动画
		self.anime.setAction(dir);
		//判断是否可移动
		if(!self.checkRoad(dir))return;
		//地图是否滚动
		self.checkMap(dir);
		//如果可以移动，则开始移动
		self.move = true;
		self.moveIndex = 0;
	}else if(dir != self.direction){
		self.direction_next = dir;
	}
};
/**
 * 地图是否滚动
 **/
Character.prototype.checkMap = function (dir){
	var self = this;
	mapmove = false;
	//如果不是英雄，则地图不需要滚动
	//if(!self.isHero)return;
	
	switch (dir){
		case UP:
			
			if(self.y + charaLayer.y> STEP*2)break;//前两个地图进行移动
			if(mapLayer.y >= 0)break;
			//在从新绘制地图前 计算当前移动的位置次数
			gundong_y -= 1;

			addMap(0,-1);

			//获取当前坐标范围
			get_area("up",0,-1);
			

			mapmove = true;
			break;
		case LEFT:
			
			if(self.x + charaLayer.x > STEP*2)break;
			if(mapLayer.x >= 0)break;
			//在从新绘制地图前 计算当前移动的位置次数
			gundong_x -= 1;
			addMap(-1,0);

			//获取当前坐标范围
			get_area("left",-1,0);
			

			mapmove = true;
			break;
		case RIGHT:
			
			if(self.x < STEP*15 - 2*STEP)break;
			if(STEP*15 - mapLayer.x >= map[0].length*STEP)break;
			//在从新绘制地图前 计算当前移动的位置次数
			gundong_x += 1;
			addMap(1,0);

			//获取当前坐标范围
			get_area("right",1,0);
			

			mapmove = true;
			break;
		case DOWN:
			
			if(self.y < (STEP*14+30) - 2*STEP)break;
			if( (STEP*14+30) - mapLayer.y >= map.length*STEP)break;
			//在从新绘制地图前 计算当前移动的位置次数
			gundong_y += 1;
			addMap(0,1);

			//获取当前坐标范围
			get_area("down",0,1);
			

			mapmove = true;
			break;
	}
};

//获取arca坐标
function get_area(type,cx,cy){
	
	if(type == "right"){
		arca_x[0] = arca_x[0]+cx;
		arca_x[1] = arca_x[1]+cx;
	}

	if(type == "left"){
		arca_x[0] = arca_x[0]+cx;
		arca_x[1] = arca_x[1]+cx;
	}

	if(type == "up"){
		arca_y[0] = arca_y[0]+cy;
		arca_y[1] = arca_y[1]+cy;
	}

	if(type == "down"){
		arca_y[0] = arca_y[0]+cy;
		arca_y[1] = arca_y[1]+cy;
	}
}


/*
user_xp_info_max : 500,
	user_xp_info : 151,
*/

//显示玩家经验
function exp_Layer_show(){
	exp_Layer = new LSprite();
   	backLayer.addChild(exp_Layer);
   	//parseInt((game_play_info_data.user_hp_info/game_play_info_data.user_hp_info_max)*100*1.2);
   	var xp_number =parseInt((game_play_info_data.user_xp_info / game_play_info_data.user_xp_info_max)*100*5);
   	console.log("ex:",xp_number);
	// 500 = 100% 
	var exp_image = new LBitmap(new LBitmapData(dataList["exp_image"],0,0,xp_number,10));
	exp_image.x = 5;
	exp_image.y = 575;
	play_info_Layer.addChild(exp_image);


	var exp = new LTextField();
	exp.text = " exp: "+game_play_info_data.user_xp_info+"/"+game_play_info_data.user_xp_info_max;
	exp.size = 12
	exp.color = "#000";
	exp.x = 200;
	exp.y = 575;
	exp_Layer.addChild(exp);
}


//游戏小地图
function map_info_Layer_show(){
	map_info_Layer = new LSprite();
   	backLayer.addChild(map_info_Layer);

	//小地图
	s_map(1,1);

	var map_title = new LTextField();
	map_title.text = game_play_info_data.user_map;
	map_title.size = 10;
	map_title.color = "#53FF53";
	map_title.x = 330;
	map_title.y = 2;
	map_info_Layer.addChild(map_title);
}


//小地图显示
function s_map(y,x){
	//消影
	if(map_s_L){
		map_s_L.remove();
	}

	var smap_0,smap_bitmap_0;
	var smap_1,smap_bitmap_1;
	var smap_2,smap_bitmap_2;
	var smap_3,smap_bitmap_3;

	var s_mapdata = smapdata;
	//玩家当前位置 障碍物判断
	if(s_mapdata[x][y]!=1 || s_mapdata[x][y]!=3){
		s_mapdata[x][y] = 2;
	}

	map_s_L = new LSprite();
	map_info_Layer.addChild(map_s_L);
	map_s_L.x = 330;
	map_s_L.y = 20;
	//map_s_L.removeAllChild();

	for(i=0;i < s_mapdata.length-1;i++){
		for(j=0;j < s_mapdata[0].length-1;j++){
			//从地图数组中得到相应位置的图片坐标
			//console.log(event,"map",i,j);
			//获取小地图属性
			index = s_mapdata[i][j];
			//console.log("smap",mapdata[i][j]);

			/*
			小地图资源   黑色不可以移动  白色可以移动区域  红色玩家   绿色 npc
			{name:"s_map_no",path:"../ui/game/000_2.png"},
			{name:"s_map_yes",path:"../ui/game/fff_1.png"},
			{name:"s_map_my",path:"../ui/game/red_1.png"}
			s_map_npc
			*/

			smap_1 = new LBitmapData(dataList["s_map_no"]);
			smap_bitmap_1 = new LBitmap(smap_1);

			smap_0 = new LBitmapData(dataList["s_map_yes"]);
			smap_bitmap_0 = new LBitmap(smap_0);

			smap_2 = new LBitmapData(dataList["s_map_my"]);
			smap_bitmap_2 = new LBitmap(smap_2);

			smap_3 = new LBitmapData(dataList["s_map_npc"]);
			smap_bitmap_3 = new LBitmap(smap_3);
			//给不同类型小地图渲染颜色
			if(index == 1){
				//设置小图片的显示位置
				smap_bitmap_1.x = j*4 - 4;
				smap_bitmap_1.y = i*4 - 4;
				//将小图片显示到地图层
				map_s_L.addChild(smap_bitmap_1);
			}
			else if(index == 0){
				
				//设置小图片的显示位置
				smap_bitmap_0.x = j*4 - 4;
				smap_bitmap_0.y = i*4 - 4;
				//将小图片显示到地图层
				map_s_L.addChild(smap_bitmap_0);
			}
			else if(index == 2){
				
				//设置小图片的显示位置
				smap_bitmap_2.x = j*4 - 4;
				smap_bitmap_2.y = i*4 - 4;
				//将小图片显示到地图层
				map_s_L.addChild(smap_bitmap_2);
			}
			else if(index == 3){
				
				//设置小图片的显示位置
				smap_bitmap_3.x = j*4 - 4;
				smap_bitmap_3.y = i*4 - 4;
				//将小图片显示到地图层
				map_s_L.addChild(smap_bitmap_3);
			}

			/*
			bitmapdata = new LBitmapData(dataList["map"],0,0,10,10);
			bitmap = new LBitmap(bitmapdata);
			//设置小图片的显示位置
			bitmap.x = j*5 - 5;
			bitmap.y = i*5 - 5;
			//将小图片显示到地图层
			map_s_L.addChild(bitmap);

			*/
		}
	}
	//恢复玩家当前位置
	s_mapdata[x][y] = 0;
}



//游戏菜单
function menu_Layer_show(){
	menu_Layer = new LSprite();
   	backLayer.addChild(menu_Layer);
  
	var user_menu_button = new LSprite();
	menu_Layer.addChild(user_menu_button);
	var user_menu_button_show = new LButtonSample1(" 玩家菜单 ",10);
	user_menu_button_show.backgroundColor = "#000";
	user_menu_button_show.width = 66;
	user_menu_button_show.height = 30;
	user_menu_button_show.x = LGlobal.width-70;
	user_menu_button_show.y = 20;
	user_menu_button.addChild(user_menu_button_show);
	user_menu_button.addEventListener(LMouseEvent.MOUSE_UP,open_user_menu);

	//角色信息
	var game_menu_button = new LSprite();
	menu_Layer.addChild(game_menu_button);
	var game_menu_button_show = new LButtonSample1(" 游戏菜单 ",10);
	game_menu_button_show.backgroundColor = "#000";
	game_menu_button_show.width = 66;
	game_menu_button_show.height = 30;
	game_menu_button_show.x = LGlobal.width-70;
	game_menu_button_show.y = 60;
	game_menu_button.addChild(game_menu_button_show);
	game_menu_button.addEventListener(LMouseEvent.MOUSE_UP,open_game_menu);

	
}




//游戏菜单临时按键事件
function login_ui(){
	console.log("临时按键事件.....")
}



//游戏当前操作事件
function event_Layer_show(){
	event_Layer = new LSprite();
   	backLayer.addChild(event_Layer);	
}



//玩家信息 json数据
var user_info_data = {
	//玩家物理攻击
	user_gongji_wuli : "100",
	//玩家物理防御
	user_fangyu_wuli : "500",
	//玩家魔法防御
	user_fangyu_mofa : "151",
	//玩家生命上限
	user_hp_max : "500",
	//玩家能量上限
	user_ep_max : "151",
	//玩家力量
	user_lilang : "500",
	//玩家敏捷
	user_mingjie : "151",
	//玩家精力
	user_jingli : "151",
	//玩家暴击
	user_baoji : "100%",
	//玩家闪避
	user_shanbi : "100%",
	//玩家物理攻击吸血
	user_xixue : "100%",
	//玩家攻击命中
	user_migzhong : "100%",
	//玩家火属性提成
	user_huo : "100%",
	//玩家水属性提成
	user_shui : "100%",
	//玩家土属性提成
	user_tu : "100%",
	//玩家木属性提成
	user_mu : "100%",
	//玩家金属性提成
	user_jin : "100%",
	//玩家装备
	user_zb_image : {name:"zb_1",path:"../ui/login/zb_1.jpg"},
	//头部装备
	user_zb_tou_presence : true,
	user_zb_tou_image : {name:"zb_tou",path:"../ui/login/zb_1.jpg"},
	//光环装备
	user_zb_guanghuan_presence : false,
	user_zb_guanghuan_image : {name:"zb_guanghuan",path:"../ui/login/zb_1.jpg"},
	//项链装备
	user_zb_xianglian_presence : true,
	user_zb_xianglian_image : {name:"zb_xianglian",path:"../ui/login/zb_1.jpg"},
	//上身装备
	user_zb_shangshen_presence : false,
	user_zb_shangshen_image : {name:"zb_shangshen",path:"../ui/login/zb_1.jpg"},
	//武器装备
	user_zb_wuqi_presence : true,
	user_zb_wuqi_image : {name:"zb_wuqi",path:"../ui/login/zb_1.jpg"},
	//装饰装备
	user_zb_zhuangshi_presence : false,
	user_zb_zhuangshi_image : {name:"zb_zhuangshi",path:"../ui/login/zb_1.jpg"},
	//戒指装备
	user_zb_jiezhi_presence : true,
	user_zb_jiezhi_image : {name:"zb_jiezhi",path:"../ui/login/zb_1.jpg"},
	//下身装备
	user_zb_xiashen_presence : true,
	user_zb_xiashen_image : {name:"zb_xiashen",path:"../ui/login/zb_1.jpg"},
	//副手装备
	user_zb_fushou_presence : false,
	user_zb_fushou_image : {name:"zb_fushou",path:"../ui/login/zb_1.jpg"},
	//鞋子装备
	user_zb_xiezhi_presence : true,
	user_zb_xiezhi_image : {name:"zb_xiezhi",path:"../ui/login/zb_1.jpg"},

}

//加载玩家信息图像资源
function set_user_info_imgData(){
	var userimgData = new Array();
	//将资源加载渲染数组
	userimgData.push(user_info_data.user_zb_image);
	//头部
	if(user_info_data.user_zb_tou_presence){
		userimgData.push(user_info_data.user_zb_tou_image);
	}
	//光环
	if(user_info_data.user_zb_guanghuan_presence){
		userimgData.push(user_info_data.user_zb_guanghuan_image);
	}
	//项链
	if(user_info_data.user_zb_xianglian_presence){
		userimgData.push(user_info_data.user_zb_xianglian_image);
	}
	//上身
	if(user_info_data.user_zb_shangshen_presence){
		userimgData.push(user_info_data.user_zb_shangshen_image);
	}
	//武器
	if(user_info_data.user_zb_wuqi_presence){
		userimgData.push(user_info_data.user_zb_wuqi_image);
	}
	//装饰
	if(user_info_data.user_zb_zhuangshi_presence){
		userimgData.push(user_info_data.user_zb_zhuangshi_image);
	}
	//戒指
	if(user_info_data.user_zb_jiezhi_presence){
		userimgData.push(user_info_data.user_zb_jiezhi_image);
	}
	//下身
	if(user_info_data.user_zb_xiashen_presence){
		userimgData.push(user_info_data.user_zb_xiashen_image);
	}
	//副手
	if(user_info_data.user_zb_fushou_presence){
		userimgData.push(user_info_data.user_zb_fushou_image);
	}
	//鞋子
	if(user_info_data.user_zb_xiezhi_presence){
		userimgData.push(user_info_data.user_zb_xiezhi_image);
	}
	return userimgData;
}






var user_info_imgData = set_user_info_imgData();

//user_info_imgData.push(user_info_data.user_zb_tou_image);



//玩家信息界面
function userinfo_Layer_show(){
	apply_button = true;//false;
	//加载user info信息资源
	loadingLayer1 = new LoadingSample4();
	addChild(loadingLayer1);
	/**读取图片*/
	LLoadManage.load(user_info_imgData,
		function(progress){
			loadingLayer1.setProgress(progress);
		},userinfo_Layer_show_init);
	}

function userinfo_Layer_show_init(result){
	var userinfo_dataList = result;
	
	
	
	removeChild(loadingLayer1);
	loadingLayer1 = null;
	//定义游戏背景层

	KEY_lock = false;

	userinfo_Layer = new LSprite();
   	backLayer.addChild(userinfo_Layer);

   	/*
	userinfo_Layer.graphics.drawRect(1,'#000000',[100,10,
		LGlobal.width-200,LGlobal.height-30],true,'#cccccc');
	*/

	//背景图
	var userinfo_bk_bitmap = new LBitmap(new LBitmapData(dataList["user_info_pg1"]));
	userinfo_bk_bitmap.x = 50;
	userinfo_bk_bitmap.y = 50;
	userinfo_Layer.addChild(userinfo_bk_bitmap);


	var userinfo_Layer_title = new LTextField();
	userinfo_Layer_title.text = " 玩家信息界面 ";
	userinfo_Layer_title.size = 20
	userinfo_Layer_title.color = "#53FF53";
	userinfo_Layer_title.x = 180;
	userinfo_Layer_title.y = 80;
	userinfo_Layer.addChild(userinfo_Layer_title);

	var off_button_show = new LSprite();
	userinfo_Layer.addChild(off_button_show);
	var off_button = new LButtonSample1("  关闭   ",12);
	off_button.backgroundColor = "#EA0000";
	off_button.width = 15;
	off_button.height = 12;
	off_button.x = 350;
	off_button.y = 80;
	off_button_show.addChild(off_button);
	off_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var username_title = new LTextField();
	username_title.text = " 玩家姓名 ";
	username_title.size = 18
	username_title.color = "#fff";
	username_title.x = 120;
	username_title.y = 120;
	userinfo_Layer.addChild(username_title);


	var userlv_title = new LTextField();
	userlv_title.text = " 10 级 ";
	userlv_title.size = 18
	userlv_title.color = "#fff";
	userlv_title.x = 280;
	userlv_title.y = 120;
	userinfo_Layer.addChild(userlv_title);

	var userchenghao_title = new LTextField();
	userchenghao_title.text = " [ 战斗神 ] ";
	userchenghao_title.size = 18
	userchenghao_title.color = "#fff";
	userchenghao_title.x = 120;
	userchenghao_title.y = 150;
	userinfo_Layer.addChild(userchenghao_title);

	var userchenghao_title = new LTextField();
	userchenghao_title.text = " < 1阶,1段 > ";
	userchenghao_title.size = 18
	userchenghao_title.color = "#fff";
	userchenghao_title.x = 280;
	userchenghao_title.y = 150;
	userinfo_Layer.addChild(userchenghao_title);

	/*
	user_gongji_wuli : "100",
	user_fangyu_wuli : "500",
	user_fangyu_mofa : "151",
	user_hp_max : "500",
	user_ep_max : "151",
	user_lilang : "500",
	user_mingjie : "151",
	user_jingli : "151",
	user_baoji : "100%",
	user_shanbi : "100%",
	user_xixue : "100%",
	user_migzhong : "100%",
	user_huo : "100%",
	user_shui : "100%",
	user_tu : "100%",
	user_mu : "100%",
	user_jin : "100%",

	*/

	var jieshao_button_show = new LSprite();
	userinfo_Layer.addChild(jieshao_button_show);
	var jieshao_button = new LButtonSample1(" 查看信息介绍   ",12);
	jieshao_button.backgroundColor = "#000";
	jieshao_button.width = 20;
	jieshao_button.height = 12;
	jieshao_button.x = 110;
	jieshao_button.y = 620;
	jieshao_button_show.addChild(jieshao_button);
	jieshao_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var userinfo_title = new LTextField();
	userinfo_title.setWordWrap(true);
	userinfo_title.htmlText = "<font color='#fff' size='15'>   物理攻击：<b>"+user_info_data.user_gongji_wuli+"</b>\
	</font> \n\
		<font color='#fff' size='15'>物理防御：<b>"+user_info_data.user_fangyu_wuli+"</b></font> \n\
		<font color='#fff' size='15'>魔法防御：<b>"+user_info_data.user_fangyu_mofa+"</b></font> \n\
		<font color='#fff' size='15'>血量Max ：<b>"+user_info_data.user_hp_max+"</b></font> \n\
		<font color='#fff' size='15'>魔能Max ：<b>"+user_info_data.user_ep_max+"</b></font> \n\
		\n\
		<font color='#fff' size='15'>[体质]</font>\n\
		<font color='#fff' size='13'>          力量：<b>"+user_info_data.user_lilang+"</b></font> \n\
		<font color='#fff' size='13'>          敏捷：<b>"+user_info_data.user_mingjie+"</b></font> \n\
		<font color='#fff' size='13'>          精力：<b>"+user_info_data.user_jingli+"</b></font> \n\
		";
	
	userinfo_title.x = 100;
	userinfo_title.y = 480;
	userinfo_title.textBaseline = "alphabetic";
	userinfo_Layer.addChild(userinfo_title);

	var userinfo2_title = new LTextField();
	userinfo2_title.setWordWrap(true);
	userinfo2_title.htmlText = "<font color='#fff' size='15'>[属性]</font>\n\n\
		<font color='#fff' size='13'>暴击：<b>"+user_info_data.user_baoji+"</b></font> \n\
		<font color='#fff' size='13'>闪避：<b>"+user_info_data.user_shanbi+"</b></font> \n\
		<font color='#fff' size='13'>吸血：<b>"+user_info_data.user_xixue+"</b></font> \n\
		<font color='#fff' size='13'>命中：<b>"+user_info_data.user_migzhong+"</b></font> \n\
		<font color='#fff' size='13'>元素提成(火)：<b>"+user_info_data.user_huo+"</b></font> \n\
		<font color='#fff' size='13'>元素提成(水)：<b>"+user_info_data.user_shui+"</b></font> \n\
		<font color='#fff' size='13'>元素提成(土)：<b>"+user_info_data.user_tu+"</b></font> \n\
		<font color='#fff' size='13'>元素提成(木)：<b>"+user_info_data.user_mu+"</b></font> \n\
		<font color='#fff' size='13'>元素提成(金)：<b>"+user_info_data.user_jin+"</b></font> \n\
		";
	
	userinfo2_title.x = 260;
	userinfo2_title.y = 480;
	userinfo2_title.textBaseline = "alphabetic";
	userinfo_Layer.addChild(userinfo2_title);


	// 48*48
	//装备图 头部  145,255
	if(user_info_data.user_zb_tou_presence){
		var zb_tou_name_data = "zb_tou";
		var zb_toubu_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_tou"]));
		var userinfo_Layer_button = new LButton(zb_toubu_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 175;
		userinfo_Layer_button.y = 195;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("打开装备头部",apply_button);
			apply_button=true;
			open_zb_jieshao_pg(zb_tou_name_data);
		});
	}

	
	//装备图 光环装备  260,195
	if(user_info_data.user_zb_guanghuan_presence){
		var zb_guanghuan_name_data = "zb_guanghuan";
		var zb_guanghuan_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_guanghuan"]));
		var userinfo_Layer_button = new LButton(zb_guanghuan_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 260;
		userinfo_Layer_button.y = 195;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("光环装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_guanghuan_name_data);
		});
	}



	//装备图 项链  95,280
	if(user_info_data.user_zb_xianglian_presence){
		var zb_xianglian_name_data = "zb_xianglian";
		var zb_xianglian_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_xianglian"]));
		var userinfo_Layer_button = new LButton(zb_xianglian_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 95;
		userinfo_Layer_button.y = 280;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("项链装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_xianglian_name_data);
		});
	}


	//装备图 上身装备  180,280
	if(user_info_data.user_zb_shangshen_presence){
		var zb_shangshen_name_data = "zb_shangshen";
		var zb_shangshen_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_shangshen"]));
		var userinfo_Layer_button = new LButton(zb_shangshen_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 180;
		userinfo_Layer_button.y = 280;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("上身装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_shangshen_name_data);
		});
	}

	//装备图 武器装备  260,280
	if(user_info_data.user_zb_wuqi_presence){
		var zb_wuqi_name_data = "zb_wuqi";
		var zb_wuqi_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_wuqi"]));
		var userinfo_Layer_button = new LButton(zb_wuqi_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 260;
		userinfo_Layer_button.y = 280;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("武器装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_wuqi_name_data);
		});
	}

	//装备图 装饰装备 350,280
	if(user_info_data.user_zb_zhuangshi_presence){
		var zb_zhuangshi_name_data = "zb_zhuangshi";
		var zb_zhuangshi_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_zhuangshi"]));
		var userinfo_Layer_button = new LButton(zb_zhuangshi_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 350;
		userinfo_Layer_button.y = 280;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("装饰装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_zhuangshi_name_data);
		});
	}

	//装备图 戒指装备 95,365
	if(user_info_data.user_zb_jiezhi_presence){
		var zb_jiezhi_name_data = "zb_jiezhi";
		var zb_jiezhi_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_jiezhi"]));
		var userinfo_Layer_button = new LButton(zb_jiezhi_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 95;
		userinfo_Layer_button.y = 365;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("戒指装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_jiezhi_name_data);
		});
	}

	//装备图 下身装备  180,365
	if(user_info_data.user_zb_xiashen_presence){
		var zb_xiashen_name_data = "zb_xiashen";
		var zb_xiashen_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_xiashen"]));
		var userinfo_Layer_button = new LButton(zb_xiashen_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 180;
		userinfo_Layer_button.y = 365;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("下身装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_xiashen_name_data);
		});
	}

	//装备图 副手装备  260,365
	if(user_info_data.user_zb_fushou_presence){
		var zb_fushou_name_data = "zb_fushou";
		var zb_fushou_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_fushou"]));
		var userinfo_Layer_button = new LButton(zb_fushou_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 260;
		userinfo_Layer_button.y = 365;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("副手装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_fushou_name_data);
		});
	}
	

	//装备图 鞋子装备  350,372
	if(user_info_data.user_zb_xiezhi_presence){
		var zb_xiezhi_name_data = "zb_xiezhi";
		var zb_xiezhi_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_xiezhi"]));
		var userinfo_Layer_button = new LButton(zb_xiezhi_bitmap);
		//var zb_1_image_bitmap = new LBitmap(new LBitmapData(userinfo_dataList["zb_1"]));
		userinfo_Layer_button.x = 350;
		userinfo_Layer_button.y = 365;
		userinfo_Layer.addChild(userinfo_Layer_button);
		userinfo_Layer_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
			console.log("鞋子装备");
			apply_button=true;
			open_zb_jieshao_pg(zb_xiezhi_name_data);
		});
	}

	/*
		//背包按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 280;
	user_menu_Layer.addChild(menu_button);
	*/


	
	/*
    //信息列表
    //玩家信息列表
	userinfo_listView = new LListView();
	userinfo_Layer.addChild(userinfo_listView);
	userinfo_listView.x = 380;
	userinfo_listView.y = 110;
	userinfo_listView.maxPerLine = 1;
	userinfo_listView.cellWidth = 310;
	userinfo_listView.cellHeight = 40;
	//大小调整
	userinfo_listView.resize(310,320);
	//userinfo_listView.graphics.drawRect(5, "#CE0000", [0, 0, 
		//userinfo_listView.clipping.width,userinfo_listView.clipping.height]);

	var list = [];
	var task_info_list = ["等级: 1",
						  "生命力: 1000",
						  "技能力: 1000",
						  "体能: 100",
						  "【属性】 火： 100",
						  "【属性】 火： 100",
						  "【属性】 火： 100",
						  "【属性】 火： 100",
						  "【属性】 火： 100",
						  "【属性】 火： 100",
						  "【属性】 火： 100"]
	//var task_info_list = [];

	if(task_info_list.length==0){
		var c = new user_info_ListChildView("获取失败");
		list.push(c);
	}

	for(var i=0;i<task_info_list.length;i++){
		var c = new user_info_ListChildView(task_info_list[i]);
		list.push(c);
	}
	//userinfo_listView.updateList(list);
		
	*/
}
//显示列表信息
//单个玩家信息显示
function user_info_ListChildView(i){
	var self = this;
	base(self,LListChildView,[]);
	self.graphics.drawRect(1, "#000000", [0, 0, 310, 50],
		true,"#3C3C3C");
	var t = new LTextField();
	t.color = "#FFFFFF";
	t.size = 20;
	t.text = i;
	t.x = t.y = 5;
	self.addChild(t);
}
/*
//单个玩家信息点击事件
user_info_ListChildView.prototype.onClick = function(event){
	var self = this;
	console.log(event,self.getChildAt(0).text);
};
*/


//装备介绍json数据
var zb_info_data = {
	//玩家物理攻击
	zb_beijin : "阿萨时间的话开局送的空间哈萨克道具卡塑胶地板萨德比US会丢爱神的箭不是的空间吧驾驶的客户卡手机端看见爱上打开手机",
	zb_shuxing : ["+物理防御　：　100　"," +物理防御　：　100　"," +物理防御　：　100　"," +物理防御　：　100　"]
}


//装备介绍显示界面
function zb_jieshao_show(zb_name){
	
	//打开装备介绍关闭玩家信息界面
	if(userinfo_Layer){
		userinfo_Layer.remove();
	}
	
	apply_button = true;//false;
	
	//removeChild(loadingLayer1);
	//loadingLayer1 = null;
	//定义游戏背景层

	KEY_lock = false;

	zb_jieshao_Layer = new LSprite();
   	backLayer.addChild(zb_jieshao_Layer);

  

	//背景图
	var zb_jieshao_bk_bitmap = new LBitmap(new LBitmapData(dataList["zb_jieshao_bk"]));
	zb_jieshao_bk_bitmap.x = 80;
	zb_jieshao_bk_bitmap.y = 120;
	zb_jieshao_Layer.addChild(zb_jieshao_bk_bitmap);

	
	var off_button_show = new LSprite();
	zb_jieshao_Layer.addChild(off_button_show);
	var off_button = new LButtonSample1("  关闭   ",12);
	off_button.backgroundColor = "#EA0000";
	off_button.width = 15;
	off_button.height = 12;
	off_button.x = 420;
	off_button.y = 115;
	off_button_show.addChild(off_button);
	off_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_zb_jieshao_show);
	
	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = zb_name;
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#53FF53";
	usermenu_Layer_title.x = 200;
	usermenu_Layer_title.y = 160;
	zb_jieshao_Layer.addChild(usermenu_Layer_title);


	var userinfo_title = new LTextField();
	userinfo_title.setWordWrap(true);
	userinfo_title.width= 300;

	var html_data = " ";

	for(var i in zb_info_data.zb_shuxing){
		console.log("boss :",zb_info_data.zb_shuxing[i]);
		//遍历显示怪物
		//boss_show(boss_arr[p].x,boss_arr[p].y,boss_arr[p].name);
		html_data+="<font color='#fff' size='10'>      "+zb_info_data.zb_shuxing[i]+"</font>\n";
	}

	userinfo_title.htmlText = "<font color='#fff' size='15'>【装备属性】</font> \n"+html_data+" \n\
	<font color='#fff' size='13'><装备介绍>： "+zb_info_data.zb_beijin+"</font> \n\
		";
	
	userinfo_title.x = 120;
	userinfo_title.y = 380;
	userinfo_title.textBaseline = "alphabetic";
	zb_jieshao_Layer.addChild(userinfo_title);
	
}



//玩家菜单
function user_menu_Layer_show(){
	//var userinfo_dataList = result;
	
	apply_button = true;//false;
	
	//removeChild(loadingLayer1);
	//loadingLayer1 = null;
	//定义游戏背景层

	KEY_lock = false;

	user_menu_Layer = new LSprite();
   	backLayer.addChild(user_menu_Layer);

  

	//背景图
	var user_menu_bk_bitmap = new LBitmap(new LBitmapData(dataList["menu_bk"]));
	user_menu_bk_bitmap.x = 80;
	user_menu_bk_bitmap.y = 70;
	user_menu_Layer.addChild(user_menu_bk_bitmap);


	var off_button_show = new LSprite();
	user_menu_Layer.addChild(off_button_show);
	var off_button = new LButtonSample1("  关闭   ",12);
	off_button.backgroundColor = "#EA0000";
	off_button.width = 15;
	off_button.height = 12;
	off_button.x = 350;
	off_button.y = 140;
	off_button_show.addChild(off_button);
	off_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = " 玩家菜单界面 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#53FF53";
	usermenu_Layer_title.x = 180;
	usermenu_Layer_title.y = 140;
	user_menu_Layer.addChild(usermenu_Layer_title);


	//玩家信息按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 200;
	user_menu_Layer.addChild(menu_button);
	//打开玩家信息图  open_user_pg()
	menu_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		user_menu_Layer.remove();
		apply_button = true;
		open_user_pg();
	});
	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = " 玩家信息 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 225;
	user_menu_Layer.addChild(usermenu_Layer_title);



	//背包按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 280;
	user_menu_Layer.addChild(menu_button);
	// 打开玩家背包界面  open_beibao_pg
	menu_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		user_menu_Layer.remove();
		apply_button = true;
		open_beibao_pg();
	});
	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = "  背     包 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 305;
	user_menu_Layer.addChild(usermenu_Layer_title);
	



	//任务按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 360;
	user_menu_Layer.addChild(menu_button);
	// 打开玩家任务界面  open_task_pg
	menu_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		user_menu_Layer.remove();
		apply_button = true;
		open_task_pg();
	});
	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = "  任     务 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 385;
	user_menu_Layer.addChild(usermenu_Layer_title);




	//技能按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 440;
	user_menu_Layer.addChild(menu_button);
	// 打开玩家技能界面  open_jineng_pg
	menu_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		user_menu_Layer.remove();
		apply_button = true;
		open_jineng_pg();
	});
	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = "  技     能   ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 465;
	user_menu_Layer.addChild(usermenu_Layer_title);




	//商店按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 520;
	user_menu_Layer.addChild(menu_button);
	// 打开玩家商店界面  open_shangdian_pg
	menu_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		user_menu_Layer.remove();
		apply_button = true;
		open_shangdian_pg();
	});
	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = "  商     店 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 545;
	user_menu_Layer.addChild(usermenu_Layer_title);



	}



//游戏菜单
function game_menu_Layer_show(){
	//var userinfo_dataList = result;
	
	apply_button = true;//false;
	
	//removeChild(loadingLayer1);
	//loadingLayer1 = null;
	//定义游戏背景层

	KEY_lock = false;

	game_menu_Layer = new LSprite();
   	backLayer.addChild(game_menu_Layer);

  

	//背景图
	var user_menu_bk_bitmap = new LBitmap(new LBitmapData(dataList["menu_bk"]));
	user_menu_bk_bitmap.x = 80;
	user_menu_bk_bitmap.y = 70;
	game_menu_Layer.addChild(user_menu_bk_bitmap);


	var off_button_show = new LSprite();
	game_menu_Layer.addChild(off_button_show);
	var off_button = new LButtonSample1("  关闭   ",12);
	off_button.backgroundColor = "#EA0000";
	off_button.width = 15;
	off_button.height = 12;
	off_button.x = 350;
	off_button.y = 140;
	off_button_show.addChild(off_button);
	off_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = " 游戏菜单界面 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#53FF53";
	usermenu_Layer_title.x = 180;
	usermenu_Layer_title.y = 140;
	game_menu_Layer.addChild(usermenu_Layer_title);


	//玩家信息按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 200;
	game_menu_Layer.addChild(menu_button);
	//打开玩家信息图  open_user_pg()
	/*
	menu_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		game_menu_Layer.remove();
		apply_button = true;
		open_user_pg();
	});
	*/

	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = " 关闭声音 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 225;
	game_menu_Layer.addChild(usermenu_Layer_title);



	//背包按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 280;
	game_menu_Layer.addChild(menu_button);
	//打开玩家信息图  open_user_pg()
	//menu_button.addEventListener(LMouseEvent.MOUSE_UP,open_user_pg);

	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = "  游戏介绍 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 305;
	game_menu_Layer.addChild(usermenu_Layer_title);



	//任务按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 360;
	game_menu_Layer.addChild(menu_button);
	//打开玩家信息图  open_user_pg()
	//menu_button.addEventListener(LMouseEvent.MOUSE_UP,open_user_pg);


	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = "  广告招商 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 385;
	game_menu_Layer.addChild(usermenu_Layer_title);




	//技能按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 440;
	game_menu_Layer.addChild(menu_button);
	//打开玩家信息图  open_user_pg()
	//menu_button.addEventListener(LMouseEvent.MOUSE_UP,open_user_pg);


	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = "  投资合伙   ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 465;
	game_menu_Layer.addChild(usermenu_Layer_title);




	//商店按钮
	var menu_button_bitmap = new LBitmap(new LBitmapData(dataList["menu_button"]));
	var menu_button = new LButton(menu_button_bitmap);
	menu_button.x = 160;
	menu_button.y = 520;
	game_menu_Layer.addChild(menu_button);
	//打开玩家信息图  open_user_pg()
	//menu_button.addEventListener(LMouseEvent.MOUSE_UP,open_user_pg);

	var usermenu_Layer_title = new LTextField();
	usermenu_Layer_title.text = "  关于我们 ";
	usermenu_Layer_title.size = 20
	usermenu_Layer_title.color = "#fff";
	usermenu_Layer_title.x = 220;
	usermenu_Layer_title.y = 545;
	game_menu_Layer.addChild(usermenu_Layer_title);

}


//玩家背包信息 json数据
var beibao_info_data = {
	//背包一
	beibao_1 : [ 
			[ "wuping_1","wuping_2",0,"wuping_3",0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0]
			],
	//背包二
	beibao_2 : [ 
			[ 0,0,0,0,0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0]
			],
	//背包三
	beibao_3 : [ 
			[ "wuping_1","wuping_2",0,"wuping_3",0],
			[ "wuping_1","wuping_2",0,"wuping_3",0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0]
			],
	//背包四
	beibao_4 : [ 
			[ "wuping_1","wuping_2",0,"wuping_3",0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0],
			[ 0,0,0,0,0],
			[ "wuping_1","wuping_2",0,"wuping_3",0]
			],
}
//玩家背包个数重叠数据 json
var beibao_zb_data = {
	wuping_1 : 3,
	wuping_2 : 2,
	wuping_3 : 12,
}

//玩家背包物品 图像渲染数据
var user_beibao_info_data = {
	wuping_1 : {name:"wuping_1",path:"../ui/login/zb_1.jpg"},
	wuping_2 : {name:"wuping_2",path:"../ui/login/zb_1.jpg"},
	wuping_3 : {name:"wuping_3",path:"../ui/login/zb_1.jpg"},
}




//获取玩家背包物品 图像渲染 加载入游戏
function get_user_beibao_data(){
	var beibao_data_image = new Array()
	for(var beibao_i in user_beibao_info_data){
		beibao_data_image.push(user_beibao_info_data[beibao_i]);
	}
	return beibao_data_image;
}
//beibao_info_imgData.push(beibao_info_data.beibao_1_1);

var beibao_info_imgData = get_user_beibao_data();

//玩家信息界面
function beibaoinfo_Layer_show(){
	apply_button = true;//false;
	//加载user info信息资源
	loadingLayer1 = new LoadingSample4();
	addChild(loadingLayer1);
	/**读取图片*/
	LLoadManage.load(beibao_info_imgData,
		function(progress){
			loadingLayer1.setProgress(progress);
		},beibaoinfo_Layer_show_init);
}


//背包信息界面
function beibaoinfo_Layer_show_init(result){
	var beibaoinfo_dataList = result;
	if(loadingLayer1){
		removeChild(loadingLayer1);
		loadingLayer1 = null;
	}

	//定义游戏背景层

	//apply_button = true;//false;
	
	//removeChild(loadingLayer1);
	//loadingLayer1 = null;
	//定义游戏背景层

	KEY_lock = false;

	beibaoinfo_Layer = new LSprite();
   	backLayer.addChild(beibaoinfo_Layer);

   	/*
	beibaoinfo_Layer.graphics.drawRect(1,'#000000',[100,10,
		LGlobal.width-200,LGlobal.height-30],true,'#cccccc');
	*/

	//背景图
	var beibao_bk_bitmap = new LBitmap(new LBitmapData(dataList["beibao"]));
	beibao_bk_bitmap.x = 60;
	beibao_bk_bitmap.y = 50;
	beibaoinfo_Layer.addChild(beibao_bk_bitmap);

	//关闭按钮
	var off_button_show = new LSprite();
	beibaoinfo_Layer.addChild(off_button_show);
	var off_button = new LButtonSample1("  关闭   ",12);
	off_button.backgroundColor = "#EA0000";
	off_button.width = 20;
	off_button.height = 10;
	off_button.x = 390;
	off_button.y = 90;
	off_button_show.addChild(off_button);
	off_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var beibao_title_L = " 玩家背包界面 ";

	//title
	var beibaoinfo_Layer_title = new LTextField();
	beibaoinfo_Layer_title.text = beibao_title_L;
	beibaoinfo_Layer_title.size = 23
	beibaoinfo_Layer_title.color = "#53FF53";
	beibaoinfo_Layer_title.x = 180;
	beibaoinfo_Layer_title.y = 100;
	beibaoinfo_Layer.addChild(beibaoinfo_Layer_title);


	
	//背包1  80*30   100 130
	var beibao_button1_bitmap = new LBitmap(new LBitmapData(dataList["beibao_button1"]));
	var beibao_button_1 = new LButton(beibao_button1_bitmap);
	beibao_button_1.x = 95;
	beibao_button_1.y = 145;
	beibaoinfo_Layer.addChild(beibao_button_1);
	beibao_button_1.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("打开背包一")
		beibao_wupin_L_show(beibaoinfo_dataList,beibao_info_data.beibao_1);
	});

	//背包2  80*30   180 130
	var beibao_button2_bitmap = new LBitmap(new LBitmapData(dataList["beibao_button2"]));
	var beibao_button_2 = new LButton(beibao_button2_bitmap);
	beibao_button_2.x = 180;
	beibao_button_2.y = 145;
	beibaoinfo_Layer.addChild(beibao_button_2);
	beibao_button_2.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("打开背包二")
		beibao_wupin_L_show(beibaoinfo_dataList,beibao_info_data.beibao_2);
	});

	//背包3  80*30    260  130
	var beibao_button3_bitmap = new LBitmap(new LBitmapData(dataList["beibao_button3"]));
	var beibao_button_3 = new LButton(beibao_button3_bitmap);
	beibao_button_3.x = 265;
	beibao_button_3.y = 145;
	beibaoinfo_Layer.addChild(beibao_button_3);
	beibao_button_3.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("打开背包三")
		beibao_wupin_L_show(beibaoinfo_dataList,beibao_info_data.beibao_3);
	});

	//背包4  80*30    340  130
	var beibao_button4_bitmap = new LBitmap(new LBitmapData(dataList["beibao_button4"]));
	var beibao_button_4 = new LButton(beibao_button4_bitmap);
	beibao_button_4.x = 350;
	beibao_button_4.y = 145;
	beibaoinfo_Layer.addChild(beibao_button_4);
	beibao_button_4.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("打开背包四")
		beibao_wupin_L_show(beibaoinfo_dataList,beibao_info_data.beibao_4);
	});
	

	
	/*
	beibao_null_button.x = 147;
	beibao_null_button.y = 114;
	beibaoinfo_Layer.addChild(beibao_null_button);
	beibao_null_button.addEventListener(LMouseEvent.MOUSE_UP,open_beibao);
	*/

	

	//背包数据  开发
	/* {

		baibao1 : [装备名称(id),0,....]
		baibao2 : [.....]
		0 表示空
		如果为0 则显示空
	}


	背包界面下面有  升级，修复，打造 按钮  待开发
	*/

	beibao_wupin_L_show(beibaoinfo_dataList,beibao_info_data.beibao_1);

	}
	
//背包界面
function beibao_wupin_L_show(beibaoinfo_dataList,beibao_arr){

	if(beibao_wupin_Layer){
		beibao_wupin_Layer.remove();
		beibao_wupin_Layer = null;
	}

	beibao_wupin_Layer = new LSprite();
   	beibaoinfo_Layer.addChild(beibao_wupin_Layer);

   	//空装备  50*50
	var beibao_null_button_bitmap = new LBitmap(new LBitmapData(dataList["beibao_null"]));
	
	var beibao_null_button = new LButton(beibao_null_button_bitmap);


	//排列装备   位置  [0,0]:147,114   x+62  y+66
	for(i=1;i<6;i++){
		for(j=1;j<6;j++){
			//console.log("背包json",beibao_info_data.beibao_1[j-1][i-1]);
			if(beibao_arr[j-1][i-1]==0){
				var beibao_null_button = beibao_null_button.clone();
				beibao_null_button.x = 31+68*i;
				beibao_null_button.y = 118+75*j;
				beibao_wupin_Layer.addChild(beibao_null_button);
				beibao_null_button.addEventListener(LMouseEvent.MOUSE_UP,function(event){
				var self = this;
				console.log(event);});
			}
			//当背包json 数据不为空则显示玩家有的物品
			else{
				//物品的名称
				
				//eval("var set_"+i+"_"+j+"=100;");

				var beibao_zb_name = beibao_arr[j-1][i-1];

				//【总结】  循环里的button 事件只在循环结束后才调用变量，及所有循环事件的点击按钮结果都会一样；
				//解决方案 外置函数即可
				//声明按钮事件
				zb_button(beibao_zb_name);

				/*
				//console.log("背包beibao_zb_name",beibao_zb_name);
				var beibao_zb_button_bitmap = new LBitmap(new LBitmapData(beibaoinfo_dataList[beibao_zb_name]));
				beibao_zb_button = new LButton(beibao_zb_button_bitmap);
				beibao_zb_button.x = 45+62*i;
				beibao_zb_button.y = 110+66*j;
				beibao_wupin_Layer.addChild(beibao_zb_button);
				beibao_zb_button.addEventListener(LMouseEvent.MOUSE_UP,function(event){

					console.log("set_6_6");

				});
				*/

				var beibaozb_name_title = new LTextField();
				beibaozb_name_title.text = beibao_zb_name;//必须要规定字符个数
				beibaozb_name_title.size = 8;
				beibaozb_name_title.color = "#53FF53";
				beibaozb_name_title.x = 31+68*i;
				beibaozb_name_title.y = (118+75*j)-10;
				beibao_wupin_Layer.addChild(beibaozb_name_title);

				/*
				//这里的个数可以用ajax get 获取
				var beibao_zb_info = {
					number : 2,
				}
				*/


				var beibaozb_number_title = new LTextField();
				beibaozb_number_title.text = beibao_zb_data[beibao_zb_name];
				//console.log("物品个数",beibao_zb_data[beibao_zb_name]);
				beibaozb_number_title.size = 8;
				beibaozb_number_title.color = "#53FF53";
				beibaozb_number_title.x = 31+68*i;
				beibaozb_number_title.y = (118+75*j)+40;
				beibao_wupin_Layer.addChild(beibaozb_number_title);

				//var beibao_zb_name = null;
			}
		}		
}


//背包 单个物品的显示与点击事件入口
function zb_button(beibao_zb_name){
	//console.log("背包beibao_zb_name",beibao_zb_name);
	var beibao_zb_button_bitmap = new LBitmap(new LBitmapData(beibaoinfo_dataList[beibao_zb_name]));
	beibao_zb_button = new LButton(beibao_zb_button_bitmap);
	beibao_zb_button.x = 31+68*i;
	beibao_zb_button.y = 118+75*j;
	beibao_wupin_Layer.addChild(beibao_zb_button);
	beibao_zb_button.addEventListener(LMouseEvent.MOUSE_UP,function(event){
		console.log(beibao_zb_name);
		//装备打开信息介绍
		//open_beibao_zb_jieshao(beibao_zb_name);
	});

	}

}




//游戏设置信息界面
function gamesetting_Layer_show(){
	gamesetting_Layer = new LSprite();
   	backLayer.addChild(gamesetting_Layer);

	gamesetting_Layer.graphics.drawRect(1,'#000000',[100,10,
		LGlobal.width-200,LGlobal.height-30],true,'#cccccc');
	
	var off_button = new LButtonSample1("  关闭   ",40);
	off_button.backgroundColor = "#000";
	off_button.width = 130;
	off_button.height = 10;
	off_button.x = 100;
	off_button.y = 10;
	gamesetting_Layer.addChild(off_button);
	gamesetting_Layer.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var gamesetting_Layer_title = new LTextField();
	gamesetting_Layer_title.text = " 游戏设置界面 ";
	gamesetting_Layer_title.size = 30
	gamesetting_Layer_title.color = "#53FF53";
	gamesetting_Layer_title.x = 200;
	gamesetting_Layer_title.y = 100;
	gamesetting_Layer.addChild(gamesetting_Layer_title);
}

//小地图信息界面
function mapsmall_Layer_show(){
	mapsmall_Layer = new LSprite();
   	backLayer.addChild(mapsmall_Layer);

	mapsmall_Layer.graphics.drawRect(1,'#000000',[100,10,
		LGlobal.width-200,LGlobal.height-30],true,'#cccccc');
	
	var off_button = new LButtonSample1("  关闭   ",40);
	off_button.backgroundColor = "#000";
	off_button.width = 130;
	off_button.height = 10;
	off_button.x = 100;
	off_button.y = 10;
	mapsmall_Layer.addChild(off_button);
	mapsmall_Layer.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var mapsmall_Layer_title = new LTextField();
	mapsmall_Layer_title.text = " map 界面 ";
	mapsmall_Layer_title.size = 30
	mapsmall_Layer_title.color = "#53FF53";
	mapsmall_Layer_title.x = 200;
	mapsmall_Layer_title.y = 100;
	mapsmall_Layer.addChild(mapsmall_Layer_title);
}


/*
		@ 玩家任务信息界面

*/


//玩家任务 图像渲染数据
var user_task_info_data = {
	task_bk_img : {name:"task_show_bk",path:"../ui/login/task_show_bk_1.png"},
}

//获取玩家任务 图像渲染 加载入游戏
function get_user_task_data(){
	var task_data_image = new Array()
	for(var task_i in user_task_info_data){
		task_data_image.push(user_task_info_data[task_i]);
	}
	return task_data_image;
}

var task_info_imgData = get_user_task_data();

//玩家任务界面显示层
function task_Layer_show(){
	apply_button = true;//false;
	//加载任务界面 信息资源
	loadingLayer_task = new LoadingSample4();
	addChild(loadingLayer_task);
	/**读取图片*/
	LLoadManage.load(task_info_imgData,
		function(progress){
			loadingLayer_task.setProgress(progress);
		},task_Layer_show_init);
}

//任务界面主体
function task_Layer_show_init(result){
	var taskinfo_dataList = result;
	if(loadingLayer_task){
		removeChild(loadingLayer_task);
		loadingLayer_task = null;
	}

	KEY_lock = false;

	task_Layer = new LSprite();
   	backLayer.addChild(task_Layer);

	//背景图
	var beibao_bk_bitmap = new LBitmap(new LBitmapData(taskinfo_dataList["task_show_bk"]));
	beibao_bk_bitmap.x = 30;
	beibao_bk_bitmap.y = 50;
	task_Layer.addChild(beibao_bk_bitmap);

	//关闭按钮
	var off_button_show = new LSprite();
	task_Layer.addChild(off_button_show);
	var off_button = new LButtonSample1("  关闭   ",12);
	off_button.backgroundColor = "#EA0000";
	off_button.width = 20;
	off_button.height = 10;
	off_button.x = 390;
	off_button.y = 100;
	off_button_show.addChild(off_button);
	off_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var beibao_title_L = " 玩家任务界面 ";

	//title
	var beibaoinfo_Layer_title = new LTextField();
	beibaoinfo_Layer_title.text = beibao_title_L;
	beibaoinfo_Layer_title.size = 23
	beibaoinfo_Layer_title.color = "#53FF53";
	beibaoinfo_Layer_title.x = 180;
	beibaoinfo_Layer_title.y = 110;
	task_Layer.addChild(beibaoinfo_Layer_title);


	
	//任务列表
	taskinfo_listView = new LListView();
	task_Layer.addChild(taskinfo_listView);
	//调整位置
	taskinfo_listView.x = 80;
	taskinfo_listView.y = 150;
	taskinfo_listView.maxPerLine = 1;
	taskinfo_listView.cellWidth = 350;
	taskinfo_listView.cellHeight = 50;
	//大小调整
	taskinfo_listView.resize(350,420);
	taskinfo_listView.graphics.drawRect(5, "#CE0000", [0, 0, 
		taskinfo_listView.clipping.width,taskinfo_listView.clipping.height]);

	var list = [];
	var task_info_list = ["【任务 - 1】 ： asdasdasd",
						  "【任务 - 2】 ： asdasdasd",
						  "【任务 - 3】 ： asdasdasd",
						  "【任务 - 4】 ： asdasdasd",
						  "【任务 - 5】 ： asdasdasd",
						  "【任务 - 6】 ： asdasdasd",
						  "【任务 - 7】 ： asdasdasd",
						  "【任务 - 8】 ： asdasdasd",
						  "【任务 - 9】 ： asdasdasd",
						  "【任务 - 10】 ： asdasdasd",
						  "【任务 - 11】 ： asdasdasd",
						  "【任务 - 12】 ： asdasdasd",
						  "【任务 - 13】 ： asdasdasd",
						  "【任务 - 14】 ： asdasdasd"
						]

	if(task_info_list.length==0){
		var c = new task_info_ListChildView("获取失败");
		list.push(c);
	}

	for(var i=0;i<task_info_list.length;i++){
		var c = new task_info_ListChildView(task_info_list[i]);
		list.push(c);
	}
	taskinfo_listView.updateList(list);	

}

//单个任务列表显示内容
function task_info_ListChildView(i){
	var self = this;
	base(self,LListChildView,[]);
	self.graphics.drawRect(1, "#000000", [0, 0, 350, 50],
		true,"#3C3C3C");
	var t = new LTextField();
	t.color = "#FFFFFF";
	t.size = 18;
	t.text = i;
	t.x = t.y = 5;
	self.addChild(t);
}
//单个任务信息点击事件
task_info_ListChildView.prototype.onClick = function(event){
	var self = this;
	console.log(self.getChildAt(0).text);
};



/*
		@ 玩家技能信息界面

*/

//玩家技能 图像渲染数据
var user_jineng_info_data = {
	jineng_bk_img : {name:"jineng_show_bk",path:"../ui/login/jineng_show_bk_1.png"},
	jineng_kp_show_bk : {name:"jineng_kapai_bk",path:"../ui/game/jineng_kapai_bk.png"},
	jineng_kapai_tx : {name:"jineng_kapai_tx",path:"../ui/game/jineng_kapai_tx.png"},
}


//获取玩家技能 图像渲染 加载入游戏
function get_user_jineng_data(){
	var jineng_data_image = new Array()
	for(var jineng_i in user_jineng_info_data){
		jineng_data_image.push(user_jineng_info_data[jineng_i]);
	}
	return jineng_data_image;
}

var jineng_info_imgData = get_user_jineng_data();

//打开玩家技能界面
function jineng_Layer_show(){
	apply_button = true;//false;
	//加载任务界面 信息资源
	loadingLayer_jineng = new LoadingSample4();
	addChild(loadingLayer_jineng);
	/**读取图片*/
	LLoadManage.load(jineng_info_imgData,
		function(progress){
			loadingLayer_jineng.setProgress(progress);
		},jineng_Layer_show_init);
}
//技能界面主体
function jineng_Layer_show_init(result){
	var jinenginfo_dataList = result;
	if(loadingLayer_jineng){
		removeChild(loadingLayer_jineng);
		loadingLayer_jineng = null;
	}

	KEY_lock = false;

	jineng_Layer = new LSprite();
   	backLayer.addChild(jineng_Layer);

	//背景图
	var beibao_bk_bitmap = new LBitmap(new LBitmapData(jinenginfo_dataList["jineng_show_bk"]));
	beibao_bk_bitmap.x = -30;
	beibao_bk_bitmap.y = 50;
	jineng_Layer.addChild(beibao_bk_bitmap);

	//关闭按钮
	var off_button_show = new LSprite();
	jineng_Layer.addChild(off_button_show);
	var off_button = new LButtonSample1("  关闭   ",12);
	off_button.backgroundColor = "#EA0000";
	off_button.width = 20;
	off_button.height = 10;
	off_button.x = 430;
	off_button.y = 100;
	off_button_show.addChild(off_button);
	off_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var beibao_title_L = " 玩家技能界面 ";

	//title
	var beibaoinfo_Layer_title = new LTextField();
	beibaoinfo_Layer_title.text = beibao_title_L;
	beibaoinfo_Layer_title.size = 23
	beibaoinfo_Layer_title.color = "#53FF53";
	beibaoinfo_Layer_title.x = 180;
	beibaoinfo_Layer_title.y = 120;
	jineng_Layer.addChild(beibaoinfo_Layer_title);


	//单个技能
	var jineng_1_bitmap = new LBitmap(new LBitmapData(jinenginfo_dataList["jineng_kapai_bk"]));
	jineng_1_button = new LButton(jineng_1_bitmap);
	jineng_1_button.x = 100;
	jineng_1_button.y = 185;
	jineng_Layer.addChild(jineng_1_button);
	jineng_1_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("点击了技能");
	});
	

	//加载使用
	var jineng_1_bitmap = new LBitmap(new LBitmapData(jinenginfo_dataList["jineng_kapai_tx"]));
	jineng_1_bitmap.x = 90;
	jineng_1_bitmap.y = 180;
	jineng_Layer.addChild(jineng_1_bitmap);

}





/*
		@ 玩家商店信息界面

*/
  

//玩家商店 图像渲染数据
var user_shangdian_info_data = {
	shangdian_bk_img : {name:"shangdian_show_bk",path:"../ui/login/shangdian_show_bk_1.png"},
	wuping_img_1 : {name:"wp_1",path:"../ui/login/wp_1.jpg"},
}

//获取玩家商店 图像渲染 加载入游戏
function get_user_shangdian_data(){
	var shangdian_data_image = new Array()
	for(var shangdian_i in user_shangdian_info_data){
		shangdian_data_image.push(user_shangdian_info_data[shangdian_i]);
	}
	return shangdian_data_image;
}

var shangdian_info_imgData = get_user_shangdian_data();

//打开玩家商店界面
function shangdian_Layer_show(){
	apply_button = true;//false;
	//加载任务界面 信息资源
	loadingLayer_shangdian = new LoadingSample4();
	addChild(loadingLayer_shangdian);

	//加载时候显示的背景图
	/*
	var beibao_bk_bitmap = new LBitmap(new LBitmapData(dataList["loadingLayer_bk"]));
	loadingLayer_shangdian.addChild(beibao_bk_bitmap);
	*/

	//加载时候显示的内容
	var beibao_title_L = " 正在加载资源请稍后..... ";
	//title
	var beibaoinfo_Layer_title = new LTextField();
	beibaoinfo_Layer_title.text = beibao_title_L;
	beibaoinfo_Layer_title.size = 25;
	beibaoinfo_Layer_title.color = "#ffffff";
	beibaoinfo_Layer_title.x = 100;
	beibaoinfo_Layer_title.y = 300;
	loadingLayer_shangdian.addChild(beibaoinfo_Layer_title);


	/**读取图片*/
	LLoadManage.load(shangdian_info_imgData,
		function(progress){
			loadingLayer_shangdian.setProgress(progress);
		},shangdian_Layer_show_init);
}
//商店界面主体
function shangdian_Layer_show_init(result){
	var shangdianinfo_dataList = result;
	if(loadingLayer_shangdian){
		removeChild(loadingLayer_shangdian);
		loadingLayer_shangdian = null;
	}

	KEY_lock = false;

	shangdian_Layer = new LSprite();
   	backLayer.addChild(shangdian_Layer);

	//背景图
	var beibao_bk_bitmap = new LBitmap(new LBitmapData(shangdianinfo_dataList["shangdian_show_bk"]));
	beibao_bk_bitmap.x = 15;
	beibao_bk_bitmap.y = 20;
	shangdian_Layer.addChild(beibao_bk_bitmap);

	//关闭按钮
	var off_button_show = new LSprite();
	shangdian_Layer.addChild(off_button_show);
	var off_button = new LButtonSample1("  关闭   ",12);
	off_button.backgroundColor = "#EA0000";
	off_button.width = 20;
	off_button.height = 10;
	off_button.x = 400;
	off_button.y = 80;
	off_button_show.addChild(off_button);
	off_button_show.addEventListener(LMouseEvent.MOUSE_UP,off_addation);

	var beibao_title_L = " 玩家商店界面 ";

	//title
	var beibaoinfo_Layer_title = new LTextField();
	beibaoinfo_Layer_title.text = beibao_title_L;
	beibaoinfo_Layer_title.size = 23
	beibaoinfo_Layer_title.color = "#53FF53";
	beibaoinfo_Layer_title.x = 180;
	beibaoinfo_Layer_title.y = 90;
	shangdian_Layer.addChild(beibaoinfo_Layer_title);



	//玩家当前金钱
	var user_jinqian_table = new LTextField();
	user_jinqian_table.text = " 余额 ： 1,000,000 ";
	user_jinqian_table.size = 25;
	user_jinqian_table.color = "#ffffff";
	user_jinqian_table.x = 200;
	user_jinqian_table.y = 680;
	shangdian_Layer.addChild(user_jinqian_table);




	var scanf_button = new LButtonSample1("  查询  ",15);
	scanf_button.backgroundColor = "#000000";
	scanf_button.width = 30;
	scanf_button.height = 10;
	scanf_button.x = 350;
	scanf_button.y = 128;
	shangdian_Layer.addChild(scanf_button);
	scanf_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("查询");
	});

	var inputLayer = new LSprite();
	inputLayer.graphics.drawRect(1,"#fff",[0, 0, 220, 30]);
	var theTextField = new LTextField();
	theTextField.size = 25;
	theTextField.color = "#FF0000";
	theTextField.x = 130;
	theTextField.y = 130;
	theTextField.setType(LTextFieldType.INPUT,inputLayer);
	shangdian_Layer.addChild(theTextField);




	//左边栏按钮
	var shangdian_button_1 = new LButtonSample1("  武器  ",18);
	shangdian_button_1.backgroundColor = "#000";
	shangdian_button_1.width = 30;
	shangdian_button_1.height = 18;
	shangdian_button_1.x = 55;
	shangdian_button_1.y = 200;
	shangdian_Layer.addChild(shangdian_button_1);
	shangdian_button_1.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("点击了 商店按钮");
	});

	//左边栏按钮
	var shangdian_button_1 = new LButtonSample1("  衣服  ",18);
	shangdian_button_1.backgroundColor = "#000";
	shangdian_button_1.width = 30;
	shangdian_button_1.height = 18;
	shangdian_button_1.x = 55;
	shangdian_button_1.y = 250;
	shangdian_Layer.addChild(shangdian_button_1);
	shangdian_button_1.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("点击了 商店按钮");
	});

	//左边栏按钮
	var shangdian_button_1 = new LButtonSample1("  首饰  ",18);
	shangdian_button_1.backgroundColor = "#000";
	shangdian_button_1.width = 30;
	shangdian_button_1.height = 18;
	shangdian_button_1.x = 55;
	shangdian_button_1.y = 300;
	shangdian_Layer.addChild(shangdian_button_1);
	shangdian_button_1.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("点击了 商店按钮");
	});

	//左边栏按钮
	var shangdian_button_1 = new LButtonSample1("  消耗  ",18);
	shangdian_button_1.backgroundColor = "#000";
	shangdian_button_1.width = 30;
	shangdian_button_1.height = 18;
	shangdian_button_1.x = 55;
	shangdian_button_1.y = 350;
	shangdian_Layer.addChild(shangdian_button_1);
	shangdian_button_1.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("点击了 商店按钮");
	});

	//左边栏按钮
	var shangdian_button_1 = new LButtonSample1("  宝石  ",18);
	shangdian_button_1.backgroundColor = "#000";
	shangdian_button_1.width = 30;
	shangdian_button_1.height = 18;
	shangdian_button_1.x = 55;
	shangdian_button_1.y = 400;
	shangdian_Layer.addChild(shangdian_button_1);
	shangdian_button_1.addEventListener(LMouseEvent.MOUSE_UP,function(){
		console.log("点击了 商店按钮");
	});







	//任务列表
	shangdianinfo_listView = new LListView();
	shangdian_Layer.addChild(shangdianinfo_listView);
	//调整位置
	shangdianinfo_listView.x = 130;
	shangdianinfo_listView.y = 180;
	shangdianinfo_listView.maxPerLine = 1;
	shangdianinfo_listView.cellWidth = 320;
	shangdianinfo_listView.cellHeight = 65;
	//大小调整
	shangdianinfo_listView.resize(320,480);
	shangdianinfo_listView.graphics.drawRect(5, "#53FF53", [0, 0, 
		shangdianinfo_listView.clipping.width,shangdianinfo_listView.clipping.height]);

	var list = [];
	var task_info_list = ["【物品 1】 ： 100",
						  "【物品 2】 ： 100",
						  "【物品 3】 ： 100",
						  "【物品 4】 ： 100",
						  "【物品 5】 ： 100",
						  "【物品 6】 ： 100",
						  "【物品 7】 ： 100",
						  "【物品 8】 ： 100",
						  "【物品 9】 ： 100"
						]
	var wuping_img_list = [ shangdianinfo_dataList["wp_1"],
							shangdianinfo_dataList["wp_1"],
							shangdianinfo_dataList["wp_1"],
							shangdianinfo_dataList["wp_1"],
							shangdianinfo_dataList["wp_1"],
							shangdianinfo_dataList["wp_1"],
							shangdianinfo_dataList["wp_1"],
							shangdianinfo_dataList["wp_1"],
							shangdianinfo_dataList["wp_1"]
  						  ]

	if(task_info_list.length == 0 & wuping_img_list.length == 0){
		var c = new shangdian_info_ListChildView("获取失败");
		list.push(c);
	}

	for(var i=0;i<task_info_list.length;i++){
		var c = new shangdian_info_ListChildView(task_info_list[i],wuping_img_list[i]);
		list.push(c);
	}
	shangdianinfo_listView.updateList(list);	
}

//单个商品显示内容
function shangdian_info_ListChildView(i,img){
	var self = this;
	base(self,LListChildView,[]);
	self.graphics.drawRect(1, "#000000", [0, 0, 350, 65],
		true,"#3C3C3C");
	
	var t = new LTextField();
	t.color = "#FFFFFF";
	t.size = 15;
	t.text = i;
	t.x = 70;
	t.y = 10;
	self.addChild(t);

	var shangpin_bitmap = new LBitmap(new LBitmapData(img));
	shangpin_bitmap.x = 5;
	shangpin_bitmap.y = 5;
	self.addChild(shangpin_bitmap);
}
//单个商品点击事件
shangdian_info_ListChildView.prototype.onClick = function(event){
	var self = this;
	console.log(self.getChildAt(0).text);
};











/*
		@按键事件
	
*/



//关闭打开的界面
function off_addation(event){
	//关闭玩家信息界面
	if(userinfo_Layer){
		console.log("关闭了玩家信息界面 ok",apply_button);
		userinfo_Layer.remove();
	}
	//关闭玩家菜单界面
	if(user_menu_Layer){
		user_menu_Layer.remove();
	}
	//关闭游戏菜单界面
	if(game_menu_Layer){
		game_menu_Layer.remove();
	}
	//关闭背包界面
	if(beibaoinfo_Layer){
		console.log("关闭了背包界面 ok",apply_button);
		beibaoinfo_Layer.remove();
	}
	//关闭任务界面
	if(task_Layer){
		console.log("关闭任务界面 ok",apply_button);
		task_Layer.remove();
	}
	//关闭技能界面
	if(jineng_Layer){
		console.log("关闭技能界面 ok",apply_button);
		jineng_Layer.remove();
	}
	//关闭商店界面
	if(shangdian_Layer){
		console.log("关闭商店界面 ok",apply_button);
		shangdian_Layer.remove();
	}


	apply_button=true;
	KEY_lock = true;
}

//关闭二级界面  装备信息界面
function off_zb_jieshao_show(){
	//关闭装备介绍界面
	if(zb_jieshao_Layer){
		zb_jieshao_Layer.remove();
		//关闭装备介绍返回玩家信息界面
		apply_button=true;
		open_user_pg();
	}
}

//打开玩家信息界面
function open_user_pg(){
	console.log("打开了玩家信息界面 ok",apply_button);
	if(apply_button){
		userinfo_Layer_show();
		apply_button=false;
		console.log("打后玩家信息界面 ok",apply_button);
	}
	
}


//打开玩家菜单
function open_user_menu(event){
	console.log("打开了玩家菜单 ok",apply_button);
	if(apply_button){
		user_menu_Layer_show();
		apply_button=false;
	}
}


//打开游戏菜单
function open_game_menu(event){
	console.log("打开了游戏菜单 ok",apply_button);
	if(apply_button){
		game_menu_Layer_show();
		apply_button=false;
	}
}

//打开装备介绍界面
function open_zb_jieshao_pg(zb_name){
	console.log(zb_name,"打开了装备头部 ok",apply_button);
	if(apply_button){
		zb_jieshao_show(zb_name);
		apply_button=false;
	}
}


//打开玩家背包
function open_beibao_pg(event){
	if(apply_button){
		beibaoinfo_Layer_show();
		apply_button=false;
	}
}

//打开游戏设置界面
function open_gamesetting(event){
	if(apply_button){
		gamesetting_Layer_show();
		apply_button=false;
	}
}

//打开地图界面
function open_mapsmall(event){
	if(apply_button){
		mapsmall_Layer_show();
		apply_button=false;
	}
}


//玩家任务界面
function open_task_pg(){
	console.log("打开玩家任务界面");
	if(apply_button){
		task_Layer_show();
		apply_button=false;
	}
}


// 打开玩家技能界面  open_jineng_pg
function open_jineng_pg(){
	console.log("打开玩家技能界面");
	if(apply_button){
		jineng_Layer_show();
		apply_button=false;
	}
}


// 打开玩家商店界面  open_shangdian_pg
function open_shangdian_pg(){
	console.log("打开玩家商店界面");
	if(apply_button){
		shangdian_Layer_show();
		apply_button=false;
	}
}



/*
	游戏战斗玩法 0.1

1. 玩家和怪物轮流进行攻击回合;    V
2. 玩家回合  可以使用 一次物理攻击，四次技能; V  
3. 玩家回合  只有在玩家做出物理攻击后，才能结束本次回合；V
4. 玩家战斗按钮  V
5. 玩家攻击与技能特效  V
6. 怪物回合  当玩家回合结束后，轮到怪物回合，怪物进攻完成后自动轮到玩家进攻;  V
7. 技能使用  每到玩家进行的回合需要判断技能使用需要的能量是否满足使用,不满足则显示能量不足无法使用；  V
8. 攻击      每次的攻击（玩家&怪物），都要进行生命，能量的计算；  V
9. 判断结束  当玩家or怪物生命值为0时战斗结束,if 玩家死亡则战斗失败点击退出战斗,if 怪物死亡战斗胜利，进入奖励界面点击退出战斗；  V
10. 怪物攻击特效  V



*/

/*
	游戏战斗玩法 0.2

1. 玩家消耗栏        V
2. 玩家可装备五个消耗品 每回合只能使用一次   
3. 自动攻击                       V
4. 查看技能按钮 界面         
5. 
6. 回合数显示    V
7. boss AI放技能
8. 玩家被攻击红屏特效
9. 战斗界面信息提示框     V
10.



*/




//测试能量消耗
var test_ep;
//游戏结束锁 游戏结束判断标识
var game_over_lock;

//回合结束背景按钮
var huihe_end_bk_image;

//战斗界面资源渲染数组
var game_zhangdou_imgData = new Array;


//游戏胜利显示图层
var game_victory_L;
//游戏胜利背景图
var game_victory_bk;


//游戏失败显示图层
var game_over_L;
//游戏失败背景图
var game_over_bk;


//打击层
var daji_Layer;
var daji_image;


//伤害 治疗 恢复 显示
var shanghai_show_boss;
var shanghai_show_user;
var zhiliao_show_boss;
var zhiliao_show_user;
var huifu_show_boss;
var huifu_show_user;
//玩家能量减少显示
var user_ep_xiaohao_L;


//技能图标
var jn_1_img_data;
var jn_2_img_data;
var jn_3_img_data;
var jn_4_img_data;

//魔法攻击特效显示图层
var mf_jineng_tx_L;
//魔法攻击特效图1
var mf_jineng_img_1;
//魔法攻击特效图2
var mf_jineng_img_2;
//魔法攻击特效图3
var mf_jineng_img_3;
//魔法攻击特效图4
var mf_jineng_img_4;


//玩家信息
var user_zd_info_data = {
	//玩家血量
	user_zd_hp : 100,
	//玩家能量
	user_zd_ep : 100,
	//玩家攻击力
	user_zd_gj : 80,
	//玩家技能1 伤害
	user_zd_jn_1 : 120,
	//玩家技能2 伤害
	user_zd_jn_2 : 80,
	//玩家技能3 伤害
	user_zd_jn_3 : 40,
	//玩家技能4 伤害
	user_zd_jn_4 : 40,
	//玩家技能消耗能量值
	user_zd_jn_xh_1 : 30,
	user_zd_jn_xh_2 : 20,
	user_zd_jn_xh_3 : 10,
	user_zd_jn_xh_4 : 10,
}

//Boss怪物栏显示图层
var game_guaiwu_Layer;

//怪物信息
var boss_1_info_data = {
	//boss血量
	boss_init_hp : 500,
	//boss能量
	boss_init_ep : 100,
	//boss 攻击力
	boss_init_gj : 20,
}
//怪物当前血量
var boss_hp_now;

//怪物血量显示图层
var boss_hp_show_L;
//怪物血量与怪物血量血量背景显示图
var boss_hp_image;
var boss_hpep_bk_image;

//玩家血量蓝量显示框
var user_hpep_bk_image;

//玩家当前血量显示图层
var user_hp_now_L;
//玩家血量显示图片
var user_hp_img_data;

//玩家当前血量
var user_hp_number;



//玩家当前能量显示图层
var user_ep_now_L;
//玩家蓝量显示图片
var user_ep_img_data;

//玩家当前蓝量
var user_ep_number;

//玩家物理攻击图标
var wl_gj_img_data;


//boss的攻击回合
var boss_gongji_show_L;
//boss 攻击特效
var boss_gj_tx_show_L;
//boss 攻击特效图
var boss_gj_1_img;


//回合数显示层
var huihe_show_L;

//记录回合数
var huihe_number;


//自动攻击 key
var auto_gongji_lock;
//自动攻击按钮显示层
var auto_gongji_L;
//自动战斗按钮文字显示
var auto_button_txt;

//自动攻击计时器
var auto_Timer;
//物理攻击计时器
var auot_wulimyTimer;
//魔法攻击计算器
var mfgongji_myTimer;


//战斗界面按钮背景图像
var zhandou_button_bk;


//玩家当前能量是否够魔法卡牌使用
var mf_ep_ok_1;
var mf_ep_ok_2;
var mf_ep_ok_3;
var mf_ep_ok_4;


//boss 是否可以进行攻击
var boss_gongji_lock;


//消耗栏按钮
var xiaohao_button_L;
//消耗栏按钮显示锁
var xiaohao_button_lock;
//玩家消耗品界面
var xiaohao_lan_L;
//玩家消耗品界面背景
var xiaohao_lan_bk;


//boss 回合锁  在boss回合玩家不能进行操作
var boss_huihe_lock;


//战斗界面提示框
var zhandou_tishi_L;



//进入战斗初始化数据
var game_zhandou_init_info = {
	zandou_bk_img : {name:"zandou_bk",path:"../ui/game/game_sole_3.jpg"},
	zandou_user_chaozuo_bk_img : {name:"chaozuo_bk",path:"../ui/game/zhandou_chaozuo.png"},
	zandou_guaiwu_bk_img : {name:"guaiwu_bk_1",path:"../ui/game/guaiwu_info_3.png"},
	zandou_hpep_bk_img : {name:"hpep_bk",path:"../ui/game/game_hp_ep_1.png"},
	zandou_hp_img : {name:"game_hp",path:"../ui/game/game_hp.jpg"},
	zandou_ep_img : {name:"game_ep",path:"../ui/game/game_ep.jpg"},
	zandou_huihe_end_img : {name:"huihe_end",path:"../ui/game/huige_end_1.jpg"},
	zandou_wuli_gongji_img : {name:"wuli_gongji",path:"../ui/game/zhandou_wuligongji_1.png"},
	zandou_boss_1 : {name:"zd_boss_1",path:"../ui/npc/boss_1_zd.png"},
	zandou_boss_hpep_bk : {name:"boss_hpep_bk",path:"../ui/game/boss_hpep_bk.png"},
	zandou_setting_bt_bk : {name:"setting_bt_bk",path:"../ui/game/zd_setting_bt_bk.png"},
	zandou_daji : {name:"daji",path:"../ui/game/1_00004.png"},
	//游戏胜利显示图
	zandou_victory : {name:"victory_bk",path:"../ui/game/game_victory_2.png"},
	//游戏失败显示图
	zandou_failed : {name:"game_fail_bk",path:"../ui/game/game_over_you_die_1.jpg"},
	//游戏技能特效图
	jn_image_1 : {name:"jn_1",path:"../ui/daji/jn_1.png"},
	jn_image_2 : {name:"jn_2",path:"../ui/daji/jn_2_1.png"},
	jn_image_3 : {name:"jn_3",path:"../ui/daji/jn_3.png"},
	jn_image_4 : {name:"jn_4",path:"../ui/daji/jn_4.png"},
	//boss攻击特效
	boss_gj_1 : {name:"boss_gj1",path:"../ui/daji/boss_gj_2.png"},
	//技能图标
	//jn_1
	jn_1_img : {name:"jn_1_tb",path:"../ui/jineng/jn_1.png"},
	//jn_2
	jn_2_img : {name:"jn_2_tb",path:"../ui/jineng/jn_9.png"},
	//jn_3
	jn_3_img : {name:"jn_3_tb",path:"../ui/jineng/jn_7.png"},
	//jn_4
	jn_4_img : {name:"jn_4_tb",path:"../ui/jineng/jn_6.png"},
	//物理攻击图标
	wuligongji_img : {name:"wuligj_img",path:"../ui/game/gj_tb_1.png"},
	xiaohao_img_bk : {name:"xiaohao_bk",path:"../ui/login/zandou_xiaohao_bk.jpg"},
}	

//需要优化 循环加载
/*
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_bk_img);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_user_chaozuo_bk_img);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_guaiwu_bk_img);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_hpep_bk_img);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_hp_img);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_ep_img);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_huihe_end_img);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_wuli_gongji_img);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_boss_1);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_boss_hpep_bk);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_setting_bt_bk);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_daji);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_victory);
game_zhangdou_imgData.push(game_zhandou_init_info.jn_image_1);
game_zhangdou_imgData.push(game_zhandou_init_info.jn_image_2);
game_zhangdou_imgData.push(game_zhandou_init_info.jn_image_3);
game_zhangdou_imgData.push(game_zhandou_init_info.jn_image_4);
game_zhangdou_imgData.push(game_zhandou_init_info.boss_gj_1);
game_zhangdou_imgData.push(game_zhandou_init_info.zandou_failed);
game_zhangdou_imgData.push(game_zhandou_init_info.jn_1_img);
game_zhangdou_imgData.push(game_zhandou_init_info.jn_2_img);
game_zhangdou_imgData.push(game_zhandou_init_info.jn_3_img);
game_zhangdou_imgData.push(game_zhandou_init_info.jn_4_img);
game_zhangdou_imgData.push(game_zhandou_init_info.wuligongji_img);

*/

//获取战斗资源 图像渲染 加载入游戏
function get_game_zhandou_data(){
	var game_zhandou_image = new Array()
	for(var game_zhandou_i in game_zhandou_init_info){
		game_zhandou_image.push(game_zhandou_init_info[game_zhandou_i]);
	}
	return game_zhandou_image;
}

var game_zhangdou_imgData = get_game_zhandou_data();


//游戏战斗界面
function game_zhandou_Layer_show(){
	apply_button = true;//false;
	//加载user info信息资源
	loadingLayer2 = new LoadingSample4();
	addChild(loadingLayer2);
	/**读取图片*/
	/*
	LLoadManage.load(game_zhangdou_imgData,
		function(progress){
			loadingLayer2.setProgress(progress);
		},game_zhandou_Layer_show_init);
		*/
		var loadManage = new LLoadManage();
				loadManage.addEventListener(LEvent.PROGRESS, progressFunc);
				loadManage.addEventListener(LEvent.ERROR, errorFunc);
				loadManage.addEventListener(LEvent.COMPLETE, game_zhandou_Layer_show_init);
				loadManage.load(game_zhangdou_imgData);
	}

function progressFunc(event) {
				var progress = (event.loaded * 100 / event.total).toFixed(2);
				loadingLayer2.setProgress(progress); 
			}
function errorFunc(event) {
				trace("error url:" + event.responseURL);
			}

//进入游戏战斗
function game_zhandou_Layer_show_init(event){
	var gameinfo_dataList = event.target;

	if(game_zhandou_Layer){
		game_zhandou_Layer.remove();
		game_zhandou_Layer = null;
	}

	//游戏战斗锁  true 能执行战斗操作
	game_over_lock = true;

	//战斗初始化
	test_ep = 20;

	//加载回合结束按钮背景图
	huihe_end_bk_image = gameinfo_dataList["huihe_end"];

	//初始化检查当前能量满足释放哪些技能卡牌
	get_auot_jinneg();

	//初始化boss是否可以进行攻击
	boss_gongji_lock = true;

	removeChild(loadingLayer2);
	loadingLayer2 = null;
	//定义游戏背景层

	//玩家移动与游戏界面功能按钮锁
	apply_button=false;
	KEY_lock = false;

	//玩家消耗栏背景图
	xiaohao_lan_bk = gameinfo_dataList["xiaohao_bk"];

	// 初始化 boss 回合锁
	boss_huihe_lock = false;


	game_zhandou_Layer = new LSprite();
   	backLayer.addChild(game_zhandou_Layer);

   	//加载背景
	var game_main_bk_bitmap = new LBitmap(new LBitmapData(gameinfo_dataList["zandou_bk"]));
	game_zhandou_Layer.addChild(game_main_bk_bitmap);

	//定义游戏胜利背景图
	game_victory_bk = gameinfo_dataList["victory_bk"];
	//定义游戏失败背景图
	game_over_bk = gameinfo_dataList["game_fail_bk"];

	//玩家物理攻击图标
	wl_gj_img_data = gameinfo_dataList["wuligj_img"];

	//技能图标
	jn_1_img_data = gameinfo_dataList["jn_1_tb"];
	jn_2_img_data = gameinfo_dataList["jn_2_tb"];
	jn_3_img_data = gameinfo_dataList["jn_3_tb"];
	jn_4_img_data = gameinfo_dataList["jn_4_tb"];

	//魔法攻击特效图1
	mf_jineng_img_1 = gameinfo_dataList["jn_1"];
	//魔法攻击特效图2
	mf_jineng_img_2 = gameinfo_dataList["jn_2"];
	//魔法攻击特效图3
	mf_jineng_img_3 = gameinfo_dataList["jn_3"];
	//魔法攻击特效图4
	mf_jineng_img_4 = gameinfo_dataList["jn_4"];

	//boss攻击特效图
	boss_gj_1_img = gameinfo_dataList["boss_gj1"];


	//加载玩家操作栏
	game_user_chaozuo_Layer = new LSprite();
	game_zhandou_Layer.addChild(game_user_chaozuo_Layer);

	//加载玩家操作背景
	var game_chaozuo_bk_bitmap = new LBitmap(new LBitmapData(gameinfo_dataList["chaozuo_bk"]));
	game_chaozuo_bk_bitmap.x = 10;
	game_chaozuo_bk_bitmap.y = 500;
	game_user_chaozuo_Layer.addChild(game_chaozuo_bk_bitmap);

	//玩家血量蓝量显示框
	user_hpep_bk_image = gameinfo_dataList["hpep_bk"];

	//玩家血量
	//玩家血量显示图片
	user_hp_img_data = gameinfo_dataList["game_hp"];
	//玩家当前血量
	user_hp_number = user_zd_info_data.user_zd_hp;
	user_hp_now_show(user_hp_img_data,user_hpep_bk_image,user_hp_number);

	//玩家能量
	//玩家蓝量显示图片
	user_ep_img_data = gameinfo_dataList["game_ep"];
	//玩家当前能量
	user_ep_number = user_zd_info_data.user_zd_ep;
	user_ep_now_show(user_ep_img_data,user_hpep_bk_image,user_ep_number);


	//玩家当前攻击防御
	var zd_boss_1_Label = new LTextField();
	zd_boss_1_Label.text = " 物理攻击： 80     物理防御： 0     魔法防御： 0 ";
	zd_boss_1_Label.size = 16
	zd_boss_1_Label.color = "#ffffff";
	zd_boss_1_Label.x = 50;
	zd_boss_1_Label.y = 560;
	game_user_chaozuo_Layer.addChild(zd_boss_1_Label);

	//初始化回合数
	huihe_number = 1;

	//回合数
	huihe_number_show(huihe_number);

	


	//打击图片
	daji_image = gameinfo_dataList["daji"];

	//战斗界面按钮的图像
	zhandou_button_bk = gameinfo_dataList["setting_bt_bk"];

	//初始化消耗栏按钮 lock
	xiaohao_button_lock = false;
	//战斗消耗栏按钮
	zhandou_xiaohao_button_show();

	//初始化自动按钮 lock
	auto_gongji_lock = false;
	//自动攻击按钮显示
	auto_zhandou_button_show();

	
	

	//战斗设置按钮3
	var zd_setting3_button_bitmap = new LBitmap(new LBitmapData(zhandou_button_bk));
	zd_setting_3_button = new LButton(zd_setting3_button_bitmap);
	zd_setting_3_button.x = 250;
	zd_setting_3_button.y = 740;
	game_zhandou_Layer.addChild(zd_setting_3_button);
	var zd_setting3_Label = new LTextField();
		zd_setting3_Label.setWordWrap(true);
		zd_setting3_Label.text = "关闭声音";
		zd_setting3_Label.size = 18;
		zd_setting3_Label.color = "#ffffff";
		zd_setting3_Label.x = 260;
		zd_setting3_Label.y = 750;
		game_zhandou_Layer.addChild(zd_setting3_Label);
	zd_setting_3_button.addEventListener(LMouseEvent.MOUSE_UP,function(event){
		if(game_over_lock){
		console.log("zd_setting_3_button");

		//战斗提示框
		zhandou_tishi_show("关闭声音");

		}
	});

	//战斗设置按钮4
	var zd_setting4_button_bitmap = new LBitmap(new LBitmapData(zhandou_button_bk));
	zd_setting_4_button = new LButton(zd_setting4_button_bitmap);
	zd_setting_4_button.x = 350;
	zd_setting_4_button.y = 740;
	game_zhandou_Layer.addChild(zd_setting_4_button);
	var zd_setting4_Label = new LTextField();
		zd_setting4_Label.setWordWrap(true);
		zd_setting4_Label.text = "查看技能";
		zd_setting4_Label.size = 18;
		zd_setting4_Label.color = "#ffffff";
		zd_setting4_Label.x = 360;
		zd_setting4_Label.y = 750;
		game_zhandou_Layer.addChild(zd_setting4_Label);
	zd_setting_4_button.addEventListener(LMouseEvent.MOUSE_UP,function(event){
		if(game_over_lock){
		console.log("zd_setting_4_button");
		
		}
	});

	//结束回合按钮
	huihe_end_no_show(gameinfo_dataList["huihe_end"]);
	


	//攻击技能卡图像框
	wuligongji_img = gameinfo_dataList["wuli_gongji"];
	//物理攻击卡
	wuligongji_show();
	//魔法技能卡1
	mf_gongji_1_show(jn_1_img_data);
	//魔法技能卡2
	mf_gongji_2_show(jn_2_img_data);
	//魔法技能卡3
	mf_gongji_3_show(jn_3_img_data);
	//魔法技能卡4
	mf_gongji_4_show(jn_4_img_data);



	//加载怪物栏
	game_guaiwu_Layer = new LSprite();
	game_zhandou_Layer.addChild(game_guaiwu_Layer);

	//加载怪物栏背景
	var game_guaiwu_bk_bitmap = new LBitmap(new LBitmapData(gameinfo_dataList["guaiwu_bk_1"]));
	game_guaiwu_bk_bitmap.x = 0;
	game_guaiwu_bk_bitmap.y = 5;
	game_guaiwu_Layer.addChild(game_guaiwu_bk_bitmap);

	//加载怪物头像
	var zd_boss_1_bitmap = new LBitmap(new LBitmapData(gameinfo_dataList["zd_boss_1"]));
	zd_boss_1_bitmap.x = 100;
	zd_boss_1_bitmap.y = 50;
	game_guaiwu_Layer.addChild(zd_boss_1_bitmap);

	//加载怪物名称
	var zd_boss_1_Label = new LTextField();
	zd_boss_1_Label.text = "Boss - 1 <LV 1>   (火)";
	zd_boss_1_Label.size = 15
	zd_boss_1_Label.color = "#ffffff";
	zd_boss_1_Label.x = 200;
	zd_boss_1_Label.y = 50;
	game_guaiwu_Layer.addChild(zd_boss_1_Label);

	//怪物血量与血量能量显示框图片资源
	boss_hp_image = gameinfo_dataList["game_hp"];
	boss_hpep_bk_image = gameinfo_dataList["boss_hpep_bk"];
	
	//显示当前怪物的血量
	boss_hp_now = boss_1_info_data.boss_init_hp;
	boss_hp_show(boss_hp_image,boss_hpep_bk_image,boss_hp_now);

	//加载怪物能量
	var zd_boss_1_ep = new LBitmap(new LBitmapData(gameinfo_dataList["game_ep"],10,0,205,16));
	zd_boss_1_ep.x = 170;
	zd_boss_1_ep.y = 90;
	game_guaiwu_Layer.addChild(zd_boss_1_ep);
	var zd_boss_1_ep_bitmap = new LBitmap(new LBitmapData(gameinfo_dataList["boss_hpep_bk"]));
	zd_boss_1_ep_bitmap.x = 170;
	zd_boss_1_ep_bitmap.y = 90;
	game_guaiwu_Layer.addChild(zd_boss_1_ep_bitmap);
	
	
	


}

//游戏回合数显示
function huihe_number_show(number){
	if(huihe_show_L){
		huihe_show_L.remove();
		huihe_show_L = null;
	}

	huihe_show_L = new LSprite();
	game_zhandou_Layer.addChild(huihe_show_L);
	console.log("第 "+number+"回合；","boss剩余生命 : "+boss_hp_now);
	var huihe_number_Label = new LTextField();
	huihe_number_Label.text = "[第 "+number+" 回合]";
	huihe_number_Label.size = 20
	huihe_number_Label.color = "#ffffff";
	huihe_number_Label.x = 210;
	huihe_number_Label.y = 5;
	huihe_show_L.addChild(huihe_number_Label);
}


//显示自动攻击按钮 函数
function auto_zhandou_button_show(){

	if(auto_gongji_L){
		auto_gongji_L.remove();
		auto_gongji_L = null;
	}

	auto_gongji_L = new LSprite();
	game_zhandou_Layer.addChild(auto_gongji_L);

	if(auto_gongji_lock){
		auto_button_txt = "关闭自动";
		zhandou_tishi_show("开启自动攻击");
	}
	else{
		auto_button_txt = "自动战斗";
		zhandou_tishi_show("本次回合结束后停止自动攻击");
	}
	//自动攻击按钮
	var zd_setting2_button_bitmap = new LBitmap(new LBitmapData(zhandou_button_bk));
	zd_setting_2_button = new LButton(zd_setting2_button_bitmap);
	zd_setting_2_button.x = 150;
	zd_setting_2_button.y = 740;
	auto_gongji_L.addChild(zd_setting_2_button);
	var zd_setting2_Label = new LTextField();
	zd_setting2_Label.setWordWrap(true);
	zd_setting2_Label.text = auto_button_txt;
	zd_setting2_Label.size = 18;
	zd_setting2_Label.color = "#ffffff";
	zd_setting2_Label.x = 160;
	zd_setting2_Label.y = 750;
	auto_gongji_L.addChild(zd_setting2_Label);
	zd_setting_2_button.addEventListener(LMouseEvent.MOUSE_UP,function(event){
		if(game_over_lock || auto_gongji_lock){
			console.log("zd_setting_2_button");
			//自动攻击
			//自动攻击 lock
			auto_zhandou();
		}
	});
}


//自动战斗
function auto_zhandou(){
	//清理自动战斗计算器
	if(auto_Timer){
		auto_Timer.stop();
		auto_Timer = null;
	}

	else{
		//创建自动战斗计算器
		auto_Timer = new LTimer(4000, 10);
		auto_Timer.addEventListener(LTimerEvent.TIMER, function(){
					auot_gongji_1();
					console.log("自动攻击");
				});
	}

	//初始化自动按钮 lock
	if(auto_gongji_lock){
		auto_gongji_lock = false;
		game_over_lock = true;
		auot_stop();
	}
	else{
		auot_gongji_1();
		auto_gongji_lock = true;
		game_over_lock = false;
		auto_Timer.start();
		

	}
	//自动攻击按钮显示
	auto_zhandou_button_show();

}


//停止自动战斗
function auot_stop(){
	//关闭自动战斗计时器
		if(auto_Timer){
			auto_Timer.stop();
			auto_Timer = null;
		}
		/*
		//关闭自动战斗物理攻击计时器
		if(auot_wulimyTimer){
			auot_wulimyTimer.stop();
			auot_wulimyTimer = null;
		}
		*/
		if(mfgongji_myTimer){
			mfgongji_myTimer.stop();
			mfgongji_myTimer = null;
		}
}


function auot_gongji_1(){
	//自动攻击

	//回合
	console.log("开始自动攻击: ");
	console.log("回合: < "+huihe_number+" >");	
	//判断玩家是否还有普通攻击卡牌
	if(wuligongji_L){
		console.log("可以进行物理攻击");
		//物理攻击第 200ms
		auot_wulimyTimer = new LTimer(500, 1); 
		
		auot_wulimyTimer.addEventListener(LTimerEvent.TIMER, timerHandler);

		//物理攻击卡牌动图  to x=200  y=250
		LTweenLite.to(wuligongji_L,0.2,{x:200,y:250,ease:LEasing.Sine.easeInOut,onComplete:function(e){
						if(wuligongji_L){
							
							console.log("使用物理攻击");
							if(auot_wulimyTimer){
								auot_wulimyTimer.start();
							}
							
							console.log("物理攻击完成，boss剩余生命 : "+boss_hp_now);
						}
					}
				});
			auot_wulimyTimer.addEventListener(LTimerEvent.TIMER_COMPLETE, auot_mf_gongji_1);

	}
	else{
		/*
		if(auot_wulimyTimer){
			auot_wulimyTimer.stop();
			auot_wulimyTimer = null;
		}
		*/
			console.log("无法进行物理攻击");
			auot_mf_gongji_1();
		}

	//return auot_gongji_1();
}


//自动魔法攻击
function auot_mf_gongji_1(){
	//判断玩家是否可以进行魔法攻击
	console.log("判断能否进行魔法攻击");
			var mf_auot = get_auot_jinneg();
			console.log("判断值 : "+mf_auot);
			if(mf_auot){
				console.log("可以进行魔法攻击");
				if(mf_ep_ok_1){
					//技能攻击卡牌1动图  to x=200  y=250
					LTweenLite.to(mf_gongji_1_L,0.2,{x:200,y:250,ease:LEasing.Sine.easeInOut,onComplete:function(e){
						if(mf_gongji_1_L){
							
							console.log("使用技能1");
							/*
							if(mfgongji_myTimer){
								mfgongji_myTimer.stop();
								mfgongji_myTimer = null;
							}
							*/

							//魔法攻击第 800ms
							mfgongji_myTimer = new LTimer(600, 1);
							mfgongji_myTimer.addEventListener(LTimerEvent.TIMER, function(){
								console.log("使用魔法攻击1");
								//对应玩家减少的能量值
								user_ep_xiaohao_show(user_zd_info_data.user_zd_jn_xh_1);
								get_jineng_xiao();

								//执行技能攻击
								var myTimer = new LTimer(100, 1);
								myTimer.addEventListener(LTimerEvent.TIMER, timerHandler_mf_gongji_1);
								myTimer.start();
							});
							mfgongji_myTimer.start();
							console.log("魔法攻击1完成，boss剩余生命 : "+boss_hp_now);
							}
						}
					});
					//判断boss 血量 如果boss 死亡则停止自动攻击
					if(boss_hp_now<=0){
						console.log("Boss 死亡！");
						//如果是自动攻击则停止
						auot_stop();
						//显示游戏胜利
						game_victory_show(game_victory_bk);
					}
					else{
						user_zhandou_end();
						
					}
				}
				else if(mf_ep_ok_2){
					//技能攻击卡牌2动图  to x=200  y=250
					LTweenLite.to(mf_gongji_2_L,0.2,{x:200,y:250,ease:LEasing.Sine.easeInOut,onComplete:function(e){
						if(mf_gongji_2_L){
							
							console.log("使用技能2");
							//魔法攻击第 800ms
							mfgongji_myTimer = new LTimer(600, 1);
							mfgongji_myTimer.addEventListener(LTimerEvent.TIMER, function(){
								console.log("使用魔法攻击2");
								//对应玩家减少的能量值
								user_ep_xiaohao_show(user_zd_info_data.user_zd_jn_xh_2);
								get_jineng_xiao();

								var myTimer = new LTimer(100, 1);
								myTimer.addEventListener(LTimerEvent.TIMER, timerHandler_mf_gongji_2);
								myTimer.start();
							});

							mfgongji_myTimer.start();
							console.log("魔法攻击2完成，boss剩余生命 : "+boss_hp_now);
							}
						}
					});
					//判断boss 血量 如果boss 死亡则停止自动攻击
					if(boss_hp_now<=0){
						console.log("Boss 死亡！");
						//如果是自动攻击则停止
						auot_stop();
					}
					else{
						user_zhandou_end();
					}
				}
				else if(mf_ep_ok_3){
					//技能攻击卡牌3动图  to x=200  y=250
					LTweenLite.to(mf_gongji_3_L,0.2,{x:200,y:250,ease:LEasing.Sine.easeInOut,onComplete:function(e){
						if(mf_gongji_3_L){
							
							console.log("使用技能3");
							//魔法攻击第 800ms
							mfgongji_myTimer = new LTimer(600, 1);
							mfgongji_myTimer.addEventListener(LTimerEvent.TIMER, function(){
								console.log("使用魔法攻击3");
								//对应玩家减少的能量值
								user_ep_xiaohao_show(user_zd_info_data.user_zd_jn_xh_3);
								get_jineng_xiao();

								var myTimer = new LTimer(100, 1);
								myTimer.addEventListener(LTimerEvent.TIMER, timerHandler_mf_gongji_3);
								myTimer.start();
							});
							mfgongji_myTimer.start();
							console.log("魔法攻击3完成，boss剩余生命 : "+boss_hp_now);
							}
						}
					});
					//判断boss 血量 如果boss 死亡则停止自动攻击
					if(boss_hp_now<=0){
						console.log("Boss 死亡！");
						//如果是自动攻击则停止
						auot_stop();
					}
					else{
						
						user_zhandou_end();
					}
				}
				else if(mf_ep_ok_4){
					//技能攻击卡牌4动图  to x=200  y=250
					LTweenLite.to(mf_gongji_4_L,0.2,{x:200,y:250,ease:LEasing.Sine.easeInOut,onComplete:function(e){
						if(mf_gongji_4_L){
							
							console.log("使用技能4");
							//魔法攻击第 800ms
							mfgongji_myTimer = new LTimer(600, 1);
							mfgongji_myTimer.addEventListener(LTimerEvent.TIMER, function(){
								console.log("使用魔法攻击4");
								//对应玩家减少的能量值
								user_ep_xiaohao_show(user_zd_info_data.user_zd_jn_xh_4);
								get_jineng_xiao();

								var myTimer = new LTimer(100, 1);
								myTimer.addEventListener(LTimerEvent.TIMER, timerHandler_mf_gongji_4);
								myTimer.start();
							});
							mfgongji_myTimer.start();
							console.log("魔法攻击4完成，boss剩余生命 : "+boss_hp_now);
							}
						}
					});
					//判断boss 血量 如果boss 死亡则停止自动攻击
					if(boss_hp_now<=0){
						console.log("Boss 死亡！");
						//如果是自动攻击则停止
						auot_stop();
					}
					else{
						user_zhandou_end();
					}
				}
				mf_auot = null;
			}
			else if(!mf_auot){
				console.log("不能进行魔法攻击");
				console.log("只能结束回合");
				//判断boss 血量 如果boss 死亡则停止自动攻击
				if(boss_hp_now<=0){
					console.log("Boss 死亡！");
					//如果是自动攻击则停止
					auot_stop();
					//显示游戏胜利
					game_victory_show(game_victory_bk);
				}
				else{
					//boss攻击
					user_zhandou_end();
				}
				mf_auot =null;
				
			}
}


//测试打击动画
function daji_show(daji_image){

	if(daji_Layer){
		daji_Layer.remove();
		daji_Layer = null;
	}

	daji_Layer = new LSprite();
   	game_zhandou_Layer.addChild(daji_Layer);

	var daji = new LBitmap(new LBitmapData(daji_image));
	daji.x = 10;
	daji.y = 0;
	daji_Layer.addChild(daji);
}


//回合结束按钮
function huihe_end_ok_show(bk_image){
	if(huige_end_L){
		huige_end_L.remove();
		huige_end_L = null;
	}
	huige_end_L = new LSprite();
	game_user_chaozuo_Layer.addChild(huige_end_L);
	var huige_go_bitmap = new LBitmap(new LBitmapData(bk_image));
	var huige_go_button = new LButton(huige_go_bitmap);
	huige_go_button.x = 195;
	huige_go_button.y = 490;
	huige_end_L.addChild(huige_go_button);
	huige_go_button.addEventListener(LMouseEvent.MOUSE_UP,user_zhandou_end);
	/*
	huige_go_button.addEventListener(LMouseEvent.MOUSE_UP,function(){
		if(game_over_lock){
			console.log("回合结束");

			//轮到boss的回合
			huihe_boss_show(huihe_end_bk_image);
			
			//怪物的攻击回合
			var myTimer_gj_tx = new LTimer(1000, 1);
			myTimer_gj_tx.addEventListener(LTimerEvent.TIMER, function(){
				//boss 攻击图
				boss_gj_tx_show(boss_gj_1_img);
				//boss 攻击动图 y=20 to y=500
				LTweenLite.to(boss_gj_tx_show_L,0.5,{y:500,ease:LEasing.Sine.easeInOut,onComplete:function(e){
						if(boss_gj_tx_show_L){
							boss_gj_tx_show_L.remove();
							boss_gj_tx_show_L = null;
						}
					}
				});
			});
			myTimer_gj_tx.start();

			//显示玩家所掉的血量
			var myTimer = new LTimer(2000, 1);
			myTimer.addEventListener(LTimerEvent.TIMER, function(){
				//怪物攻击玩家 计算玩家掉血量
				boss_gongji_show(boss_1_info_data.boss_init_gj);
			});
			myTimer.start();

			//清除显示数字
			var bossmyTimer = new LTimer(2500, 1);
			bossmyTimer.addEventListener(LTimerEvent.TIMER, function(){
				if(boss_gongji_show_L){
					boss_gongji_show_L.remove();
					boss_gongji_show_L = null;
				}
			});
			bossmyTimer.start();

			//轮到玩家的回合
			var to_user_myTimer = new LTimer(3500, 1);
			to_user_myTimer.addEventListener(LTimerEvent.TIMER, function(){
				//当点击回合结束时 更新 物理攻击卡 和 各个技能卡
				wuligongji_show();
				//判断当前的能量够使用哪些技能
				huihe_end_get_jineng();
				//显示玩家回合
				huihe_end_no_show(huihe_end_bk_image);
				//回合数加一
				huihe_number += 1;
				huihe_number_show(huihe_number);
			});

			to_user_myTimer.start();
		
		}
	});
	
	*/

	var huige_go_Label = new LTextField();
	huige_go_Label.text = "【结束回合】";
	huige_go_Label.size = 18
	huige_go_Label.color = "#ffffff";
	huige_go_Label.x = 198;
	huige_go_Label.y = 515;
	huige_end_L.addChild(huige_go_Label);
	

}


//回合结束 boss 攻击
function user_zhandou_end(){

	if(xiaohao_button_lock){
			zhandou_tishi_show("请关闭消耗栏才能结束回合！");
		}
	
	if(game_over_lock  || auto_gongji_lock ){
			console.log("回合结束");

		console.log("user_zhandou_end","boss生命"+boss_hp_now);
		if(boss_hp_now>0){

			//轮到boss的回合
			boss_huihe_lock = true;

			huihe_boss_show(huihe_end_bk_image);
			
			if(boss_gongji_lock){
			//怪物的攻击回合
			var myTimer_gj_tx = new LTimer(1500, 1);
			myTimer_gj_tx.addEventListener(LTimerEvent.TIMER, function(){
				//boss 攻击图
				boss_gj_tx_show(boss_gj_1_img);
				//boss 攻击动图 y=20 to y=500
				LTweenLite.to(boss_gj_tx_show_L,0.5,{y:500,ease:LEasing.Sine.easeInOut,onComplete:function(e){
						if(boss_gj_tx_show_L){
							boss_gj_tx_show_L.remove();
							boss_gj_tx_show_L = null;
						}
					}
				});
			});
			myTimer_gj_tx.start();

			//显示玩家所掉的血量
			var myTimer = new LTimer(2000, 1);
			myTimer.addEventListener(LTimerEvent.TIMER, function(){
				//怪物攻击玩家 计算玩家掉血量
				console.log("boss 攻击");
				boss_gongji_show(boss_1_info_data.boss_init_gj);
			});
			myTimer.start();




			//清除显示数字
			var bossmyTimer = new LTimer(2500, 1);
			bossmyTimer.addEventListener(LTimerEvent.TIMER, function(){
				if(boss_gongji_show_L){
					boss_gongji_show_L.remove();
					boss_gongji_show_L = null;
				}
			});
			bossmyTimer.start();
			}
		}
		else{
			console.log("boss死亡无法进行攻击");
		}

			//轮到玩家的回合
			var to_user_myTimer = new LTimer(3000, 1);
			to_user_myTimer.addEventListener(LTimerEvent.TIMER, function(){



				//当点击回合结束时 更新 物理攻击卡 和 各个技能卡
				wuligongji_show();
				//判断当前的能量够使用哪些技能
				huihe_end_get_jineng();
				//显示玩家回合
				huihe_end_no_show(huihe_end_bk_image);
				//回合数加一
				huihe_number += 1;
				huihe_number_show(huihe_number);

				//释放boss回合锁
				boss_huihe_lock = false;
				xiaohao_button_lock = true;
				open_xiaohao_show(xiaohao_lan_bk);
				
				
			});
			
			to_user_myTimer.start();

		
		}
	
}



//您的回合
function huihe_end_no_show(bk_image){
	if(huige_end_L){
		huige_end_L.remove();
		huige_end_L = null;
	}

	huige_end_L = new LSprite();
	game_user_chaozuo_Layer.addChild(huige_end_L);
	var huige_go_bitmap = new LBitmap(new LBitmapData(bk_image));
	var huige_go_button = new LButton(huige_go_bitmap);
	huige_go_button.x = 195;
	huige_go_button.y = 490;
	huige_go_button.setState(LButton.STATE_DISABLE);
	huige_end_L.addChild(huige_go_button);
	
	var huige_go_Label = new LTextField();
	huige_go_Label.text = "【您的回合】";
	huige_go_Label.size = 18
	huige_go_Label.color = "#ffffff";
	huige_go_Label.x = 198;
	huige_go_Label.y = 515;
	huige_end_L.addChild(huige_go_Label);
	huige_go_Label.addEventListener(LMouseEvent.MOUSE_UP,function(event){
		if(game_over_lock){
			zhandou_tishi_show("只有在做出普通攻击后才可结束您的回合！");
		}
		if(xiaohao_button_lock){
			zhandou_tishi_show("请关闭当前的消耗栏方可执行！");
		}
	});

}

function huihe_boss_show(bk_image){
	if(huige_end_L){
		huige_end_L.remove();
		huige_end_L = null;
	}

	huige_end_L = new LSprite();
	game_user_chaozuo_Layer.addChild(huige_end_L);
	var huige_go_bitmap = new LBitmap(new LBitmapData(bk_image));
	var huige_go_button = new LButton(huige_go_bitmap);
	huige_go_button.x = 195;
	huige_go_button.y = 490;
	huige_go_button.setState(LButton.STATE_DISABLE);
	huige_end_L.addChild(huige_go_button);
	
	var huige_go_Label = new LTextField();
	huige_go_Label.text = "【Boss回合】";
	huige_go_Label.size = 18
	huige_go_Label.color = "#ffffff";
	huige_go_Label.x = 198;
	huige_go_Label.y = 515;
	huige_end_L.addChild(huige_go_Label);
}

var wl_gj_X = 35;
var wl_gj_Y = 595;

var mf_1_X = 120;
var mf_1_Y = 595;

var mf_2_X = 210;
var mf_2_Y = 595;

var mf_3_X = 300;
var mf_3_Y = 595;

var mf_4_X = 390;
var mf_4_Y = 595;



//物理攻击
function wuligongji_show(){
	if(game_zhandou_Layer){
	if(wuligongji_L){
		wuligongji_L.remove();
		wuligongji_L = null;
	}

	//攻击卡
	wuligongji_L = new LSprite();
	game_zhandou_Layer.addChild(wuligongji_L);
	wuligongji_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
	//var wuligongji_button = new LButton(wuligongji_bitmap);
	wuligongji_L.x = wl_gj_X;
	wuligongji_L.y = wl_gj_Y;
	wuligongji_L.addChild(wuligongji_bitmap);

	var wl_jn_img_bitmap = new LBitmap(new LBitmapData(wl_gj_img_data));
		wl_jn_img_bitmap.x = 5;
		wl_jn_img_bitmap.y = 15;
		wuligongji_L.addChild(wl_jn_img_bitmap);

	var gongji_Label = new LTextField();
	gongji_Label.setWordWrap(true);
	gongji_Label.text = "普通攻击";
	gongji_Label.size = 15;
	gongji_Label.color = "#ffffff";
	gongji_Label.x = 5;
	gongji_Label.y = 90;
	wuligongji_L.addChild(gongji_Label);
	console.log("物理攻击 lock");
	
	
	wuligongji_L.addEventListener(LMouseEvent.MOUSE_DOWN,wuligongji_ondown);
	wuligongji_L.addEventListener(LMouseEvent.MOUSE_UP,wuligongji_onup);
	
	}
}

//物理攻击拖拽事件
function wuligongji_ondown(e){
	if(game_over_lock){
				e.clickTarget.startDrag(e.touchPointID);
				console.log(e.touchPointID);
	}
}
function wuligongji_onup(e){
	if(game_over_lock){
				e.clickTarget.stopDrag();
				//console.log(e);
				//如果拖拽离开了操作范围则使用，否则回到原位
				if( wuligongji_L.y < 460){
					
					wuligongji_L.x = 200;
					wuligongji_L.y = 250;
					console.log("使用物理攻击");
					var myTimer = new LTimer(500, 1);
					myTimer.addEventListener(LTimerEvent.TIMER, timerHandler);
					myTimer.start();

				}
				else{
					console.log("not put");
					wuligongji_L.x = wl_gj_X;
					wuligongji_L.y = wl_gj_Y;
				}
	}
}

function timerHandler(e){
				console.log("物理攻击牌消失");
				//显示攻击动画
				daji_show(daji_image);
				

				//计算与显示怪物受伤害后的血量
				boss_hp_now -= user_zd_info_data.user_zd_gj;

				//显示攻击伤害
				shanghai_boss("-"+user_zd_info_data.user_zd_gj);

				if(boss_hp_now<=0){
					console.log("Boss 死亡！");

				}
				boss_hp_show(boss_hp_image,boss_hpep_bk_image,boss_hp_now);
				//清除物理攻击卡牌
				if(wuligongji_L){
					wuligongji_L.remove();
					wuligongji_L = null;
				}
				//显示三百毫秒移除 显示
				var myTimer = new LTimer(300, 1);
				myTimer.addEventListener(LTimerEvent.TIMER, function(){
					if(daji_Layer){
						daji_Layer.remove();
						daji_Layer = null;
					}
					clear_number_show();
				});
				myTimer.start();

				//游戏规则  当玩家物理攻击结束时才能结束本次操作回合
				huihe_end_ok_show(huihe_end_bk_image);
				
				/*
				var myTimer = new LTimer(500, 1);
				myTimer.addEventListener(LTimerEvent.TIMER, function(){
					wuligongji_show(wuligongji_img);
				});
				myTimer.start();
				*/
				
			}




