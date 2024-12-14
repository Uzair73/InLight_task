# Instagram Task

This project is a simple Instagram clone built using React and Vite for the frontend, and Node.js with Express for the backend. It includes user authentication, Instagram OAuth, and basic post fetching functionality.

## Frontend

### Features

- React with Vite for fast development
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- SweetAlert2 for alerts
- React Icons for icons
- React Loader Spinner for loading indicators

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Frontend/instagram-task   ```

2. **Install dependencies:**
   ```bash
   npm install   ```

3. **Run the development server:**
   ```bash
   npm run dev   ```

4. **Build for production:**
   ```bash
   npm run build   ```

5. **Preview the production build:**
   ```bash
   npm run preview   ```

## Backend

### Features

- Express.js for server-side logic
- PostgreSQL for database
- Passport.js for Instagram OAuth
- JWT for authentication
- Bcrypt for password hashing

### Setup Instructions

1. **Navigate to the backend directory:**
   ```bash
   cd Backend   ```

2. **Install dependencies:**
   ```bash
   npm install   ```

3. **Set up the database:**

   - Ensure PostgreSQL is installed and running.
   - Create a database and update the `.env` file with your database credentials.
   - Run the SQL schema to set up the tables:
     ```bash
     psql -U <username> -d <database> -f Schema.sql     ```

4. **Configure environment variables:**

   - Create a `.env` file in the `Backend` directory with the following variables:
     ```plaintext
     DB_USER=<your_db_user>
     DB_HOST=<your_db_host>
     DB_NAME=<your_db_name>
     DB_PASS=<your_db_password>
     DB_PORT=<your_db_port>
     SECRET_TOKEN=<your_jwt_secret>
     INSTAGRAM_CLIENT_ID=<your_instagram_client_id>
     INSTAGRAM_CLIENT_SECRET=<your_instagram_client_secret>
     INSTAGRAM_REDIRECT_URI=<your_instagram_redirect_uri>     ```

5. **Run the server:**
   ```bash
   node index.js   ```

6. **Deploying to Vercel:**

   - Ensure the `vercel.json` file is correctly configured.
   - Deploy using Vercel CLI or through the Vercel dashboard.

## Additional Information

- The frontend and backend are set up to work together. Ensure both are running for full functionality.
- The backend uses Instagram OAuth for authentication. Make sure to set up your Instagram app and obtain the necessary credentials.