import IntroLayout from "./Layout/IntroLayout";
import { AboutLayout } from "./Layout/AboutLayout";

function App() {
  return (
    <main>
      <div className="container">
        <section>
          <IntroLayout />
        </section>
        <section className="">
          <AboutLayout />
        </section>
      </div>
    </main>
  );
}

export default App;
