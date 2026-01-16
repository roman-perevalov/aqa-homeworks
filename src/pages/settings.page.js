export class SettingsPage {
  constructor(page) {
    this.page = page;
    this.profilePictureUrl = page.getByRole("textbox", {
      name: "URL of profile picture",
    });
    this.name = page.getByRole("textbox", { name: "Your Name" });
    this.bioArea = page.getByRole("textbox", { name: "Short bio about you" });
    this.email = page.getByRole("textbox", { name: "Email" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.updateSettingsButton = page.getByRole("button", {
      name: "Update Settings",
    });
  }

  async updateProfilePicture(newPictureUrl) {
    await this.profilePictureUrl.fill(newPictureUrl);
    await this.updateSettingsButton.click();
  }

  async updateName(newName) {
    await this.name.fill(newName);
    await this.updateSettingsButton.click();
  }

  async updateBio(newBio) {
    await this.bioArea.fill(newBio);
    await this.updateSettingsButton.click();
  }

  async updateEmail(newEmail) {
    await this.email.fill(newEmail);
    await this.updateSettingsButton.click();
  }

  async updatePassword(newPassword) {
    await this.password.fill(newPassword);
    await this.updateSettingsButton.click();
  }
}
