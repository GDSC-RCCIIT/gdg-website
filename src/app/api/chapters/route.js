export async function GET(req) {
    try {
        const response = await fetch('http://localhost:5000/chapters');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200, // HTTP 200 OK
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(error.message, {
            status: 500, // HTTP 500 Internal Server Error
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
