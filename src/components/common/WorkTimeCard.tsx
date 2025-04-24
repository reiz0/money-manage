import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";

export const WorkTimeCard = () => {
  return (
    <Card className="bg-emerald-900/30 border-emerald-800/50 text-emerald-500 m-3">
      <CardHeader className="flex flex-row items-center justify-between bg-emerald-700/30 border-b border-emerald-800/30 pb-2">
        <DatePicker />
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:text-red-400 hover:bg-red-950/20"
        >
          <Trash2 />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <TimePicker label="Start Time" id="startTime" />
          <TimePicker label="End Time" id="endTime" />
        </div>
        
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-emerald-700/50 bg-emerald-800/40 text-emerald-300 active:bg-emerald-700 active:text-emerald-50 hover:border-emerald-700/50 hover:bg-emerald-800/40 hover:text-emerald-300">
          <Plus />Add Break Time
        </Button>
      </CardFooter>
    </Card>
  );
};
