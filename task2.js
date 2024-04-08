// function option(percen) {

//     if (percen > 40 && percen < 50) {
//         console.log("buy a pen");

//     } else if (percen > 50 && percen < 60) {
//         console.log("buy a book");

//     } else if (percen > 60 && percen < 70) {
//         console.log("buy a bag");

//     } else if (percen > 70 && percen < 80) {
//         console.log("buy a watch");

//     } else if (percen > 80 && percen < 90) {
//         console.log("buy a mobile");
//     } else if (percen > 90 && percen < 100) {
//         console.log("buy a laptop");
//     }
//     else{
//         console.log("fail")
//     }
// }
// option(32);

function percen(percentage) {
    switch(true) {
        case (percentage >= 40 && percentage < 50):
            console.log("Buy a pen.");
            break;
        case (percentage >= 50 && percentage < 60):
            console.log("Buy a Book.");
            break;
        case (percentage >= 60 && percentage < 70):
            console.log("Buy a Bag.");
            break;
        case (percentage >= 70 && percentage < 80):
            console.log("Buy a Watch.");
            break;
        case (percentage >= 80 && percentage < 90):
            console.log("Buy a Mobile.");
            break;
        case (percentage >= 90 && percentage <= 100):
            console.log("Buy a Laptop.");
            break;
        default:
            console.log("Fail");
    }
}
percen(50);
