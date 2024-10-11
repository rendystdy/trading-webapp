export namespace VideosResponse {
    export interface IVideosResponse {
        data: Data;
        errorCode: number;
    }
    export interface Data {
        videoList?: (VideoListEntity)[] | null;
        categoryList?: (VideoCategoryOrCategoryListEntity)[] | null;
        totalRows: number;
    }
    export interface VideoListEntity {
        videoId: string;
        videoCategory: VideoCategoryOrCategoryListEntity;
        titleSummary: string;
        titleLocale: string;
        titleEnglish: string;
        descriptionLocale: string;
        descriptionEnglish: string;
        videoUrlLocale: string;
        videoUrlEnglish: string;
    }
    export interface VideoCategoryOrCategoryListEntity {
        videoCategoryId: string;
        seqNo: number;
        categoryName: string;
        categoryLocale: string;
        categoryEnglish: string;
        descriptionLocale: string;
        descriptionEnglish: string;
        slug: string;
    }

}