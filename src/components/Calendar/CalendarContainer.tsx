import React, { useEffect, useState } from 'react';
import Settings from './Settings';
import { EventType, SubViewType, viewModes, ViewType } from '../../types/types';
import Calendar from './Calendar';

const CalendarContainer = () => {
  const [view, setView] = useState<ViewType>('day')
  const [events, setEvents] = useState<EventType[]>([]);
  const [subViewList, setSubViewList] = useState<SubViewType[]>([]);


  const addEvent = (event: EventType) => {
    setEvents([...events, event]);
  };

  const handleSubViewLoad = (subViews: SubViewType[]) => {
    setSubViewList(subViews);
  };


  const loadSubViews = () => {
    const mockData = [
      { id: 1, label: 'SubView 1' , color: 'red'},
      { id: 2, label: 'SubView 2', color: 'blue' },
    ];
    const newSubViews = mockData?.map(i => new SubViewType(i, i => i.id, i => i.label));
    handleSubViewLoad(newSubViews);
  };


  useEffect(() => {
    setTimeout(() => loadSubViews(), 3000);
  }, []);

  return (
    <div className='p-8'>
      <Settings />

      <div className="inline-flex rounded-lg shadow-sm border border-gray-300 overflow-hidden float-end mb-4">
        {viewModes.map(option => (
          <button
            key={option}
            onClick={() => setView(option as ViewType)}
            className={`px-4 py-2 text-sm font-medium capitalize
            ${view === option
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'}
          `}
          >
            {option}
          </button>
        ))}
      </div>

      {
        subViewList.length > 0 ? <Calendar events={events} subViewList={subViewList} view={view} key={view} /> : <p>Calendar is loading...</p>
      }
    </div>
  );
};

export default CalendarContainer;