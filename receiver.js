import io from 'socket.io-client'

var socket =io.connect();

socket.on('update', function (data) {
  console.log(data); 
  //socket.emit('my other event', { my: 'data' });
});
socket.on('push',(data)=>{

  console.log("Push event received:\n"+data.title+"\n"+data.message+"\n"+data.author+"\n"+data.branch+"\n"+Date(data.timestamp).toString());
});
socket.on('pull_request',(data)=>{
  console.log('pull_request event received:\n'+data.sha+"\n"+data.url+"\n"+data.commits_url+"\n"+data.merged+"\n"+
  data.merge_commit_sha+"\n"+data.title+"\n"+data.message+"\n"+data.action+"\n"+data.state+"\n"+JSON.stringify(data.timestamps)+"\n"+
  data.repo+"\n"+data.source_branch+"\n"+data.target_branch+"\n"+data.user+"\n"+data.sender);
})

socket.on("repository",(data)=>{
  console.log("Repository data received: ",data);
})