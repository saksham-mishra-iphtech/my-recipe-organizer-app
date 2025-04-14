# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# My Recipe Organizer App

This is a recipe organizer app where users can browse popular recipes, create their own recipes, and manage their favorite recipes. The app allows users to add/remove favorite recipes, sort and search through recipes, and even upload images for their custom recipes.

## Features:

### 1. **Favorite Recipes**:
   - Users can **add or remove recipes from their favorites**.
   - Favorite recipes are persistently saved, even after refreshing the page.

### 2. **Popular Recipes**:
   - Users can view a list of **popular recipes** fetched from an API.
   - Recipes are displayed with key details such as name, ingredients, and cooking instructions.

### 3. **Create Your Own Recipes**:
   - Users can **create their own recipes** by providing:
     - Recipe name
     - Ingredients (drag and drop functionality to select ingredients)
     - Cooking instructions
     - Uploading an image of the recipe
   - Custom recipes can be added to the **favorites** list as well.
   - Users can **edit or delete** their custom recipes.

### 4. **Search and Sort Recipes**:
   - The app provides **search functionality** to search for recipes by name or category.
   - Users can **sort recipes** by:
     - Name
     - Category
     - Popularity
   - The recipe table dynamically updates as you search or sort.

### 5. **Image Upload**:
   - When creating or editing recipes, users can **upload an image** of their dish to visually enhance their recipe.

### 6. **Drag and Drop Ingredients**:
   - For custom recipes, users can **drag and drop ingredients** from a list of available ingredients into their recipe.

## Technologies Used:
- **React (with Vite)** for the frontend
- **Redux** for state management
- **Tailwind CSS** for styling
- **Drag and Drop functionality** for adding ingredients
- **API Integration** to fetch popular recipes
- **Image Uploading** functionality for custom recipes

## How to Run:

1. Clone the repository:
   ```bash
   git clone <repository-url>


