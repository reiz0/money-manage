import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { DatePicker } from "../../../components/common/DatePicker";
import { TimePicker } from "../../../components/common/TimePicker";
import { Input } from "../../../components/ui/input";

export const WorkTimeCard = () => {
  return (
    <Card className="m-3 overflow-hidden">
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
      <CardContent className="grid gap-2">
        <div className="grid grid-cols-2 gap-4 mt-2">
          <TimePicker label="Start Time" id="startTime" />
          <TimePicker label="End Time" id="endTime" />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Total Break Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Input type="number" min="0" />
              <div className="absolute right-0 top-0 bottom-0 w-16 flex items-center justify-center bg-emerald-800/50 border-l border-emerald-700/50 text-emerald-300 text-sm">
                HOURS
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full border-emerald-700/50 bg-emerald-800/40 text-emerald-500 active:bg-emerald-700 active:text-emerald-50 hover:border-emerald-700/50 hover:bg-emerald-800/40 hover:text-emerald-300"
        >
          <Plus />
          Add Break Detail
        </Button>
      </CardFooter>
    </Card>
  );
};
