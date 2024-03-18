# Welcome

A project to work with [Express.JS](https://expressjs.com), [TypeScript](https://www.typescriptlang.org), and [Vercel](https://vercel.com/).

## Getting started

As long as you have [Node.JS](https://nodejs.org/) installed on your development environment, you can get this project up and running by running the following:

```sh
# Check to make sure Node.js and npm is installed
% node -v
v20.11.1

% npm -v
10.2.4

# Install dependencies
% npm install
```

Once you have the project dependencies installed, you can start the application by running:

```sh
# Run the development script
% npm run dev

> expressjs-vercel-starter@0.0.0 dev
> nodemon ./src/server.ts

[nodemon] 3.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node ./src/server.ts`
Server running on: http://localhost:3000

```

In the above example, you can open your browser to [http://localhost:3000](http://localhost:3000) and view the default content from the server 🤓

## Folder Structure

```sh
.
├── api
│   └── index.ts
├── src
│   ├── controllers
│   │   ├── ping.ts
│   ├── routes
│   │   ├── ping.ts
│   └── server.ts
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── vercel.json

```
