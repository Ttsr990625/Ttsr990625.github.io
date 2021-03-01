gdjs.startCode = {};
gdjs.startCode.GDScoreObjects1= [];
gdjs.startCode.GDScoreObjects2= [];
gdjs.startCode.GDCoinIconObjects1= [];
gdjs.startCode.GDCoinIconObjects2= [];
gdjs.startCode.GDTiledForestBackgroundObjects1= [];
gdjs.startCode.GDTiledForestBackgroundObjects2= [];
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
