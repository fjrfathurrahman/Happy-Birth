import IntroLayout from "./Layout/IntroLayout";
import { AboutLayout } from "./Layout/AboutLayout";
import { useEffect, useState } from "react";
import MemoriesLayout from "./Layout/MemoriesLayout";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <main>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <section>
            <IntroLayout />
          </section>
          <section className="">
            <AboutLayout />
          </section>
          <section>
            <MemoriesLayout/>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
