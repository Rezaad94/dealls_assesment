export class searchPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox', { name: 'Cari berdasarkan nama,' });
        this.searchResult = page.locator('[id="__next"]');
        this.searchResultEmpty = page.getByRole('heading', { name: 'Tidak ada hasil pencarian' });
    }
    async fillSearchInput(search) {
        await this.searchInput.fill(search);
    }
}