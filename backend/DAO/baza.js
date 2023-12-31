const { MongoClient } = require('mongodb');

class Baza {
    constructor() {
        this.url = process.env.MONGODB;
        this.client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async poveziSeNaBazu() {
        try {
            await this.client.connect();

            const db = this.client.db();

            this.database = db;

            return this;
        } catch (error) {
            console.error('Greška pri povezivanju s bazom podataka', error);
        }
    }
    
    async prekiniVezu() {
        try {
            await this.client.close();
        } catch (error) {
            console.error('Greška pri prekidanju veze s bazom podataka', error);
        }
    }
}

module.exports = Baza;
