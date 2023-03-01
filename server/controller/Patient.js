const Patient = require('../models/Patient.js')
const createNewPatient = async (req, res, next) => {
    const newPatient = new Patient(req.body);
    try {
        const savedPatient = await newPatient.save();
        res.status(200).json(savedPatient);
        // console.log(req.body.name);
    } catch (err) {
        // res.status(500).json(err);
        next(err);
    }
};
const updatePatient = async (req, res,next) => {
    try {
        
        const updatedPatient = await Patient.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        console.log(updatedPatient);
        res.status(200).json(updatedPatient);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

const deletePatient = async (req,res,next)=>{
    try{
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json("Patient deleted");
    }catch(err){
        res.status(500).json(err);
    }
};

const getPatient = async (req, res, next) => {
    try {
      const patient = await Patient.findById(req.params.id);
      res.status(200).json(patient);
    } catch (err) {
      next(err);
    }
  };
const getPatients = async (req, res, next) => {
    try {
      const patients = await Patient.find();
      res.status(200).json(patients);
    } catch (err) {
      next(err);
    }
  };

module.exports = {createNewPatient,updatePatient,deletePatient,getPatient,getPatients};

