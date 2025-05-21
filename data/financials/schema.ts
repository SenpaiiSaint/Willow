export interface FinancialData {
    id: string;
    propertyId: string;
    type: 'rent' | 'expense';
    amount: number;
    date: string;
    description: string;
}