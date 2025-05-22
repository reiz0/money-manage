export type  WorkTimeCardType = {
  date: Date
  startTime: number
  endTime: number
  totalBreakTime: number
  breakDetails: breakDetailsType[]
}

type breakDetailsType = {
  startTime: number
  endTime: number
}