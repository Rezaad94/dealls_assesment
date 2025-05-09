export class loginPage {
    constructor(page) {
        this.page = page;
        this.masukHiperlink = page.getByRole('link', { name: 'Masuk' });
        this.emailInput = page.getByRole('textbox', { name: 'Enter your email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Enter your password' });
        this.signInButton = page.getByRole('button', { name: 'Sign In', exact: true });
        this.errorMessage = page.getByText('Email Not found');
        this.invalidEmailMessage = page.getByText('Invalid email format');
        this.invalidPasswordMessage = page.getByText('Password must be at least 8 characters');
        this.usernameTitle = page.locator('h1');
    }
    async goto() {
        await this.page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');
    }
    async clickMasukHiperlink() {
        await this.masukHiperlink.click();
    }
    async fillEmail(email) {
        await this.emailInput.fill(email);
    }
    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }
    async clickSignInButton() {
        await this.signInButton.click();
    }
};