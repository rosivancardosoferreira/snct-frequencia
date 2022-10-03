export interface iAwaitRequestCommon {
  type: "await" | "success" | "error";
  isOpen: boolean;
}

export interface iAwaitRequest {
  onPress?: () => void;
  titleFirstButton?: string;
}

export interface iUIAwaitRequest {
  color: string;
}

export interface iSliceAwaitRequest
  extends Pick<iAwaitRequestCommon, "type" | "isOpen"> {
  title?: string | null;
  message?: string | null;
}
