import { AxiosResponse } from "axios";
import { PostSegment } from "../models/master";
import { api } from "./api";

export const useSendData = (
  data: PostSegment
): Promise<AxiosResponse<string, any>> =>
  api.post<string>("ed9136c3-532c-45d0-97fd-ccfe69b89330", data);
