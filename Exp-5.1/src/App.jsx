import "./App.css";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./components/dashboard"));

function App() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
