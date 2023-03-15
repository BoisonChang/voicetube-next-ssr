export {};

describe("home page filter function", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("home page category filter function sorts videos by views", () => {
    cy.contains("觀看次數").click();

    const previewViews = cy.get('[data-testid="preview-views"]');
    previewViews.should(($views) => {
      let prevViews = parseInt($views.first().text(), 10);
      $views.slice(1).each((_, view) => {
        const currViews = parseInt(view.textContent || "0", 10);
        expect(currViews).to.be.lte(prevViews);
        prevViews = currViews;
      });
    });
  });

  it("displays videos based on duration filter: small, medium, long", () => {
    const filters = [
      { label: "4 分鐘以下", minDuration: 0, maxDuration: 240 },
      { label: "5 - 10 分鐘", minDuration: 300, maxDuration: 600 },
      { label: "超過 10 分鐘", minDuration: 601, maxDuration: Infinity },
    ];

    filters.forEach((filter) => {
      cy.contains(filter.label).click();

      cy.get("body").then((body) => {
        if (body.find('[data-testid="preview-duration"]').length === 0) {
          cy.contains("沒有篩選結果");
        } else {
          cy.get("[data-testid=preview-duration]").then((previewDurations) => {
            previewDurations.each((_, duration) => {
              const durationText = duration.textContent || "";
              const mins = parseInt(durationText.split(":")[0], 10);
              const secs = parseInt(durationText, 10);
              const durationInSeconds =
                parseInt(String(mins)) * 60 + parseInt(String(secs));
              expect(durationInSeconds).to.be.at.least(filter.minDuration);
              expect(durationInSeconds).to.be.at.most(filter.maxDuration);
            });
          });
        }
      });
    });
  });
});
