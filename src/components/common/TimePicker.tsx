import { ClockArrowDown, ClockArrowUp } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  label: string;
  id: string;
};

export const TimePicker = ({ label, id }: Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative rounded-md overflow-hidden">
        <Input
          type="time"
          id={id}
          className="pl-10 h-12"
        />
        <div className="absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center bg-emerald-800/30 border-r border-emerald-800/30 text-emerald-400 p-2">
          {id === "startTime" && <ClockArrowUp />}
          {id === "endTime" && <ClockArrowDown />}
        </div>
      </div>
    </div>
  );
};
