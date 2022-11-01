//onclick event
function setSeenEvent(x){
	let id = $(x).attr("id");
	let eventName = $(x).attr("id").split("-")[0];
	let name = $(x).attr("id").split("-")[1];
	let cname = name+"SeenEvents";

	//get current cookie
	let cookie = getCookie(cname);

	//if box is checked, add event name to cookie, else remove from cookie
	if(x.checked){
		let newCookie = cookie + eventName;
		setCookie(cname,newCookie,100);
		$("#box-"+id).removeClass("bg-warning");
	} else {
		let newCookie = cookie.replace(eventName,"");
		setCookie(cname,newCookie,100);
		$("#box-"+id).addClass("bg-warning");
	}
}

//onload event
function loadSeen(eventName, name){
	let cname = name+"SeenEvents";
	let cookie = getCookie(cname);
	let checkbox = eventName + "-" + name;

	//if cookie contains event name, check it off
	if(cookie.includes(eventName)){
		return "checked";
	} else {
		return "";
	}
}

function relationship(name){
	let hearts = parseInt($("#currently-"+name).attr("data-value"));

	if(hearts>10){
		return "married";
	} else if(hearts>8){
		return "dating";
	} else return "single";
}