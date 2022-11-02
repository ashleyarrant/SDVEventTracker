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
		$("#box-" + id).removeClass("bg-warning");
	} else {
		let newCookie = cookie.replace(eventName,"");
		setCookie(cname,newCookie,100);
		$("#box-" + id).addClass("bg-warning");
	}
}

//onload event
function loadSeen(eventName, name){
	let cname = name+"SeenEvents";
	let cookie = getCookie(cname);
	let checkbox = eventName + "-" + name;

	//if cookie contains event name, check it off
	if(cookie.includes(eventName)){
		$("#box-" + checkbox).removeClass("bg-warning");
		return "checked";
	} else {
		console.log("NO");
		$("#box-" + checkbox).addClass("bg-warning");
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

function clearData(){
	let conf = confirm("Are you sure you want to delete your data? You'll need to re-enter it after the page refreshes.");

	if (conf) {
		$("[id^=currently]").each(function(){
			let name = $(this).attr("id").replace("currently-","");
			deleteCookie(name+"SeenEvents");
			deleteCookie(name+"Hearts");
		});
	}

	location.reload();
}

function colorCode(name) {
	//for each box, if the value of the box is less than or equal to the current heart level, and the box is unchecked, make it yellow.
	let x = $("input[id$="+name+"]").length;

	$("input[id$="+name+"]").each(function(){
		//get numerical value of the event
		let values = $(this).attr("id").split("-");
		let events = ["oneHeart","twoHearts","threeHearts","fourHearts","fiveHearts","sixHearts","sevenHearts","eightHearts","nineHearts","tenHearts","elevenHearts","twelveHearts","thirteenHearts","fourteenHearts"];
		let eventNum = events.indexOf(values[0]) + 1;
		let hearts = parseInt($("#currently-"+name).attr("data-value"));

		if(eventNum <= hearts && $(this).prop('checked') == false){
			$("#box-" + $(this).attr("id")).addClass("bg-warning");
		} else {
			$("#box-" + $(this).attr("id")).removeClass("bg-warning");
		}
	});
}