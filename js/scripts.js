$(document).ready(function(){

//Sign up for an account at https://thecatapi.com/ to get your API Key and insert below
const key = 'aee416ac-5b89-4438-97dd-59d9af1b7556';
let headers = new Headers();
headers.set('x-api-key', key);

//how many cat images do you want to pull in
const limit = '20';
const url = 'https://api.thecatapi.com/v1/images/search?order=ASC&limit=' + limit;

let output = '';

$.getJSON(url, function(data){
	//loop through the returned cat images using either for or $.each()

	//append the returned cat images to the #content div
	//  console.log(data);
	 for(i = 0; i < data.length; i++) {
		output += '<img src="'+data[i].url+'"/>';
	 }
	
	 $('#content').append(output);

	 $('img').click(function(){
		alert("You clicked!");
	});
});

});