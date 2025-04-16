import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function TableShareBtn() {
  return (
    <div>
      <Button variant={"outline"}>
        <Send className="text-gray-400" />
        Share
      </Button>
    </div>
  );
}
