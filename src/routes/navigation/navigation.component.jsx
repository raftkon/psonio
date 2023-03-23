import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../../components/button/button.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <div className="container mx-auto  min-h-screen relative">
      {/* navigation */}
      <div
        className="px-6 py-2 mb-4   border-b-2 
        flex justify-between items-center"
      >
        <Link to="/">
          <div className="drop-shadow-md">
            <span className="text-6xl text-rose-500 font-extrabold ">P</span>
            <span className="text-3xl text-amber-400">sonio.</span>
          </div>
        </Link>
        {/* links container */}

        {currentUser ? (
          <Button onClick={handleSignOut} buttonType="inverted">
            Sign Out
          </Button>
        ) : (
          <Link
            className="text-white px-4 py-2 border rounded-lg bg-rose-600 transition-all duration-300 hover:translate-x-2 "
            to="/auth"
          >
            Sign In &rarr;
          </Link>
        )}
      </div>
      <Outlet />
      <footer className="absolute bottom-0 border-t-2 min-w-[100%] h-[60px]"></footer>
    </div>
  );
};

export default Navigation;
