export const config = {
    port: parseInt(process.env.PORT || "3000"),
    environment: process.env.NODE_ENV || "development",
    apiVersion: "v1",
    corsOrigins: process.env.CORS_ORIGINS?.split(",") || ["*"]
};

