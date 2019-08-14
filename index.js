// adding items to shopping list, "return"/"add item", push value (fizzbuzz example) use .submit() method. Target "form id=js-shopping-list "
//"check box" requirement, event listener using toggleClass() method. Target class "shopping-item-toggle"
// removing item (refer to event delegation example) use ".click" and "this.remove()" Target class "shopping-item-delete"




//function to toggle check box
function toggleCheckbox (){
    $("ul").on('click', ".shopping-item-toggle" ,function(event){
        let shoppingTitle= $(this).closest("li").find (".shopping-item")
       shoppingTitle.toggleClass("shopping-item__checked");
       console.log (shoppingTitle)
    })
        
}

$(function(){
    toggleCheckbox() 
    removeShoppingItem()
    addNewShoppingItem()
})

//function to remove item

function removeShoppingItem (){
    $("ul").on('click', ".shopping-item-delete", function(event){
           let shoppingDelete= $(this).closest("li").remove();
           console.log (shoppingDelete)
    })
}


//function to submit new item

function addNewShoppingItem (){
    $("#js-shopping-list-form").on('submit', function(event){
        event.preventDefault()
       let shop = $("#shopping-list-entry").val()
       $("ul").append(`<li>
       <span class="shopping-item">${shop}</span>
       <div class="shopping-item-controls">
         <button class="shopping-item-toggle">
           <span class="button-label">check</span>
         </button>
         <button class="shopping-item-delete">
           <span class="button-label">delete</span>
         </button>
       </div>
     </li>`)
  
    })

}