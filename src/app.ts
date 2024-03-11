import Elysia from "elysia";

const port = Bun.env["PORT"] || 3000
const app = new Elysia()
    .get("/", () => "Hello world!")
    .listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
