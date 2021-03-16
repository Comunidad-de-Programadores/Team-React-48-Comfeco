import { WorkShop } from "../domain/WorkShop";
import WorkShopModel from "../utils/db/models/WorkShop";

export class WorkShopService {
 async create(workshop: WorkShop) {
   const workshopDB = new WorkShopModel(workshop.toPersistence());
   await workshopDB.save();
 };

 async get() : Promise<WorkShop[]> {
   const workshops = await WorkShopModel.find();
   const workshopsDomain = workshops.map(workshop => new WorkShop(workshop));
   return workshopsDomain;
 }
}