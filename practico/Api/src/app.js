import  express  from "express";
import morgan from "morgan";

//Routes
import notasRoutes  from "./routes/notas.routes"

const app=express();

// configuraciones

app.set("port",4000 )

//middlewares

app.use(morgan("dev"))// me permite ver en la consola detalle de las peticiones que estamos haciendo
app.use(express.json());

//Routes
app.use("/api/notas",notasRoutes)

export default app;