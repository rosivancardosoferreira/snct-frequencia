export interface iModalAlert {
  onAction?: () => void;
  onActionCancel?: () => void;
}

export interface iSliceModalAlert {
  isOpen: boolean;
  title?: string | null;
  message?: string | null;
  textAction?: string | null;
  textActionCancel?: string | null;
}
