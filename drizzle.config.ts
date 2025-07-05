import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({

    schema: './configs/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://code%20to%20frame_owner:npg_w5SQjlAU3DzG@ep-orange-paper-a8ihy6ui-pooler.eastus2.azure.neon.tech/code%20to%20frame?sslmode=require',
    },
});
