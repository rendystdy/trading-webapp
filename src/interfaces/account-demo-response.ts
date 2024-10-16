export namespace AccountDemo {
    export interface IAccountDemoResponse {
        accountNumber: string;
        platform: string;
        leverage?: string | null;
        balance?: string | null;
        equity?: string | null;
        status: 'ULTRA LOW - ACTIVE' | string;
        type: string;
      }
      
}