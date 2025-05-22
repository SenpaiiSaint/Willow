export interface FinancialData {
    id: string;
    propertyId: string;
    type: 'rent' | 'expense';
    amount: number;
    date: string;
    description: string;
    isLate?: boolean;      // true if payment was late
    lateFee?: number;      // late fee applied, if any
    paidDate?: string;     // actual date payment was received
}