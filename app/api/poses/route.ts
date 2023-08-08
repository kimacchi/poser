import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function GET(request: Request) {
    return new Response("this is get request")
}

export async function POST(request: Request) {
    
}