/*
		使用外部文件需要注意   本文件的函数均会执行一次，所以需要做限制
*/



//魔法攻击 1
function mf_gongji_1_show(jn_1_img_data){
	if(mf_gongji_1_L){
		mf_gongji_1_L.remove();
		mf_gongji_1_L = null;
	}


	if(game_zhandou_Layer){
		//魔法攻击卡
		console.log("加载魔法攻击1");
		mf_gongji_1_L = new LSprite();
		game_zhandou_Layer.addChild(mf_gongji_1_L);
		mf_gongji_1_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
		//var wuligongji_button = new LButton(wuligongji_bitmap);
		mf_gongji_1_L.x = mf_1_X;
		mf_gongji_1_L.y = mf_1_Y;
		mf_gongji_1_L.addChild(mf_gongji_1_bitmap);

		

		var gongji_Label = new LTextField();
		gongji_Label.setWordWrap(true);
		gongji_Label.text = "<技能-1>";
		gongji_Label.size = 15;
		gongji_Label.color = "#ffffff";
		gongji_Label.x = 5;
		gongji_Label.y = 80;
		mf_gongji_1_L.addChild(gongji_Label);
		
		var jn_img_1_bitmap = new LBitmap(new LBitmapData(jn_1_img_data));
		jn_img_1_bitmap.x = 5;
		jn_img_1_bitmap.y = 15;
		mf_gongji_1_L.addChild(jn_img_1_bitmap);
			
		mf_gongji_1_L.addEventListener(LMouseEvent.MOUSE_DOWN,mf_gongji_1_ondown);
		mf_gongji_1_L.addEventListener(LMouseEvent.MOUSE_UP,mf_gongji_1_onup);
	}
}
//魔法攻击1拖拽事件
function mf_gongji_1_ondown(e){
	if(game_over_lock){
				e.clickTarget.startDrag(e.touchPointID);
				//console.log(e.touchPointID);
	}
}
//魔法攻击1卡牌事件
function mf_gongji_1_onup(e){
	if(game_over_lock){
				e.clickTarget.stopDrag();
				//console.log(e);
				//如果拖拽离开了操作范围则使用，否则回到原位
				if( mf_gongji_1_L.y < 460){
					
					mf_gongji_1_L.x = 200;
					mf_gongji_1_L.y = 250;
					console.log("使用魔法攻击1");
					//对应玩家减少的能量值
					user_ep_xiaohao_show(user_zd_info_data.user_zd_jn_xh_1);
					get_jineng_xiao();

					var myTimer = new LTimer(800, 1);
					myTimer.addEventListener(LTimerEvent.TIMER, timerHandler_mf_gongji_1);
					myTimer.start();
				}
				else{
					console.log("not put");
					mf_gongji_1_L.x = mf_1_X;
					mf_gongji_1_L.y = mf_1_Y;
				}
	}
}
//魔法攻击卡1消失
function timerHandler_mf_gongji_1(e){
				//显示魔法攻击特效
				mofa_jineng_show(mf_jineng_img_1);
				console.log("魔法攻击1牌消失");
				
				//计算与显示怪物受伤害后的血量
				boss_hp_now -= user_zd_info_data.user_zd_jn_1;

				//显示攻击伤害
				shanghai_boss("-"+user_zd_info_data.user_zd_jn_1);

				if(boss_hp_now<=0){
					console.log("Boss 死亡！");
					//如果是自动攻击则停止
					auot_stop();
				}
				boss_hp_show(boss_hp_image,boss_hpep_bk_image,boss_hp_now);
				//消失魔法攻击卡牌
				if(mf_gongji_1_L){
					mf_gongji_1_L.remove();
					mf_gongji_1_L = null;
				}

				//显示三百毫秒移除 显示
				var myTimer = new LTimer(300, 1);
				myTimer.addEventListener(LTimerEvent.TIMER, function(){
					//清除特效
					clear_mofa_tx();
					//清除伤害数字
					clear_number_show();
				});
				myTimer.start();
			}
//魔法攻击1 缺蓝
function mf_gongji_1_notep_show(){
	//攻击卡
	console.log("魔法攻击1 缺蓝");
	if(mf_gongji_1_L){
		mf_gongji_1_L.remove();
		mf_gongji_1_L = null;
	}
	if(game_zhandou_Layer){
		mf_gongji_1_L = new LSprite();
		game_zhandou_Layer.addChild(mf_gongji_1_L);
		mf_gongji_1_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
		//var wuligongji_button = new LButton(wuligongji_bitmap);
		mf_gongji_1_L.x = mf_1_X;
		mf_gongji_1_L.y = mf_1_Y;
		mf_gongji_1_L.addChild(mf_gongji_1_bitmap);

		var gongji_Label = new LTextField();
		gongji_Label.setWordWrap(true);
		gongji_Label.text = "使用技能\n所需能量\n不足无法\n使用";
		gongji_Label.size = 15
		gongji_Label.color = "#ffffff";
		gongji_Label.x = 5;
		gongji_Label.y = 25;
		mf_gongji_1_L.addChild(gongji_Label);
	}
}



