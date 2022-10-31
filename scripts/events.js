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
		$("label[for='"+eventName+"-"+name+"']").addClass("selected");
		$("#box-"+eventName+"-"+name).removeClass("bg-warning");
	} else {
		let newCookie = cookie.replace(eventName,"");
		setCookie(cname,newCookie,100);
		$("label[for='"+eventName+"-"+name+"']").removeClass("selected");
		$("#box-"+eventName+"-"+name).addClass("bg-warning");
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
		$("#box-"+eventName+"-"+name).removeClass("bg-warning");
		return "checked";
	} else {
		$("label[for='"+checkbox+"']").removeClass("selected");
		$("#box-"+eventName+"-"+name).addClass("bg-warning");
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