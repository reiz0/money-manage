"use client";
import { WorkTimeCard } from "@/app/calculate/_components/WorkTimeCard";
import { Button } from "@/components/ui/button";
import { WorkTimeCardType } from "@/types/WorkTimeCardType";
import { createContext, useState } from "react";

const indexWorkTimeCard: WorkTimeCardType = {
  date: new Date(),
  startTime: 0,
  endTime: 0,
  totalBreakTime: 0,
  breakDetails: [],
};

type WorkTimeCardContextType = {
  WorkTimeCardNum: WorkTimeCardType[];
  setWorkTimeCardNum: React.Dispatch<React.SetStateAction<WorkTimeCardType[]>>;
};

export const WorkTimeCardNumContext = createContext<WorkTimeCardContextType>({
  WorkTimeCardNum: [indexWorkTimeCard],
  setWorkTimeCardNum: () => {},
});

export default function CalculatePage() {
  // const [totalWorkingHour, setTotalWorkingHour] = useState<number>(0)

  const [WorkTimeCardNum, setWorkTimeCardNum] = useState<WorkTimeCardType[]>([
    indexWorkTimeCard,
  ]);

  const newCard = () => {
    setWorkTimeCardNum([...WorkTimeCardNum, indexWorkTimeCard]);
  };
  return (
    <WorkTimeCardNumContext.Provider
      value={{ WorkTimeCardNum, setWorkTimeCardNum }}
    >
      <div>
        {WorkTimeCardNum.map((_, i) => (
          <WorkTimeCard key={i} index={i} />
        ))}

        <Button onClick={() => newCard()}>+</Button>
      </div>
    </WorkTimeCardNumContext.Provider>
  );
}