//魔法攻击 2
function mf_gongji_2_show(jn_2_img_data){
	if(mf_gongji_2_L){
		mf_gongji_2_L.remove();
		mf_gongji_2_L = null;
	}
	if(game_zhandou_Layer){
		console.log("加载魔法攻击2");
		//魔法攻击卡
		mf_gongji_2_L = new LSprite();
		game_zhandou_Layer.addChild(mf_gongji_2_L);
		mf_gongji_2_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
		//var wuligongji_button = new LButton(wuligongji_bitmap);
		mf_gongji_2_L.x = mf_2_X;
		mf_gongji_2_L.y = mf_2_Y;
		mf_gongji_2_L.addChild(mf_gongji_2_bitmap);

		var gongji_Label = new LTextField();
		gongji_Label.setWordWrap(true);
		gongji_Label.text = "<技能-2>";
		gongji_Label.size = 15;
		gongji_Label.color = "#ffffff";
		gongji_Label.x = 5;
		gongji_Label.y = 80;
		mf_gongji_2_L.addChild(gongji_Label);
		
		var jn_img_2_bitmap = new LBitmap(new LBitmapData(jn_2_img_data));
		jn_img_2_bitmap.x = 5;
		jn_img_2_bitmap.y = 15;
		mf_gongji_2_L.addChild(jn_img_2_bitmap);
			
		mf_gongji_2_L.addEventListener(LMouseEvent.MOUSE_DOWN,mf_gongji_2_ondown);
		mf_gongji_2_L.addEventListener(LMouseEvent.MOUSE_UP,mf_gongji_2_onup);
	}
}
//魔法攻击2拖拽事件
function mf_gongji_2_ondown(e){
	if(game_over_lock){
				e.clickTarget.startDrag(e.touchPointID);
				//console.log(e.touchPointID);
	}
}
//魔法攻击2卡牌事件
function mf_gongji_2_onup(e){
	if(game_over_lock){
				e.clickTarget.stopDrag();
				//console.log(e);
				//如果拖拽离开了操作范围则使用，否则回到原位
				if( mf_gongji_2_L.y < 460){
					
					mf_gongji_2_L.x = 200;
					mf_gongji_2_L.y = 250;
					console.log("使用魔法攻击2");
					//对应玩家减少的能量值
					user_ep_xiaohao_show(user_zd_info_data.user_zd_jn_xh_2);
					get_jineng_xiao();
					/*
					test_ep-=1;
					if(test_ep<=0){
						mf_gongji_1_notep_show();
						//mf_gongji_2_notep_show();
						mf_gongji_3_notep_show();
						mf_gongji_4_notep_show();
					}
					*/
					var myTimer = new LTimer(800, 1);
					myTimer.addEventListener(LTimerEvent.TIMER, timerHandler_mf_gongji_2);
					myTimer.start();
				}
				else{
					console.log("not put");
					mf_gongji_2_L.x = mf_2_X;
					mf_gongji_2_L.y = mf_2_Y;
				}
	}
}
//魔法攻击卡2消失
function timerHandler_mf_gongji_2(e){
				
				//显示魔法攻击特效
				mofa_jineng_show(mf_jineng_img_2);

				

				//计算与显示怪物受伤害后的血量
				boss_hp_now -= user_zd_info_data.user_zd_jn_2;

				//显示攻击伤害
				shanghai_boss("-"+user_zd_info_data.user_zd_jn_2);

				if(boss_hp_now<=0){
					console.log("Boss 死亡！");
					//如果是自动攻击则停止
					auot_stop();
				}
				boss_hp_show(boss_hp_image,boss_hpep_bk_image,boss_hp_now);

				console.log("魔法攻击2牌消失");
				if(mf_gongji_2_L){
					mf_gongji_2_L.remove();
					mf_gongji_2_L = null;

				}

				//显示三百毫秒移除 显示
				var myTimer = new LTimer(300, 1);
				myTimer.addEventListener(LTimerEvent.TIMER, function(){
					//清除特效
					clear_mofa_tx();
					//清除伤害数字
					clear_number_show();
				});
				myTimer.start();
			}
//魔法攻击2 缺蓝
function mf_gongji_2_notep_show(){
	//攻击卡
	console.log("魔法攻击2牌 缺蓝");
	if(mf_gongji_2_L){
		mf_gongji_2_L.remove();
		mf_gongji_2_L = null;
	}
	if(game_zhandou_Layer){
		mf_gongji_2_L = new LSprite();
		game_zhandou_Layer.addChild(mf_gongji_2_L);
		mf_gongji_2_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
		//var wuligongji_button = new LButton(wuligongji_bitmap);
		mf_gongji_2_L.x = mf_2_X;
		mf_gongji_2_L.y = mf_2_Y;
		mf_gongji_2_L.addChild(mf_gongji_2_bitmap);

		var gongji_Label = new LTextField();
		gongji_Label.setWordWrap(true);
		gongji_Label.text = "使用技能\n所需能量\n不足无法\n使用";
		gongji_Label.size = 15;
		gongji_Label.color = "#ffffff";
		gongji_Label.x = 5;
		gongji_Label.y = 25;
		mf_gongji_2_L.addChild(gongji_Label);
	}
}




