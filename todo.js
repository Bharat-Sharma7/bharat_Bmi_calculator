let inputs = document.getElementById('inp')
let text=document.querySelector('.text')

inputs.$(".input1").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
    // Do something
    if(inputs.value=="")
        {
            alert("please enter task")
        }

    else{
        let newele=document.createElement("ul")
        newele.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"> </i>`;
        text.appendChild(newele);

        inputs.value = "";
        let icon = document.querySelector('i');
        console.log(icon);
        icon.addEventListener("click", ()=>{
            newele.remove();
        })

    }
    }
    });

function Add()
{
    if(inputs.value=="")
        {
            alert("please enter task")
        }

    else{
        let newele=document.createElement("ul")
        newele.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"> </i>`;
        text.appendChild(newele);

        inputs.value = "";
        let icon = document.querySelector('i');
        console.log(icon);
        icon.addEventListener("click", ()=>{
            newele.remove();
        })

    }
}
