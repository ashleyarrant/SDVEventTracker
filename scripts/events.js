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

// onclick event when the dropdown is changed
function setRelationship(x) {
	let name = $(x).attr("id").replace("relationship-","");
	let status = x.value;
	let cookie = "", newCookie = "";
	
	if(status = "single") {
		cookie = getCookie("dating");
		cookie.replace(name,"");

		cookie = getCookie("married");
		cookie.replace(name,"");

		if(getCookie("single").includes(name) == false){
			cookie = getCookie("single");
			newCookie = cookie + name;

			setCookie("single",newCookie,100);
		}
	} else if(status = "dating") {
		cookie = getCookie("single");
		cookie.replace(name,"");

		cookie = getCookie("married");
		cookie.replace(name,"");

		if(getCookie("dating").includes(name) == false){
			cookie = getCookie("dating");
			newCookie = cookie + name;

			setCookie("dating",newCookie,100);
		}
	} else if(status = "married"){
		cookie = getCookie("dating");
		cookie.replace(name,"");

		cookie = getCookie("single");
		cookie.replace(name,"");

		if(getCookie("married").includes(name) == false){
			cookie = getCookie("married");
			newCookie = cookie + name;

			setCookie("married",newCookie,100);
		}
	}

}

function loadRelationship(name){
	let a = getCookie("single");
	let b = getCookie("dating");
	let c = getCookie("married");

	if(a.includes(name)){
		$("#relationship-"+name).val("single");
	} else if(b.includes(name)){
		$("#relationship-"+name).val("dating");
	} else if(c.includes(name)){
		$("#relationship-"+name).val("married");
	}
}