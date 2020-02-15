import mongoose from 'mongoose';
let Schema = mongoose.Schema, objectID = mongoose.Schema.Types.ObjectId;

let OutlookEvent = new Schema({
    name: String,
    description: String,
    time: {
        start: Number,
        end: Number
    }
});

export default mongoose.model('outlook_event', OutlookEvent);