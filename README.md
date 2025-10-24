# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Document your implementation and features


## Project Deployment URL
https://splendorous-zabaione-65ec21.netlify.app/


## Features

- Tasks
   - Add new tasks
   - Mark tasks as completed
   - Delete tasks
   - Filter tasks (All, Active, Completed)

- Posts
 -10 Posts relating to technology

 View Modes: Toggle between light and dark themes


## Additional implemented files for this solution:

- `src/context/ThemeContext.jsx` - theme provider for light/dark mode
- `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/components/Card.jsx` - UI components
- `src/pages/TasksPage.jsx`, `src/pages/PostsPage.jsx` - routed pages
- `src/main.jsx`, `index.html`, `tailwind.config.cjs`, `postcss.config.cjs`, `package.json` - project entry and config

## Manual test checklist:
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open http://localhost:5173
4. Verify:
   - Navbar appears with theme toggle button
   - `/tasks` shows Task Manager where you can add, complete, delete, and filter tasks
   - `/posts` fetches posts from JSONPlaceholder, supports search and paging
   - Theme toggles between light and dark and persists after refresh

## Screenshots of Somtech Task Manager Application
![alt text](<Deployed screenshot-dark.png>)
![alt text](<Deployed screenshot.png>)
![alt text](<localhost screenshot1.png>)
![alt text](<localhost screenshot2.png>)
![alt text](<localhost screenshot3.png>)


## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 