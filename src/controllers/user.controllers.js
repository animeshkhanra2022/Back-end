import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

const login = asyncHandler( async (req, res) => {
    res.status(201).json({
        message: "Login is completed"
    })
})

export { 
    registerUser,
    login,
    
};