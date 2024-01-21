const Ws =require('ws') ;
const server=require('./http.js')


const wss = new Ws.WebSocketServer({ server });

wss.on('connection', function connection(ws) {

  console.log('ws连接成功');

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
