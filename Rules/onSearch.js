
  export default function onSearch(context) {
	var logger = context.getLogger();
	logger.on;
	logger.setLevel('Info');
	// logger.log(logger.getLevel);
	// logger.log("Current Log Level: " + logger.getLevel);
	var esName = context.evaluateTargetPath('#Page:Search/#Control:EnterStoreName/#Value');
	var ctValue = context.evaluateTargetPath('#Page:Search/#Control:CoordinatesTest/#Value');
	alert(esName + " " + ctValue);
	var anotherStore = {
		"City": "King of Prussia",
		"Country": "United States",
		"HouseNumber": "",
		"LastName": "Costco",
		"PostalCode": "19406",
		"Street": "201 Allendale Rd"
	};
	// 
	alert(JSON.stringify(anotherStore));
	// var mapControl = context.evaluateTargetPath("#Page:Search/#Control:MapControlinSearch");
	// logger.log(mapControl);
	logger.log("before add");
	// mapControl.addMarker(anotherStore,context);
	logger.log("after add");
	// logger.log(esName);
	// alert(esName);
	// logger.uploadLogFile("https://ic-cf-2020-team-227-com-sap-mdk-pan.cfapps.eu10.hana.ondemand.com", "com.sap.mdk.pan");
	return true;
	
}