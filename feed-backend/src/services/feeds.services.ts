import data from '../data.json';

type FeedData = {
    folders: Array<{
        id: string;
        name: string;
        urls: string[];
    }>;
    favorites: Array<{
        urls: string[];
        count: number;
    }>;
    all: string[];
};

function fetchAllFeeds(){
    const dataArray: string[] = (data as unknown as FeedData).all;
    return dataArray;
}

function fetchFeedsByFolder(){

    return
}

function fetchFavouraiteFeeds(){

    return 
}

export {
    fetchAllFeeds,
    fetchFeedsByFolder,
    fetchFavouraiteFeeds
}