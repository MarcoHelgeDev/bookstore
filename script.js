const user = "Marco-Helge";
const booksRef = document.querySelector(".js-books");

const renderBooks = function (bookData) {
  let html = "";
  for (let index = 0; index <= bookData.length - 1; index++) {
    html += `<div class="books">`;
    html += `<div class="book-section">`;
    html += renderTemplate(index);
    html += `<div class="comments-wrapper">`;
    html += comment(bookData, index);
    html += `</div>`;
    html += renderWriteCommentTemplate(index);
    html += `</div>`;
    html += `</div>`;
  }
  booksRef.innerHTML = html;
  addLikeEvent();
  addCommentEvent();
  saveToLocalStorage();
};

const comment = function (bookData, index) {
  let html = "";
  for (let i = 0; i < bookData[index].comments.length; i++) {
    html += renderCommentsTemplate(bookData, index, i);
  }
  return html;
};

const addComment = function (index) {
  inputValue = document.querySelector(`.inputField-${index}`).value;
  const newComment = {
    name: user,
    comment: inputValue,
  };
  books[index].comments.push(newComment);
  renderBooks(books);
};

const addLikeEvent = function () {
  for (let index = 0; index < books.length; index++) {
    const btn = document.querySelector(`.js-like-${index}`);
    btn.addEventListener("click", function () {
      likeBook(index);
    });
  }
};

const addCommentEvent = function () {
  for (let index = 0; index < books.length; index++) {
    const btn = document.querySelector(`.js-btn-write-comment-${index}`);
    btn.addEventListener("click", function () {
      addComment(index);
    });
  }
};

const likeBook = function (index) {
  const btn = document.querySelector(`.js-like-${index}`);
  if (books[index].liked) {
    books[index].liked = false;
    books[index].likes -= 1;
    btn.classList.remove("likeBtn");
    btn.classList.add("notLikeBtn");
  } else {
    books[index].liked = true;
    books[index].likes += 1;
    btn.classList.remove("notLikeBtn");
    btn.classList.add("likeBtn");
  }
  renderBooks(books);
};

const saveToLocalStorage = function () {
  localStorage.setItem("books", JSON.stringify(books));
};

const getFromLocalStorage = function () {
  let bookArry = JSON.parse(localStorage.getItem("books"));
  if (bookArry !== null) {
    books = bookArry;
  }
};

const init = function () {
  getFromLocalStorage();
  renderBooks(books);
};

init();
