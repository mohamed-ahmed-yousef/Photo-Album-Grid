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
   - Background color change: `hover:bg-gray-700`

## Important Design Decisions

1. Component Structure:

   - `AlbumGrid.vue`: Displays the grid of album thumbnails on the home page
   - `AlbumDetails.vue`: Shows individual album photos
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

## Requirements fulfillment

- Nuxt 3
- Vue 3
- Tailwind CSS
- GraphQL
- Apollo Client => Using @nuxtjs/apollo module instead of Apollo Client directly
- State Management: In this implementation, we didn't need to use Vuex since the data is being fetched and displayed on the page as is.
  - Explanation:
    - I use the `useGetAlbums` and `useGetAlbum` composables to fetch the data from the API.
    - The data is then passed to the components as props.
    - The components use the data to display the albums and the photos.
    - The photos are displayed in the `AlbumDetails` component.
    - The `index.vue` (home page) component fetches the albums with a limit for photos and passes them to the `AlbumGrid` component.
      - I prefer to use a limit for photos fetched since the number of photos in each album is very large.
    - The individual album page component fetches the specific album and passes it to the `AlbumDetails` component.

## Code Quality

- Pre-commit hooks:
  - Biome: Used for code formatting and linting
    - Configured to run automatically before commits
    - Ensures consistent code style across the project
  - Lefthook: Manages Git hooks
    - Runs Biome checks before allowing commits