//魔法攻击 3
function mf_gongji_3_show(jn_3_img_data){
	if(mf_gongji_3_L){
		mf_gongji_3_L.remove();
		mf_gongji_3_L = null;
	}
	if(game_zhandou_Layer){
		console.log("加载魔法攻击3");
		//魔法攻击卡
		mf_gongji_3_L = new LSprite();
		game_zhandou_Layer.addChild(mf_gongji_3_L);
		mf_gongji_3_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
		//var wuligongji_button = new LButton(wuligongji_bitmap);
		mf_gongji_3_L.x = mf_3_X;
		mf_gongji_3_L.y = mf_3_Y;
		mf_gongji_3_L.addChild(mf_gongji_3_bitmap);

		var gongji_Label = new LTextField();
		gongji_Label.setWordWrap(true);
		gongji_Label.text = "<技能-3>";
		gongji_Label.size = 15;
		gongji_Label.color = "#ffffff";
		gongji_Label.x = 5;
		gongji_Label.y = 80;
		mf_gongji_3_L.addChild(gongji_Label);
		
		var jn_img_3_bitmap = new LBitmap(new LBitmapData(jn_3_img_data));
		jn_img_3_bitmap.x = 5;
		jn_img_3_bitmap.y = 15;
		mf_gongji_3_L.addChild(jn_img_3_bitmap);

		mf_gongji_3_L.addEventListener(LMouseEvent.MOUSE_DOWN,mf_gongji_3_ondown);
		mf_gongji_3_L.addEventListener(LMouseEvent.MOUSE_UP,mf_gongji_3_onup);
	}
}
//魔法攻击3拖拽事件
function mf_gongji_3_ondown(e){
	if(game_over_lock){
				e.clickTarget.startDrag(e.touchPointID);
				//console.log(e.touchPointID);
	}
}
//魔法攻击3卡牌事件
function mf_gongji_3_onup(e){
	if(game_over_lock){
				e.clickTarget.stopDrag();
				//console.log(e);
				//如果拖拽离开了操作范围则使用，否则回到原位
				if( mf_gongji_3_L.y < 460){
					
					mf_gongji_3_L.x = 200;
					mf_gongji_3_L.y = 250;
					console.log("使用魔法攻击3");
					//对应玩家减少的能量值
					user_ep_xiaohao_show(user_zd_info_data.user_zd_jn_xh_3);
					get_jineng_xiao();
					/*
					test_ep-=1;
					if(test_ep<=0){
						mf_gongji_1_notep_show();
						mf_gongji_2_notep_show();
						//mf_gongji_3_notep_show();
						mf_gongji_4_notep_show();
					}
					*/
					var myTimer = new LTimer(800, 1);
					myTimer.addEventListener(LTimerEvent.TIMER, timerHandler_mf_gongji_3);
					myTimer.start();
				}
				else{
					console.log("not put");
					mf_gongji_3_L.x = mf_3_X;
					mf_gongji_3_L.y = mf_3_Y;
				}
	}
}
//魔法攻击卡3消失
function timerHandler_mf_gongji_3(e){
				
				//显示魔法攻击特效
				mofa_jineng_show(mf_jineng_img_3);
				

				
				//计算与显示怪物受伤害后的血量
				boss_hp_now -= user_zd_info_data.user_zd_jn_3;
				//显示攻击伤害
				shanghai_boss("-"+user_zd_info_data.user_zd_jn_3);

				if(boss_hp_now<=0){
					console.log("Boss 死亡！");
					//如果是自动攻击则停止
					auot_stop();
				}
				boss_hp_show(boss_hp_image,boss_hpep_bk_image,boss_hp_now);

				console.log("魔法攻击3牌消失");
				if(mf_gongji_3_L){
					mf_gongji_3_L.remove();
					mf_gongji_3_L = null;

				}
				//显示三百毫秒移除 显示
				var myTimer = new LTimer(300, 1);
				myTimer.addEventListener(LTimerEvent.TIMER, function(){
					//清除特效
					clear_mofa_tx();
					//清除伤害数字
					clear_number_show();
				});
				myTimer.start();
			}
