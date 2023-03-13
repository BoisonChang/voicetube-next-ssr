export type LanguageCodeType = "ja" | "vi" | "en" | "cht" | string;

export type ColorMapType = {
  [key in LanguageCodeType | "other"]: string;
};

export interface PreviewLangtabProps {
  caption: LanguageCodeType;
}
