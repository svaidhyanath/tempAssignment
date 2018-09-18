import { MockFromAccountsModel } from '../models/mock-from-accounts-model';

export const MOCK_FROM_ACCOUNTS_ARRAY: MockFromAccountsModel[] = [
  {
    accountType: 'Checking',
    accountNumber: '123456789',
    accountName: 'Citi Checking ****3814',
    isSelected: false,
    iconImage: 'icon_Checking.png'
  },
  {
    accountType: 'Saving',
    accountNumber: '987654321',
    accountName: 'Citi Savings ****5671',
    isSelected: false,
    iconImage: 'icon_Savings.png'
  },
  {
    accountType: 'Money Market',
    accountNumber: '567345987',
    accountName: 'Credit Card ****6448',
    isSelected: false,
    iconImage: 'icon_Credit.png'
  }
];
