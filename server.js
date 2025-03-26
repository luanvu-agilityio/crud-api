const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;
 
 // Fix the CORS configuration
 server.use(
   cors({
     origin: process.env.CLIENT_URL || "*",
     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
     credentials: true,
   })
 );

 

 // Additional headers middleware for comprehensive CORS support
 server.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
   res.header("Access-Control-Allow-Credentials", "true");
   
 
   
   next();
 });
 

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