//魔法攻击3 缺蓝
function mf_gongji_3_notep_show(){
	//攻击卡
	console.log("魔法攻击3牌 缺蓝");
	if(mf_gongji_3_L){
		mf_gongji_3_L.remove();
		mf_gongji_3_L = null;
	}
	if(game_zhandou_Layer){
		mf_gongji_3_L = new LSprite();
		game_zhandou_Layer.addChild(mf_gongji_3_L);
		mf_gongji_3_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
		//var wuligongji_button = new LButton(wuligongji_bitmap);
		mf_gongji_3_L.x = mf_3_X;
		mf_gongji_3_L.y = mf_3_Y;
		mf_gongji_3_L.addChild(mf_gongji_3_bitmap);

		var gongji_Label = new LTextField();
		gongji_Label.setWordWrap(true);
		gongji_Label.text = "使用技能\n所需能量\n不足无法\n使用";
		gongji_Label.size = 15;
		gongji_Label.color = "#ffffff";
		gongji_Label.x = 5;
		gongji_Label.y = 25;
		mf_gongji_3_L.addChild(gongji_Label);
	}
}



//魔法攻击 4
function mf_gongji_4_show(jn_4_img_data){
	if(mf_gongji_4_L){
		mf_gongji_4_L.remove();
		mf_gongji_4_L = null;
	}
	if(game_zhandou_Layer){
		console.log("加载魔法攻击4");
		//魔法攻击卡
		mf_gongji_4_L = new LSprite();
		game_zhandou_Layer.addChild(mf_gongji_4_L);
		mf_gongji_4_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
		//var wuligongji_button = new LButton(wuligongji_bitmap);
		mf_gongji_4_L.x = mf_4_X;
		mf_gongji_4_L.y = mf_4_Y;
		mf_gongji_4_L.addChild(mf_gongji_4_bitmap);

		var gongji_Label = new LTextField();
		gongji_Label.setWordWrap(true);
		gongji_Label.text = "<技能-4>";
		gongji_Label.size = 15;
		gongji_Label.color = "#ffffff";
		gongji_Label.x = 5;
		gongji_Label.y = 80;
		mf_gongji_4_L.addChild(gongji_Label);
		
		var jn_img_4_bitmap = new LBitmap(new LBitmapData(jn_4_img_data));
		jn_img_4_bitmap.x = 5;
		jn_img_4_bitmap.y = 15;
		mf_gongji_4_L.addChild(jn_img_4_bitmap);
			
		mf_gongji_4_L.addEventListener(LMouseEvent.MOUSE_DOWN,mf_gongji_4_ondown);
		mf_gongji_4_L.addEventListener(LMouseEvent.MOUSE_UP,mf_gongji_4_onup);
	}
}
//魔法攻击4拖拽事件
function mf_gongji_4_ondown(e){
	if(game_over_lock){
				e.clickTarget.startDrag(e.touchPointID);
				//console.log(e.touchPointID);
	}
}
//魔法攻击4卡牌事件
function mf_gongji_4_onup(e){
	if(game_over_lock){
				e.clickTarget.stopDrag();
				//console.log(e);
				//如果拖拽离开了操作范围则使用，否则回到原位
				if( mf_gongji_4_L.y < 460){
					
					mf_gongji_4_L.x = 200;
					mf_gongji_4_L.y = 250;
					console.log("使用魔法攻击4");
					//对应玩家减少的能量值
					user_ep_xiaohao_show(user_zd_info_data.user_zd_jn_xh_4);
					get_jineng_xiao();
					/*
					test_ep-=1;
					if(test_ep<=0){
						mf_gongji_1_notep_show();
						mf_gongji_2_notep_show();
						mf_gongji_3_notep_show();
						//mf_gongji_4_notep_show();
					}
					*/
					var myTimer = new LTimer(800, 1);
					myTimer.addEventListener(LTimerEvent.TIMER, timerHandler_mf_gongji_4);
					myTimer.start();
				}
				else{
					console.log("not put");
					mf_gongji_4_L.x = mf_4_X;
					mf_gongji_4_L.y = mf_4_Y;
				}
	}
}
//魔法攻击卡4消失
function timerHandler_mf_gongji_4(e){
				
				//显示魔法攻击特效
				mofa_jineng_show(mf_jineng_img_4);

				
				//计算与显示怪物受伤害后的血量
				boss_hp_now -= user_zd_info_data.user_zd_jn_4;

				//显示攻击伤害
				shanghai_boss("-"+user_zd_info_data.user_zd_jn_4);

				if(boss_hp_now<=0){
					console.log("Boss 死亡！");
					//如果是自动攻击则停止
					auot_stop();
				}
				boss_hp_show(boss_hp_image,boss_hpep_bk_image,boss_hp_now);

				console.log("魔法攻击4牌消失");
				if(mf_gongji_4_L){
					mf_gongji_4_L.remove();
					mf_gongji_4_L = null;

				}

				//显示三百毫秒移除 显示
				var myTimer = new LTimer(300, 1);
				myTimer.addEventListener(LTimerEvent.TIMER, function(){
					//清除特效
					clear_mofa_tx();
					//清除伤害数字
					clear_number_show();
				});
				myTimer.start();
			}
