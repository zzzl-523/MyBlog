import Router from "components/Router";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/Loader";
import { ThemeContext } from "context/ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  // loader(로딩) 추가
  const [init, setInit] = useState<boolean>(false);
  const auth = getAuth(app);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <div className={theme.theme === "light" ? "light" : "dark"}>
      <ToastContainer />
      {
        // 로딩 전에는 init, 로딩 후에는 화면 보여주기
        init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />
      }
    </div>
  );
}

export default App;
