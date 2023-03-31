import { CoffeeDTO } from '@dtos/Coffee';
import AmericanoSvg from '@assets/coffees/americano.svg';
import ArabeSvg from '@assets/coffees/arabe.svg';
import CafeComLeiteSvg from '@assets/coffees/cafe-com-leite.svg';
import CafeGeladoSvg from '@assets/coffees/cafe-gelado.svg';
import ChocolateQuenteSvg from '@assets/coffees/chocolate-quente.svg';
import CubanoSvg from '@assets/coffees/cubano.svg';
import ExpressoCremosoSvg from '@assets/coffees/expresso-cremoso.svg';
import ExpressoSvg from '@assets/coffees/expresso.svg';
import HavaianoSvg from '@assets/coffees/havaiano.svg';
import LatteSvg from '@assets/coffees/latte.svg';
import MacchiatoSvg from '@assets/coffees/macchiato.svg';
import MochaccinoSvg from '@assets/coffees/mochaccino.svg';
import IrlandesSvg from '@assets/coffees/irlandes.svg';
import CapuccinoSvg from '@assets/coffees/capuccino.svg';

export const coffeeList: CoffeeDTO[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: ExpressoSvg,
    type: ['tradicional'],
    price: 9.9,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: AmericanoSvg,
    type: ['tradicional'],
    price: 9.9,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: ExpressoCremosoSvg,
    type: ['tradicional'],
    price: 9.9,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: CafeGeladoSvg,
    type: ['tradicional', 'gelado'],
    price: 9.9,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: CafeComLeiteSvg,
    type: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: LatteSvg,
    type: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: CapuccinoSvg,
    type: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: MacchiatoSvg,
    type: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: MochaccinoSvg,
    type: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: ChocolateQuenteSvg,
    type: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: CubanoSvg,
    type: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: HavaianoSvg,
    type: ['especial'],
    price: 9.9,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: ArabeSvg,
    type: ['especial'],
    price: 9.9,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: IrlandesSvg,
    type: ['especial', 'alcoólico'],
    price: 9.9,
  },
];