//魔法攻击4 缺蓝
function mf_gongji_4_notep_show(){
	//攻击卡
	console.log("魔法攻击4牌 缺蓝");
	if(mf_gongji_4_L){
		mf_gongji_4_L.remove();
		mf_gongji_4_L = null;
	}
	if(game_zhandou_Layer){
		mf_gongji_4_L = new LSprite();
		game_zhandou_Layer.addChild(mf_gongji_4_L);
		mf_gongji_4_bitmap = new LBitmap(new LBitmapData(wuligongji_img));
		//var wuligongji_button = new LButton(wuligongji_bitmap);
		mf_gongji_4_L.x = mf_4_X;
		mf_gongji_4_L.y = mf_4_Y;
		mf_gongji_4_L.addChild(mf_gongji_4_bitmap);

		var gongji_Label = new LTextField();
		gongji_Label.setWordWrap(true);
		gongji_Label.text = "使用技能\n所需能量\n不足无法\n使用";
		gongji_Label.size = 15;
		gongji_Label.color = "#ffffff";
		gongji_Label.x = 5;
		gongji_Label.y = 25;
		mf_gongji_4_L.addChild(gongji_Label);
	}
}



//显示boss受到的伤害值显示
function shanghai_boss(number){
	console.log("boss 收到伤害显示 -"+user_zd_info_data.user_zd_gj, "剩余 ： "+boss_hp_now);
	if(shanghai_show_boss){
		shanghai_show_boss.remove();
		shanghai_show_boss = null;
	}

	shanghai_show_boss = new LSprite();
   	game_zhandou_Layer.addChild(shanghai_show_boss);

   	var shanghai_boss_data = new LTextField();
	shanghai_boss_data.text = number;//玩家等级
	shanghai_boss_data.size = 55;
	shanghai_boss_data.color = "#ffffff";
	shanghai_boss_data.x = 280;
	shanghai_boss_data.y = 50;
	shanghai_boss_data.stroke = true;
	shanghai_boss_data.lineWidth = 5;
	shanghai_boss_data.lineColor = "#FF0000";
	shanghai_show_boss.addChild(shanghai_boss_data);

}

//判断当前技能消耗的能量是否满足
function get_jineng_xiao(){
	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_1){
   		mf_gongji_1_notep_show();
   	}

   	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_2){
		mf_gongji_2_notep_show();
   	}

   	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_3){
   		mf_gongji_3_notep_show();
   	}

   	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_4){
   		mf_gongji_4_notep_show();
   	}
}

//回合结束判断当前的能量可以使用那些技能卡牌
function huihe_end_get_jineng(){
	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_1){
   		mf_gongji_1_notep_show();
   	}
   	else{
   		mf_gongji_1_show(jn_1_img_data);
   	}

   	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_2){
   		mf_gongji_2_notep_show();
   	}
   	else{
   		mf_gongji_2_show(jn_2_img_data);
   	}

   	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_3){
   		mf_gongji_3_notep_show();
   	}
   	else{
   		mf_gongji_3_show(jn_3_img_data);
   	}

   	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_4){
   		mf_gongji_4_notep_show();
   	}
   	else{
   		mf_gongji_4_show(jn_4_img_data);
   	}
}


//判断自动攻击还可以使用哪些技能
function get_auot_jinneg(){
	//判断技能卡牌都有没有使用
	if((!mf_gongji_1_L)&(!mf_gongji_2_L)&(!mf_gongji_3_L)&(!mf_gongji_4_L)){
		return false;
	}

	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_1){
		mf_ep_ok_1 = false;
	}
	else{
		mf_ep_ok_1 = true;
	}

	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_2){
		mf_ep_ok_2 = false;
   	}
   	else{
   		mf_ep_ok_2 = true;
   	}

   	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_3){
   		mf_ep_ok_3 = false;
   	}
   	else{
   		mf_ep_ok_3 = true;
   	}

   	if(user_ep_number<user_zd_info_data.user_zd_jn_xh_4){
   		mf_ep_ok_4 = false;
   	}
   	else{
   		mf_ep_ok_4 = true;
   	}

   	if((!mf_ep_ok_1)&(!mf_ep_ok_2)&(!mf_ep_ok_3)&(!mf_ep_ok_4)){
		return false;
	}
   	console.log("mf_ep_ok_1:"+mf_ep_ok_1, "mf_ep_ok_2:"+mf_ep_ok_2, "mf_ep_ok_3:"+mf_ep_ok_3, "mf_ep_ok_4:"+mf_ep_ok_4);

	return true;
	
}


//玩家消耗的能量值显示
function user_ep_xiaohao_show(number){

	if(user_ep_xiaohao_L){
		user_ep_xiaohao_L.remove();
		user_ep_xiaohao_L = null;
	}

	user_ep_xiaohao_L = new LSprite();
   	game_zhandou_Layer.addChild(user_ep_xiaohao_L);

   	//计算玩家能量消耗量
   	user_ep_number -= number;

   	if(user_ep_number<=0){
   		user_ep_number = 0;
   	}

	user_ep_now_show(user_ep_img_data,user_hpep_bk_image,user_ep_number);

   	var user_ep_xiaohao_data = new LTextField();
	user_ep_xiaohao_data.text = "-"+number;
	user_ep_xiaohao_data.size = 45;
	user_ep_xiaohao_data.color = "#ffffff";
	user_ep_xiaohao_data.x = 340;
	user_ep_xiaohao_data.y = 460;
	user_ep_xiaohao_data.stroke = true;
	user_ep_xiaohao_data.lineWidth = 5;
	user_ep_xiaohao_data.lineColor = "#0000FF";
	user_ep_xiaohao_L.addChild(user_ep_xiaohao_data);

}



