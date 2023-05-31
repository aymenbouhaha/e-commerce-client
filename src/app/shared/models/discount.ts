export interface Discount{
id: number;
startDate: Date;
endDate: Date;
value: number;
productId: number;
}
export class Discount implements Discount{
}
