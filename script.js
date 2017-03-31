var input = document.getElementById("myitem");
var mybutton = document.getElementById('mybutton');
var mylist = document.querySelector('ul');


mybutton.onclick = function(){
	var listItem = document.createElement('li');
	
	var span = document.createElement('span');
	var delButton = document.createElement('button');
	if (input.value != ''){
		mylist.appendChild(listItem);

		span.textContent = input.value + ' ';
		listItem.appendChild(span);
		listItem.appendChild(delButton);
		delButton.textContent = 'delete'
		
		
	delButton.onclick = function(e){
		e.target.parentNode.parentNode.removeChild(listItem);
	}
	}
	
	
	
	input.value = '';
	input.focus();
	
}