const express = require('express');
var cors = require("cors");
const app = express();
const authRoutes = require('./routes/auth');
const protectedRoute = require('./routes/protectedRoute');
app.use(express.json());  
app.use(cors({
   origin: 'http://localhost:3000'
 }));
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

