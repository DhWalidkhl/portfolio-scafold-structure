
import {PORT} from "./src/app/config/config.js";
import app from "./app.js";


// Run Your Express Back End Project
app.listen(PORT, () => {
	console.log(`App Run @${PORT}`);
});
