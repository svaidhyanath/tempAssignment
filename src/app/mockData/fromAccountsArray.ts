import { MockFromAccountsModel } from '../models/mock-from-accounts-model';

export const MOCK_FROM_ACCOUNTS_ARRAY: MockFromAccountsModel[] = [
  {
    accountType: 'Checking',
    accountNumber: '123456789',
    accountName: 'Mock Checking Account',
    isSelected: false
  },
  {
    accountType: 'Saving',
    accountNumber: '987654321',
    accountName: 'Mock Savings Account',
    isSelected: false
  },
  {
    accountType: 'Money Market',
    accountNumber: '567345987',
    accountName: 'Mock Money Market Account',
    isSelected: false
  }
];
