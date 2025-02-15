import {MongoClient} from "mongodb";

const URI = "mongodb+srv://fernandovieirasantos10:fernando@cluster0.7gdta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyAula")
