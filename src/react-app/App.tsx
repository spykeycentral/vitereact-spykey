import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { SiteLayout } from "@/layouts/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ArchivePage } from "@/pages/ArchivePage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PromptsPage } from "@/pages/PromptsPage";
import { ResourcesPage } from "@/pages/ResourcesPage";
import { SearchPage } from "@/pages/SearchPage";
import { ToolsPage } from "@/pages/ToolsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/prompts" element={<PromptsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
