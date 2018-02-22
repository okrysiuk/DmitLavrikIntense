const inp1 = document.querySelector('#first');
const inp2 = document.querySelector('#second');
const dod = document.querySelector('#dodaty');
const vid = document.querySelector('#vidnyaty');
const pom = document.querySelector('#pomnozhyty');
const pod = document.querySelector('#podilyty');
const allBut = document.querySelectorAll('.calc');
const result = document.querySelector('.result');

inp1.onclick = enBut;
inp2.onclick = enBut;

dod.onclick = function(){

  var a = parseInt(inp1.value) + parseInt(inp2.value);
  result.innerHTML = a;
  disBut();
};

vid.onclick = function(){

  var a = parseInt(inp1.value) - parseInt(inp2.value);
  result.innerHTML = a;
  disBut();
};

pom.onclick = function(){

  var a = parseInt(inp1.value) * parseInt(inp2.value);
  result.innerHTML = a;
  disBut();
};

pod.onclick = function(){

  var a = parseInt(inp1.value) / parseInt(inp2.value);
  result.innerHTML = a;
  disBut();
};

function disBut(){
  for(i = 0; i < allBut.length; i++){
    allBut[i].disabled = true;
  }
}

function enBut(){
  for(i = 0; i < allBut.length; i++){
    allBut[i].disabled = false;
  }
}

