import * as dotenv from "dotenv";
dotenv.config();
import logger from "./utils/logger";
import sequelize from "./config/db.config";
import app from "./utils/server";

const PORT = process.env.PORT || 4000;

// START SERVER
app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`);
  try {
    sequelize.authenticate();
    logger.info("Database connected");
  } catch (err: any) {
    logger.error(err.message);
    process.exit(1);
  }
});
