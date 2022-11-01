//onclick event
function setSeenEvent(x){
	let id = $(x).attr("id");
	let eventName = $(x).attr("id").split("-")[0];
	let name = $(x).attr("id").split("-")[1];
	let cname = name+"SeenEvents";
	let events = ["oneHeart","twoHearts","threeHearts","fourHearts","fiveHearts","sixHearts","sevenHearts","eightHearts","nineHearts","tenHearts","elevenHearts","twelveHearts","thirteenHearts","fourteenHearts"];
	let eventNum = events.indexOf(eventName) + 1;

	//get current cookie
	let cookie = getCookie(cname);

	//if box is checked, add event name to cookie, else remove from cookie
	if(x.checked){
		let newCookie = cookie + eventName;
		setCookie(cname,newCookie,100);
		console.log(eventName + " has been seen");
		$("#box-"+id).removeClass("bg-warning");
	} else {
		let newCookie = cookie.replace(eventName,"");
		setCookie(cname,newCookie,100);
		//add the background if it shouldn't have been seen
		let hearts = parseInt($("#currently-"+name).attr("data-value"));
		if (hearts == eventNum){
			$("#box-"+id).addClass("bg-warning");
			console.log(eventName + " has not been seen");
		}
	}
}

//onload event
function loadSeen(eventName, name){
	let cname = name+"SeenEvents";
	let cookie = getCookie(cname);
	let checkbox = eventName + "-" + name;
	let events = ["oneHeart","twoHearts","threeHearts","fourHearts","fiveHearts","sixHearts","sevenHearts","eightHearts","nineHearts","tenHearts","elevenHearts","twelveHearts","thirteenHearts","fourteenHearts"];
	let eventNum = events.indexOf(eventName);

	//if cookie contains event name, check it off
	if(cookie.includes(eventName)){
		switch(eventNum){
			case 1: one(name); break;
			case 2: two(name); break;
			case 3: three(name); break;
			case 4: four(name); break;
			case 5: five(name); break;
			case 6: six(name); break;
			case 7: seven(name); break;
			case 8: eight(name); break;
			case 9: nine(name); break;
			case 10: ten(name); break;
			case 11: eleven(name); break;
			case 12: twelve(name); break;
			case 13: thirteen(name); break;
			case 14: fourteen(name); break;
		}
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