import { Button } from "./components/ui";
import "./style.css";
function App() {
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen gap-10">
        <Button
          options={{
            iconOptions: {
              icon: "tabler:dots",
              position: "left",
            },
          }}
          className=""
        >
          asdasdsad
        </Button>
      </div>
    </>
  );
}

export default App;
