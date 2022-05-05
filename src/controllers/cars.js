import CarsModel from '../models/cars.js';


// Get all cars from the database
export const getCars = async (req, res) => {

    try {
        const cars = await CarsModel.find();

        if (cars.length < 1) {
            res.status(404).send('No cars found');
        }
        let carsData = {'Data' : cars};
        res.send(carsData);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

// Get a single car given an id
export const getCarById = async (req, res) => {

    try {
        const car = await CarsModel.findById(req.params.id);

        if (!car) {
            res.status(404).send('Car not found');
        }
        let carData = {'Data' : car};
        res.send(carData);
    }
    catch (err) {
        res.status(500).send(err);
    }
}


// Group cars based on the type parameter in the query string
export const getCarsByType = async (req, res) => {
    try {
        const cars = await CarsModel.find({ type: req.query.type });
        if (cars.length < 1) {
            res.status(404).send('No cars found');
        }
        res.send(cars);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
