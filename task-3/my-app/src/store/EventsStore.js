import { makeAutoObservable } from "mobx";
import { makePersistable, hydrateStore, isHydrated, isPersisting, getPersistedStore } from 'mobx-persist-store';
import WrapedLocalStorage from '../utils/WrapedLocalStorage';


class EventsStore {
  storage          = WrapedLocalStorage;
  events           = [];
  showNotification = null;

  constructor() {
    this.events = this.storage.getItem('EventsStore') ? this.createTasks(this.storage.getItem('EventsStore').events):this.events;
    
    makeAutoObservable(this); 
    makePersistable(this, { 
      name: 'EventsStore', 
      properties: ['events'], 
      storage: this.storage,
      expireIn: 86400000, 
      removeOnExpiration: false,
      stringify: false,
      debugMode: false,
    },
    { delay: 0, fireImmediately: false })

    this.updateEvery(5000);
  }

  updateEvery(seconds=1000)
  {
    setInterval(_ => { 
      if (this.storage.getItem('EventsStore')) 
      {
        this.events.forEach(elem => {
          if (elem.task)
            clearTimeout(elem.task);
        });
        this.events = this.createTasks(this.storage.getItem('EventsStore').events); 
      }
      }, seconds);
  }
  
  get isHydrated() {
    return isHydrated(this);
  }

  get isPersisting() {
    return isPersisting(this);
  }

  async hydrateStore() {
    await hydrateStore(this);
  }

  async getStoredData()  { 
    return getPersistedStore(this) ; 
  } 

  addEvent(year, month, day, date, id, startTime, endTime, title, reminderTime, task){
    const event = {
      year: year, 
      month: month, 
      day:day, 
      date: date, 
      id: id, 
      startTime: startTime, 
      endTime: endTime,  
      title: title, 
      reminderTime: reminderTime, 
      task: task
    };

    this.events.push(event);
  }

  createTasks(events) {
    events.forEach((item) => {
      console.log(item);

      const hm       = item.startTime.split(/\:/);
      const taskData = this.getTask(
        item.startTime,
        item.title,        
        new Date(item.year, item.month, Number(item.day), hm[0], hm[1]), 
        (item.reminderTime * 60000)
      ) || [null, null];

      item.task = taskData;
    })

    return events;
  }

  getTask(startTimeEvents, title='Event', dateTime=Date.now(), startInterval=0)
  {
    const startTimeClear      = dateTime - Date.now(); 
    const startTimeInterval   = startTimeClear - startInterval; 
    const startTime           = startTimeInterval < 0 && startTimeClear > 0 ? startTimeClear:startTimeInterval;

    if (startTime > 0)
    {
      const shedule  = setTimeout(() => {
        this.showNotification = [title, startTimeEvents]; 
      }, startTime);  

        return shedule; 
    } 
  }

  setShowNotification()
  {
    this.showNotification = null;
  }

  deleteEvent(id) {
    const indexId = this.events.findIndex((event) => event.id == id);

    if (this.events[indexId].task) 
      clearTimeout(this.events[indexId].task);

    if (indexId > -1) {
      this.events.splice(indexId, 1)
    }
  }
}


export default new EventsStore();