import IntroLayout from "./Layout/IntroLayout";
import { AboutLayout } from "./Layout/AboutLayout";
import { useEffect, useState } from "react";
import MemoriesLayout from "./Layout/MemoriesLayout";
import { ModalCom } from "./components/modal/ModalCom";
import { useDisclosure } from "@nextui-org/react";

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        <>
          <ModalCom isOpen={isOpen} onOpenChange={onOpenChange} />
          <div className="container">
            <section>
              <IntroLayout onPress={onOpen} />
            </section>
            <section>
              <AboutLayout />
            </section>
            <section>
              <MemoriesLayout />
            </section>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
