import { useEffect, useState } from 'react';
import { EventType, SubViewType } from '../../types/types'
import { DateTime } from 'luxon';

const DayView = ({ subViewList, event, width = 200, date }: { subViewList: SubViewType[], event: EventType, width: number, date: DateTime }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [dayWidth, setDayWidth] = useState('auto');
  const [mappedList, setMappedList] = useState<any[]>([]);

  const showDateHeader = true;
  let hrSegmentHeight = 50;
  let dateHeaderHeight = 25;

  useEffect(() => {
    let list = subViewList.map((subView) => {
      let hrSegments: any[] = [];
      for (let i = 0; i < 24; i++) {
        hrSegments.push({
          id: i,
          label: `${i}:00`,
          startTime: date.set({ hour: i, minute: 0 }).toJSDate(),
          endTime: date.set({ hour: i, minute: 59 }).toJSDate(),
          isAvailable: true,
          parentId: subView.id
        });
      }
      return {
        id: subView.id,
        label: subView.label,
        data: subView.additionalData,
        hrSegments: hrSegments
      }
    });
    setDayWidth(`${width * list?.length}px`);
    setMappedList(list);
    setIsLoading(false);
  }, [subViewList, date]);

  return (
    //Day Column
    isLoading ? 
      <div>Loading...</div> :
      <div>
        {showDateHeader && 
          <div 
            className='border-2 border-gray-300 sticky top-0 bg-amber-50 text-center' 
            style={{ height: `${dateHeaderHeight}px`,
              // width: `${dayWidth}`
            }}
          >
            {date.toLocaleString()}
          </div>
        }
        <div className="flex flex-row flex-grow">
          {mappedList.map((subView, index) => {
            const isLast = index === mappedList.length - 1;
            return (
              <div
                key={index}
                className={`
                  border-2 border-gray-300 border-t-0 flex flex-col 
                  ${isLast ? 'border-r-2' : 'border-r-0'}
                  flex-grow
                `}
                style={{ 
                  // width: `${width}px`
                  minWidth: `${width}px`,
                }}
              >
                {/* Calendar Header */}
                <div
                  className='border-b border-gray-300 bg-white sticky z-10'
                  style={{ top: `${showDateHeader ? dateHeaderHeight : '0'}px` }}
                >
                  <div>{subView.label}</div>
                </div>
                <div className='div flex flex-col'>
                  {subView.hrSegments.map((segment: any) => {
                    const isAvailable = segment.isAvailable;
                    return (
                      <div
                        key={segment.id}
                        className={`
                          border-b border-gray-300 flex items-center justify-center 
                          ${isAvailable ? 'bg-green-200' : 'bg-red-200'}
                          `}
                        style={{ height: `${hrSegmentHeight}px` }}
                      >
                        {segment.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default DayView;