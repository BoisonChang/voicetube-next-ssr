import axios, { AxiosResponse } from "axios";
import { VideoPropsType } from "@/types/request";

export function getPreviewList(): Promise<AxiosResponse<VideoPropsType>> {
  return axios.get<VideoPropsType>(
    "https://us-central1-lithe-window-713.cloudfunctions.net/frontendQuiz"
  );
}
