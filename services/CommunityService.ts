import { Community } from "../domain/Community";
import CommunityModel from "../utils/db/models/Community";

export class CommunityService {
  async create(community: Community) : Promise<void> {
    const communityDB = new CommunityModel(community);
    await communityDB.save();
  }

  async get() : Promise<Community[]> {
    const communitiesDB = await CommunityModel.find();
    const communities = communitiesDB.map(community => new Community(community));
    return communities; 
  }
}