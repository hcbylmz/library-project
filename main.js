//  document.getElementsByClassName("add-book").addEventListener("click",console.log(k));

let addBookButton = document.getElementsByClassName("add-book")[0];

addBookButton.onclick = function () {
  console.log("asda");
  let bookName = document.getElementById("bookName").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPage = document.getElementById("bookPage").value;
  let bookStatus = document.getElementById("bookStatus").value;
  //let bookList = document.getElementsByClassName("book-list")[0];
  //bookList.innerText += bookName;

  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "header-container");
  const newContent = document.createTextNode(bookName);
  const newAuthor = document.createTextNode(bookAuthor);
  const newPage = document.createTextNode(bookPage);
 // const newStatus = document.createTextNode(bookStatus);
  let checkbox = document.createElement('input');
             
  // Assigning the attributes
  // to created checkbox
  checkbox.type = "checkbox";

  const newDivContent = document.createElement("div");
  const newDivAuthor = document.createElement("div");
  const newDivPage = document.createElement("div");
  const newDivStatus = document.createElement("div");

  newDivContent.appendChild(newContent);
  newDivAuthor.appendChild(newAuthor);
  newDivPage.appendChild(newPage);
 // newDivStatus.appendChild(newStatus);
 newDivStatus.appendChild(checkbox);

  const newButton = document.createElement("button");
  newButton.innerText = "remove book";

  newButton.onclick = function () {
    newDiv.remove();
  };

  newDiv.appendChild(newDivContent);
  newDiv.appendChild(newDivAuthor);
  newDiv.appendChild(newDivPage);
  //newDiv.appendChild(newDivStatus);
  newDiv.appendChild(checkbox);
  newDiv.appendChild(newButton);
  const bookList = document.getElementsByClassName("book-list")[0];

  bookList.appendChild(newDiv);
};
