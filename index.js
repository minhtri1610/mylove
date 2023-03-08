$(function () {
    // debugger
    let element_date_start = $('p[data-id="date-start"]')
    let data_date_start = element_date_start.attr('data-date')
    element_date_start.text(checkDateNow(data_date_start))

    // xmas 2022
    let elm_date_xmas = $('p[data-id="date-xmas-2022"]')
    let data_date_xmas_2022 = elm_date_xmas.attr('data-date')
    elm_date_xmas.text(checkDateNow(data_date_xmas_2022))

    // aniver 1 year
    let elm_ani_1_y = $('p[data-id="date-ani-1y"]')
    let data_ani_1_y = elm_ani_1_y.attr('data-date')
    elm_ani_1_y.text(checkDateNow(data_ani_1_y))

    // valentine 2023
    let elm_valentine_2023 = $('p[data-id="date-valen-2023"]')
    let data_val_2023 = elm_valentine_2023.attr('data-date')
    elm_valentine_2023.text(checkDateNow(data_val_2023))


    // check momment
    const link_mm = "./8-3-2023/index.html"
    const ele_check_momment = $('.active-momment')
    let data_check_momment= ele_check_momment.attr('data-date')
    
    let stt_check_mm = checkWhatIsMoment(data_check_momment)
    let html_text_mm = '<a href="'+ link_mm + '" target="_blank" rel="noopener noreferrer">Xem lại khoảnh khắc ... </a>';
    if(stt_check_mm){
        html_text_mm = '<a href="'+ link_mm + '" rel="noopener noreferrer">Xem khoảnh khắc ... </a>';
    }
    ele_check_momment.html(html_text_mm)

})

function checkDateNow(str_date) {
    var currentDate = new Date();
    var targetDate = new Date(str_date);
    var timeDifference = currentDate - targetDate;
    var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    // console.log(daysDifference)
    return calculatorDateNow(daysDifference)
}

function convertToMonth(days) {
    let months = Math.floor(days/30)
    return months
}

function convertToYears(days) {
    let years = Math.floor(days/365)
    return years
}

function calculatorDateNow(days) {
    switch (true) {
        case days == 365:
        case days == 366:
            return ' one year ago';
        case (days < 365) && days >= 30 :
            return convertToMonth(days) + ' months ago';
        case days > 365:
            return convertToYears(days) + ' year ago';
        default:
            return days + ' days';
    }
}

function checkWhatIsMoment(str_date) {

    let dateComponents = str_date.split("-");
    let day = parseInt(dateComponents[0]);
    let month = parseInt(dateComponents[1]) - 1;
    let year = parseInt(dateComponents[2]);

    let targetDate = new Date(year, month, day);
    let targetYearDate = targetDate.getFullYear()
    // console.log(targetYearDate);

    let targetYear = targetDate.getFullYear();
    // console.log(targetYear);

    if(targetYear == targetYearDate){
        return true;
    }
    return false;

}

function checkAuth(pass) {
    
}