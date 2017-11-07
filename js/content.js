// API KEY: fadb1375f3d346da87ee9e086cf4484c
// OAuth client_id: 22240
// OAuth client_secret: LKHkKwTifqlB0KLGdn-0CMH9uOIFCYfmzdjxgLYVHCM
// OAuth Authorization URL: https://www.bungie.net/en/OAuth/Authorize
// Token URL: https://www.bungie.net/Platform/App/OAuth/token/
// Redirect URI: https://tracelarson.github.io/IGotYourSix
// API Root Path (endpoint): https://www.bungie.net/Platform
// state= igotyour6_state_parameter

//response_type: 'code'


// GET /resource HTTP/1.1
// Authorization: Bearer mF_9.B5f-4.1JqM
// X-API-Key: 8d6484be63a845848a9affde4ec9f682


// X-API-KEY : fadb1375f3d346da87ee9e086cf4484c

// https://www.bungie.net/en/oauth/authorize?client_id=22240
// &response_type=code
// &state=igotyour6_state_parameter

//-------Index page [
if(window.location.pathname == './index.html') {
	const authUrl = 'https://www.bungie.net/en/oauth/authorize?client_id=22240&redirect_uri=&response_type=code&state=igotyour6stateparameter';

	var myHeaders = new Headers();
	myHeaders.append('response_type', 'code');
	myHeaders.append('client_id', '22240');
	myHeaders.append('X-API-KEY','fadb1375f3d346da87ee9e086cf4484c');

	var myInit = {
		method: 'GET',
		headers: myHeaders,
		mode: 'cors'
	};

	fetch(authUrl, myInit).then((response) =>{
		console.log(response);
	});

}
//-------Index page ]




//-------Members Page [
if(window.location.pathname == './members.html') {

}
//-------Members Page ]




//-------Profile Page [
if(window.location.pathname == './profile.html') {

}
//-------Profile Page ]




//-------Join Up Page [
if(window.location.pathname == './joinup.html') {

}
//-------Join Up Page ]




//-------Loadouts Page [
if(window.location.pathname == './loadouts.html') {

}
//-------Loadouts Page ]




//--------Inventory Page [

if(window.location.pathname == '../inventory.html') {

	const tabcontent = document.getElementsByClassName("tabcontent");
	const tablinks = document.getElementsByClassName("tablinks");
	const gearButton = document.getElementById("gear-button");
	const inventoryButton = document.getElementById("inventory-button");
	const storageButton = document.getElementById("storage-button");

//----TAB CONTROL
	window.onload = function () {
		for (let i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = 'none';
		}
	};

	gearButton.addEventListener('click', () => {
		showTabs(event, 'gear-tab')
	});
	inventoryButton.addEventListener('click', () => {
		showTabs(event, 'inventory-tab')
	});
	storageButton.addEventListener('click', () => {
		showTabs(event, 'storage-tab')
	});

	function showTabs(event, tabName) {

		//select all tab content elements and hide them
		for (let i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = 'none';
		}

		//remove active class
		for (let i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(' active', '')
		}

		//show the current tab
		document.getElementById(tabName).style.display = "block";


	}
}
//----TAB CONTROL ]