
const server=require('./http.js')
require('./ws.js')

server.listen(9000, () => {
  console.log(`Server is running on localhost:9000 .`);
});
