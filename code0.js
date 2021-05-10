gdjs.startCode = {};
gdjs.startCode.GDScoreObjects1= [];
gdjs.startCode.GDScoreObjects2= [];
gdjs.startCode.GDCoinIconObjects1= [];
gdjs.startCode.GDCoinIconObjects2= [];
gdjs.startCode.GDTiledForestBackgroundObjects1= [];
gdjs.startCode.GDTiledForestBackgroundObjects2= [];
gdjs.startCode.GDNewObjectObjects1= [];
gdjs.startCode.GDNewObjectObjects2= [];
gdjs.startCode.GDflagObjects1= [];
gdjs.startCode.GDflagObjects2= [];
gdjs.startCode.GDPlayerObjects1= [];
gdjs.startCode.GDPlayerObjects2= [];
gdjs.startCode.GDPlayerHitBoxObjects1= [];
gdjs.startCode.GDPlayerHitBoxObjects2= [];
gdjs.startCode.GDGoLeftObjects1= [];
gdjs.startCode.GDGoLeftObjects2= [];
gdjs.startCode.GDGoRightObjects1= [];
gdjs.startCode.GDGoRightObjects2= [];
gdjs.startCode.GDPlatformObjects1= [];
gdjs.startCode.GDPlatformObjects2= [];
gdjs.startCode.GDzidanObjects1= [];
gdjs.startCode.GDzidanObjects2= [];
gdjs.startCode.GDTiledGrassPlatformObjects1= [];
gdjs.startCode.GDTiledGrassPlatformObjects2= [];
gdjs.startCode.GDNewObjectObjects1= [];
gdjs.startCode.GDNewObjectObjects2= [];
gdjs.startCode.GDNewObject2Objects1= [];
gdjs.startCode.GDNewObject2Objects2= [];
gdjs.startCode.GDForestBackgroundObjects1= [];
gdjs.startCode.GDForestBackgroundObjects2= [];
gdjs.startCode.GDNewObject3Objects1= [];
gdjs.startCode.GDNewObject3Objects2= [];
gdjs.startCode.GDNewObject4Objects1= [];
gdjs.startCode.GDNewObject4Objects2= [];

gdjs.startCode.conditionTrue_0 = {val:false};
gdjs.startCode.condition0IsTrue_0 = {val:false};
gdjs.startCode.condition1IsTrue_0 = {val:false};


gdjs.startCode.eventsList0 = function(runtimeScene) {

{


gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "boss1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.startCode.GDNewObject2Objects1);

gdjs.startCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.startCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.startCode.GDNewObject2Objects1[i].timerElapsedTime("start", 0.9) ) {
        gdjs.startCode.condition0IsTrue_0.val = true;
        gdjs.startCode.GDNewObject2Objects1[k] = gdjs.startCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.startCode.GDNewObject2Objects1.length = k;}if (gdjs.startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.startCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.startCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewObject3Objects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.startCode.GDNewObject2Objects1);

gdjs.startCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.startCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.startCode.GDNewObject2Objects1[i].timerElapsedTime("show", 0.5) ) {
        gdjs.startCode.condition0IsTrue_0.val = true;
        gdjs.startCode.GDNewObject2Objects1[k] = gdjs.startCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.startCode.GDNewObject2Objects1.length = k;}if (gdjs.startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.startCode.GDNewObject2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.startCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.startCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewObject3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.startCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewObject2Objects1[i].resetTimer("show");
}
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDScoreObjects1.length = 0;
gdjs.startCode.GDScoreObjects2.length = 0;
gdjs.startCode.GDCoinIconObjects1.length = 0;
gdjs.startCode.GDCoinIconObjects2.length = 0;
gdjs.startCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.startCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.startCode.GDNewObjectObjects1.length = 0;
gdjs.startCode.GDNewObjectObjects2.length = 0;
gdjs.startCode.GDflagObjects1.length = 0;
gdjs.startCode.GDflagObjects2.length = 0;
gdjs.startCode.GDPlayerObjects1.length = 0;
gdjs.startCode.GDPlayerObjects2.length = 0;
gdjs.startCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.startCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.startCode.GDGoLeftObjects1.length = 0;
gdjs.startCode.GDGoLeftObjects2.length = 0;
gdjs.startCode.GDGoRightObjects1.length = 0;
gdjs.startCode.GDGoRightObjects2.length = 0;
gdjs.startCode.GDPlatformObjects1.length = 0;
gdjs.startCode.GDPlatformObjects2.length = 0;
gdjs.startCode.GDzidanObjects1.length = 0;
gdjs.startCode.GDzidanObjects2.length = 0;
gdjs.startCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.startCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.startCode.GDNewObjectObjects1.length = 0;
gdjs.startCode.GDNewObjectObjects2.length = 0;
gdjs.startCode.GDNewObject2Objects1.length = 0;
gdjs.startCode.GDNewObject2Objects2.length = 0;
gdjs.startCode.GDForestBackgroundObjects1.length = 0;
gdjs.startCode.GDForestBackgroundObjects2.length = 0;
gdjs.startCode.GDNewObject3Objects1.length = 0;
gdjs.startCode.GDNewObject3Objects2.length = 0;
gdjs.startCode.GDNewObject4Objects1.length = 0;
gdjs.startCode.GDNewObject4Objects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
return;

}

gdjs['startCode'] = gdjs.startCode;
