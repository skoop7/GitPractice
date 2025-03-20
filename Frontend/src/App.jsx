import { useState } from "react";
import HomePage from "./Screens/Homepage.jsx";
import HotelPage from "./Screens/HotelPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <HotelPage />
      </div>
    </>
  );
}

export default App;
