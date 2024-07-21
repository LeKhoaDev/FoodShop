import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://lephamanhkhoa201203:Lekhoa2040@cluster0.eee2wuw.mongodb.net/project_food').then(() => console.log("DB connected"));
}