import { filterByLength, sortByCategory, sortFunc } from "@/helper/filter";
import { FilterLength, FilterCategory } from "@/const/list";
import { video, videos } from "@/const/jest";

describe("filterByLength", () => {
  test("should return true for all filter length", () => {
    expect(filterByLength(video, FilterLength.ALL)).toBeTruthy();
  });
  test("should return false for short video", () => {
    expect(filterByLength(video, FilterLength.SHORT)).toBeFalsy();
  });
  test("should return true for medium video", () => {
    expect(filterByLength(video, FilterLength.MEDIUM)).toBeTruthy();
  });
  test("should return false for long video", () => {
    expect(filterByLength(video, FilterLength.LONG)).toBeFalsy();
  });
});

describe("sortByCategory function", () => {
  const expectedVideos = [...videos];

  it("should sort videos by newest", () => {
    const result = videos.sort((a, b) =>
      sortByCategory(a, b, FilterCategory.NEWEST)
    );
    expectedVideos.sort(
      (a, b) =>
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    );
    expect(result).toEqual(expectedVideos);
  });

  it("should sort videos by most viewed", () => {
    const result = videos.sort((a, b) =>
      sortByCategory(a, b, FilterCategory.VIEWED)
    );
    expectedVideos.sort((a, b) => b.views - a.views);
    expect(result).toEqual(expectedVideos);
  });

  it("should sort videos by most collected", () => {
    const result = videos.sort((a, b) =>
      sortByCategory(a, b, FilterCategory.MOST_COLLECTED)
    );
    expectedVideos.sort((a, b) => b.collectCount - a.collectCount);
    expect(result).toEqual(expectedVideos);
  });
});

describe("sortFunc", () => {
  it("should return videos sorted by newest when filter length is MEDIUM and filter category is NEWEST", () => {
    const result = sortFunc(videos, FilterLength.MEDIUM, FilterCategory.NEWEST);
    const expected = videos
      .filter((video) => video.duration > 300 && video.duration <= 600)
      .sort(
        (a, b) =>
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    expect(result).toEqual(expected);
  });

  it("should return empty array when filter length is SHORT and filter category is NEWEST", () => {
    const result = sortFunc(videos, FilterLength.SHORT, FilterCategory.NEWEST);
    expect(result).toEqual([]);
  });
});
