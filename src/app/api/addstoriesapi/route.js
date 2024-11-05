export async function POST(req, res) {
    try {
        const Data = req.body;
        console.log('newHackathon');
        console.log(Data);
    
    }  catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error " });
      }
    }