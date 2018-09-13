//'use strict'
require('dotenv').config();
const app=require('express')();
const Middleware = require('@octokit/webhooks/middleware');//.prototype;
var hookServer=require('http');//.Server(app);//.listen(3003)
var WebhooksApi = require('@octokit/webhooks')
var io = require('socket.io')
const singleCommitClient=require('./event-constructors/githubEvents.js').singleCommitClient;
const EventHandler = require('@octokit/webhooks/event-handler')
const eventHandler = new EventHandler({
  async transform (event) {
    // optionally transform passed event before handlers are called
    return new singleCommitClient(event);
  }
})

//const EventHandler = require('@octokit/webhooks/event-handler')
//var Commit=require('./event-constructors/githubEvents.js')
//app.get('/', function (req, res) {
 // res.sendfile(__dirname + '/index.html');
//});
//var singleCommitClient=require('./event-constructors/githubEvents.js').singleCommitClient;
  //const Middleware = require('@octokit/webhooks/middleware')
 // const EventHandler = require('@octokit/webhooks/event-handler')


const webhooks = new WebhooksApi({
  secret: process.env.WEBHOOK_SECRET,//☮︎♥︎⚔︎3f214b6576696e207761732068657265213f☮︎♥︎⚔︎
  path: '/github'

})
//webhooks.=eventHandler;


module.exports=webhooks;

//webhooks.middleware=(webhooks.middleware.path;='/github');
//webhooks.eventHandler=new EventHandler({
  //async transform (event) {
    // optionally transform passed event before handlers are called
  //  return new singleCommitClient(event);
 // }
//})

const handleErrorsFromHooks=(data)=>{
    console.log(data);
}




//module.exports.server=hookServer;
//module.exports.middleware=middleware;
//io.emit('push',{hello:"wattsuefk;adad"});
//webhooks.on('push', ({id, name, payload}) => {
       
 //  console.log(name, 'event received\n'+payload)
   //eventData=payload;
  // this.socket.emit(name,payload);
//})
console.log("AAAAAGH")
require('http').createServer(webhooks.middleware).listen(3005);
//console.log(webhooks.middleware.toString())
console.log("6ft7uiop[")
//var eventData={};

//webhooks.on('push', ({id, name, payload}) => {
       
//  console.log(name, 'event received\n')
  //io.emit(name,payload);
  //eventData=payload;
  
  //return 
  //sendEmit(name,payload);
//})

/*eventHandler.on('push', ({id, name, payload}) => {
 //  eventhandler.on('*', ()=>
   console.log(name, 'event received\n'+payload)


})*/
/*()=>{ 
    
    
//case sensitive emitters
    webhooks.on('push', ({id, name, payload}) => {
       
       console.log(name, 'event received\n'+payload)
       //eventData=payload;
       io.emit(name,payload);
       //return 
       //sendEmit(name,payload);
    })

eventHandler.on('push', ({id, name, payload}) => {
      //  eventhandler.on('*', ()=>
        console.log(name, 'event received\n'+payload)


})

}*/



// can now receive webhook events at port 3003
