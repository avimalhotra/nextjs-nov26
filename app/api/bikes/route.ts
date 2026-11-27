import { NextResponse } from "next/server";


export async function GET(request){

     const bikes = [
        { id: 1, name: "Bullet" },
        { id: 2, name: "Pulser" },
        { id: 3, name: "Passion" }
    ];

     return NextResponse.json(bikes);
}