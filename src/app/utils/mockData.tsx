import Dish from '../types/Dish';
import Drink from '../types/Drink';
import Establishment from '../types/Establishment';
import EstablishmentMenu from '../types/EstablishmentMenu';

const mockEstablishment_1: Establishment = {
  id: 1,
  name: "Author's Cuisine",
  phone: '12-34567-8901',
  address: '123 Main Street',
  opening: '14:00',
  closing: '23:00',
  description: 'Italian cuisine',
  minTicket: 2500,
  minServiceTime: 60,
  maxServiceTime: 80,
  avatarUrl:
    'https://static.vecteezy.com/ti/vetor-gratis/p3/10411845-restaurante-logo-design-modelo-gratis-vetor.jpg',
  bannerUrl:
    'https://www.melhoresdestinos.com.br/wp-content/uploads/2023/06/melhores-restaurantes-do-mundo-2023-capa.jpg',
  createdAt: '2023-09-20T12:00:00Z',
  updatedAt: '2023-09-20T14:30:00Z',
};

const mockEstablishment_2: Establishment = {
  id: 2,
  name: 'Bendita Comida',
  phone: '12-34567-8901',
  address: '123 Main Street',
  opening: '18:00',
  closing: '23:00',
  description: 'Comida Brasileira',
  minTicket: 1000,
  minServiceTime: 70,
  maxServiceTime: 90,
  avatarUrl: 'https://i.pinimg.com/1200x/cf/dc/35/cfdc35f516f249f7f52cfa61123ebe37.jpg',
  bannerUrl:
    'https://f.i.uol.com.br/fotografia/2021/11/17/163717032261953c9245429_1637170322_5x2_lg.jpg',
  createdAt: '2023-09-20T12:00:00Z',
  updatedAt: '2023-09-20T14:30:00Z',
};

const mockEstablishment_3: Establishment = {
  id: 3,
  name: 'Alho e Óleo',
  phone: '12-34567-8901',
  address: '123 Main Street',
  opening: '10:00',
  closing: '15:00',
  description: 'Comida com tompero',
  minTicket: 1700,
  minServiceTime: 50,
  maxServiceTime: 80,
  avatarUrl:
    'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F28%2F19%2FLogo-268745_141343_195610032_635995249.jpg',
  bannerUrl: 'https://blog.decorlumen.com.br/wp-content/uploads/2020/09/restaurante_4.jpg',
  createdAt: '2023-09-20T12:00:00Z',
  updatedAt: '2023-09-20T14:30:00Z',
};

