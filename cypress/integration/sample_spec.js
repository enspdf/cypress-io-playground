describe("My First Test", () => {
    beforeEach(() => cy.visit("https://example.cypress.io"));

    it("Does Not Do Much", () => {
        expect(true).to.equal(true);
    });

    it("Finds On Element", () => {
        cy.contains("type");
    });

    it("Clicks On Element", () => {
        cy.contains("type").click();
    });
});