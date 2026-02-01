export class ArticlePage {
  constructor(page) {
    this.page = page;
    this.title = page.getByRole("textbox", { name: "Article Title" });
    this.description = page.getByRole("textbox", {
      name: "What's this article about?",
    });
    this.mainArticle = page.getByRole("textbox", {
      name: "Write your article (in",
    });
    this.tags = page.getByRole("textbox", { name: "Enter tags" });
    this.publishButton = page.getByRole("button", { name: "Publish Article" });
    this.heading = page.getByRole("heading");
    this.paragraph = page.getByRole("paragraph");
  }

  async writeArticle(title, description, mainArticle, tags) {
    await this.title.fill(title);
    await this.description.fill(description);
    await this.mainArticle.fill(mainArticle);
    await this.tags.fill(tags);

    await this.publishButton.click();
  }

  getHeadingLocator() {
    return this.heading;
  }

  getParagraphLocator() {
    return this.paragraph;
  }
}
