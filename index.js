console.log("hello");
//constructor
function Book(name,author,category,isbn,instock,instocknum){
   
    this.name = name;
    this.author = author;
    this.category = category;
    this.isbn = isbn;
    this.instock = instock;
    this.instocknum = instocknum;

   
}

function Display(){

    
   


}


//implimanting the validate function 


Display.prototype.validate = function(book){
    if(book.name.length<3 || book.author.length<2){
         
        return false

    }else{

        return true

    }


}

Display.prototype.show = function(type,showmessage){

  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong> ${showmessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  setTimeout(()=>{
    
    message.innerHTML = ``;
     
  },2000)
     
    


}


//add methods to dispaly prototype
Display.prototype.add = function(book){
console.log("adding to the list");
tableBody = document.getElementById('tableBody');
let uiString = ` <tr>
              
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.category}</td>
<td>${book.isbn}</td>
<td>${book.instock}</td>
<td>${book.instocknum}</td>
</tr>`;

tableBody.innerHTML += uiString;

}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryform');
    libraryForm.reset();  
}

//add submit event lister to libraryform
let libraryForm = document.getElementById("libraryform");
libraryForm.addEventListener('submit',libraryFormSubmit);


function libraryFormSubmit(e){
   e.preventDefault();
   let name = document.getElementById('bname').value;
   let author = document.getElementById('aname').value;
   let isbn = document.getElementById('isbn').value;
   let category = document.getElementById('inputState').value;
   let instock = document.getElementById('instock').value;
   let instocknum = document.getElementById('instocknum').value;

   let book = new Book(name,author,category,isbn,instock,instocknum)
   console.log(book);
   let display = new Display();
   
   
   if(display.validate(book)){

    display.add(book);
    display.clear();
    display.show('success','your book has been successfully added.')

   }else{

    display.show('danger','Sorry cannot add this book.')


   }
   
  
}