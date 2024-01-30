/**
 * @desc  Seed Data for Development MongoDB Database, contains: 
 *  - initial user account for database access
 *  - Set of 'UpdateDate' data for frontend testing
 */

db = new Mongo().getDB('app');

db.createUser({
    user: "app-admin",
    pwd: "app-admin",
    roles: [{role: 'readWrite', db: 'app'}],
});
