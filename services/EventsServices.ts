import { Events } from "../domain/Events";
import EventsModel from "../utils/db/models/Events";

export class EventsServices {
  async create(event: Events): Promise<void> {
    const eventDB = new EventsModel(event);
    await eventDB.save();
  }

  async get(): Promise<Events[]> {
    const eventDB = await EventsModel.find();
    const events = eventDB.map((event) => new Events(event));
    return events;
  }
}
