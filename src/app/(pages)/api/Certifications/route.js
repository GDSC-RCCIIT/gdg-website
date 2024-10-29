import data from "./data";

export async function GET(req) {
    try {
        return new Response(JSON.stringify(data), {
            status: 200, 
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(error.message, {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
