const accordionContentHeader = document.querySelectorAll(".accordion-content-header");
accordionContentHeader.forEach((item, index) => {
    item.addEventListener("click", function(){
        // console.log(item.nextElementSibling.classList)
        item.nextElementSibling.classList.toggle("accordion-update")
        item.querySelector("i").classList.replace("fa-plus","fa-minus");
        if (!item.nextElementSibling.classList.contains("accordion-update")) {
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
          } 
        removeOpenedContent(index); 
    })
})
function removeOpenedContent(index){
    accordionContentHeader.forEach((item2,index2)=>{
        if(index != index2){
            item2.nextElementSibling.classList.remove("accordion-update");
            item2.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
    })
}
