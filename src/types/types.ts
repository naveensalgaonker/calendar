/* eslint-disable @typescript-eslint/no-explicit-any */
export type ViewType = 'day' | 'week' | 'month';

export const viewModes = ['day', 'week', 'month'];

export type EventType = {
  id: string;
  title: string;
  start: Date;
  end: Date;
};

export class SubViewType{
  id: string | number;
  label: string;
  additionalData: any;

  
  constructor(data: any, idMapper: (data: any) => string | number , labelMapper: (data: any) => string) {
    this.id = idMapper(data);
    this.label = labelMapper(data);

    this.additionalData = data;
  }
}