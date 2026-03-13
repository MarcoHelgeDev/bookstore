const user = "Marco-Helge";
const booksRef = document.querySelector(".js-books");

const renderBooks = function (bookData) {
  let html = "";

  for (let index = 0; index < bookData.length; index++) {
    html += renderBookTemplate(index);
  }

  booksRef.innerHTML = html;
  addLikeEvent();
  addCommentEvent();
};

const renderComments = function (index) {
  const commentsRef = document.querySelector(`.js-comments-${index}`);
  commentsRef.innerHTML = renderCommentsTemplate(index);
};

const addComment = function (index) {
  const inputRef = document.querySelector(`.inputField-${index}`);
  const inputValue = inputRef.value.trim();

  if (inputValue === "") {
    return;
  }

  const newComment = {
    name: user,
    comment: inputValue,
  };

  books[index].comments.push(newComment);
  renderComments(index);
  inputRef.value = "";
  saveToLocalStorage();
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

const updateLikeView = function (index) {
  const likeCounterRef = document.querySelector(`.js-like-counter-${index}`);
  const likeBtnRef = document.querySelector(`.js-like-${index}`);

  likeCounterRef.textContent = books[index].likes;

  if (books[index].liked) {
    likeBtnRef.classList.remove("notLikeBtn");
    likeBtnRef.classList.add("likeBtn");
  } else {
    likeBtnRef.classList.remove("likeBtn");
    likeBtnRef.classList.add("notLikeBtn");
  }
};

const likeBook = function (index) {
  if (books[index].liked) {
    books[index].liked = false;
    books[index].likes -= 1;
  } else {
    books[index].liked = true;
    books[index].likes += 1;
  }

  updateLikeView(index);
  saveToLocalStorage();
};

const saveToLocalStorage = function () {
  localStorage.setItem("books", JSON.stringify(books));
};

const getFromLocalStorage = function () {
  const bookArray = JSON.parse(localStorage.getItem("books"));

  if (bookArray !== null) {
    books = bookArray;
  }
};

const init = function () {
  getFromLocalStorage();
  renderBooks(books);
};

init();
