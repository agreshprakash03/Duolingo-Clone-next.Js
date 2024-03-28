import { LoaderCircle } from "lucide-react"

const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <LoaderCircle className="h-6 w-6 text-muted-foreground animate-spin stroke-[4]" />
    </div>
  );
};

export default Loading;