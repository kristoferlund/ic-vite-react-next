import { useState } from "react";
import useGreet from "../hooks/use-greet";
import Bubble from "./bubble";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type TimedBubble = {
  id: number;
  bubble: React.JSX.Element;
};

export default function GreetForm() {
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

  const submitAction = (formData: FormData) => {
    greet(formData.get("name") as string);
  };

  return (
    <div className="flex flex-col bg-[#522785] p-10 rounded-xl items-center text-xl text-white gap-5">
      <div>Hello stranger, what&apos;s your name?</div>
      <form className="w-full flex flex-col gap-2" action={submitAction}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full text-lg text-center"
          data-1p-ignore
        />
        <Button
          type="submit"
          disabled={isPending}
          className="w-full text-lg text-[#522785] bg-white/50"
          size={"lg"}
        >
          Greet
        </Button>
      </form>
      {bubbles.map((tb) => tb.bubble)}
    </div>
  );
}
