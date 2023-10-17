import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/index"

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/file-upload", component: () => import("./pages/file-upload") },
    { path: "/presence", component: () => import("./pages/presence") },
    { path: "/avatar", component: () => import("./pages/avatar") },
    { path: "/color-picker", component: () => import("./pages/color-picker") },
    { path: "/switch", component: () => import("./pages/switch") },
    { path: "/carousel", component: () => import("./pages/carousel") },
    { path: "/date-picker", component: () => import("./pages/date-picker") },
    { path: "/select", component: () => import("./pages/select") },
    {
      path: "/",
      component: Home,
    },
    { path: "/accordion", component: () => import("./pages/accordion") },
    { path: "/checkbox", component: () => import("./pages/checkbox") },
    { path: "/combobox", component: () => import("./pages/combobox") },
    { path: "/dialog", component: () => import("./pages/dialog") },
    { path: "/editable", component: () => import("./pages/editable") },
    { path: "/hover-card", component: () => import("./pages/hover-card") },
    { path: "/menu", component: () => import("./pages/menu") },
    { path: "/nested-menu", component: () => import("./pages/nested-menu") },
    { path: "/menu-options", component: () => import("./pages/menu-options") },
    { path: "/context-menu", component: () => import("./pages/context-menu") },
    { path: "/number-input", component: () => import("./pages/number-input") },
    { path: "/pagination", component: () => import("./pages/pagination") },
    { path: "/pin-input", component: () => import("./pages/pin-input") },
    // { path: "/popper", component: () => import("./pages/popper") },
    { path: "/popover", component: () => import("./pages/popover") },
    // { path: "/nested-popover", component: () => import("./pages/nested-popover") },
    { path: "/range-slider", component: () => import("./pages/range-slider") },
    { path: "/radio-group", component: () => import("./pages/radio-group") },
    { path: "/rating-group", component: () => import("./pages/rating-group") },
    { path: "/slider", component: () => import("./pages/slider") },
    { path: "/segment-control", component: () => import("./pages/segment-control") },
    { path: "/tabs", component: () => import("./pages/tabs") },
    { path: "/toggle-group", component: () => import("./pages/toggle-group") },
    { path: "/tags-input", component: () => import("./pages/tags-input") },
    { path: "/toast", component: () => import("./pages/toast") },
    { path: "/tooltip", component: () => import("./pages/tooltip") },
    { path: "/splitter", component: () => import("./pages/splitter") },
  ],
})
