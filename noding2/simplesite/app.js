var http=require('http')
var serv=http.createServer
		(function(req,res){
			res.writeHead(200,{'Content-type':'text/html'});
			res.end('<marquee>Noding with Cyrus</marquee>');
			var d=new Date();
			var hours=d.getHours();
			var minutes=d.getMinutes();
			var time = hours+":"+minutes;
			console.log('Alguien entro al server:'+time);
			});
serv.listen(3000)