//onclick event
function setSeenEvent(x){
	let eventName = $(x).attr("id").split("-")[0];
	let name = $(x).attr("id").split("-")[1];
	let cname = name+"SeenEvents";

	//get current cookie
	let cookie = getCookie(cname);

	//if box is checked, add event name to cookie, else remove from cookie
	if(x.checked){
		let newCookie = cookie + eventName;
		setCookie(cname,newCookie,100);
		$("label[for='"+$(x).attr("id")+"']").addClass("selected");
	} else {
		let newCookie = cookie.replace(eventName,"");
		setCookie(cname,newCookie,100);
		$("label[for='"+$(x).attr("id")+"']").removeClass("selected");
	}
}

//onload event
function loadSeen(eventName, name){
	let cname = name+"SeenEvents";
	let cookie = getCookie(cname);
	let checkbox = eventName + "-" + name;

	//if cookie contains event name, check it off
	if(cookie.includes(eventName)){
		$("label[for='"+checkbox+"']").addClass("selected");
		return "checked";
	} else {
		$("label[for='"+checkbox+"']").removeClass("selected");
		return "";
	}
}