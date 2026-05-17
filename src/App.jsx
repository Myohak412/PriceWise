import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const getGreetingText = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";

    return "Good Evening";
  };

  const greeting = getGreetingText();

  console.log(greeting);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* ONE SINGLE PROTECTED DASHBOARD ROUTE passing the greeting parameter safely inside the gatekeeper */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard greeting={greeting} />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;