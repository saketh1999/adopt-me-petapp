import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import Detail from "./Detail";

const queryClient = new QueryClient({
  defaultOption:{
    queries:{
      staleTime : Infinity,
      cacheTime : Infinity
    }
  }
})
const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <AdoptPetContext.Provider value={adoptedPet}>
     <div>
     <header>
      <Link to='/'>Adopt Me!</Link>
     </header>
     
      <Routes>
        <Route path={`/details/:id`} element={<Detail></Detail>}></Route>
        <Route path="/" element={<SearchParams></SearchParams>}></Route>
      </Routes>
     
    </div>
    </AdoptPetContext.Provider>
    </QueryClientProvider>
    </BrowserRouter>
   
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
