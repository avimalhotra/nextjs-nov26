import { NextResponse } from "next/server";

export async function POST(request){
     
     try{
          const body= await request.json();
          return NextResponse.json({"message":"login done"},{status:200});
     }
     catch(err){
          return NextResponse.json({error:"login failed"},{status:400});
     }

}