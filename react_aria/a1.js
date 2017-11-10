var Aria2 = require('aria2');
var aria2 = new Aria2({
  host: 'localhost',
  port: 6800,
  secure: false,
  secret: '',
  path: '/jsonrpc'
});
// aria2.getVersion(function (err, res) {
//   console.log(err || res)
// })

// OR

aria2.send('getVersion', function (err, res) {
  console.log(err || res)
})
// aria2.addUri([secret, ]uris[, options[, position]])
//aria2.addTorrent([secret, ]torrent[, uris[, options[, position]]])
//aria2.addMetalink([secret, ]metalink[, options[, position]])
// aria2.remove([secret, ]gid)
// aria2.forceRemove([secret, ]gid)
//aria2.pause([secret, ]gid)
// aria2.forcePause([secret, ]gid)
//aria2.pauseAll([secret])
//aria2.unpause([secret, ]gid)
// aria2.tellStatus([secret, ]gid[, keys])
//aria2.getUris([secret, ]gid)
//aria2.getFiles([secret, ]gid)
//aria2.getPeers([secret, ]gid)
// aria2.getServers([secret, ]gid)
// aria2.tellActive([secret][, keys])
// aria2.tellWaiting([secret, ]offset, num[, keys])
// aria2.tellStopped([secret, ]offset, num[, keys])
//aria2.changePosition([secret, ]gid, pos, how)
//aria2.changeUri([secret, ]gid, fileIndex, delUris, addUris[, position])
// aria2.getOption([secret, ]gid)
//aria2.changeOption([secret, ]gid, options)
//aria2.getGlobalOption([secret])
// aria2.changeGlobalOption([secret, ]options)
// aria2.getGlobalStat([secret])
// aria2.purgeDownloadResult([secret])
// aria2.removeDownloadResult([secret, ]gid)
//aria2.getSessionInfo([secret])
// aria2.shutdown([secret])
// aria2.saveSession([secret])
//system.multicall(methods)
//system.listMethods()
//system.listNotifications()
/////////////////////////////////////////////////////////
aria2.send('addUri',["http://www.baidu.com"], function (err, res) {
  console.log(err || res)
})
// aria2.send('tellStatus',"5e7b905f205653ec", function (err, res) {
//   console.log(res)
// })
aria2.send('tellActive', function (err, res) {
   console.log(res)
 })
aria2.send('tellWaiting',0,0, function (err, res) {
   if(err) console.log("error:"+err);
   console.log(res)
 })
