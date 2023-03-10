import { HabitDay } from "./HabitDay";
import { GenerateDatesFromYearBeginning } from './../utils/generate-dates-from-year-beginning';

const weekDays = ['D','S','T','Q','Q','S','S'];


const  summaryDates = GenerateDatesFromYearBeginning()
const mininumSummaryDatesSize = 18 * 7 

const amountOfDaysToFill = mininumSummaryDatesSize - summaryDates.length

console.log(summaryDates)

export function SummyTable() {
  return (
    <div className="w-full flex">
     <div className="grid grid-rows-7 grid-flow-row gap-3">
        { weekDays.map((Element, i) => {
            return(
                 <div key={`${Element}-${i}`} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
                  {Element}
                 </div>
            )
        })}
     </div>
     <div className="grid grid-rows-7  grid-flow-col gap-3">
      {
        summaryDates.map((date) =>{
           return <HabitDay key={date.toString()}/>
        })}
     {
      amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) =>{
        return(
          <div key={i} className="w-10 h-10 bg-zinc-900 border-2-zinc-800 rounded-lg opacity-40 cursor-not-allowed"/>
        )
      })
     }
     </div>
    </div>
  );
}