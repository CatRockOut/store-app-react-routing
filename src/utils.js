// Adding the current date to the receipt when placing an order:
export const formatDate = (date) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
}

// Generate a random order number:
export const randomOrderNumber = Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(9, '0');