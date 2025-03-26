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

   // Handle preflight requests
   if (req.method === 'OPTIONS') {
     return res.sendStatus(200);
   }
   
   next();
 });
 ;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
