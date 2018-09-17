import { MockFromAccountsModel } from '../models/mock-from-accounts-model';

export const MOCK_FROM_ACCOUNTS_ARRAY: MockFromAccountsModel[] = [
  {
    accountType: 'Checking',
    accountNumber: '123456789',
    accountName: 'Citi Checking ****3814',
    isSelected: false
  },
  {
    accountType: 'Saving',
    accountNumber: '987654321',
    accountName: 'Citi Savings ****5671',
    isSelected: false
  },
  {
    accountType: 'Money Market',
    accountNumber: '567345987',
    accountName: 'Credit Card ****6448',
    isSelected: false
  }
];
