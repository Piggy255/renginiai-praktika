import express from 'express';
import cors from 'cors';
import users from './routes/users.js';
import unapprovedEvents from './routes/unapprovedEvents.js'

const PORT = process.env.PORT || 3001;
const app = express()

const corsOptions = {
    origin: "http://localhost"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/users", users);
app.use("/unapprovedEvents", unapprovedEvents);

//start the express server
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})