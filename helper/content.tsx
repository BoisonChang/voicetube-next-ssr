import { LanguageCodeType } from "@/types/constant";

export function getLevel(num: 1 | 2 | 3): "初級" | "中級" | "高級" {
  switch (num) {
    case 1:
      return "初級";
    case 2:
      return "中級";
    case 3:
      return "高級";
  }
}

export function getLanguageName(
  languageCode: LanguageCodeType
): "中文" | "日文" | "越南文" | "英文" | "外語" {
  if (languageCode.includes("cht")) {
    return "中文";
  } else if (languageCode.includes("ja")) {
    return "日文";
  } else if (languageCode.includes("vi")) {
    return "越南文";
  } else if (languageCode.includes("en")) {
    return "英文";
  } else {
    return "外語";
  }
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const paddedMins = mins.toString().padStart(2, "0");
  const paddedSecs = secs.toString().padStart(2, "0");
  return `${paddedMins}:${paddedSecs}`;
}
