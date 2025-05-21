import { FinancialData } from "./schema";

const mockFinancialData: FinancialData[] = [
    {
        id: '1',
        propertyId: '1',
        type: 'rent',
        amount: 1000,
        date: '2024-01-01',
        description: 'Rent for January 2024'
    },
    {
        id: '2',
        propertyId: '1',
        type: 'expense',
        amount: 200,
        date: '2024-01-15',
        description: 'Electricity bill for January 2024'
    },
    {
        id: '3',
        propertyId: '1',
        type: 'rent',
        amount: 1000,
        date: '2024-02-01',
        description: 'Rent for February 2024'
    }
];

export async function getFinancialData(): Promise<FinancialData[]> {
    return mockFinancialData;
}
