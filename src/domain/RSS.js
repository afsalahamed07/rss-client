export class RSS {
    constructor( rssData ) {
        this.title = rssData.title;
        this.url = rssData.url;
        this.description = rssData.description;
        this.feedType = rssData.feedType;
    }
}