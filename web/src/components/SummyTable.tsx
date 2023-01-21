import { HabitDay } from "./HabitDay";

const weekDays = ['D','S','T','Q','Q','S','S'];

export function SummyTable() {
  return (
    <div className="w-full flex">
     <div className="grid grid-rows-7 grid-flow-row gap-3">
        { weekDays.map((Element, i) => {
            return(
                 <div key={`${Element}-np,m${i}`} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
                  {Element}
                 </div>
            )
        })}
     </div>
     <div className="grid grid-rows-7 grid-flow-col  gap-3">
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
       <HabitDay/>
     </div>
    </div>
  );
}