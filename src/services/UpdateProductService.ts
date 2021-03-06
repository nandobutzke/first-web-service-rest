import { getRepository } from "typeorm";
import Product from "../models/Product";

interface RequestDTO {
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
}

export default class UpdateProductService {
  public async execute({
    id,
    name,
    description,
    stock,
    price,
  }: RequestDTO): Promise<void> {
    const productsRepository = getRepository(Product);

    await productsRepository.update({ id }, {
      name,
      description,
      stock,
      price,
    });
  }
}
