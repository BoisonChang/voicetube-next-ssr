export type CaptionType = "cht" | "ja" | "vi" | "en";

interface PreviewPropsBaseType {
  id?: number;
  key?: number;
  thumbnail: string;
  title: string;
  views: number;
  duration: number;
  level: 1 | 2 | 3;
  captions: CaptionType[];
}

export interface PreviewPropsType extends PreviewPropsBaseType {
  collectCount: number;
  publishedAt: string;
}

export type VideoPropsType = {
  data: {
    status: boolean;
    data: PreviewPropsType[];
  };
};