const mockDishes: Dish[] = [
  {
    id: 1,
    name: 'Strogonoff',
    description: 'Carne, arroz, batata frita',
    imageUrl:
      'https://www.sabornamesa.com.br/media/k2/items/cache/c910db2cadeb7dd44121f01e6d7b155d_XL.jpg',
    price: 2121,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 2,
    name: 'Bife à Parmediana',
    description: 'Carne, arroz, batata frita',
    imageUrl:
      'https://www.estadao.com.br/resizer/fOA6pWPuQg9h0Ep7WtiXgDr6PFE=/720x503/filters:format(jpg):quality(80):focal(775x1125:785x1135)/cloudfront-us-east-1.images.arcpublishing.com/estadao/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg',
    price: 2599,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 3,
    name: 'Bife à Cavalo',
    description: 'Carne, arroz, batata frita',
    imageUrl:
      'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/06/06/568823943-bife-a-cavalo-1.jpg',
    price: 2599,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 4,
    name: 'Macarronada',
    description: 'Espaguete, molho à bolonhesa',
    imageUrl:
      'https://www.sabornamesa.com.br/media/k2/items/cache/b5b56b2ae93d3dc958cf0c21c9383b18_XL.jpg',
    price: 1998,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 5,
    name: 'Frango Assado',
    description: 'Arroz, legumes',
    imageUrl:
      'https://www.hojetemfrango.com.br/wp-content/uploads/2018/12/coxa-de-frango-assada-com-legumes-e-azeite-de-ervas-e-arroz-com-cogumelos.jpg',
    price: 1799,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 6,
    name: 'Feijoada',
    description: 'Arroz, couve, farofa, torresmo',
    imageUrl: 'https://img.cybercook.com.br/receitas/776/feijoada.jpeg',
    price: 2990,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 7,
    name: 'Strogonoff',
    description: 'Carne, arroz, batata frita',
    imageUrl:
      'https://www.sabornamesa.com.br/media/k2/items/cache/c910db2cadeb7dd44121f01e6d7b155d_XL.jpg',
    price: 2121,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 8,
    name: 'Bife à Parmediana',
    description: 'Carne, arroz, batata frita',
    imageUrl:
      'https://www.estadao.com.br/resizer/fOA6pWPuQg9h0Ep7WtiXgDr6PFE=/720x503/filters:format(jpg):quality(80):focal(775x1125:785x1135)/cloudfront-us-east-1.images.arcpublishing.com/estadao/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg',
    price: 2599,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 9,
    name: 'Bife à Cavalo',
    description: 'Carne, arroz, batata frita',
    imageUrl:
      'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/06/06/568823943-bife-a-cavalo-1.jpg',
    price: 2599,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 10,
    name: 'Macarronada',
    description: 'Espaguete, molho à bolonhesa',
    imageUrl:
      'https://www.sabornamesa.com.br/media/k2/items/cache/b5b56b2ae93d3dc958cf0c21c9383b18_XL.jpg',
    price: 1998,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 11,
    name: 'Frango Assado',
    description: 'Arroz, legumes',
    imageUrl:
      'https://www.hojetemfrango.com.br/wp-content/uploads/2018/12/coxa-de-frango-assada-com-legumes-e-azeite-de-ervas-e-arroz-com-cogumelos.jpg',
    price: 1799,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 12,
    name: 'Feijoada',
    description: 'Arroz, couve, farofa, torresmo',
    imageUrl: 'https://img.cybercook.com.br/receitas/776/feijoada.jpeg',
    price: 2990,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
];

const mockDrinks: Drink[] = [
  {
    id: 1,
    name: 'Água',
    description: 'Sem gás - 500ml',
    imageUrl:
      'https://static23.minhalojanouol.com.br/clgatacado/produto/20201016113738_8310991690_D.jpg',
    price: 500,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 2,
    name: 'Refrigerante',
    description: 'Lata - 350ml',
    imageUrl: 'https://emsters.com.br/pub/wp-content/uploads/2023/02/download.jpg',
    price: 700,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 3,
    name: 'Suco Natural ',
    description: '500ml',
    imageUrl:
      'https://s2-ge.glbimg.com/64QeEkjeZkr4WG0cQY0gFzTCAC4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/3/3/92w4EYREyRINApxl77eQ/suco-frutas.jpg',
    price: 700,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 4,
    name: 'Refrigerante ',
    description: '2 litros',
    imageUrl:
      'https://loja.barracadoze.com.br/wp-content/uploads/sites/5/2020/10/refrigerante-de-2-litros-min-min.png',
    price: 1200,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 5,
    name: 'Água',
    description: 'Sem gás - 500ml',
    imageUrl:
      'https://static23.minhalojanouol.com.br/clgatacado/produto/20201016113738_8310991690_D.jpg',
    price: 500,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 6,
    name: 'Refrigerante',
    description: 'Lata - 350ml',
    imageUrl: 'https://emsters.com.br/pub/wp-content/uploads/2023/02/download.jpg',
    price: 700,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 7,
    name: 'Suco Natural ',
    description: '500ml',
    imageUrl:
      'https://s2-ge.glbimg.com/64QeEkjeZkr4WG0cQY0gFzTCAC4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/3/3/92w4EYREyRINApxl77eQ/suco-frutas.jpg',
    price: 700,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 8,
    name: 'Refrigerante ',
    description: '2 litros',
    imageUrl:
      'https://loja.barracadoze.com.br/wp-content/uploads/sites/5/2020/10/refrigerante-de-2-litros-min-min.png',
    price: 1200,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 9,
    name: 'Água',
    description: 'Sem gás - 500ml',
    imageUrl:
      'https://static23.minhalojanouol.com.br/clgatacado/produto/20201016113738_8310991690_D.jpg',
    price: 500,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 10,
    name: 'Refrigerante',
    description: 'Lata - 350ml',
    imageUrl: 'https://emsters.com.br/pub/wp-content/uploads/2023/02/download.jpg',
    price: 700,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 11,
    name: 'Suco Natural ',
    description: '500ml',
    imageUrl:
      'https://s2-ge.glbimg.com/64QeEkjeZkr4WG0cQY0gFzTCAC4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/3/3/92w4EYREyRINApxl77eQ/suco-frutas.jpg',
    price: 700,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
  {
    id: 12,
    name: 'Refrigerante ',
    description: '2 litros',
    imageUrl:
      'https://loja.barracadoze.com.br/wp-content/uploads/sites/5/2020/10/refrigerante-de-2-litros-min-min.png',
    price: 1200,
    createdAt: '2023-09-20T12:00:00Z',
    updatedAt: '2023-09-20T14:30:00Z',
  },
];

const mockData: EstablishmentMenu[] = [
  {
    ...mockEstablishment_1,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_2,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_3,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_1,
    id: 4,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_2,
    id: 5,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_3,
    id: 6,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_1,
    id: 7,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_2,
    id: 8,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_3,
    id: 9,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_1,
    id: 10,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_2,
    id: 11,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
  {
    ...mockEstablishment_3,
    id: 12,
    dishes: mockDishes,
    drinks: mockDrinks,
  },
];

export default mockData;
