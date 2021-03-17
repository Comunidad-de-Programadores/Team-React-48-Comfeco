import { Badges } from "../domain/Badges";
import BadgesModel from "../utils/db/models/Badges";

export class BadgesService {
  async create(badge: Badges): Promise<void> {
    const badgeDB = new BadgesModel(badge);
    await badgeDB.save();
  }

  async get(): Promise<Badges[]> {
    const badgesDB = await BadgesModel.find();
    const badges = badgesDB.map((community) => new Badges(community));
    return badges;
  }
}
