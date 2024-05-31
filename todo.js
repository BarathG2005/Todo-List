document.querySelector('#add').onclick=function(){
    if(document.querySelector('#input').value.length == 0){
        alert("please enter a task");
    }
    else{
        document.querySelector('.tasks').innerHTML += `
        <div id="task"> <span>
        
        ${document.querySelector('#input').value}</span>
        <button id="complete"><i class="fa-solid fa-check"></i></button>
        <button id="delete"><i class="far fa-trash-alt"></i></button>
        
        </div>`;

        var a = document.querySelectorAll("#delete");
        for(var i = 0;i<a.length;i++){
            a[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var b = document.querySelectorAll("#task");
        for(var i = 0;i<b.length;i++){
            b[i].onclick = function(){
                this.classList.toggle("completed");
            }
        }
        document.querySelector("#input").value = "";
    }

}