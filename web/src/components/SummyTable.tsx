import { HabitDay } from "./HabitDay";
import { GenerateDatesFromYearBeginning } from './../utils/generate-dates-from-year-beginning';

const weekDays = ['D','S','T','Q','Q','S','S'];


const  summaryDates = GenerateDatesFromYearBeginning()

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
     </div>
    </div>
  );
}