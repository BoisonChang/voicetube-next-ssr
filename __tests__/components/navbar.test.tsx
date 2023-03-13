import { render, screen, fireEvent } from "@testing-library/react";
import NavbarFilterItem from "@/components/Navbar/navFilterItem";
import "@testing-library/jest-dom";

describe("NavbarFilterItem", () => {
  const filters = [
    { id: 1, name: "發布時間" },
    { id: 2, name: "觀看次數" },
    { id: 3, name: "收藏次數" },
  ];
  const activeFilter = 1;
  const mockHandleClick = jest.fn();

  describe("when rendered", () => {
    beforeEach(() => {
      render(
        <NavbarFilterItem
          filters={filters}
          activeFilter={activeFilter}
          handleClick={mockHandleClick}
        />
      );
    });

    it("renders the filter buttons correctly", () => {
      const filterButtons = screen.getAllByTestId("filter-nav");
      expect(filterButtons).toHaveLength(3);
    });

    it("calls the click handler when a filter button is clicked", () => {
      const filterButton = screen.getByText("觀看次數");
      fireEvent.click(filterButton);
      expect(mockHandleClick).toHaveBeenCalledWith(2);
    });
  });
});
