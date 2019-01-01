[...document.querySelectorAll("li")].find((x,y)=>{
    x['onclick']=()=>{
        [...document.querySelectorAll("div")].find(a =>{
            a.style.display="none"
        });
        [...document.querySelectorAll("div")][y].style.display="block"
    }
})