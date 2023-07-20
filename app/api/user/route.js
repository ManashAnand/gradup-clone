import {connectToDB} from '@utils/database';
import User from '@models/user';



/// doing nothing for now     /////////////////////
export const GET = async(req,res) => {
    try{
        await connectToDB();
        const userDetails = User.findOne()
        return new Response(JSON.stringify(userDetails),{status:201})
    }
    catch(error){
        return new Response("Failed to get prompt",{
            status:500
        })
    }

}