import { HtmlContent } from "../models";

export interface AppState {
    htmlContents: Array<HtmlContent>;
	currentUser: any;
    isLoggedIn: boolean;
    token: string;
}
