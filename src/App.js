import { Layout } from "./components/Layout";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <Layout>
        <Navbar/>
      </Layout>
      <GlobalStyles/>
    </>
  );
}

export default App;
