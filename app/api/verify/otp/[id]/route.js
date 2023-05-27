import OTP from '@models/otp';
import { User } from '@models/user';
import { connectToDB } from '@utils/database';
function sendSMS(apikey, numbers, sender, message) {
    var data = new URLSearchParams();
    data.append('apikey', apikey);
    data.append('numbers', numbers);
    data.append('message', message);
    data.append('sender', sender);
    
    var request = new XMLHttpRequest();
    request.open('POST', 'https://api.textlocal.in/send/?test=true', true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText);
      } else {
        console.error('An error occurred');
      }
    };
    
    request.onerror = function() {
      console.error('Request failed');
    };
    
    request.send(data);
  }
  
//   sendSMS(process.env.SMS_API, ', 'Jims Autos', 'This is your message');

  export const POST = async(req, { params }) => {
    try {
        await connectToDB();
        if (params.id != "undefined") {
            const currentUser = await User.findById(params.id);
            const prevOTP = await OTP.findById(params.id);
            const d = new Date();
            if(!prevOTP){
              await OTP.createIndexes({"createdAt" : 1},{expireAfterSeconds:45},{ background: true })
                const otpcreated = await OTP.create({
                    id:params.id,
                    createdAt: d.toISOString(),
                    otp:currentUser.name,
                })
                return new Response("OTP Verified" + otpcreated.toString(), { status: 201 })
            }
            
            return new Response("OTP Verified", { status: 201 })
        }
        return new Response("Error", { status: 500 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to get User Details in HR Verification" + error.toString() +params.id.toString(), {
            status: 500
        })
    }

}

export const GET = async(req, { params }) => {
  try {
      await connectToDB();
      if (params.id != "undefined") {
          const prevOTP = await OTP.find();
          const d = new Date();
          if(!prevOTP){
              return new Response("OTP Verified" + prevOTP.toString(), { status: 201 })
          }
          return new Response("OTP Verified" + prevOTP.toString(), { status: 201 })
      }
      return new Response("Error", { status: 500 })
  } catch (error) {
      console.log(error);
      return new Response("Failed to get User Details in HR Verification" + error.toString() +params.id.toString(), {
          status: 500
      })
  }

}
  