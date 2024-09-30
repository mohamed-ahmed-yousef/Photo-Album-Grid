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
- Optimized image loading with @nuxt/image

## Tailwind CSS Customizations

This project utilizes Tailwind CSS for styling. Key customizations include:

1. Custom utility class:

   ```css
   .page-container {
     @apply container px-4 mx-auto;
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
   - `Loading.vue`, `NotFound.vue`, and `ErrorPage.vue`: Handle loading states, 404 errors, and general errors

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

6. Image Optimization:
   - Utilizes @nuxt/image module for efficient image loading and optimization

This project demonstrates a modern, responsive web application using Vue 3, Nuxt 3, and Tailwind CSS, with a focus on maintainability, performance, and user experience.

## Requirements fulfillment

- Nuxt 3
- Vue 3
- Tailwind CSS
- GraphQL
- Apollo Client => Using @nuxtjs/apollo module
- State Management: In this implementation, we didn't need to use Vuex or Pinia since the data is being fetched and displayed on the page as is.
  - Explanation:
    - The `useGetAlbums` and `useGetAlbum` composables fetch data from the API.
    - Data is passed to components as props.
    - Components use the data to display albums and photos.
    - The `AlbumDetails` component displays individual album photos.
    - The `index.vue` (home page) component fetches albums with a limit for photos and passes them to the `AlbumGrid` component.
      - I prefer to use a limit for photos fetched since the number of photos in each album is very large.
    - The individual album page component fetches the specific album and passes it to the `AlbumDetails` component.

## Code Quality

- TypeScript: Implemented for improved type safety and developer experience
- Nuxt DevTools: Enabled for enhanced debugging and development workflow
- Modular structure: Components and pages are organized for better maintainability
- Consistent code style: Ensured through project configuration

## Performance Optimizations

- Image optimization: Utilizing @nuxt/image for efficient image loading and processing
- Lazy loading: Implemented for images to improve initial page load times
- Responsive images: Using appropriate image sizes for different screen resolutions

This project showcases a well-structured, performant, and user-friendly web application using modern web technologies and best practices.
