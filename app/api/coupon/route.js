import {connectToDB} from '@utils/database';
import { NextResponse } from 'next/server'

export const GET = async (request) => {
    try{
        const {coupon} = await request.json()
        await connectToDB()
        if(coupon == "Gradup"){
            return NextResponse.json({message:"Coupon applied"},{status:200})
        }
        else
        return NextResponse.json({message:"Invalid coupon"},{status:400})

    }catch(error){
            console.log(error)
    }
}