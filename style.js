console.log("Welcome to the new World!!");

function Book(name, author, type)
{
	this.name= name;
	this.author= author;
	this.type= type;                        
}
function Display()
{

}

Display.prototype.add= function(book){
	let tablebody= document.getElementById('tableBody');
	let uiString= `	<tr>
      					<td>${book.name}</td>
      					<td>${book.author}</td>
      					<td>${book.type}</td>
    				</tr>`;

    tablebody.innerHTML+= uiString;
}

Display.prototype.validate= function(book){
	if(book.name.length>2)
	{
		return(true);
	}
	else
	{
		return(false);
	}
}

Display.prototype.show= function(type, message1){
	let message = document.getElementById('message');
	message.innerHTML= ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message : </strong>${message1}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
setTimeout(() =>
{
	message.innerHTML= "";
}, 2000);
}

Display.prototype.clear= function(){
	let libForm= document.getElementById('libraryForm');
	libForm.reset();
}


// Add metthod to display prototype

let libForm= document.getElementById('libraryForm');

libForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e)
{
	let name= document.getElementById('bookname').value;
	let author= document.getElementById('authorname').value; 
	let e1 = document.getElementById("selecttype");
	let type = e1.options[e1.selectedIndex].text;

	let book= new Book(name, author, type);
	console.log(book);

	let display= new Display();
	if(display.validate(book))
	{
		display.add(book);
		display.clear();
		display.show('success', "Your book is successfully added!");
	}
	else
	{
		display.show('danger', ' Sorry you cannot add this book!');
	}
	e.preventDefault();
}