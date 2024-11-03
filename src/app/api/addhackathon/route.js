export async function POST(req, res) {
try {
    const newHackathon = req.body;
    console.log('newHackathon');
    console.log(newHackathon);

}  catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Error " });
  }
}