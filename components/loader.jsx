import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <p className="text-sm text-muted-foreground">
        Next.AI is thinking...
      </p>
    </div>
  );
};