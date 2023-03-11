import Router from "./router/Router";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;
