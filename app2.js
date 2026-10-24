function render(){
  var data=getList();
  var rs=data.rs,list=data.list;
  var op=0,ug=0,cl=0;
  rs.forEach(function(r){
    var s=st(r);
    if(s.k==='x')cl++;else{op++;if(s.k==='g')ug++;}
  });
  var m=window.__M||{u:''};
  document.getElementById('upd').textContent=m.u;
  document.getElementById('stats').innerHTML=
    '<div class="st p"><div class="n">'+rs.length+'</div><div class="l">总数</div></div>'+
    '<div class="st"><div class="n">'+op+'</div><div class="l">报名中</div></div>'+
    '<div class="st r"><div class="n">'+ug+'</div><div class="l">14天内截止</div></div>'+
    '<div class="st"><div class="n">'+cl+'</div><div class="l">已截止</div></div>';
  if(!list.length){
    document.getElementById('tb').innerHTML='<tr><td colspan="6" class="em">无匹配</td></tr>';
    return;
  }
  document.getElementById('tb').innerHTML=list.map(function(r){
    var s=st(r);
    var cls=s.k==='x'?'x':s.k==='g'?'g':'u';
    var dl=r.d?esc(r.d):'<span class="mt">待公布</span>';
    if(r.n)dl+='<br><span class="mt">'+esc(r.n)+'</span>';
    var src=r.u?'<a class="j" href="'+esc(r.u)+'" target="_blank">'+esc(r.s)+'</a>':'<span class="mt">'+esc(r.s)+'</span>';
    return '<tr><td><b>'+esc(r.o)+'</b></td><td>'+esc(r.p)+'</td>'+
      '<td><span class="b b'+r.c+'">'+(r.c?'央国企':'其他')+'</span></td>'+
      '<td class="'+cls+'">'+dl+'</td>'+
      '<td class="'+cls+'">'+esc(s.l)+'</td><td>'+src+'</td></tr>';
  }).join('');
}
document.getElementById('fC').onchange=render;
document.getElementById('fS').onchange=render;
document.getElementById('fK').oninput=render;
render();
