import { EventType, SubViewType, ViewType } from '../../types/types'
import DayView from '../CalendarView/DayView'
import MonthView from '../CalendarView/MonthView'
import WeekView from '../CalendarView/WeekView'
import { DateTime } from "luxon";

const Calendar = ({ view, subViewList, events }: { view: ViewType, subViewList: SubViewType[], events: any }) => {
  let date = DateTime.now()
  return (
    <div className="w-[95vw] h-[76vh] overflow-auto mt-4">
      {/* <h1>Current View: {view}</h1> */}
      {/* Additional content can be added here based on the selected view */}
      {view === 'day' && <DayView width={100} date={date} subViewList={subViewList} event={events} />}
      {view === 'week' && <WeekView subViewList={subViewList} event={events} />}
      {view === 'month' && <MonthView subViewList={subViewList} event={events} />}
    </div>
  )
}

export default Calendar
