# Facts API

A high-performance REST API for interesting facts across multiple domains, built with Bun.

## 📚 Overview

This API provides access to a curated collection of 200 fascinating facts across six categories:

- 🌌 Astronomy
- 🔬 Biology
- ⚛️ Physics
- 🦁 Animals
- 📜 History
- 💻 Technology

Each fact includes detailed metadata such as verification status, sources, discovery year, and interest rating.

## 🚀 Features

- **Fast Performance**: Built on Bun for lightning-fast response times
- **RESTful Endpoints**: Clean API design following REST principles
- **CORS Enabled**: Ready for cross-origin requests from browsers
- **Detailed Logging**: Request tracking and error reporting
- **Comprehensive Testing**: Test coverage for all endpoints

## 🏃‍♂️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/asbdaryaee/facts-api.git
   cd facts-api
   ```

2. Install dependencies

   ```bash
   bun install
   ```

3. Run the server
   ```bash
   bun start
   ```

The server will be available at `http://localhost:3000` by default.

## ⚙️ Configuration

The API can be configured using environment variables:

| Variable | Description              | Default |
| -------- | ------------------------ | ------- |
| `PORT`   | Server port              | 3000    |
| `LOGGER` | Sets logger is on or off | blank   |

Create a `.env` file in the root directory to set these values.

## 🧪 Testing

Run the test suite:

```bash
bun test
```

## 🔄 Development Workflow

1. Start the development server with auto-reload:

   ```bash
   bun dev
   ```

2. Run tests:

   ```bash
   bun test
   ```

3. Build for production:
   ```bash
   bun run build
   ```

## 📝 Data Attribution

All facts in this API were curated and provided by Claude AI (Anthropic Claude 3.7 Sonnet).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Made with ❤️ and powered by [Bun](https://bun.sh/).
