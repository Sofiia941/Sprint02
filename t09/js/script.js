function getFormattedDate(dateObject) {
    if (!(dateObject instanceof Date)) {
        return "Invalid Date";
    }

    const days = String(dateObject.getDate()).padStart(2, "0");

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const month = months[dateObject.getMonth()];
    const year = dateObject.getFullYear();

    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");
    const seconds = String(dateObject.getSeconds()).padStart(2, "0");

    return `${days} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}

console.log(getFormattedDate(new Date()));