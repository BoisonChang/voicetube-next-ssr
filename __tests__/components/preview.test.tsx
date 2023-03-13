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

  const renderPreviewComponent = () => {
    render(<Preview video={mockVideo} />);
  };

  it("should render Preview component", () => {
    renderPreviewComponent();

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("02:00")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("中級")).toBeInTheDocument();
  });

  it("should render Preview component with correct thumbnail", () => {
    renderPreviewComponent();

    const thumbnailElement = screen.getByTestId("preview-thumbnail");
    expect(thumbnailElement.getAttribute("src")).toContain(
      "http://test.com/thumbnail.jpg"
    );
  });
});
