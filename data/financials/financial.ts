import { FinancialData } from "./schema";

const mockFinancialData: FinancialData[] = [
    // USA
    {
        id: '1',
        propertyId: '1',
        type: 'rent',
        amount: 1200,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Maplewood Apartments, Springfield, IL, USA',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '2',
        propertyId: '1',
        type: 'expense',
        amount: 150,
        date: '2024-01-10',
        description: 'HVAC repair - Maplewood Apartments, Springfield, IL, USA'
    },
    {
        id: '3',
        propertyId: '10',
        type: 'rent',
        amount: 1300,
        date: '2023-12-01',
        description: 'Rent for December 2023 - Elmwood Flats, Columbus, OH, USA',
        isLate: true,
        lateFee: 75,
        paidDate: '2023-12-10'
    },
    {
        id: '4',
        propertyId: '10',
        type: 'expense',
        amount: 90,
        date: '2023-12-15',
        description: 'Pest control - Elmwood Flats, Columbus, OH, USA'
    },
    {
        id: '5',
        propertyId: '35',
        type: 'rent',
        amount: 3200,
        date: '2024-02-01',
        description: 'Rent for February 2024 - Seattle Skyline Tower, Seattle, WA, USA',
        isLate: false,
        paidDate: '2024-02-01'
    },
    {
        id: '6',
        propertyId: '35',
        type: 'expense',
        amount: 400,
        date: '2024-02-10',
        description: 'Elevator maintenance - Seattle Skyline Tower, Seattle, WA, USA'
    },
    // Europe
    {
        id: '7',
        propertyId: '32',
        type: 'rent',
        amount: 2500,
        date: '2024-01-01',
        description: 'Rent for January 2024 - London Royal Residences, London, UK',
        isLate: true,
        lateFee: 120,
        paidDate: '2024-01-12'
    },
    {
        id: '8',
        propertyId: '32',
        type: 'expense',
        amount: 300,
        date: '2024-01-20',
        description: 'Window replacement - London Royal Residences, London, UK'
    },
    {
        id: '9',
        propertyId: '36',
        type: 'rent',
        amount: 2100,
        date: '2023-11-01',
        description: 'Rent for November 2023 - Parisian Riverfront Flat, Paris, France',
        isLate: false,
        paidDate: '2023-11-01'
    },
    {
        id: '10',
        propertyId: '36',
        type: 'expense',
        amount: 180,
        date: '2023-11-15',
        description: 'Plumbing - Parisian Riverfront Flat, Paris, France'
    },
    {
        id: '11',
        propertyId: '50',
        type: 'rent',
        amount: 1700,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Dublin City Centre Flat, Dublin, Ireland',
        isLate: true,
        lateFee: 60,
        paidDate: '2024-01-20'
    },
    // Asia
    {
        id: '12',
        propertyId: '17',
        type: 'rent',
        amount: 2800,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Tokyo Sakura Residence, Tokyo, Japan',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '13',
        propertyId: '17',
        type: 'expense',
        amount: 1200,
        date: '2024-01-25',
        description: 'HVAC replacement - Tokyo Sakura Residence, Tokyo, Japan'
    },
    {
        id: '14',
        propertyId: '48',
        type: 'rent',
        amount: 3500,
        date: '2023-12-01',
        description: 'Rent for December 2023 - Beijing Central Residence, Beijing, China',
        isLate: true,
        lateFee: 200,
        paidDate: '2023-12-25'
    },
    {
        id: '15',
        propertyId: '48',
        type: 'expense',
        amount: 500,
        date: '2023-12-18',
        description: 'Security upgrade - Beijing Central Residence, Beijing, China'
    },
    // Australia & Oceania
    {
        id: '16',
        propertyId: '26',
        type: 'rent',
        amount: 2200,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Sydney Harbour View, Sydney, Australia',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '17',
        propertyId: '41',
        type: 'rent',
        amount: 1800,
        date: '2023-11-01',
        description: 'Rent for November 2023 - Auckland Harbour View, Auckland, New Zealand',
        isLate: false,
        paidDate: '2023-11-01'
    },
    // Africa
    {
        id: '18',
        propertyId: '34',
        type: 'rent',
        amount: 1400,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Cape Town Oceanview, Cape Town, South Africa',
        isLate: true,
        lateFee: 90,
        paidDate: '2024-01-18'
    },
    {
        id: '19',
        propertyId: '34',
        type: 'expense',
        amount: 250,
        date: '2024-01-12',
        description: 'Roof repair - Cape Town Oceanview, Cape Town, South Africa'
    },
    // Americas (Latin America & Caribbean)
    {
        id: '20',
        propertyId: '18',
        type: 'rent',
        amount: 1800,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Montego Bay Villa, Montego Bay, Jamaica',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '21',
        propertyId: '30',
        type: 'rent',
        amount: 2300,
        date: '2023-12-01',
        description: 'Rent for December 2023 - Barcelona Beach House, Barcelona, Spain',
        isLate: false,
        paidDate: '2023-12-01'
    },
    {
        id: '22',
        propertyId: '38',
        type: 'rent',
        amount: 1600,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Rio Beachfront Condo, Rio de Janeiro, Brazil',
        isLate: true,
        lateFee: 80,
        paidDate: '2024-01-15'
    },
    // Middle East
    {
        id: '23',
        propertyId: '27',
        type: 'rent',
        amount: 4000,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Dubai Marina Residence, Dubai, UAE',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '24',
        propertyId: '27',
        type: 'expense',
        amount: 900,
        date: '2024-01-15',
        description: 'Pool maintenance - Dubai Marina Residence, Dubai, UAE'
    },
    // Mediterranean
    {
        id: '25',
        propertyId: '49',
        type: 'rent',
        amount: 2600,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Santorini Cliffside Villa, Santorini, Greece',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '26',
        propertyId: '49',
        type: 'expense',
        amount: 350,
        date: '2024-01-20',
        description: 'Exterior painting - Santorini Cliffside Villa, Santorini, Greece'
    },
    {
        id: '27',
        propertyId: '21',
        type: 'rent',
        amount: 3100,
        date: '2024-02-01',
        description: 'Rent for February 2024 - St Tropez Seaside Estate, St Tropez, France',
        isLate: false,
        paidDate: '2024-02-01'
    },
    {
        id: '28',
        propertyId: '22',
        type: 'rent',
        amount: 4500,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Central Park Tower, New York, NY, USA',
        isLate: true,
        lateFee: 200,
        paidDate: '2024-01-20'
    },
    {
        id: '29',
        propertyId: '23',
        type: 'expense',
        amount: 600,
        date: '2024-01-15',
        description: 'Roof repair - Costa Rica Rainforest Lodge, Monteverde, Costa Rica'
    },
    {
        id: '30',
        propertyId: '24',
        type: 'rent',
        amount: 3700,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Monaco Harbor Residence, Monaco',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '31',
        propertyId: '25',
        type: 'expense',
        amount: 800,
        date: '2024-01-10',
        description: 'Snow removal - Aspen Mountain Lodge, Aspen, CO, USA'
    },
    {
        id: '32',
        propertyId: '26',
        type: 'rent',
        amount: 2250,
        date: '2024-03-01',
        description: 'Rent for March 2024 - Sydney Harbour View, Sydney, Australia',
        isLate: false,
        paidDate: '2024-03-01'
    },
    {
        id: '33',
        propertyId: '27',
        type: 'expense',
        amount: 950,
        date: '2024-02-15',
        description: 'Elevator repair - Dubai Marina Residence, Dubai, UAE'
    },
    {
        id: '34',
        propertyId: '28',
        type: 'rent',
        amount: 2100,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Vancouver City Lofts, Vancouver, Canada',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '35',
        propertyId: '29',
        type: 'rent',
        amount: 1800,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Boston Beacon Apartments, Boston, MA, USA',
        isLate: true,
        lateFee: 100,
        paidDate: '2024-01-18'
    },
    {
        id: '36',
        propertyId: '30',
        type: 'expense',
        amount: 400,
        date: '2024-01-20',
        description: 'Plumbing - Barcelona Beach House, Barcelona, Spain'
    },
    {
        id: '37',
        propertyId: '31',
        type: 'rent',
        amount: 3500,
        date: '2024-01-01',
        description: 'Rent for January 2024 - San Francisco Bayview, San Francisco, CA, USA',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '38',
        propertyId: '32',
        type: 'expense',
        amount: 700,
        date: '2024-01-15',
        description: 'Window replacement - London Royal Residences, London, UK'
    },
    {
        id: '39',
        propertyId: '33',
        type: 'rent',
        amount: 1950,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Berlin City Apartments, Berlin, Germany',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '40',
        propertyId: '34',
        type: 'expense',
        amount: 350,
        date: '2024-01-22',
        description: 'Painting - Cape Town Oceanview, Cape Town, South Africa'
    },
    {
        id: '41',
        propertyId: '35',
        type: 'rent',
        amount: 3200,
        date: '2024-03-01',
        description: 'Rent for March 2024 - Seattle Skyline Tower, Seattle, WA, USA',
        isLate: false,
        paidDate: '2024-03-01'
    },
    {
        id: '42',
        propertyId: '36',
        type: 'rent',
        amount: 2100,
        date: '2024-02-01',
        description: 'Rent for February 2024 - Parisian Riverfront Flat, Paris, France',
        isLate: true,
        lateFee: 90,
        paidDate: '2024-02-20'
    },
    {
        id: '43',
        propertyId: '37',
        type: 'expense',
        amount: 600,
        date: '2024-01-10',
        description: 'Elevator maintenance - Toronto City Residences, Toronto, Canada'
    },
    {
        id: '44',
        propertyId: '38',
        type: 'rent',
        amount: 1600,
        date: '2024-02-01',
        description: 'Rent for February 2024 - Rio Beachfront Condo, Rio de Janeiro, Brazil',
        isLate: false,
        paidDate: '2024-02-01'
    },
    {
        id: '45',
        propertyId: '39',
        type: 'rent',
        amount: 2700,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Moscow City Tower, Moscow, Russia',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '46',
        propertyId: '40',
        type: 'expense',
        amount: 500,
        date: '2024-01-15',
        description: 'Garden maintenance - Bangkok Riverside Villa, Bangkok, Thailand'
    },
    {
        id: '47',
        propertyId: '41',
        type: 'rent',
        amount: 1800,
        date: '2024-02-01',
        description: 'Rent for February 2024 - Auckland Harbour View, Auckland, New Zealand',
        isLate: false,
        paidDate: '2024-02-01'
    },
    {
        id: '48',
        propertyId: '42',
        type: 'rent',
        amount: 2200,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Rome Historic Residence, Rome, Italy',
        isLate: false,
        paidDate: '2024-01-01'
    },
    {
        id: '49',
        propertyId: '43',
        type: 'rent',
        amount: 2500,
        date: '2024-01-01',
        description: 'Rent for January 2024 - Istanbul Bosphorus Mansion, Istanbul, Turkey',
        isLate: true,
        lateFee: 110,
        paidDate: '2024-01-18'
    },
    {
        id: '50',
        propertyId: '44',
        type: 'expense',
        amount: 700,
        date: '2024-01-20',
        description: 'Security upgrade - Hong Kong Peak Villa, Hong Kong'
    },
];

export async function getFinancialData(): Promise<FinancialData[]> {
    return mockFinancialData;
}
