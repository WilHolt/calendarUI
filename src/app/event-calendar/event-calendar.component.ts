import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Event }  from '../_models/event'
 


@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {
  counter: any = 0;
  Hours: Array<any> = [];
  Value: Array<any> = [];

  Events: Array<Event> = [];
  SelectedHours: any;
  atualDay = new Date;
  Color = [
    "#00ffff",
    "#f0ffff",
    "#f5f5dc",
    "#000000",
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
  ]
  constructor() {
    this.SelectedHours = new FormGroup({
      startTime: new FormControl(''),
      endTime: new FormControl(''),


    })
  }

  ngOnInit() {
    this.generateHoursDisplay();
    this.generateOptions();

  }
  generateHoursDisplay() {
    let index = 1;
    let number: any;

    while (index <= 24) {
      number = index + ':00'
      if (index == 24) {
        number = '00:00'
      }
      this.Hours.push(number)
      index++;

    }


  }
  generateOptions() {
    let index = 1;
    let number;
    while (index <= 24) {
      number = index
      this.Value.push(number)
      index += 0.5;

    }

  }
  addEvent() {

    let indexEquals = 0;
    let indexTotal = 0;
    let indexRefresh = 0;
    let counter = this.counter
    let eventsLength = this.Events.length
    let arrayequal: Array<Event> = [];
    let arrayequal2: Array<Event> = [];
    let nWidth = 288;
    let margins = 0;
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    function ColorLuminance(hex, lum) {

      // validate hex string
      hex = String(hex).replace(/[^0-9a-f]/gi, '');
      if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      lum = lum || 0;

      // convert to decimal and change luminosity
      var rgb = "#", c, i;
      for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
      }

      return rgb;
    }
    function setEventDivEqual() {
      let darker = ColorLuminance(color, -0.3)
      let border = ColorLuminance(color, -0.5)

      newEvent.setAttribute('id', "event" + (counter))
      newEvent.style.width = nWidth + "px";
      newEvent.style.height = size + "px";
      newEvent.style.marginTop = (top - 7) + "px";
      newEvent.style.marginLeft = ((nWidth * eventsLength)) + "px"
      newEvent.style.background = 'linear-gradient(to bottom,' + (color) + ' 1%,' + darker + ' 90%)'
      newEvent.style.position = ' absolute'
      newEvent.style.zIndex = ' 9999'
      newEvent.style.border = '1px solid ' + border
      //change width of others events in same hour
    }
    function setEventDivEqual2() {
      let darker = ColorLuminance(color, -0.1)
      let border = ColorLuminance(color, -0.3)

      newEvent.setAttribute('id', "event" + (counter))
      newEvent.style.width = nWidth + "px";
      newEvent.style.height = size + "px";
      newEvent.style.marginTop = (top - 7) + "px";
      newEvent.style.marginLeft = margins + "px"
      newEvent.style.background = 'linear-gradient(to bottom,' + (color) + ' 1%,' + darker + ' 90%)'
      newEvent.style.position = ' absolute'
      newEvent.style.zIndex = ' 9999'
      newEvent.style.border = '1px solid ' + border
    }

    let start = this.SelectedHours.value.startTime
    let end = this.SelectedHours.value.endTime
    let size = (55 * (end - start)) + 2 // more 2 pixels to adjusts
    let top = (this.SelectedHours.value.startTime * 55) - 32;
    let color = this.Color[getRandomInt(0, 43)]
    let event = {
      eventId: counter,
      startTime: start,
      EndTime: end,
      length: size,
    }
    this.Events.push(event)
    let index = 0;
    let display = document.getElementById('eventDisplay')
    let newEvent = document.createElement('div')
    let atualEvent = this.Events[this.Events.length - 1]



    display.appendChild(newEvent)



    while (indexEquals < this.Events.length) {
      if (atualEvent.startTime == (this.Events[indexEquals].startTime)) {
        arrayequal.push(this.Events[indexEquals]);
      } else if (atualEvent.startTime > (this.Events[indexEquals].startTime) &&
        atualEvent.startTime < (this.Events[indexEquals].EndTime)) {
        arrayequal2.push(this.Events[indexEquals]);
      } else if (atualEvent.startTime < this.Events[indexEquals].startTime
        && atualEvent.EndTime > this.Events[indexEquals].startTime) {
        arrayequal.push(this.Events[indexEquals]);

      }
      indexEquals++
    }
    arrayequal.sort(function (a, b) {
      return (a.length < b.length) ? 1 : ((a.length > b.length) ? -1 : 0);
    })
    arrayequal.sort(function (a, b) {
      return (a.startTime < b.startTime) ? 1 : ((a.startTime > b.startTime) ? -1 : 0);
    })
    nWidth = 288 / arrayequal.length;
    if (arrayequal.length > 0) {
      while (indexTotal < this.Events.length) {
        if (arrayequal.length > arrayequal2.length) {
          setEventDivEqual();
          this.counter++
          this.Events[indexTotal].width = nWidth
          while (indexRefresh < arrayequal.length) {
            if (atualEvent.startTime == arrayequal[indexRefresh].startTime) {
              let oldEvent = document.getElementById("event" + (arrayequal[indexRefresh].eventId))
              oldEvent.style.width = nWidth + "px"
              if (indexRefresh > 2) {
                oldEvent.style.marginLeft = ((nWidth * indexRefresh)) + "px"
                if (indexRefresh > 1) {
                  let oldEvent = document.getElementById("event" + (arrayequal[indexRefresh].eventId))
                  oldEvent.style.marginLeft = nWidth + "px"
                }
              }
            }

            indexRefresh++
          }

          indexRefresh = 0;

          while (indexRefresh < arrayequal.length) {
            let oldEvent = document.getElementById("event" + (arrayequal[indexRefresh].eventId))
            oldEvent.style.marginLeft = ((nWidth * indexRefresh)) + "px"
            indexRefresh++
          }

        } else {
          if (arrayequal2.length > 0) {
            nWidth = 288 / (arrayequal2.length + 1)
            margins = arrayequal2.length * nWidth
            setEventDivEqual2();
            this.counter++
            let oldEvent = document.getElementById("event" + (arrayequal2[0].eventId))
            oldEvent.style.width = nWidth + "px"
            while (indexRefresh < arrayequal2.length) {
              let oldEvent = document.getElementById("event" + (arrayequal2[indexRefresh].eventId))
              oldEvent.style.width = nWidth + "px"
              if (indexRefresh > 0) {
                oldEvent.style.marginLeft = nWidth * arrayequal.length + 'px'

              }
              indexRefresh++
            }
          } else {
            nWidth = 288 - (arrayequal2[0].width * (arrayequal2.length))
            margins = arrayequal2[0].width * (arrayequal2.length)
            setEventDivEqual2();
            this.counter++
          }
        }
        indexTotal++
      }
    }

  }
}
