import Facilities from "../models/Facilities.js"

export const createFacilities = async (req, res, next)=>{
    const newFacility = new Facilities(req.body)
    try {
        const saveFacility = await newFacility.save()
        res.status(200).json(saveFacility)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateFacility = async (req, res, next) =>{
    try {
        const updateFacility = await Facilities.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(updateFacility)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getFacilities = async (req, res, next) => {
    try {
        const facilities = await Facilities.find()
        res.status(200).json(facilities)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getFacility = async (req, res, next) => {
    try {
        const facility = await Facilities.findById(req.params.id)
        res.status(200).json(facility)
    } catch (error) {
        res.status(500).json(error)
    }
}