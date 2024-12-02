import { useState } from "react";
import useGreet from "../hooks/use-greet";
import Bubble from "./bubble";

type TimedBubble = {
  id: number;
  bubble: React.JSX.Element;
};

export default function GreetForm() {
  const [name, setName] = useState("");
  const [bubbles, setBubbles] = useState<TimedBubble[]>([]);

  const addBubble = (greeting: string) => {
    const id = Date.now();
    setBubbles((prev) => [
      ...prev,
      {
        id,
        bubble: (
          <Bubble
            key={id}
            text={greeting}
            onComplete={() => {
              removeBubble(id);
            }}
          />
        ),
      },
    ]);
  };

  const removeBubble = (id: number) => {
    setBubbles((prev) => prev.filter((tb) => tb.id !== id));
  };

  const { mutate: greet, isPending } = useGreet(addBubble);

  return (
    <div className="flex flex-col bg-[#522785] p-10 rounded-xl items-center text-xl text-white gap-5">
      <div>Hello stranger, what&apos;s your name?</div>
      <div className="w-full flex flex-col gap-2">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-full block rounded-md py-2.5 px-3.5 text-center border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 shadow-sm focus-visible:outline-white"
          data-1p-ignore
        />
        <button
          onClick={() => {
            greet(name);
          }}
          disabled={isPending}
          className="w-full block rounded-md py-2.5 px-3.5 text-center text-[#522785] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/30 shadow-sm hover:bg-white/50 focus-visible:outline-white"
        >
          Greet
        </button>
      </div>
      {bubbles.map((tb) => tb.bubble)}
    </div>
  );
}
