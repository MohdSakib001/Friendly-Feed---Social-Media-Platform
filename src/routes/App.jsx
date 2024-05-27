import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { PostListProvider } from "../store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState("Home");
  const [hamburger, setHamburger] = useState(true);

  function handleSidebarClick(clickValue) {
    setIsActive(clickValue);
  }

  function handlehamburger(clickValue) {
    setHamburger(clickValue);
  }

  return (
    <>
      <PostListProvider>
        <div className="min-h-svh select-none">
          <Header hamburger={hamburger} handlehamburger={handlehamburger} />

          <div className="w-full relative">
            <Sidebar
              isActive={isActive}
              handleSidebarClick={handleSidebarClick}
              hamburger={hamburger}
              handlehamburger={handlehamburger}
            />

            <div className="md:w-4/5 md:ms-auto max-h-svh overflow-scroll">
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
