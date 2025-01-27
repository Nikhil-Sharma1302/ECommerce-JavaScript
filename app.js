let main = document.querySelector(".main");
let range= document.querySelector(".range");
let home= document.querySelector(".home");
let rangeValue= document.querySelector("#range-value");
let inp = document.querySelector('#srch');
let men = document.querySelector(".men");
let women= document.querySelector(".women");
 let innerTML ="";
 let filterdata;
 let arr;

async function getData(params) {
    let url = 'https://fakestoreapi.com/products'
    let fetchData = await fetch(url)
    let rsp = await fetchData.json();
       work(rsp);
     arr = rsp;
}
getData();
home.addEventListener("click",()=>{
    getData();
})
range.addEventListener("input",async(e)=>{
  e.preventDefault();
    rangeValue.innerText = range.value+"$";
   filterdata = arr.filter(vr=>vr.price>range.value);
    work(filterdata);
});
inp.addEventListener('keyup',(e)=>{
    e.preventDefault();
    let vl =  e.target.value.toLowerCase();
     filterdata = arr.filter(pr=>pr.title.toLowerCase().includes(vl));
    work(filterdata);
  })
  men.addEventListener('click',(e)=>{
    e.preventDefault();
   filterdata = arr.filter(pr=>pr.category=="men's clothing");
    work(filterdata);
  })

  women.addEventListener('click',(e)=>{
   e.preventDefault();
     filterdata = arr.filter(pr=>pr.category=="women's clothing");
    work(filterdata);
  })
function work(param){
    innerTML = "";
    param.forEach((v) => {
        innerTML+=`<div class="p-5 overflow-auto shadow" style="height:40rem; width:28rem"> 
                <img src="${v.image}" class="card-img-top" alt="..." height="400px" width:"25rem">
      <div class="card-body">
        <h4 class="card-title">${v.title}</h4>
         <h5 class="">Price = ${v.price}$</h5>
        <p class="" style="font-size:12px;">${v.description}</p>
              <button class="btn-primary btn ">Add to Cart </button> 
         <button class="btn-primary btn ">Buy Now </button> 
      </div> </div>`;
        
    } );
    main.innerHTML= innerTML;
}