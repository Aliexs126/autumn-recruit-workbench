function st(r){
  var t=new Date();
  t=new Date(t.getFullYear(),t.getMonth(),t.getDate());
  if(!r.d)return{k:'u',l:'报名中(待公布)'};
  var dl=new Date(r.d+'T00:00:00'),d=Math.round((dl-t)/86400000);
  if(d<0)return{k:'x',l:'已截止'};
  if(d<=14)return{k:'g',l:'即将截止'};
  return{k:'u',l:'报名中'};
}
function esc(s){
  return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function getList(){
  var rs=(window.__R||[]).reduce(function(a,b){return a.concat(b);},[]);
  var fc=document.getElementById('fC').value;
  var fs2=document.getElementById('fS').value;
  var fk=document.getElementById('fK').value.toLowerCase();
  var list=rs.filter(function(r){
    var s=st(r);
    if(fc!==''&&String(r.c)!==fc)return false;
    if(fs2&&s.k!==fs2)return false;
    if(fk&&(r.o+r.p).toLowerCase().indexOf(fk)<0)return false;
    return true;
  });
  list.sort(function(a,b){
    var da=a.d||'9999',db=b.d||'9999';
    return da<db?-1:da>db?1:0;
  });
  return {rs:rs,list:list};
}
