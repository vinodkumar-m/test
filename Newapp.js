var express = require('express');
var app = express();
app.set('view engine', 'ejs');
//var http = require('http');

var request=require("request");

/*app.get('/', function(req, res){
	
  res.send('hello world');
});*/
var path = require('path');
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

var router = express.Router();
/*var pagination = require('pagination');
var paginator = pagination.create('search', {prelink:'/', current: 1, rowsPerPage: 200, totalResult: 10020});
console.log(paginator.render());*/

var characters = 
[ {
            "name": "Luke", 
            "height": "17", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 

	}, {
            "name": "han", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
	},{
            "name": "Leia", 
            "height": "175", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
	}, {
            "name": "rey", 
            "height": "171", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
	}];

var planets = {
	"Mercury" :[characters[0].name,characters[0].name],
	"Venus" : [characters[1].name,characters[0].name],
	"Earth" : [characters[0].name,characters[2].name],
	"Mars" : [characters[0].name,characters[1].name],
	"Jupiter" : [characters[1].name,characters[0].name],
	"Saturn" : [characters[0].name,characters[2].name],
	"Uranus" : [characters[0].name,characters[1].name],
	"Neptune" : [characters[3].name,characters[0].name],
	"Pluto" : [characters[0].name,characters[3].name]


};

router.get('/character/:name', function(req, res) {

				var data=characters;
				 var finalData=[];
				 for(var i=0;i<data.length;i++){
					 console.log('data'+data[i].name);
					 if(data[i].name.toString()==req.params.name){
				
						finalData.push(data[i]);
					 }
				 }
				 
				 if(req.params.name=="height"){
					  data.sort(function(a,b){return a.height - b.height});
					  		 				
		res.render('index', {
        persons: data
			});
        
				 }else{
					 		 				
					res.render('index', {
					persons: finalData
						});
					
				 }
});
router.get('/planetresidents', function(req, res, next) {

  	res.json(planets);
	
});




app.use('/', router);

app.listen(3000);
