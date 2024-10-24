export namespace AccountDetails {
    export interface IAccoundDetailsResponse {
        username: string;
        fullname: string;
        balance: number;
        equity: number;
        freeMargin: number;
        accountType: string;
        status: string;
        liveAccountType: string;
        platform: string;
        profit: number;
        storage: number;
        commission: number;
        floating: number;
        margin: number;
        marginLevel: number;
        marginLeverage: number;
        marginInitial: number;
        marginMaintenance: number;
        soTime: number;
        soLevel: number;
        soEquity: number;
        soMargin: number;
        assets: number;
        liabilities: number;
        blockedCommission: number;
        blockedProfit: number;
    }
}