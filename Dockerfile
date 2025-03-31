# Build stage
FROM oven/bun:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lock* ./

# Install dependencies with frozen lockfile
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Production stage
FROM oven/bun:alpine AS production

# Set working directory
WORKDIR /app

# Set NODE_ENV
ENV NODE_ENV=production
ENV BUN_ENV=production
ENV LOGGER=TRUE

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/server.ts ./
COPY --from=builder /app/tsconfig.json ./

# Expose application port
EXPOSE 3000

# Health check (adjust the path if you have a different health endpoint)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD bun --eval "fetch('http://localhost:3000/health').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

# Run the application directly with Bun
CMD ["bun", "run", "server.ts"]
