import { getRepository } from "typeorm";
import OrderDetails from "../models/OrderDetails";

interface RequestDTO {
  id: string;
  product_id: string;
  amount: number;
  total: number;
}

export default class UpdateOrderDetailsService {
  public async execute({
    id,
    product_id,
    amount,
    total
  }: RequestDTO): Promise<void> {
    const orderDetailsRepository = getRepository(OrderDetails);

    await orderDetailsRepository.update({ id }, {
      product_id,
      amount,
      total
    });
  }
}
