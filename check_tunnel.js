'use strict'

module.exports=()=>{
this.xmlHttpReq.open('POST', strURL, true);
self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
self.xmlHttpReq.onreadystatechange = function() {
    console.log("okay")
    //stopwatch.stop and calc timediff. timediff < default browser request timeout indicates website is up from this browsers point of view. No clues on request status or anything else, just availability
}
self.xmlHttpReq.send(null);
}
//stopwatch.start