//显示当前玩家能量
function user_ep_now_show(user_ep_img_data,user_hpep_bk_image,user_ep_number){
	if(user_ep_now_L){

		user_ep_now_L.remove();
		user_ep_now_L = null;
	}

	user_ep_now_L = new LSprite();
   	game_user_chaozuo_Layer.addChild(user_ep_now_L);

	//  115-10  105 = 100%
	var user_ep_number_show_img = parseInt((user_ep_number/user_zd_info_data.user_zd_ep)*1.15*100);

	var game_user_ep_bitmap = new LBitmap(new LBitmapData(user_ep_img_data,10,0,user_ep_number_show_img,30));
	game_user_ep_bitmap.x = 340;
	game_user_ep_bitmap.y = 520;
	user_ep_now_L.addChild(game_user_ep_bitmap);
	var game_user_ep_bk_bitmap = new LBitmap(new LBitmapData(user_hpep_bk_image));
	game_user_ep_bk_bitmap.x = 335;
	game_user_ep_bk_bitmap.y = 515;
	user_ep_now_L.addChild(game_user_ep_bk_bitmap);

	//血量值显示
	var user_ep_number_data = new LTextField();
	user_ep_number_data.text = user_ep_number/user_zd_info_data.user_zd_ep*100+"%";
	user_ep_number_data.size = 25;
	user_ep_number_data.color = "#ffffff";
	user_ep_number_data.x = 370;
	user_ep_number_data.y = 520;
	user_ep_now_L.addChild(user_ep_number_data);

}


//清楚当前数值的显示
function clear_number_show(){
	if(shanghai_show_boss){
		shanghai_show_boss.remove();
		shanghai_show_boss = null;
	}
	if(user_ep_xiaohao_L){
		user_ep_xiaohao_L.remove()
		user_ep_xiaohao_L = null;
	}
}

//显示当前怪物的血量
function boss_hp_show(boss_hp_image,boss_hpep_bk_image,boss_hp_now){
	if(boss_hp_show_L){

		boss_hp_show_L.remove();
		boss_hp_show_L = null;
	}

	boss_hp_show_L = new LSprite();
   	game_guaiwu_Layer.addChild(boss_hp_show_L);

   	//加载怪物血量   10~205
	//当前怪物血量 boss_hp_now
	//boss_hp_now = boss_hp_now;//boss_1_info_data.boss_init_hp;
	//怪物显示血量
	var boss_hp_show_number = parseInt((boss_hp_now/boss_1_info_data.boss_init_hp)*2.05*100);
	if(boss_hp_now<=0){
		boss_hp_show_number = 0;
		boss_hp_now = 0;

		//游戏胜利不能再进行战斗


		//如果是自动攻击则停止
		auot_stop();


		//游戏战斗锁  true 能执行战斗操作 false 战斗结束不能进行战斗操作
		game_over_lock = false;
		
		//消耗栏 按钮锁
		//xiaohao_button_lock = false;
		//战斗攻击按钮锁
		auto_gongji_lock = false;


		//显示游戏胜利
		game_victory_show(game_victory_bk);

		//显示boss死亡头像 X
		var boss_X = new LTextField();
		boss_X.text = "X";//玩家等级
		boss_X.size = 60;
		boss_X.color = "#ffffff";
		boss_X.x = 110;
		boss_X.y = 40;
		boss_X.stroke = true;
		boss_X.lineWidth = 10;
		boss_X.lineColor = "#FF0000";
		game_guaiwu_Layer.addChild(boss_X);
	}
	var zd_boss_1_hp = new LBitmap(new LBitmapData(boss_hp_image,10,0,boss_hp_show_number,16));
	zd_boss_1_hp.x = 170;
	zd_boss_1_hp.y = 70;
	boss_hp_show_L.addChild(zd_boss_1_hp);
	var zd_boss_1_hp_bitmap = new LBitmap(new LBitmapData(boss_hpep_bk_image));
	zd_boss_1_hp_bitmap.x = 170;
	zd_boss_1_hp_bitmap.y = 70;
	boss_hp_show_L.addChild(zd_boss_1_hp_bitmap);
	//血量值显示
	var zd_boss_1_hp_number = new LTextField();
	zd_boss_1_hp_number.text = boss_hp_now+" / "+boss_1_info_data.boss_init_hp;
	zd_boss_1_hp_number.size = 18;
	zd_boss_1_hp_number.color = "#ffffff";
	zd_boss_1_hp_number.x = 190;
	zd_boss_1_hp_number.y = 65;
	boss_hp_show_L.addChild(zd_boss_1_hp_number);
}



