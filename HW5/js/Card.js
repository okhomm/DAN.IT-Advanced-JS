class Card {
  constructor(postId, title, body, name, email) {
    this.postId = postId;
    this.title = title;
    this.body = body;
    this.name = name;
    this.email = email;
    this.htmlContainer = document.createElement("div")
  }

  render() {
    this.htmlContainer.innerHTML = `
    <div class="col">
      <div class="card h-100  mb-3">
        <div class="card-header border-info text-bg-info text-white">
          <strong>${this.name}</strong>, ${this.email}, ${this.postId}
        </div>
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.body}</p>
        </div>
        <div class="card-footer ">
          <div id="footer-content" class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button id="del-btn" class="btn btn-danger" type="button">Delete</button>
          </div>
        </div>
      </div>
    </div>
    `
    content.append(this.htmlContainer);
  }

  addDeleteListener() {
    const delButton = this.htmlContainer.querySelector('#del-btn');
    delButton.addEventListener("click", () => this.delete());
  }

  delete() {
    this.htmlContainer.remove();
  }
}