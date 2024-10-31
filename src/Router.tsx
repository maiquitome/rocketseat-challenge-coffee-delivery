import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      {/* 
      
      - Um Exemplo:
      
      - Para acessar a rota: "/admin/products"
      
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<History />} />
      </Route> 
      
      */}
    </Routes>
  );
}
