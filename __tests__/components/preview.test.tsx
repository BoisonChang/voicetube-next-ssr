import { render, screen } from "@testing-library/react";
import Preview from "@/components/Preview/preview";
import { VideoItemType } from "@/types/request";
import "@testing-library/jest-dom/extend-expect";

describe("Preview component", () => {
  const mockVideo: VideoItemType = {
    id: 1,
    thumbnail: "http://test.com/thumbnail.jpg",
    title: "Test Title",
    views: 100,
    duration: 120,
    publishedAt: "2021-03-13T16:00:00+00:00",
    level: 2,
    captions: ["en"],
    collectCount: 4347,
  };

  it("should render Preview component", () => {
    render(<Preview video={mockVideo} />);
    const titleElement = screen.getByText("Test Title");
    const timeElement = screen.getByText("02:00");
    const viewsElement = screen.getByText("100");
    const levelElement = screen.getByText("中級");

    expect(titleElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(viewsElement).toBeInTheDocument();
    expect(levelElement).toBeInTheDocument();
  });

  it("should render Preview component with correct thumbnail", () => {
    render(<Preview video={mockVideo} />);
    const thumbnailElement = screen.getByTestId("preview-thumbnail");
    expect(thumbnailElement.getAttribute("src")).toContain(
      "http://test.com/thumbnail.jpg"
    );
  });
});
