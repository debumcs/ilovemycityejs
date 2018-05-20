var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function homehandler(req,res){
    res.render('index',{
        title: 'I Love my City',
        headline:'A beautiful city'
    });
});

app.get('/:city', function cityHandler(req,res){
    var cityName = req.params.city;
    var title,heading;
    var imageCount = 4;

    if(cityName==='berlin'){
        title="Berlin";
        heading="Berlin: Where love is in the air";
     }
     else if(cityName==='paris'){
        title="Paris";
        heading="Paris: Good talkers are only found in Paris";
     }
     else if(cityName==='madrid'){
        title="Madrid";
        heading="Madrid: Buzz, Beautiful architecture and Football";
     }
     else if(cityName==='london'){
        title="London";
        heading="London: Sparkling, Still, Food, Gorgeous";
     }
     else if(cityName==='newyork'){
        title="New York";
        heading="New York: Come to New York to become someone new";
        imageCount=6;
     }
     res.render('city',{
         title:title,
         headline:heading,
         city:cityName,
         noofimages:imageCount
     });
});

var port = process.env.PORT || 3000;

var server = app.listen(port,function(req,res){
    console.log('Server starts at PORT number:'+port);
});

