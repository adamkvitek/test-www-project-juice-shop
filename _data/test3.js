import Knex from "knex";

// ok: node-knex-empty-password-connection-string
await Knex({
  client: "mysql",
  connection: {
    host: SOLA_DB_HOST,
    port: SOLA_DB_PORT,
    user: SOLA_DB_USER,
    password: 'SOLA_DB_PWD',
  },
})

let foo = {
  client: "mysql",
  connection: {
    host: SOLA_DB_HOST,
    port: SOLA_DB_PORT,
    user: SOLA_DB_USER,
    password: 'SOLA_DB_PWD',
  },
}
// ok: node-knex-empty-password-connection-string
await Knex(foo)

// ok: node-knex-empty-password-connection-string
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});

// ok: node-knex-empty-password-connection-string
const pg = require('knex')({
  client: 'pg',
  connection: "postgresql://dbuser:secretpassword@database.server.com:3211/mydb",
  searchPath: ['knex', 'public'],
});

// ruleid: node-knex-empty-password-connection-string
const pg = require('knex')({
  client: 'pg',
  connection: "postgresql://dbuser@database.server.com:3211/mydb",
  searchPath: ['knex', 'public'],
});


// ruleid: node-knex-empty-password-connection-string
const knex = require('knex')({
  client: 'postgres',
  connection: async () => {
    const { 
        url
    } = await someCallToGetTheUrl();

    return "postgresql://dbuser@database.server.com:3211/mydb";
    
  }
});

// ok: node-knex-empty-password-connection-string
const knex = require('knex')({
  client: 'postgres',
  connection: async () => {
    const { 
      token, 
      tokenExpiration 
    } = await someCallToGetTheToken();

    return {
      host : 'your_host',
      port : 3306,
      user : 'your_database_user',
      password : "token",
      database : 'myapp_test',
      expirationChecker: () => {
        return tokenExpiration <= Date.now();
      }
    };
  }
});

// ok: node-knex-empty-password-connection-string
await Knex({
  client: "mysql",
  connection: {
    host: SOLA_DB_HOST,
    port: SOLA_DB_PORT,
    user: SOLA_DB_USER,
    password: A,
  },
})

let foo1 = {
  client: "mysql",
  connection: {
    host: SOLA_DB_HOST,
    port: SOLA_DB_PORT,
    user: SOLA_DB_USER,
    password: foo22,
  },
}
// ok: node-knex-empty-password-connection-string
await Knex(foo1)

// ok: node-knex-empty-password-connection-string
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'your_database_user',
    password : process.env.DB_PWD,
    database : 'myapp_test'
  }
});

// ok: node-knex-empty-password-connection-string
const pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
});

// ok: node-knex-empty-password-connection-string
const pg = require('knex')({
  client: 'pg',
  connection: "postgresql://dbuser:" + process.env.DB_PWD + "@database.server.com:3211/mydb",
  searchPath: ['knex', 'public'],
});

// ok: node-knex-empty-password-connection-string
const knex = require('knex')({
  client: 'postgres',
  connection: async () => {
    const { 
      token, 
      tokenExpiration 
    } = await someCallToGetTheToken();

    return {
      host : 'your_host',
      port : 3306,
      user : 'your_database_user',
      password : token,
      database : 'myapp_test',
      expirationChecker: () => {
        return tokenExpiration <= Date.now();
      }
    };
  }
});

// ok: node-knex-empty-password-connection-string
const knex = Knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '',
    database: 'travis_ci_test',
  },
});

// ok: node-knex-empty-password-connection-string
await Knex({
  client: "mysql",
  connection: {
    host: SOLA_DB_HOST,
    port: SOLA_DB_PORT,
    user: SOLA_DB_USER,
    password: '',
  },
})


// ok: node-knex-empty-password-connection-string
const knex = require('knex')({
  client: 'postgres',
  connection: async () => {
    const { 
      token, 
      tokenExpiration 
    } = await someCallToGetTheToken();

    return {
      host : 'your_host',
      port : 3306,
      user : 'your_database_user',
      password : '',
      database : 'myapp_test',
      expirationChecker: () => {
        return tokenExpiration <= Date.now();
      }
    };
  }
});
