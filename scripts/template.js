const renderTemplate = function (index) {
  return /*html*/ `
    <h2> ${books[index].name}</h2>
      <div>
        <span>${books[index].price}</span>
      <div>
        <span>${books[index].likes}</span>
        <span>${books[index].liked}</span>
        <button class="js-like-${index}"> LIKE </button>
      </div>
      <div>
      <table>
        <tr>
          <th>Author:</th>
          <td>: ${books[index].author}</td>
        </tr>
        <tr>
          <th>Erscheinungsjahr:</th>
          <td>: ${books[index].publishedYear}</td>
        </tr>
        <tr>
          <th>Genre</th>
          <td>: ${books[index].genre}</td>
        </tr>
      </table>
      <h3>Kommentare</h3>
  `;
};

const renderCommentsTemplate = function (arr, index, i) {
  return /*html*/ `
    <div>
      <table>
        <tr>
          <td>${arr[index].comments[i].name}</td>
            <td>:${arr[index].comments[i].comment}</td>
          </tr>
        <tr>
      </table>
    </div>    
  </div>
</div>
  `;
};

const renderWriteCommentTemplate = function (index) {
  return /*html*/ `
    <input class="inputField-${index}" type="text">
    <button class="js-btn-write-comment-${index}">Send</button>
  `;
};
