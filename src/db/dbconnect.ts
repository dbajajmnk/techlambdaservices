import mongoose from 'mongoose';

const dbConnect = async (url: string) => {
    try {
        await mongoose.connect(url);
        console.log('Db Connected Successfully');
    } catch (err) {
        console.log(err);
    }
};
export default dbConnect;
