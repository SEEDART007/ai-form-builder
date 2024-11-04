import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Ai_owner:TrlhN0eOUoq8@ep-rough-moon-a5s9kq63.us-east-2.aws.neon.tech/Ai?sslmode=require',
  },
});
