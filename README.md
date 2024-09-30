# Photo Album Grid Application

## Setup and Execution

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Run the development server:
   ```
   pnpm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`

## Key Features

- Responsive photo album grid
- Individual album view
- Vue 3 composition API
- Nuxt 3 framework
- GraphQL integration

## Tailwind CSS Customizations

This project utilizes Tailwind CSS for styling. Key customizations include:

1. Custom utility class:

   ```css
   .page-container {
     @apply container px-4;
   }
   ```

   This class is used to maintain consistent padding and container sizing across pages.

2. Responsive grid layouts:

   - Home page: `sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
   - Album page: `sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`

3. Hover effects:
   - Scale transform: `hover:scale-105`
   - Opacity changes: `hover:opacity-100`

## Important Design Decisions

1. Component Structure:

   - `HomeCard.vue`: Displays the grid of album thumbnails
   - `AlbumCard.vue`: Shows individual album photos
   - `Loading.vue` and `NotFound.vue`: Handle loading states and 404 errors

2. Routing:

   - Dynamic routing for individual albums: `/albums/[id]`

3. Data Fetching:

   - Custom composables (`useGetAlbums` and `useGetAlbum`) for GraphQL queries
   - Reactive data management using Vue 3's `ref` and `watchEffect`

4. Responsive Design:

   - Mobile-first approach with progressive enhancement for larger screens
   - Flexible grid system adapting to various screen sizes

5. User Experience:
   - Smooth transitions and hover effects for interactive elements
   - Clear navigation with a "Go Back" button in individual album views

This project demonstrates a modern, responsive web application using Vue 3, Nuxt 3, and Tailwind CSS, with a focus on maintainability and user experience.
