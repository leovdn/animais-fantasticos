export default class OpeningHour {
  constructor(openingHour, activeClass) {
    this.openingHour = document.querySelector(openingHour);
    this.activeClass = activeClass;
  }

  workingData() {
    this.daysWeek = this.openingHour.dataset.week.split(',').map(Number);
    this.hourWeek = this.openingHour.dataset.hour.split(',').map(Number);
  }

  currentData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }

  isOpened() {
    const openedWeek = this.daysWeek.indexOf(this.dayNow) !== -1;
    const hourOpened = (this.hourNow >= this.hourWeek[0] && this.hourNow < this.hourWeek[1]);
    return openedWeek && hourOpened;
  }

  activeOpened() {
    if (this.isOpened()) {
      this.openingHour.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.openingHour) {
      this.workingData();
      this.currentData();
      this.activeOpened();
    }
    return this;
  }
}
