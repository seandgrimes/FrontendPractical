export interface Order {
    bidPrice: number,
    orderQuantity: number,
    symbol: string,
    timestamp: number,
    tradeType: string
    total: number;
}