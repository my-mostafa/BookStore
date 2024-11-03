let button = document.querySelector("button")
let boxall = document.querySelector(".boxall")
let Title = document.querySelector("#Title")
let Author = document.querySelector("#Author")
let Year = document.querySelector("#Year")

let divtb

let divTitleb

let spanTitleb

let divAuthorb

let spanAuthorb

let divYearb

let spanYearb

let tload

let aload

let yload

let ary = []



function funadd() {
    if(Title.value && Author.value && Year.value && Year.value.length < 5){
        funui(Title.value,Author.value,Year.value)
        funlocalset()
    }else{
        if(Year.value.length > 5){alert("YEAR : pleas enter  4 number")}
        else{alert("pleas compleate input")}
    }
    Title.value = ''
    Author.value = ''
    Year.value = ''
    Title.focus()
    

}

function funlocalset (){
    let obj = {title : Title.value , author : Author.value , year : Year.value}
    ary.push(obj)
    localStorage.setItem("book",JSON.stringify(ary))
}




function funui(titlei,authori,yeari){
    divtb = document.createElement("div")
    divtb.classList.add("tb")
    divTitleb = document.createElement("div")
    divTitleb.classList.add("Titleb")
    spanTitleb = document.createElement("span")
    spanTitleb.innerHTML = titlei
    divAuthorb = document.createElement("div")
    divAuthorb.classList.add("Authorb")
    spanAuthorb = document.createElement("span")
    spanAuthorb.innerHTML = authori
    divYearb = document.createElement("div")
    divYearb.classList.add("Yearb")
    spanYearb = document.createElement("span")
    spanYearb.innerHTML = yeari
    divTitleb.append(spanTitleb)
    divAuthorb.append(spanAuthorb)
    divYearb.append(spanYearb)
    divtb.append(divTitleb , divAuthorb , divYearb)
    boxall.append(divtb)
}

function funload(){
   let booklod = JSON.parse(localStorage.getItem("book"))
   if(booklod){
       ary = booklod
       booklod.forEach(function(epr){
           tload = epr.title
           aload = epr.author
           yload = epr.year
           funui(tload,aload,yload)
    
    
       })

   }else{
    ary = []
   }
}



window.addEventListener("load",funload())
button.addEventListener("click",funadd)



