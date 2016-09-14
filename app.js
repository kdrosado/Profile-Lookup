//Problem: We need a way to look up a user's badge count and JavaScript points from a web browser
//Solution: Use node.js to perform the profile lookups and server our template via HTTP


//1. create a web server
var http = require('http');
http.createServer(function(request, response){
	homeRoute(resquest, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');

//2. hanlde HTTP route GET / and POST / i.e Home
function homeRout(request, response){

	//if url == "/" && GET
	if (request.url === "/"){
	
		//show search
		response.writeHead(200, {'Content-Type': 'text/plain' });
	  response.write("Header\n");
	  response.write("Search\n");
	  response.end("Footer\n");
  }
	//if url == "/" && POST
		// redirect to /:username
}

//3. handle http route GET /:username / i.e. chalkers
function userRoute(request, response){

	//if url == "/..."
		//get json from treehouse
			//on end
				//show profile
			//on error
				//show error
}

//4. function that handles the reading of files and merge in value 
	//read from file and get a string
	//merge values into string
