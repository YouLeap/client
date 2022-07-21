import { CheckSelect, SelectSubset } from '../../../types/common';
import {
  Furniture,
  FurnitureFindManyArgs,
  FurnitureFindUniqueArgs,
  FurnitureGetPayload,
} from '../../../types/furniture';

export class FurnitureDelegate {

  
  findUnique<T extends FurnitureFindUniqueArgs>(
    args?: SelectSubset<T, FurnitureFindUniqueArgs>,
  ): CheckSelect<T, Promise<Furniture>, Promise<FurnitureGetPayload<T>>> {
    //TODO: API TO GET UNIQUE
    return {} as any;
  }


  findFirst(args: string): void {}


  findMany<T extends FurnitureFindManyArgs>(
    args?: SelectSubset<T, FurnitureFindManyArgs>,
  ): CheckSelect<T, Promise<Array<Furniture>>, Promise<Array<FurnitureGetPayload<T>>>> {
    return {} as any;
  }
  create(where: string): void {}
  createMany(where: string): void {}
  delete(where: string): void {}
  update(where: string): void {}
  deleteMany(where: string): void {}
  updateMany(where: string): void {}
}
