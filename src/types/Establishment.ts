import Dish from './Dish';
import Drink from './Drink';

export default interface Establishment {
  id: number;
  name: string;
  phone: string;
  address: string;
  opening: string;
  closing: string;
  description: string;
  minTicket: number;
  minServiceTime: number;
  maxServiceTime: number;
  avatarUrl: string;
  bannerUrl: string;
  createdAt: string;
  updatedAt: string;
  dishes?: Dish[];
  drinks?: Drink[];
}
