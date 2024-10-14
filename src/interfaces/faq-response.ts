export namespace FaqResponse {
  export interface IFaqResponse {
    data: Data;
    errorCode: number;
  }
  export interface Data {
    faqList?: (FaqListEntity)[] | null;
    categoryList?: (FaqCategoriesEntityOrCategoryListEntity)[] | null;
  }
  export interface FaqListEntity {
    faqId: string;
    faqCategories?: (FaqCategoriesEntityOrCategoryListEntity)[] | null;
    titleSummary: string;
    titleLocale: string;
    titleEnglish: string;
    descriptionLocale: string;
    descriptionEnglish: string;
  }
  export interface FaqCategoriesEntityOrCategoryListEntity {
    categoryId: string;
    seqNo: number;
    categoryName: string;
    categoryLocale: string;
    categoryEnglish: string;
    descriptionLocale: string;
    descriptionEnglish: string;
    icon: string;
    slug: string;
  }
  
}