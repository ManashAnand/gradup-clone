var category = null; //the optional filter for category
var pageSize = 20;
var pageNumber = 0;

import {connectToDB} from '@utils/database';
import User from '@models/user';
import mongoose from 'mongoose';

export const GET = async(req,{params}) => {
    try{
        await connectToDB();
        const userDetails=await User.aggregate
        ([
            {
                $match:
                {
                    $or:
                    [
                        { null:category },
                        { "Category":category }
                    ]
                }
            },
            {
                $skip: pageSize * pageNumber
            },
            {
                $limit:pageSize
            }
        ])
        return new Response(JSON.stringify(userDetails),{status:201})
    }
    catch(error){
        console.log(error);
        return new Response("Failed to get User Details",{
            status:500
        })
    }

}