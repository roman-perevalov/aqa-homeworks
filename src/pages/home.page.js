export class HomePage {
  constructor(page) {
    this.page = page;
    this.profileName = page.locator(".dropdown-toggle");
  }

  getProfileNameLocator() {
    return this.profileName;
  }
}
