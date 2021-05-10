gdjs.deadCode = {};
gdjs.deadCode.GDScoreObjects1= [];
gdjs.deadCode.GDScoreObjects2= [];
gdjs.deadCode.GDCoinIconObjects1= [];
gdjs.deadCode.GDCoinIconObjects2= [];
gdjs.deadCode.GDTiledForestBackgroundObjects1= [];
gdjs.deadCode.GDTiledForestBackgroundObjects2= [];
gdjs.deadCode.GDNewObjectObjects1= [];
gdjs.deadCode.GDNewObjectObjects2= [];
gdjs.deadCode.GDflagObjects1= [];
gdjs.deadCode.GDflagObjects2= [];
gdjs.deadCode.GDPlayerObjects1= [];
gdjs.deadCode.GDPlayerObjects2= [];
gdjs.deadCode.GDPlayerHitBoxObjects1= [];
gdjs.deadCode.GDPlayerHitBoxObjects2= [];
gdjs.deadCode.GDGoLeftObjects1= [];
gdjs.deadCode.GDGoLeftObjects2= [];
gdjs.deadCode.GDGoRightObjects1= [];
gdjs.deadCode.GDGoRightObjects2= [];
gdjs.deadCode.GDPlatformObjects1= [];
gdjs.deadCode.GDPlatformObjects2= [];
gdjs.deadCode.GDzidanObjects1= [];
gdjs.deadCode.GDzidanObjects2= [];
gdjs.deadCode.GDTiledGrassPlatformObjects1= [];
gdjs.deadCode.GDTiledGrassPlatformObjects2= [];
gdjs.deadCode.GDNewObject2Objects1= [];
gdjs.deadCode.GDNewObject2Objects2= [];

gdjs.deadCode.conditionTrue_0 = {val:false};
gdjs.deadCode.condition0IsTrue_0 = {val:false};
gdjs.deadCode.condition1IsTrue_0 = {val:false};


gdjs.deadCode.eventsList0 = function(runtimeScene) {

{


gdjs.deadCode.condition0IsTrue_0.val = false;
{
gdjs.deadCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.deadCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "boss1", false);
}}

}


};

gdjs.deadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.deadCode.GDScoreObjects1.length = 0;
gdjs.deadCode.GDScoreObjects2.length = 0;
gdjs.deadCode.GDCoinIconObjects1.length = 0;
gdjs.deadCode.GDCoinIconObjects2.length = 0;
gdjs.deadCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.deadCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.deadCode.GDNewObjectObjects1.length = 0;
gdjs.deadCode.GDNewObjectObjects2.length = 0;
gdjs.deadCode.GDflagObjects1.length = 0;
gdjs.deadCode.GDflagObjects2.length = 0;
gdjs.deadCode.GDPlayerObjects1.length = 0;
gdjs.deadCode.GDPlayerObjects2.length = 0;
gdjs.deadCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.deadCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.deadCode.GDGoLeftObjects1.length = 0;
gdjs.deadCode.GDGoLeftObjects2.length = 0;
gdjs.deadCode.GDGoRightObjects1.length = 0;
gdjs.deadCode.GDGoRightObjects2.length = 0;
gdjs.deadCode.GDPlatformObjects1.length = 0;
gdjs.deadCode.GDPlatformObjects2.length = 0;
gdjs.deadCode.GDzidanObjects1.length = 0;
gdjs.deadCode.GDzidanObjects2.length = 0;
gdjs.deadCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.deadCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.deadCode.GDNewObject2Objects1.length = 0;
gdjs.deadCode.GDNewObject2Objects2.length = 0;

gdjs.deadCode.eventsList0(runtimeScene);
return;

}

gdjs['deadCode'] = gdjs.deadCode;
