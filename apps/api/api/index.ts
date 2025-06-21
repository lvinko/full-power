import { createServer } from "../src/server";

// Create Express app
const app = createServer();

// Export a module for Vercel serverless
export default function handler(req: any, res: any) {
  return app(req, res);
} 