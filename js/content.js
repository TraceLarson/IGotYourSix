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


// X-API-KEY : fadb1375f3d346da87ee9e086cf4484c

// https://www.bungie.net/en/oauth/authorize?client_id=22240
// &response_type=code
// &state=igotyour6_state_parameter


//-------Index page [
if (window.location.pathname == '/index.html') {

	overButton();

}
//------------------------------------END]

//-------Dashboard page [
if (window.location.pathname == '/dashboard.html'){
	overButton();
}

//------------------------------------END]



//-------Members Page [
if (window.location.pathname == '/members.html') {

}
//------------------------------------END]




//-------Profile Page [
if (window.location.pathname == '/profile.html') {

}
//------------------------------------END]




//-------Join Up Page [
if (window.location.pathname == '/joinup.html') {

	overButton();
	const regButton = document.getElementById('register');

	regButton.addEventListener('click',  (event) => {
		event.preventDefault();
		alert('hello world');

	})
}
//------------------------------------END]






//-------Loadouts Page [
if (window.location.pathname == '/loadouts.html') {

	overButton();

	activateLoadout();



}
//------------------------------------END]



//--------Inventory Page [
if (window.location.pathname == '/inventory.html') {

	overButton();

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

//------------------------------------END]


function overButton() {

	const button = document.getElementsByTagName('button');

	for (let i = 0; i < button.length; i++) {

		button[i].addEventListener('mouseenter', () => {

			let buttonText = button[i].innerHTML;
			// console.log(buttonText);
			button[i].innerHTML = '<u>[' + buttonText + ']</u>';
			// console.log(buttonText);
		});
		button[i].addEventListener('mouseleave', () => {

			let buttonText = button[i].innerHTML;

			if (buttonText.includes('[')) {
				// console.log(buttonText);
				button[i].innerHTML = button[i].innerHTML.replace('<u>[', '').replace(']</u>', '');
				// console.log(button[i].innerHTML);
			}
		});
	}
}



function activateLoadout(){

	const loadoutButtons = document.getElementsByTagName('button');

	for(let i = 0; i < loadoutButtons.length; i++){

		loadoutButtons[i].addEventListener('click', () =>{
			for(let i = 0; i < loadoutButtons.length; i++) {
				if (loadoutButtons[i].className == 'activeLoadout') {
					loadoutButtons[i].setAttribute('class', 'inactiveLoadout');
				}
			}
			loadoutButtons[i].setAttribute('class', 'activeLoadout');
		});

	}
}