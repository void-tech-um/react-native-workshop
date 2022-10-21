import axios from "axios";
import { IApi, Item } from "../global/types";

export default class Api implements IApi {
  baseUrl: string;
  constructor() {
    this.baseUrl = "http://santiagomed.pythonanywhere.com/api/v1";
  }

  getItems = async () => {
    try {
      const response = await axios.get(`${this.baseUrl}/items/`);
      return response.data.items;
    } catch (error) {
      throw error;
    }
  };

  postItem = async (item: Item) => {
    try {
      const response = await axios.post(`${this.baseUrl}/items/`, item);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  deleteItem = async (id: any) => {
    try {
      await axios.delete(`${this.baseUrl}/items/${id}/`);
    } catch (error) {
      throw error;
    }
  };
}