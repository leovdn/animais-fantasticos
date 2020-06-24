export default function initOpeningHour() {
    const openingHour = document.querySelector('[data-week]');
    const daysWeek = openingHour.dataset.week.split(',').map(Number);
    const hourWeek = openingHour.dataset.hour.split(',').map(Number);

    console.log(daysWeek);

    const dateNow = new Date();
    const dayNow = dateNow.getDay();
    const hourNow = dateNow.getHours();

    const openedWeek = daysWeek.indexOf(dayNow) !== -1;
    const hourOpened = (hourNow >= hourWeek[0] && hourNow < hourWeek[1]);

    if(openedWeek && hourOpened) {
        openingHour.classList.add('opened');
    }

}
