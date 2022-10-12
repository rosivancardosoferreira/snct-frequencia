export interface iModalAlert {
  onAction?: () => void;
  onActionCancel?: () => void;
  clickOnDismiss?: boolean;
}

export interface iSliceModalAlert {
  isOpen: boolean;
  title?: string | null;
  message?: string | null;
  textAction?: string | null;
  textActionCancel?: string | null;
}
