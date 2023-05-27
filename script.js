var toggled = [false, false, false, false, false, false];

function TurnBorderBlue(id) {
	if (!toggled[id]) {
		document.getElementById(id).style.border = "3px solid #4e60ff";
		toggled[id] = true;
	} else {
		document.getElementById(id).style.border = "3px solid #edeef2";
		toggled[id] = false;
	}
}