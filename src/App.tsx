import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="recipes" element={<RecipesPage />} />
        <Route path="recipes/:id" element={<RecipeDetailPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
