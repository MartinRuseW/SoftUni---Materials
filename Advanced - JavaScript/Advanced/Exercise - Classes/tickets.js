function tickets(array, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = [];

    for (const line of array) {
        let [destination, price, status] = line.split('|');
        let newTicket = new Ticket(destination, Number(price), status);
        result.push(newTicket);
    };

    if (criteria === 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria === 'price') {
        result.sort((a, b) => a.price - b.price);
    } else if (criteria === 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status));
    }

    return result;
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)