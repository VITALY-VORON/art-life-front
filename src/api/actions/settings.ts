import { customAxios } from "../axios";
import {
  TAppearanceSettings,
  TAppTheme,
  TBottomPanelSettings,
  TPage,
} from "../types/settings.type";
import { ISettingsService } from "./interface/settings.service.interface";

export class SettingsService implements ISettingsService {

  async initializeUserSettings(userId: string, data: any): Promise<any> {
    return await customAxios.post(`settings/${userId}/settings`, data);
  }

  async getAppearanceSettings(userId: string): Promise<TAppearanceSettings> {
    return await customAxios.get(`settings/${userId}/appearance-settings`);
  }

  async updateAppearanceSettings(
    userId: string,
    data: any,
  ): Promise<TAppearanceSettings> {
    return await customAxios.put(
      `settings/${userId}/appearance-settings)`,
      data,
    );
  }

  async getAppTheme(userId: string): Promise<TAppTheme> {
    return await customAxios.get(`settings/${userId}/app-theme`);
  }

  async updateAppTheme(userId: string, data: any): Promise<TAppTheme> {
    return await customAxios.put(`settings/${userId}/app-theme`, data);
  }

  async getBottomPanelSettings(userId: string): Promise<TBottomPanelSettings> {
    return await customAxios.get(`settings/${userId}/bottom-panel-settings`);
  }
  async getPages(userId: string): Promise<Array<TPage>> {
    return await customAxios.get(`settings/${userId}/pages`);
  }

  async createPage(userId: string, data: any): Promise<Omit<TPage, "blocks">> {
    return await customAxios.post(`settings/${userId}/pages`, data);
  }
  
  async updatePage(
    userId: string,
    data: any,
    pageId: number,
  ): Promise<Omit<TPage, "blocks">> {
    return await customAxios.post(`settings/${userId}/pages/${pageId}`, data);
  }
}