//游戏胜利框显示
function game_victory_show(game_victory_bk){
	if(game_victory_L){
		game_victory_L.remove();
		game_victory_L = null;
	}


	game_victory_L = new LSprite();
   	game_zhandou_Layer.addChild(game_victory_L);

   	//游戏胜利了 boss 无法再继续攻击了
   	boss_gongji_lock = false;

   	var game_victory_image = new LBitmap(new LBitmapData(game_victory_bk));
	game_victory_image.x = 30;
	game_victory_image.y = 250;
	game_victory_L.addChild(game_victory_image);
	//当点击游戏胜利则退出攻击界面进入游戏主界面
	game_victory_L.addEventListener(LMouseEvent.MOUSE_UP,function(event){
		game_zhandou_Layer.remove();
		game_zhandou_Layer = null;
		//恢复游戏操作按钮事件
		apply_button=true;
		//恢复游戏系统按钮事件
		KEY_lock = true;
		//重置游戏回合数
		huihe_number = 0;

	});
}







//魔法攻击特效与能量减少和伤害
function mofa_jineng_show(mf_jineng_img_1){

	if(mf_jineng_tx_L){
		mf_jineng_tx_L.remove();
		mf_jineng_tx_L = null;
	}

	mf_jineng_tx_L = new LSprite();
   	game_zhandou_Layer.addChild(mf_jineng_tx_L);

	var mf_jineng_tx = new LBitmap(new LBitmapData(mf_jineng_img_1));
	mf_jineng_tx.x = 100;
	mf_jineng_tx.y = 20;
	mf_jineng_tx_L.addChild(mf_jineng_tx);

}

//清楚魔法攻击特效 
function clear_mofa_tx(){
	if(mf_jineng_tx_L){
		mf_jineng_tx_L.remove();
		mf_jineng_tx_L = null;
	}
}



//怪物攻击回合
function boss_gongji_show(number){
	if(boss_gongji_show_L){

		boss_gongji_show_L.remove();
		boss_gongji_show_L = null;
	}

	boss_gongji_show_L = new LSprite();
   	game_zhandou_Layer.addChild(boss_gongji_show_L);

   	//计算玩家血量减少量
   	user_hp_number -= number;

   	if(user_hp_number<=0){
   		user_hp_number = 0;

   		//如果是自动攻击则停止
		auot_stop();

   		//游戏失败不能再进行战斗

		//游戏战斗锁  true 能执行战斗操作 false 战斗结束不能进行战斗操作
		game_over_lock = false;
		
		//消耗栏 按钮锁
		//xiaohao_button_lock = false;
		//战斗攻击按钮锁
		auto_gongji_lock = false;

		//显示游戏失败
		game_failed_show(game_over_bk);

   	}

	user_hp_now_show(user_hp_img_data,user_hpep_bk_image,user_hp_number);


   	var boss_gongji_data = new LTextField();
	boss_gongji_data.text = "-"+number;
	boss_gongji_data.size = 65;
	boss_gongji_data.color = "#ffffff";
	boss_gongji_data.x = 200;
	boss_gongji_data.y = 430;
	boss_gongji_data.stroke = true;
	boss_gongji_data.lineWidth = 5;
	boss_gongji_data.lineColor = "#FF0000";
	boss_gongji_show_L.addChild(boss_gongji_data);

}

//游戏失败框显示
function game_failed_show(game_over_bk){
	if(game_over_L){
		game_over_L.remove();
		game_over_L = null;
	}

	game_over_L = new LSprite();
   	game_zhandou_Layer.addChild(game_over_L);

   	var game_fail_image = new LBitmap(new LBitmapData(game_over_bk));
	game_fail_image.x = 30;
	game_fail_image.y = 250;
	game_over_L.addChild(game_fail_image);
	//当点击游戏胜利则退出攻击界面进入游戏主界面
	game_over_L.addEventListener(LMouseEvent.MOUSE_UP,function(event){
		game_zhandou_Layer.remove();
		game_zhandou_Layer = null;
		//恢复游戏操作按钮事件
		apply_button=true;
		//恢复游戏系统按钮事件
		KEY_lock = true;
		//重置游戏回合数
		huihe_number = 0;

	});
}



//显示当前玩家血量
function user_hp_now_show(user_hp_img_data,user_hpep_bk_image,user_hp_number){
	if(user_hp_now_L){

		user_hp_now_L.remove();
		user_hp_now_L = null;
	}

	user_hp_now_L = new LSprite();
   	game_user_chaozuo_Layer.addChild(user_hp_now_L);

	//  115-10  105 = 100%
	var user_ep_number_show_img = parseInt((user_hp_number/user_zd_info_data.user_zd_hp)*1.15*100);

	var game_user_ep_bitmap = new LBitmap(new LBitmapData(user_hp_img_data,10,0,user_ep_number_show_img,30));
	game_user_ep_bitmap.x = 50;
	game_user_ep_bitmap.y = 520;
	user_hp_now_L.addChild(game_user_ep_bitmap);
	var game_user_ep_bk_bitmap = new LBitmap(new LBitmapData(user_hpep_bk_image));
	game_user_ep_bk_bitmap.x = 45;
	game_user_ep_bk_bitmap.y = 515;
	user_hp_now_L.addChild(game_user_ep_bk_bitmap);

	//血量值显示
	var user_hp_number_data = new LTextField();
	user_hp_number_data.text = user_hp_number/user_zd_info_data.user_zd_hp*100+"%";
	user_hp_number_data.size = 25;
	user_hp_number_data.color = "#ffffff";
	user_hp_number_data.x = 80;
	user_hp_number_data.y = 520;
	user_hp_now_L.addChild(user_hp_number_data);
}


