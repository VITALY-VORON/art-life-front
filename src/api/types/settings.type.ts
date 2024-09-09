export type TSettings = {
  headerColor: string;
  headerTextColor: string;
  hideHeader: boolean;
  backgroundColor: string;
  enableSearch: boolean;
  appHeaderColor: string;
  appHeaderTextColor: string;
  appBackgroundColor: string;
  isAppHeader: boolean;
  isAppSearch: boolean;
  hidePanel: boolean;
  panelColor: string;
  iconAndTextColor: string;
  title: string;
  showTitle: boolean;
  showInMenu: boolean;
  buttons: Array<Buttons>;
  blocks: Array<Blocks>;
};

type Buttons = {
  type: string;
  label: string;
  phoneNumber?: string;
  action?: string;
};

type Blocks = {
  type: string;
  content: string;
};

export type TAppearanceSettings = {
  id: number;
  userId: string;
  headerColor: string | null;
  headerTextColor: string | null;
  hideHeader: boolean;
  backgroundColor: string | null;
  backgroundImageUrl: string | null;
  enableSearch: boolean;
};

export type TAppTheme = {
  id: string;
  userId: string;
  appHeaderColor: string;
  appHeaderTextColor: string;
  isAppHeader: boolean;
  appBackgroundColor: string;
  appBackgroundImage: string;
  isAppSearch: boolean;
};

export type TBottomPanelSettings = {
  id: number;
  userId: string;
  hidePanel: boolean;
  panelColor: string | null;
  iconAndTextColor: string | null;
  buttons: Array<TButton>;
};

type TButton = {
  id: number;
  bottomPanelId: number;
  type: string;
  label: string;
  phoneNumber: string | null;
  customAction: string | null;
};

export type TPage = {
  id: number;
  userId: string;
  pageId: number;
  title: string;
  showTitle: boolean;
  showInMenu: boolean;
  blocks: Array<TBlock>;
};

type TBlock = {
  id: number;
  pageId: number;
  type: string;
  content: string | null;
};
