"use client"
import { WorkTimeCard } from "@/app/calculate/_components/WorkTimeCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CalculatePage() {
  const [totalWorkingHour, setTotalWorkingHour] = useState<number>(0)
  const [WorkTimeCardNum, setWorkTimeCardNum] = useState<number>(1)
  return (
    <div>
      {[...Array(WorkTimeCardNum)].map((_, i) => (<WorkTimeCard key={i} />))}

      <Button onClick={() => setWorkTimeCardNum(WorkTimeCardNum + 1)}>+</Button>
      
    </div>
  );
}
