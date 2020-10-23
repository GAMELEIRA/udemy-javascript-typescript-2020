export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host},  ${this.user}, ${this.password} `);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      return Database.database;
    }
    return (Database.database = new Database(host, user, password));
  }
}

const databaseUm = Database.getDatabase('localhost', 'root', '123456');

databaseUm.connect();

const databaseDois = Database.getDatabase('localhost', 'root', '123456');

databaseDois.connect();
