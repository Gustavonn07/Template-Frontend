
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui";
import "./style.css";
function App() {
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen gap-10">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}

export default App;
