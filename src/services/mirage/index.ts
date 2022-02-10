// mirage configuration
import { createServer, Factory, Model } from "miragejs";
// lib that create fake data
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    // setting up server
    // what data I will storage
    models: {
      // sometime the user will not contain name or email, that is why we passed partial
      user: Model.extend<Partial<User>>({}),
    },

    // generate a lot of data to seed
    factories: {
        user: Factory.extend({
            // Using the I parametor to generate different users
            name(i: number){
                return `User ${1 + i}`
            },
            email(){
                // generating random email
                return faker.internet.email().toLowerCase();
            },
            createdAt(){
                return faker.date.recent(10)
            }
        })
    },

    // creating data when the mirage server is initialized
    seeds(server){
        // create a list of 200 user using factories
        server.createList('user', 200)
    },

    routes() {
      // putting all the routes on after /api
      this.namespace = "api";

      //every request will have a delay of 750 milliseconds
      this.timing = 750; //this is important to test the loades on the user experience
      this.get("/users");
      this.post("/users");

      // changed the namespace to a empty string to not conflit the api router existing on next.js pages
      this.namespace = "";
      this.passthrough() //all th request sent to api pass through the mirage and if don't exist the request will pass to the next api route
    },
  });

  return server;
}
