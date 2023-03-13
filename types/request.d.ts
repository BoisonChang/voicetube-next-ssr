type CaptionType = "cht" | "ja" | "vi" | "en";

type VideoItemType = {
  id: number;
  thumbnail: string;
  title: string;
  views: number;
  collectCount: number;
  duration: number;
  publishedAt: string;
  level: 1 | 2 | 3;
  captions: CaptionType[];
};

export type VideoPropsType = {
  data: {
    status: boolean;
    data: {
      videos: VideoItemType[];
    };
  };
};