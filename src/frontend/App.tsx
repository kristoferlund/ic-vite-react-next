import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import icLogo from "./assets/ic.svg";
import GreetForm from "./components/greet-form";

function App() {
  return (
    <main>
      <div className="flex flex-col gap-14 items-center">
        <div className="flex gap-10">
          <a
            href="https://internetcomputer.org"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icLogo} alt="ICP logo" className="h-20" />
          </a>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} alt="Vite logo" className="h-20" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} alt="React logo" className="h-20" />
          </a>
        </div>
        <h1>ICP + Vite + React</h1>
        <GreetForm />
      </div>
    </main>
  );
}

export default App;
