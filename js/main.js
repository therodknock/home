(function(){
var send=document.getElementById('send');
if(!send)return;
send.addEventListener('click',function(){
  var n=document.getElementById('n').value.trim(),e=document.getElementById('e').value.trim(),o=document.getElementById('ok');
  o.style.display='block';
  if(!n||!/.+@.+\..+/.test(e)){o.textContent='Enter your name and a valid email address, then send again.';return}
  o.textContent='Message prepared, '+n+'. This demo page does not transmit data; email hello@rodknock.example to reach us.';
});
})();
