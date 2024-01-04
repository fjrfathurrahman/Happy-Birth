import IntroLayout from "./Layout/IntroLayout";
import { MemoriesLayout } from "./Layout/MemoriesLayout";

function App() {
  return (
    <main>
      <section className="introLayout">
        <div className="container">
          <IntroLayout />
        </div>
      </section>
      <div className="container">
        <section>
          <MemoriesLayout />
        </section>
      </div>
    </main>
  );
}

export default App;
