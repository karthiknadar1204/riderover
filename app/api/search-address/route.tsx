import { NextResponse } from "next/server";

const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"

export async function GET(request:any){

    const {searchParams}=new URL(request.url);

    const searchText=searchParams.get('q');


    const res=await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=8&session_token=044b78d9-74da-4fb1-88dd-93ee1c001585&country=IN'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })
    const searchResult=await res.json();
    return NextResponse.json(searchResult)

}


