
import mongoose from 'mongoose';

/* Schema for the cars collection */
const CarsSchema = new mongoose.Schema({
    FIELD1: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
}
);

const CarModel = mongoose.model('cars', CarsSchema);

export default CarModel;