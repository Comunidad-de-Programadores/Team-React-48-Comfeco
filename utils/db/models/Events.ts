import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const EventsModel =
  mongoose.models.Events || mongoose.model("Events", EventsSchema);

export default EventsModel;
