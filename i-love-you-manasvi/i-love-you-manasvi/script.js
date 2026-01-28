let step=0;
function next(){
  step++;
  if(step==1){
    title.innerText="You + Me = Perfect 💘";
    text.innerText="Now the real question…";
  }
  else{
    title.innerText="Manasvi, will you be my Valentine? 💖";
    text.innerText="Choose wisely 😭";
    controls.innerHTML='<button onclick="yes()">Yes 💖</button><button id="no" onmouseover="move()" ontouchstart="move()">No 🙃</button>';
  }
}
function yes(){
  title.innerText="Yayyy! 💞";
  text.innerText="I love you Manasvi ❤️";
  controls.innerHTML="";
}
function move(){
  const x=Math.random()*200-100;
  const y=Math.random()*100-50;
  no.style.transform=`translate(${x}px,${y}px)`;
}
