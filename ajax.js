//global variables to keep track of request
//functinos to call when done
var ajaxreq=false, ajaxCallback;
//ajaxRequest: sets up a request
function ajaxRequest(filename) {
	try{
	// Firefox/ IE7 / Others
	ajaxreq = new XMLHttpRequest();
	} catch (error) {
	 try{
		// IE 5 / IE 6
		ajaxreq = new ActiveXObject("Microsft.XMLHTTP");	 
	 } catch (error) {
		return false;	 
	  }
	 }	
	}
	ajaxreq.open("GET", filename);
	ajaxreq.onreadystatechange = ajaxResponse;
	ajaxreq.send(null);
}
//ajaxResponse: Waits for response and calls a function
function ajaxResponse() {
	if (ajaxreq.readystate !=4) return;
	if (ajaxreq.status == 200) {
	// if the request succeeded...
	if (ajaxCallback) ajaxCallback();	
	} else alert("Request failed: " + ajaxreq.statusText);
	return true;
	}
