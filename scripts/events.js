function setSeenEvent(x){
	//onclick event

	let event = $(x).attr("id").split("-")[0];
	let name = $(x).attr("id").split("-")[1];
	let seen = x.checked;
	
	let cname = "seenEvents"+name;
	let oldEvents = getCookie(cname);
	let newEvents = "";
	if(oldEvents.includes(event)){
		//a change needs to be made
		if(seen){
			//old data is false
			newEvents = oldEvents.replace(event + "false",event+"true");
		} else {
			//old data is true
			newEvents = oldEvents.replace(event + "true",event+"false");
		}
	}else {
		//register a new change
		newEvents = oldEvents + event + seen;
	}

	setCookie(cname, newEvents, 100);

}

function checkSeenEvent(event, name){
	let cname = "seenEvents" + name;
	let data = getCookie(cname);

	if(data.includes(event)){
		return true;
	} else return false;
}