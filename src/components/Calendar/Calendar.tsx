import React, { useState } from 'react';
import Settings from './Settings';
import { ViewType } from '../../types/viewModes';

const Calendar = () => {
  const [view, setView] = useState<ViewType>('day')

  const handleChange = (event: any, view: ViewType) => {
    setView(view)
  }


  return (
    <div>
      <Settings />

      {/* <ToggleButtonGroup
        color="primary"
        value={view}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="day">Day</ToggleButton>
        <ToggleButton value="week">Week</ToggleButton>
        <ToggleButton value="month">Month</ToggleButton>
      </ToggleButtonGroup> */}

    </div>
  );
};

export default Calendar;