function reading(pagesOfTheBook, pagesFor1Hour, days) {

    let time = pagesOfTheBook / pagesFor1Hour;
    let hoursEachDay = time / days;
    console.log(hoursEachDay)
}
reading(212, 20, 2 )