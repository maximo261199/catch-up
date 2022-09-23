import axios from "axios";
import { LogoApiService } from "@/core/services/logo-api.service";
const http = axios.create({
 baseURL: 'https://newsapi.org/v2/'
});
export class NewsApiService {
 apiKey = '6f4daba9f84143b3b1a18eaad0b4f285';
 logoApi = new LogoApiService();
 getSources() {
    return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }
    getArticlesForSource(sourceId) {
    return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }
    getUrlToLogo(source) {
    return this.logoApi.getUrlToLogo(source);
    }
   }