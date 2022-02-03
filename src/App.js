import Navbar from "./layouts/Navbar";
import SingleUser from "./pages/SingleUser";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./layouts/Footer";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/github/usersContext";
const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <UserContextProvider>
        <Navbar />
        <main className="container mx-auto px-3">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<SingleUser />} path="/users/:username" />
            <Route element={<NotFound />} path="/notfound" />
            <Route element={<NotFound />} path="/*" />
          </Routes>
        </main>
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default App;
