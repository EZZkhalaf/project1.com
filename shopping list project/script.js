

var button=document.getElementById("button");
var input = document.getElementById("input");
var ul= document.getElementById("ninio");


function length(){
	return input.value.length;
}
function addItem(){
			// var div=document.createElement("div");
			// var li=document.createElement("li");
			// var deletebutton=document.createElement("button");
			// div.classList.add("element");
			// ul.appendChild(div);
			// div.appendChild(li,deletebutton);

			// li.classList.add("odj1");
			
			// li.appendChild(document.createTextNode(input.value));
			// li.className="odj2";
			
			// input.value="";
			// deletebutton.classList.add("button");
			// deletebutton.innerHTML="Del";
	var div = document.createElement("div");
	var li = document.createElement("li");
	var del = document.createElement("button");


	div.classList.add("element");
	ul.appendChild(div);
	div.append(li, del);
	li.classList.add("odj2");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";

    del.classList.add("btnn");
    del.innerHTML = "Delete";
    del.addEventListener("click", function() {
        ul.removeChild(div);
    });
	// del.classList.add('btnn');
	// del.innerHTML='delete';

}

// function addclick(){
// 	if (length() > 0){
// 		addItem();
// 	}
// }


button.addEventListener("click",function(){
	if (length() > 0){
			addItem();
		}	
});

input.addEventListener("keypress",function(event){
	if (length()>0 && event.keyCode ===13){
				addItem();
			}
});

function doneTask(task) {
	if (task.target.tagName === "li"){
		task.target.classList.toggle("done");
	}
}


