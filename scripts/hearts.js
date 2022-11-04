function one(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	$("#currently-"+name).find("img").eq(0).attr("src","filled.png");
	$("#currently-"+name).attr("data-value","1");
	setCookie(name+"Hearts","1",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(single)");
	}
	colorCode(name);sortRows();
}

function two(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<2; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","2");
	setCookie(name+"Hearts","2",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(single)");
	}
	colorCode(name);sortRows();
}

function three(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<3; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","3");
	setCookie(name+"Hearts","3",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(single)");
	}
	colorCode(name);sortRows();
}

function four(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<4; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","4");
	setCookie(name+"Hearts","4",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(single)");
	}
	colorCode(name);sortRows();
}

function five(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<5; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","5");
	setCookie(name+"Hearts","5",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(single)");
	}
	colorCode(name);sortRows();
}

function six(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<6; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","6");
	setCookie(name+"Hearts","6",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(single)");
	}
	colorCode(name);sortRows();
}

function seven(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<7; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","7");
	setCookie(name+"Hearts","7",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(single)");
	}
	colorCode(name);sortRows();
}

function eight(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<8; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","8");
	setCookie(name+"Hearts","8",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(dating)");
	}
	colorCode(name);sortRows();
}

function nine(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<9; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","9");
	setCookie(name+"Hearts","9",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(dating)");
	}
	colorCode(name);sortRows();
}

function ten(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<10; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","10");
	setCookie(name+"Hearts","10",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(dating)");
	}
	colorCode(name);sortRows();
}

function eleven(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<11; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","11");
	setCookie(name+"Hearts","11",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(spouse)");
	}
	colorCode(name);sortRows();
}

function twelve(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<12; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","12");
	setCookie(name+"Hearts","12",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(spouse)");
	}
	colorCode(name);sortRows();
}

function thirteen(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<13; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","13");
	setCookie(name+"Hearts","13",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(spouse)");
	}
	colorCode(name);sortRows();
}

function fourteen(name) {
	$("#currently-"+name).find("img").attr("src","empty.png");
	for(let i=0;i<14; i++){
		$("#currently-"+name).find("img").eq(i).attr("src","filled.png");
	}
	$("#currently-"+name).attr("data-value","14");
	setCookie(name+"Hearts","14",100);
	let r = $("#relationship-"+name);
	if(r.length!=0){
		r.text("(spouse)");
	}
	colorCode(name);sortRows();
}