// name string
//   description string
//   createdAt Date
//   updatedAt Date
//   videos ObjectId[] videos
//   owner ObjectId users

import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({});

export const Playlist = mongoose.model("Playlist", Schema);