//boss攻击特效
function boss_gj_tx_show(boss_gj_img){
	if(boss_gj_tx_show_L){

		boss_gj_tx_show_L.remove();
		boss_gj_tx_show_L = null;
	}

	boss_gj_tx_show_L = new LSprite();
   	game_zhandou_Layer.addChild(boss_gj_tx_show_L);

   	var boss_gj_tx_img = new LBitmap(new LBitmapData(boss_gj_img));
   	boss_gj_tx_img.x = 200;
   	boss_gj_tx_img.y = 20;
	boss_gj_tx_show_L.addChild(boss_gj_tx_img);
}


//战斗消耗栏按钮
function zhandou_xiaohao_button_show(){

	if(xiaohao_button_L){
		xiaohao_button_L.remove();
		xiaohao_button_L = null;
	}

	xiaohao_button_L = new LSprite();
	game_zhandou_Layer.addChild(xiaohao_button_L);

	if(xiaohao_button_lock){
		xiaohao_button_txt = "关闭消耗栏";
	}
	else{
		xiaohao_button_txt = "打开消耗栏";
	}

	var zd_setting1_button_bitmap = new LBitmap(new LBitmapData(zhandou_button_bk));
	zd_setting_1_button = new LButton(zd_setting1_button_bitmap);
	zd_setting_1_button.x = 50;
	zd_setting_1_button.y = 740;
	xiaohao_button_L.addChild(zd_setting_1_button);
	var zd_setting1_Label = new LTextField();
		zd_setting1_Label.setWordWrap(true);
		zd_setting1_Label.text = xiaohao_button_txt;
		zd_setting1_Label.size = 15;
		zd_setting1_Label.color = "#ffffff";
		zd_setting1_Label.x = 60;
		zd_setting1_Label.y = 750;
		xiaohao_button_L.addChild(zd_setting1_Label);
		zd_setting_1_button.addEventListener(LMouseEvent.MOUSE_UP,function(event){
		//如果在自动攻击不能再使用消耗品
		if(!boss_huihe_lock){
			if(!auto_gongji_lock){
				if(game_over_lock || xiaohao_button_lock){
					console.log("zd_setting_1_button");
					//打开消耗栏
					open_xiaohao_show(xiaohao_lan_bk);
				}	
			}
		}
	});
}



//战斗消耗栏显示
function open_xiaohao_show(bk_img){

	if(xiaohao_button_lock){
		xiaohao_button_lock = false;
		game_over_lock = true;
		if(xiaohao_lan_L){
			xiaohao_lan_L.remove();
			xiaohao_lan_L = null;
		}
		zhandou_xiaohao_button_show();
	}
	else{
		xiaohao_button_lock = true;

		zhandou_xiaohao_button_show();

		game_over_lock = false;
		if(xiaohao_lan_L){
			xiaohao_lan_L.remove();
			xiaohao_lan_L = null;
		}

		xiaohao_lan_L = new LSprite();
		game_zhandou_Layer.addChild(xiaohao_lan_L);

		var xiaohao_bk = new LBitmap(new LBitmapData(bk_img));
	   	xiaohao_bk.x = 50;
	   	xiaohao_bk.y = 650;
		xiaohao_lan_L.addChild(xiaohao_bk);
	}
}


//战斗界面提示框
function zhandou_tishi_show(strings){
	if(zhandou_tishi_L){
		zhandou_tishi_L.remove();
		zhandou_tishi_L = null;
	}

	zhandou_tishi_L = new LSprite();
	game_zhandou_Layer.addChild(zhandou_tishi_L);


	//玩家当前攻击防御
	var zhandou_tishi_info = new LTextField();
	zhandou_tishi_info.text = strings;
	zhandou_tishi_info.size = 25;
	zhandou_tishi_info.color = "#ffffff";
	zhandou_tishi_info.x = 30;
	zhandou_tishi_info.y = 250;
	zhandou_tishi_L.addChild(zhandou_tishi_info);

	var myTimer = new LTimer(3000, 1);
	myTimer.addEventListener(LTimerEvent.TIMER, function(){
		if(zhandou_tishi_L){
			zhandou_tishi_L.remove();
			zhandou_tishi_L = null;
		}
	});
	myTimer.start();

}



//状态

