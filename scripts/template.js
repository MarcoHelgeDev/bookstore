const renderTemplate = function (index) {
  return /*html*/ `
    <h2> ${books[index].name}</h2>
      <div class="divider"></div>
      <img class="book-icon" src="./assets/icon/book.webp" alt="book-icon">
        <div class="divider"></div>
      <div class="price-like-wrapper">
        <div class="book-price">
          <span>${books[index].price.toFixed(2)} €</span>
        </div>
        <div class="book-like">
          <span class="like-counter">${books[index].likes}</span>
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
  `;
};

const renderCommentsTemplate = function (arr, index, i) {
  return /*html*/ `
    <div class="comments-section">
    <div class="comments-section-user">[${arr[index].comments[i].name}]</div>
    <div class="comments-section-comment">: ${arr[index].comments[i].comment}</div>
  </div>
  `;
};

const renderWriteCommentTemplate = function (index) {
  return /*html*/ `
    <div class="comment-form">
      <input class="inputField-${index} comment-input" placeholder="Schreibe dein Kommentar ..." type="text">
      <button class="js-btn-write-comment-${index} send-btn"><img src="./assets/img/send-icon.png" alt="send"></button>
    </div>
  `;
};
