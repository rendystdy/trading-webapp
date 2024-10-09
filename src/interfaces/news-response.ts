export namespace NewsResponse {
    export interface INewsResponse {
        data: Data;
        errorCode: number;
    }
    export interface Data {
        postList?: (PostListEntity)[] | null;
        categoryList?: (CategoryListEntity)[] | null;
        totalRows: number;
    }
    export interface PostListEntity {
        postId: string;
        postTitle: string;
        description: string;
        slug: string;
        postCategoryIds?: (string)[] | null;
        postTagIds?: (string | null)[] | null;
        mediaPath: string;
        seoTitle?: null;
        metaDescription?: null;
        publishDate: string;
    }
    export interface CategoryListEntity {
        categoryId: string;
        categoryName: string;
        slug: string;
    }
}
