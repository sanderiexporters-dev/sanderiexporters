import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ProductSubCategory from "./pages/ProductSubCategory";
import RicePage from "./pages/RicePage";
import WhyChooseUs from "./pages/WhyChooseUs";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AutoContactModal from "./components/AutoContactModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AutoContactModal />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Products />} />

          {/* ── Rice: 3-level dedicated routes ── */}
          <Route path="/products/rice" element={<RicePage />} />
          <Route path="/products/rice/:type" element={<RicePage />} />
          <Route path="/products/rice/:type/:subgroup" element={<RicePage />} />

          {/* ── All other categories: 2-level ── */}
          <Route path="/products/:category/:subcategory" element={<ProductSubCategory />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:category" element={<ProductCategory />} />

          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import ProductCategory from "./pages/ProductCategory";
// import ProductSubCategory from "./pages/ProductSubCategory";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import Feedback from "./pages/Feedback";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import AutoContactModal from "./components/AutoContactModal";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <AutoContactModal />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/about-us" element={<About />} />
//           <Route path="/products" element={<Products />} />

//           {/* Sub-category MUST be before :category so /products/rice/basmati
//               doesn't get caught by /products/:category */}
//           <Route path="/products/:category/:subcategory" element={<ProductSubCategory />} />
//           <Route path="/products/:category" element={<ProductCategory />} />
//           <Route path="/product/:category" element={<ProductCategory />} />

//           <Route path="/why-choose-us" element={<WhyChooseUs />} />
//           <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import ProductCategory from "./pages/ProductCategory";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import Feedback from "./pages/Feedback";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import AutoContactModal from "./components/AutoContactModal";


// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <AutoContactModal />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/about-us" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:category" element={<ProductCategory />} />
//           <Route path="/product/:category" element={<ProductCategory />} />
//           <Route path="/why-choose-us" element={<WhyChooseUs />} />
//           <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
