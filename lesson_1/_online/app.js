/*window.onload = function(){
  
  this.document.onclick = function(e){
    console.log(e);
  };

  document.body.addEventListener('click', function(){
    console.log('2');
  });

  document.body.addEventListener('click', function(){
    console.log('1');
  });

 


};*/

var buttons = document.querySelectorAll('.actions input');

for(var i = 0; i < buttons.length; i++){
  buttons[i].onclick = btnClick;
}

function btnClick(e){
  /*for(var k in this){
    document.body.innerHTML += '<b>' + k + '</b>' + this[k] + '<br>';
  }*/
  var name = this.getAttribute('name');
  console.log(name);
}

//Explanation

//Example

var a = ['a', 'b', 'c'];

for(i = 0; i < a.length; i++){
  console.log(a[i]);
}

var b = {
  ukraine: 'Kiev',
  usa: 'Washington',
  canada: 'Ottava'
};

// в обєктів немає length

for(var peremennaya in b){
  console.log(b[peremennaya]);
}