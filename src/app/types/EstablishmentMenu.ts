import Establishment from './Establishment';
import Dish from './Dish';
import Drink from './Drink';

export default interface EstablishmentMenu extends Establishment {
  dishes: Dish[];
  drinks: Drink[];
}
