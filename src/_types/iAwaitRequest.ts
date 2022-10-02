export interface iAwaitRequest {
  type: "await" | "success" | "error";
  onPress?: () => void;
  isOpen: boolean;
}

export interface iTypeStatusBar extends Pick<iAwaitRequest, "type"> {}

export interface iTypeMessage extends Pick<iAwaitRequest, "type"> {}

export interface iUIAwaitRequest {
  color: string;
}
