# Easy Node Authentication together with fingerprintjs2
## Starting Point
Code taken from scotch.io tutorial series: Complete Guide to Node Authentication
* http://scotch.io/tutorials/easy-node-authentication-setup-and-local

## Change Log
1. Using Passport to authenticate users locally.
2. Removed twitter, google and facebook auth.
3. Add Fingerprintjs2

## Start and Stop using docker (without traefik)
```
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up -d 
docker-compose -f docker-compose.yml logs -f
docker-compose -f docker-compose.yml down
```

## Start and Stop using docker with traefik
```
docker-compose -f docker-compose-traefik.yml build 
docker network create fingerprint
docker-compose -f docker-compose-traefik.yml up -d 
docker-compose -f docker-compose-traefik.yml logs -f 
```

## Build on your Own - Instructions
If you would like to download the code and try it for yourself:

1. Clone the repo: `git clone git@github.com:hagaik/easy-node-authentication`
2. Install packages: `npm install`
3. Change out the database configuration in config/database.js
4. Launch: `node server.js`
5. Visit in your browser at: `http://localhost:8080`


