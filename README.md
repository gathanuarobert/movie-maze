# Movie Maze

Movie Maze is a Netflix clone built with modern web technologies, including Vite, React, Firebase, Tailwind CSS, and React Icons. It allows users to browse movies, sign up and log in, like their favorite movies, and manage their profile by viewing and removing liked movies.

## Features
- **Sign Up / Login**: User authentication using Firebase.
- **Movie Browsing**: Browse through a variety of movies.
- **Like Movies**: Mark your favorite movies.
- **Profile Page**: View all liked movies and remove them by choice.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS.

## Technologies Used
- **Vite**: For fast and optimized development build.
- **React**: JavaScript library for building the user interface.
- **Firebase**: For user authentication and storing user data (liked movies).
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: For using scalable vector icons in the app.

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (preferably the latest stable version)
- npm or yarn

### Steps to Set Up Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/gathanuarobert/movie-maze.git
2. Navigate to the project directory:
   ```bash  
   cd movie-maze
3. Install dependencies:
   ```bash
   npm install
4. Set up Firebase   
- Create a Firebase project at Firebase Console.
- Set up Firebase Authentication and Firestore.
- Add your Firebase config to the project(in a .env file).
5. Start the development server:
   ```bash
   npm run dev

## Usage
1. Open the app in your browser (http://localhost:3000).
2. Sign up or log in to start browsing movies.
3. Like movies and view your liked movies on the profile page.
4. You can remove liked movies from your profile by clicking the "Remove" button.

## Contributing
Feel free to fork the repository and submit pull requests if you have improvements or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
