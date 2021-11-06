addTab = function() 
{   
    var x;
    for(i in document.getElementById("tab").innerHTML.buttons)
    {
        if(i.innerHTML = "+")
        {
            document.getElementById("tab").innerHTML += "<button>somename</button>";
            break;
        }
        x+=1;        
    } 
}