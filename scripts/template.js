const renderBookTemplate = function (index) {
  return /*html*/ `
    <div class="books">
      <div class="book-section">
        <h2>${books[index].name}</h2>
        <div class="divider"></div>
        <img class="book-icon" src="./assets/icon/book.webp" alt="book-icon">
        <div class="divider"></div>
        <div class="price-like-wrapper">
          <div class="book-price">
            <span>${books[index].price.toFixed(2)} €</span>
          </div>
          <div class="book-like">
            <span class="like-counter js-like-counter-${index}">${books[index].likes}</span>
            <button class="js-like-${index} ${books[index].liked ? "likeBtn" : "notLikeBtn"}"></button>
          </div>
        </div>
        <div class="about-book">
          <table>
            <tr>
              <th>Author</th>
              <td>: ${books[index].author}</td>
            </tr>
            <tr>
              <th>Erscheinungsjahr</th>
              <td>: ${books[index].publishedYear}</td>
            </tr>
            <tr>
              <th>Genre</th>
              <td>: ${books[index].genre}</td>
            </tr>
          </table>
        </div>
        <div class="divider"></div>
        <h3>Kommentare:</h3>
        <div class="comments-wrapper js-comments-${index}">
          ${renderCommentsTemplate(index)}
        </div>
        ${renderWriteCommentTemplate(index)}
      </div>
    </div>
  `;
};

const renderCommentsTemplate = function (index) {
  let html = "";
  for (let i = 0; i < books[index].comments.length; i++) {
    html += /*html*/ `
      <div class="comments-section">
        <div class="comments-section-user">[${books[index].comments[i].name}]</div>
        <div class="comments-section-comment">: ${books[index].comments[i].comment}</div>
      </div>
    `;
  }

  return html;
};

const renderWriteCommentTemplate = function (index) {
  return /*html*/ `
    <div class="comment-form">
      <input
        class="inputField-${index} comment-input"
        placeholder="Schreibe dein Kommentar ..."
        type="text"
      >
      <button class="js-btn-write-comment-${index} send-btn">
        <img src="./assets/img/send-icon.png" alt="send">
      </button>
    </div>
  `;
};
