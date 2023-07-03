import OTP from '@models/otp';
import { User } from '@models/user';
import { connectToDB } from '@utils/database';

function getOTP(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const characters1 = '0123456789';
  const charactersLength = characters.length;
  const charactersLength1 = characters1.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    result += characters1.charAt(Math.floor(Math.random() * charactersLength1));
    counter += 2;
  }
  return result;
}

function sendSMS(apikey, numbers, sender, message) {
  var data = new URLSearchParams();
  data.append('apikey', apikey);
  data.append('numbers', numbers);
  data.append('message', message);
  data.append('sender', sender);

  fetch('https://api.textlocal.in/send/?', {
    method: 'POST',
   body: data
  })
  .then(function(response) {
    if (response.ok) {
      console.log("MESSAGE SENT");
      return response.text();
    } else {
      throw new Error('An error occurred');
    }
  })
  .then(function(responseText) {
    console.log("This is the Response Text",responseText);
  })
  .catch(function(error) {
    console.error("This is the error.",error);
  });
}

  export const POST = async(request, { params }) => {
    const data = await request.json();
    const userPhone = data.phone 
    try {
        await connectToDB();
        if (params.id != "undefined") {
            const currentUser = await User.findById(params.id);
            if(!currentUser)return new Response("User is Not Registered on Portal.", { status: 500 })
            const prevOTP = await OTP.findById(params.id);
            var currOTP = getOTP(6);
            if(!prevOTP){
                const d = new Date();
                const otpcreated = await OTP.create({
                    _id:params.id,
                    createdAt: d.toISOString(),
                    otp:currOTP,
                })
            }
            else {
              currOTP = prevOTP.otp
              return new Response("OTP Already Sent. Try again after 15 Minutes." + currOTP, { status: 201 })
            }
            // sendSMS(process.env.SMS_VERIFY, userPhone,'600010', "Hi there, thank you for sending your first test message from Textlocal. See how you can send effective SMS campaigns here: https://tx.gl/r/2nGVj/");
            return new Response("This is the OTP " + currOTP, { status: 201 })
        }
        return new Response("Params not Defined in OTP Verification", { status: 500 })
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