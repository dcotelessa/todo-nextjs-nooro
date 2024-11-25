This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This is for a ToDo test application that uses a PostgreSQL database.

## Getting Started

### 1. Database Server Setup

First, start the database server and follow the instructions in the [server/README.md](server/README.md) file. This will setup a local database in a Docker container. This will also setup a express server that will serve the API endpoints on port 3001.

### 2. Frontend Setup

```bash
# Navigate to client directory
cd client

#create .env.local file and add the following line
NEXT_PUBLIC_API_URL=http://localhost:3001

# Install dependencies
npm install

# Start the server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Troubleshooting

CORS should be enabled on the server.
