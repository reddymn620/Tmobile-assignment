export interface CollectionItems {
  billingInfo: BillingInfo;
  bookInfo: BookInfo;
}

export interface BillingInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface BookInfo {
  id: string;
  title: string;
  subtitle: string;
  imageLinks: string;
  description: string;
  authors: string;
}
