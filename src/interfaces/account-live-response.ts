export namespace AccountLive {
    export interface IAccountLiveResponse {
        accountNumber: string;
        platform: string;
        leverage?: string | null;
        balance?: string | null;
        equity?: string | null;
        status: 'KYC DRAFT' | 'KYC PENDING' | 'KYC REJECTED' | 'STANDARD - INACTIVE' | 'STANDARD - ACTIVE' | string;
        type: string;
      }
      
}