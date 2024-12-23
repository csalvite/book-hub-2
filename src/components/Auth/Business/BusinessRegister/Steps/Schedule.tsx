import React from 'react';
import { BusinessFormData } from '../../../../../types/business';

interface ScheduleProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Schedule: React.FC<ScheduleProps> = ({ formData, updateFormData }) => {
  const toggleDay = (day: string) => {
    const newWeekdays = formData.schedule.weekdays.includes(day)
      ? formData.schedule.weekdays.filter((d) => d !== day)
      : [...formData.schedule.weekdays, day];

    updateFormData({
      schedule: {
        ...formData.schedule,
        weekdays: newWeekdays,
      },
    });
  };

  const updateHours = (day: string, field: 'open' | 'close', value: string) => {
    updateFormData({
      schedule: {
        ...formData.schedule,
        hours: {
          ...formData.schedule.hours,
          [day]: {
            ...formData.schedule.hours[day],
            [field]: value,
          },
        },
      },
    });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Business Hours</h2>

      <div className='space-y-4'>
        {DAYS.map((day) => (
          <div key={day} className='flex items-center space-x-4'>
            <div className='w-32'>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  checked={formData.schedule.weekdays.includes(day)}
                  onChange={() => toggleDay(day)}
                  className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                />
                <span className='ml-2'>{day}</span>
              </label>
            </div>

            {formData.schedule.weekdays.includes(day) && (
              <div className='flex items-center space-x-2'>
                <input
                  type='time'
                  value={formData.schedule.hours[day]?.open || '09:00'}
                  onChange={(e) => updateHours(day, 'open', e.target.value)}
                  className='rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
                />
                <span>to</span>
                <input
                  type='time'
                  value={formData.schedule.hours[day]?.close || '17:00'}
                  onChange={(e) => updateHours(day, 'close', e.target.value)}
                  className='rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
