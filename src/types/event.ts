export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  imageUrl?: string;
  sourceUrl: string;
  createdAt: Date;
  publishedWp: boolean;
  publishedMailchimp: boolean;
}