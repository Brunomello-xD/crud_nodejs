import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
}

export class UpdateCategoryService{
  async execute({id, name, description} : CategoryUpdateRequest) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if(!category) {
      return new Error("Category does not exists!");
    }

    /*
    * Validando se o dado não veio vazio antes de substituir, caso 
    * Caso estiver vazio ele irá manter o que já está dentro do BD
    */
    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await repo.save(category);

    return category;
  }
}