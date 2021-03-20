import { Group } from "../domain/Groups";
import GroupMode from "../utils/db/models/Group";

export class GroupService {
  async create(group: Group): Promise<void> {
    const groupDB = new GroupMode(group);
    await groupDB.save();
  }

  async get(): Promise<Group[]> {
    const groupsDB = await GroupMode.find();
    const dat = groupsDB.map((sss) => new Group(sss));
    return dat;
  }
}
