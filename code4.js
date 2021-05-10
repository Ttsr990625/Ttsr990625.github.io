gdjs.tongguanCode = {};
gdjs.tongguanCode.GDScoreObjects1= [];
gdjs.tongguanCode.GDScoreObjects2= [];
gdjs.tongguanCode.GDCoinIconObjects1= [];
gdjs.tongguanCode.GDCoinIconObjects2= [];
gdjs.tongguanCode.GDTiledForestBackgroundObjects1= [];
gdjs.tongguanCode.GDTiledForestBackgroundObjects2= [];
gdjs.tongguanCode.GDNewObjectObjects1= [];
gdjs.tongguanCode.GDNewObjectObjects2= [];
gdjs.tongguanCode.GDflagObjects1= [];
gdjs.tongguanCode.GDflagObjects2= [];
gdjs.tongguanCode.GDPlayerObjects1= [];
gdjs.tongguanCode.GDPlayerObjects2= [];
gdjs.tongguanCode.GDPlayerHitBoxObjects1= [];
gdjs.tongguanCode.GDPlayerHitBoxObjects2= [];
gdjs.tongguanCode.GDGoLeftObjects1= [];
gdjs.tongguanCode.GDGoLeftObjects2= [];
gdjs.tongguanCode.GDGoRightObjects1= [];
gdjs.tongguanCode.GDGoRightObjects2= [];
gdjs.tongguanCode.GDPlatformObjects1= [];
gdjs.tongguanCode.GDPlatformObjects2= [];
gdjs.tongguanCode.GDzidanObjects1= [];
gdjs.tongguanCode.GDzidanObjects2= [];
gdjs.tongguanCode.GDTiledGrassPlatformObjects1= [];
gdjs.tongguanCode.GDTiledGrassPlatformObjects2= [];
gdjs.tongguanCode.GDPurpleSpaceObjects1= [];
gdjs.tongguanCode.GDPurpleSpaceObjects2= [];
gdjs.tongguanCode.GDTONGGUANObjects1= [];
gdjs.tongguanCode.GDTONGGUANObjects2= [];
gdjs.tongguanCode.GDGoalObjects1= [];
gdjs.tongguanCode.GDGoalObjects2= [];
gdjs.tongguanCode.GDtimeObjects1= [];
gdjs.tongguanCode.GDtimeObjects2= [];
gdjs.tongguanCode.GDdeathObjects1= [];
gdjs.tongguanCode.GDdeathObjects2= [];
gdjs.tongguanCode.GDTObeObjects1= [];
gdjs.tongguanCode.GDTObeObjects2= [];

gdjs.tongguanCode.conditionTrue_0 = {val:false};
gdjs.tongguanCode.condition0IsTrue_0 = {val:false};
gdjs.tongguanCode.condition1IsTrue_0 = {val:false};


gdjs.tongguanCode.eventsList0 = function(runtimeScene) {

{


gdjs.tongguanCode.condition0IsTrue_0.val = false;
{
gdjs.tongguanCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.tongguanCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.tongguanCode.GDGoalObjects1);
gdjs.copyArray(runtimeScene.getObjects("death"), gdjs.tongguanCode.GDdeathObjects1);
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.tongguanCode.GDtimeObjects1);
{for(var i = 0, len = gdjs.tongguanCode.GDGoalObjects1.length ;i < len;++i) {
    gdjs.tongguanCode.GDGoalObjects1[i].setString("achievement : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + "/5");
}
}{for(var i = 0, len = gdjs.tongguanCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.tongguanCode.GDtimeObjects1[i].setString("Your Time(s) : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.tongguanCode.GDdeathObjects1.length ;i < len;++i) {
    gdjs.tongguanCode.GDdeathObjects1[i].setString("Death : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


};

gdjs.tongguanCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tongguanCode.GDScoreObjects1.length = 0;
gdjs.tongguanCode.GDScoreObjects2.length = 0;
gdjs.tongguanCode.GDCoinIconObjects1.length = 0;
gdjs.tongguanCode.GDCoinIconObjects2.length = 0;
gdjs.tongguanCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.tongguanCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.tongguanCode.GDNewObjectObjects1.length = 0;
gdjs.tongguanCode.GDNewObjectObjects2.length = 0;
gdjs.tongguanCode.GDflagObjects1.length = 0;
gdjs.tongguanCode.GDflagObjects2.length = 0;
gdjs.tongguanCode.GDPlayerObjects1.length = 0;
gdjs.tongguanCode.GDPlayerObjects2.length = 0;
gdjs.tongguanCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.tongguanCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.tongguanCode.GDGoLeftObjects1.length = 0;
gdjs.tongguanCode.GDGoLeftObjects2.length = 0;
gdjs.tongguanCode.GDGoRightObjects1.length = 0;
gdjs.tongguanCode.GDGoRightObjects2.length = 0;
gdjs.tongguanCode.GDPlatformObjects1.length = 0;
gdjs.tongguanCode.GDPlatformObjects2.length = 0;
gdjs.tongguanCode.GDzidanObjects1.length = 0;
gdjs.tongguanCode.GDzidanObjects2.length = 0;
gdjs.tongguanCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.tongguanCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.tongguanCode.GDPurpleSpaceObjects1.length = 0;
gdjs.tongguanCode.GDPurpleSpaceObjects2.length = 0;
gdjs.tongguanCode.GDTONGGUANObjects1.length = 0;
gdjs.tongguanCode.GDTONGGUANObjects2.length = 0;
gdjs.tongguanCode.GDGoalObjects1.length = 0;
gdjs.tongguanCode.GDGoalObjects2.length = 0;
gdjs.tongguanCode.GDtimeObjects1.length = 0;
gdjs.tongguanCode.GDtimeObjects2.length = 0;
gdjs.tongguanCode.GDdeathObjects1.length = 0;
gdjs.tongguanCode.GDdeathObjects2.length = 0;
gdjs.tongguanCode.GDTObeObjects1.length = 0;
gdjs.tongguanCode.GDTObeObjects2.length = 0;

gdjs.tongguanCode.eventsList0(runtimeScene);
return;

}

gdjs['tongguanCode'] = gdjs.tongguanCode;
