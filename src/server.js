import app from "./app.js";
import { port, connectDB } from "./config.js";

connectDB();

app.listen(port(), () => {
    console.log(`Server running on port ${port()}`);
});