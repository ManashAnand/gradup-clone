// There is nothing for now will think about it later 















// var category = null; //the optional filter for category
// var pageSize = 20;
// var pageNumber = 0;

// import {connectToDB} from '@utils/database';
// import Jobs from '@models/job';
// import mongoose from 'mongoose';

// export const GET = async(req,{params}) => {
//     // pageNumber=params.page;
//     console.log(params, "params");
//     try{
//         await connectToDB();
//         console.log(1);
//         const userDetails=await Jobs.aggregate
//         ([
//             {
//                 $match:
//                 {
//                     $or:
//                     [
//                         { null:category },
//                         { "Category":category }
//                     ]
//                 }
//             },
//             {
//                 $skip: pageSize * pageNumber
//             },
//             {
//                 $limit:pageSize
//             }
//         ])
//         return new Response(JSON.stringify(userDetails),{status:201})
//     }
//     catch(error){
//         console.log(error);
//         return new Response("Failed to get User Details",{
//             status:500
//         })
//     }

// }