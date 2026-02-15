const http=require("http");
const server=http.createServer((req,res)=>{
   const method= req.method;
   const url=req.url;
   if(method=="GET" && url=="/"){
    res.writeHead(200, {"content-type" :"text/plain"});
    res.end("welcome to the root");
}
 else if(method=="GET" && url=="/users"){
    const users={users: ["alice","Bob","Charlie"]}
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(users));
 } 
  
 else if(method=="POST" && url=="/users"){
    let body="";
      req.on("data",(chunks)=>{
        body+=chunks;
      });
      req.on("end",()=>{
        const parsedbody=JSON.parse(body);
        res.writeHead(201,{"content-Type":"application/json"});
        res.end(JSON.stringify({
            message:"user created succesfully",
            data:parsedbody
        }));
      });
 } 
 else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }

})

server.listen("8080",()=>{
    console.log("server Listening");
});