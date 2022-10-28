function one(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	$("#currently-"+name).find("img").eq(0).attr("src","filled.png");
}

function two(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<2; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
}