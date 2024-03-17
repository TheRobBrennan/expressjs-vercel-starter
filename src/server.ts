import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
// import helmet from 'helmet';

// import TTS from './routes/tts';
// import File from './routes/file';
// import Files from './routes/files';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(morgan('dev'));
server.use(cors());
// server.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
//         styleSrc: ["'self'", 'fonts.googleapis.com'],
//       },
//     },
//   })
// );

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '../public')));

server.get('/api/v1/', (_: Request, res: Response) => {
  // const formId = process.env.FILLOUT_FORM_ID
  // res.redirect(`/${formId}/filteredResponses`);
  res.send('Hello World');
});

// server.use('/api/v1/files', Files);
// server.use('/api/v1/file', File);
// server.use('/api/v1/tts', TTS);

server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

export default server;
