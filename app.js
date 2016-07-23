var express = require('express');
var app = express();
app.set('view engine', 'ejs');
//var http = require('http');

var request=require("request");

/*app.get('/', function(req, res){
	
  res.send('hello world');
});*/
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var router = express.Router();
/*var pagination = require('pagination');
var paginator = pagination.create('search', {prelink:'/', current: 1, rowsPerPage: 200, totalResult: 10020});
console.log(paginator.render());*/

router.get('/character/:name', function(req, res) {
	console.log(req.params.name);
	request.get("http://swapi.co/api/people/",function(error,response,body){
           if(error){
                 console.log(error);
           }else{
			  
			   var result=response.body;				
				var data=JSON.parse(result);
                 console.log(data.results.length);
				 
				 data=data.results;
				/* var finalData=[];
				 for(var i=0;i<data.length;i++){
					 if(data[i].name==req.params.name){
						 finalData.push(data[i]);
					 }
				 }*/
				 
				  // console.log(data);
				//data=JSON.stringify(data);
		res.render('index', {
        persons: data
			});
         }
});



    //res.send('hello ' + req.params.name + '!');
});

router.get('/characters/:sort', function(req, res) {
	console.log(req.params.name);
	request.get("http://swapi.co/api/people/",function(error,response,body){
           if(error){
                 console.log(error);
           }else{
			  
			   var result=response.body;				
				var data=JSON.parse(result);
                 console.log(data.results.length);
				 
				 data=data.results;
				 
				 //var finalData=[];
				 data.sort(compare);

				/* for(var i=0;i<data.length;i++){
					 if(data[i].name==req.params.name){
						 finalData.push(data[i]);
					 }
				 }*/
				
				  console.log(data);
				//data=JSON.stringify(data);
		res.render('index', {
        persons: data
			});
         }
});



    //res.send('hello ' + req.params.name + '!');
});

 function compare(a,b) {
					 console.log('data');
  if (a.last_nom < b.last_nom)
    return -1;
  if (a.last_nom > b.last_nom)
    return 1;
  return 0;
}





app.use('/', router);

app.listen(3000);
