export class GlobalFeed {
  constructor(page) {
    this.page = page;
    this.article = page.getByText("Read more...");
    this.commentArea = page.getByRole("textbox", {
      name: "Write a comment...",
    });
    this.postCommentButton = page.getByRole("button", { name: "Post Comment" });
    this.tagPill = page.locator(".tag-pill.tag-default");
    this.like = page.locator("button:has(i.ion-heart)");
  }

  async goToArticle(index) {
    await this.article.nth(index).click();
  }

  async addLike(index) {
    await this.like.nth(index).click();
  }

  async writeComment(comment) {
    await this.commentArea.waitFor({ state: "visible" });
    await this.commentArea.fill(comment);

    await this.postCommentButton.click();
  }
}
