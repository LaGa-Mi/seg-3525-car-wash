import $ from 'jquery'

/*******************************************************************************************
 * This calendar script was made with the assistance of chat-GPT
*******************************************************************************************/
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const generateCalendar = (month, year) => {
    const calendar = $('#calendar');
    calendar.empty();

    $('#currentMonth').text(monthNames[month]);
    $('#currentYear').text(year);

    const today = new Date();
    const days = daysInMonth(month, year);
    for (let day = 1; day <= days; day++) {
        let dayClass = "calendar-day d-flex align-items-center justify-content-center";
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayClass += " today";
        }
        calendar.append(`<div class="${dayClass}">${day}</div>`);
    }

    $('.calendar-day').on('click', function() {
        $('.calendar-day').removeClass('selected');
        $(this).addClass('selected');
        const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String($(this).text()).padStart(2, '0')}`;
        $('#selectedDate').text(selectedDate);
    });
};

const updateCalendar = () => {
    generateCalendar(currentMonth, currentYear);
};

$(document).ready(function() {
    updateCalendar();

    $('#prevMonth').on('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    $('#nextMonth').on('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    $('#prevYear').on('click', function() {
        currentYear--;
        updateCalendar();
    });

    $('#nextYear').on('click', function() {
        currentYear++;
        updateCalendar();
    });

    $('#today').on('click', function() {
        const today = new Date();
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        updateCalendar();
    });
});