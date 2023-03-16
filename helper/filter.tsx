import { PreviewPropsType } from "@/types/request";
import { FilterLength, FilterCategory } from "@/const/list";

export function filterByLength(
  video: PreviewPropsType,
  filterLength: FilterLength
) {
  switch (filterLength) {
    case FilterLength.ALL:
      return true;
    case FilterLength.SHORT:
      return video.duration <= 240;
    case FilterLength.MEDIUM:
      return video.duration >= 300 && video.duration <= 600;
    case FilterLength.LONG:
      return video.duration > 600;
    default:
      return true;
  }
}

export function sortByCategory(
  a: PreviewPropsType,
  b: PreviewPropsType,
  filterCategory: FilterCategory
) {
  switch (filterCategory) {
    case FilterCategory.NEWEST:
      return (
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    case FilterCategory.VIEWED:
      return b.views - a.views;
    case FilterCategory.MOST_COLLECTED:
      return b.collectCount - a.collectCount;
    default:
      return 1;
  }
}

export function sortFunc(
  videos: PreviewPropsType[],
  activeFilterLength: FilterLength,
  activeFilterCategory: FilterCategory
) {
  return videos
    .sort((a, b) => sortByCategory(a, b, activeFilterCategory))
    .filter((video) => filterByLength(video, activeFilterLength));
}
