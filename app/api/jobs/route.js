var category = null; //the optional filter for category
var pageSize = 6;
var pageNumber = 0;

import {connectToDB} from '@utils/database';
import Job from '@models/job';
import mongoose from 'mongoose';

export const GET = async(req,{params}) => {
    try{
        const search=new URL(req.url).search;
        const urlParams=new URLSearchParams(search);
        pageNumber = urlParams.get('page');
        let intern = urlParams.get('intern') === "true" ? true : false;
        let startup = urlParams.get('startup') === "true" ? true : false;
        await connectToDB();
        // for getting only the array of objects we can use . find method but we will use aggregate so that we can do more operation
        // const a=await Job.find();
        // console.log("aaa ",a);
        // category=Microsoft;
        const userDetails=await Job.aggregate
        ([
            {
                $match:
                {
                    "isIntern":intern,
                    "isStartUp":startup
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
        return new Response(error,{
            status:500
        })
    }

}
