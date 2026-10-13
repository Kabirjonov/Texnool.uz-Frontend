export function generateUnicUserId(): number {
	const unicId = Math.floor(Math.random() * 1_000_000);
	localStorage.setItem("unicId", String(unicId));
	return unicId;
}

export function saveGhostToken(data: any) {
	if (data.ghostToken) {
		console.log("ghostToken", data.ghostToken);
		localStorage.setItem("ghostToken", data.ghostToken);
	}
}

export function removeGhostToken() {
	const ghostToken = localStorage.getItem("ghostToken");
	if (ghostToken) {
		console.log("ghostToken deleted", ghostToken);
		localStorage.removeItem("ghostToken");
	}
}

export function checkGostToken() {
	const ghostToken = localStorage.getItem("ghostToken");
	if (ghostToken) {
		return true;
	}
	return false;
}
