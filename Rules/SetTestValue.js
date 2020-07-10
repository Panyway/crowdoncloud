export default function SetTestValue(controlProxy) {
  console.log("In SetTestValue");
  let srcValue = controlProxy.getValue();
  let targetCtrl = controlProxy.evaluateTargetPath("#Page:Search/#Control:CoordinatesTest");
  targetCtrl.setValue(srcValue);
}