import {Repository} from "../types";
import httpCommon from "./http-common.ts";


export const getRepos = async (query: string = ""): Promise<Repository[]> => {
    try {
        const resp = await httpCommon.get("https://api.github.com/search/repositories", {
            params: {
                q: `${query} language:TypeScript`,
                sort: "stars",
                order: "desc"
            }
        });
        return resp.data.items;
    } catch (error) {
        console.error("Error fetching TypeScript repositories:", error);
        throw error;
    }
};