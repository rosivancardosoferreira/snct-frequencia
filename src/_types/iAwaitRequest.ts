export interface iAwaitRequestCommon {
  type: "await" | "success" | "error";
  isOpen: boolean;
}

export interface iAwaitRequest {
  onPress?: () => void;
}

export interface iUIAwaitRequest {
  color: string;
}

export interface iSliceAwaitRequest
  extends Pick<iAwaitRequestCommon, "type" | "isOpen"> {}
