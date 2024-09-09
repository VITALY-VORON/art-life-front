import {
  TAppearanceSettings,
  TAppTheme,
  TBottomPanelSettings,
  TPage,
} from "@/api/types/settings.type";

export interface ISettingsService {
  initializeUserSettings(userId: string, data: any): Promise<any>;
  getAppearanceSettings(userId: string): Promise<TAppearanceSettings>;
  updateAppearanceSettings(
    userId: string,
    data: any,
  ): Promise<TAppearanceSettings>;
  getAppTheme(userId: string): Promise<TAppTheme>;
  updateAppTheme(userId: string, data: any): Promise<TAppTheme>;
  getBottomPanelSettings(userId: string): Promise<TBottomPanelSettings>;
  getPages(userId: string): Promise<Array<TPage>>;
  createPage(userId: string, data: any): Promise<Omit<TPage, "blocks">>;
  updatePage(userId: string, data: any, pageId: number): Promise<Omit<TPage, "blocks">>;
}
