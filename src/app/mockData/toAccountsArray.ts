import { MockToAccountsModel } from '../models/mock-to-accounts-model';

export const MOCK_TO_ACCOUNTS_ARRAY: MockToAccountsModel[] = [
  {
    accountType: 'Payee',
    accountNumber: '4545454545',
    accountName: 'Send Money to Friend'
  },
  {
    accountType: 'Lender',
    accountNumber: '9999999990',
    accountName: 'Repay Credit Card'
  },
  {
    accountType: 'Private',
    accountNumber: '1357986420',
    accountName: 'Something else that I send my money to'
  }
];
