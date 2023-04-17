import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Tweets from "../../pages/Tweets";
import { Layout } from "../Layaut/Layaut";
import { Box } from "../Box/Box";

function App() {
  return (
    <Box bg="pink" color="accent">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Т.к. испольщуется Layout, то слэши в начале пути не нужны */}
          <Route path="tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
