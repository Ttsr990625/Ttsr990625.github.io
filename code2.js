gdjs.setCode = {};
gdjs.setCode.GDScoreObjects1= [];
gdjs.setCode.GDScoreObjects2= [];
gdjs.setCode.GDCoinIconObjects1= [];
gdjs.setCode.GDCoinIconObjects2= [];
gdjs.setCode.GDTiledForestBackgroundObjects1= [];
gdjs.setCode.GDTiledForestBackgroundObjects2= [];
gdjs.setCode.GDNewObjectObjects1= [];
gdjs.setCode.GDNewObjectObjects2= [];
gdjs.setCode.GDflagObjects1= [];
gdjs.setCode.GDflagObjects2= [];
gdjs.setCode.GDPlayerObjects1= [];
gdjs.setCode.GDPlayerObjects2= [];
gdjs.setCode.GDPlayerHitBoxObjects1= [];
gdjs.setCode.GDPlayerHitBoxObjects2= [];
gdjs.setCode.GDGoLeftObjects1= [];
gdjs.setCode.GDGoLeftObjects2= [];
gdjs.setCode.GDGoRightObjects1= [];
gdjs.setCode.GDGoRightObjects2= [];
gdjs.setCode.GDPlatformObjects1= [];
gdjs.setCode.GDPlatformObjects2= [];
gdjs.setCode.GDzidanObjects1= [];
gdjs.setCode.GDzidanObjects2= [];
gdjs.setCode.GDTiledGrassPlatformObjects1= [];
gdjs.setCode.GDTiledGrassPlatformObjects2= [];
gdjs.setCode.GDBlackSpaceObjects1= [];
gdjs.setCode.GDBlackSpaceObjects2= [];
gdjs.setCode.GDValueObjects1= [];
gdjs.setCode.GDValueObjects2= [];
gdjs.setCode.GDBottomArrowRoundButtonObjects1= [];
gdjs.setCode.GDBottomArrowRoundButtonObjects2= [];

gdjs.setCode.conditionTrue_0 = {val:false};
gdjs.setCode.condition0IsTrue_0 = {val:false};
gdjs.setCode.condition1IsTrue_0 = {val:false};
gdjs.setCode.condition2IsTrue_0 = {val:false};


gdjs.setCode.mapOfGDgdjs_46setCode_46GDBottomArrowRoundButtonObjects1Objects = Hashtable.newFrom({"BottomArrowRoundButton": gdjs.setCode.GDBottomArrowRoundButtonObjects1});gdjs.setCode.eventsList0 = function(runtimeScene) {

{


gdjs.setCode.condition0IsTrue_0.val = false;
{
gdjs.setCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.setCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.setCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.setCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.setCode.GDNewObjectObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.setCode.GDNewObjectObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber((( gdjs.setCode.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.setCode.GDNewObjectObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BottomArrowRoundButton"), gdjs.setCode.GDBottomArrowRoundButtonObjects1);

gdjs.setCode.condition0IsTrue_0.val = false;
gdjs.setCode.condition1IsTrue_0.val = false;
{
gdjs.setCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.setCode.mapOfGDgdjs_46setCode_46GDBottomArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.setCode.condition0IsTrue_0.val ) {
{
gdjs.setCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.setCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "boss1", false);
}}

}


};

gdjs.setCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.setCode.GDScoreObjects1.length = 0;
gdjs.setCode.GDScoreObjects2.length = 0;
gdjs.setCode.GDCoinIconObjects1.length = 0;
gdjs.setCode.GDCoinIconObjects2.length = 0;
gdjs.setCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.setCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.setCode.GDNewObjectObjects1.length = 0;
gdjs.setCode.GDNewObjectObjects2.length = 0;
gdjs.setCode.GDflagObjects1.length = 0;
gdjs.setCode.GDflagObjects2.length = 0;
gdjs.setCode.GDPlayerObjects1.length = 0;
gdjs.setCode.GDPlayerObjects2.length = 0;
gdjs.setCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.setCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.setCode.GDGoLeftObjects1.length = 0;
gdjs.setCode.GDGoLeftObjects2.length = 0;
gdjs.setCode.GDGoRightObjects1.length = 0;
gdjs.setCode.GDGoRightObjects2.length = 0;
gdjs.setCode.GDPlatformObjects1.length = 0;
gdjs.setCode.GDPlatformObjects2.length = 0;
gdjs.setCode.GDzidanObjects1.length = 0;
gdjs.setCode.GDzidanObjects2.length = 0;
gdjs.setCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.setCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.setCode.GDBlackSpaceObjects1.length = 0;
gdjs.setCode.GDBlackSpaceObjects2.length = 0;
gdjs.setCode.GDValueObjects1.length = 0;
gdjs.setCode.GDValueObjects2.length = 0;
gdjs.setCode.GDBottomArrowRoundButtonObjects1.length = 0;
gdjs.setCode.GDBottomArrowRoundButtonObjects2.length = 0;

gdjs.setCode.eventsList0(runtimeScene);
return;

}

gdjs['setCode'] = gdjs.setCode;
