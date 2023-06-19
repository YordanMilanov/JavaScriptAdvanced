function tickets(data, criteria) {

    class Ticket {
        destination;
        price;
        status;

        constructor (destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }


    const clonedData = [...data] // we receive an array of string with 3 arguments each separated by |
   
    const SplitArrOfStr = clonedData.map((x) => x.split("|")) //on the first map we split the input of each string input into an array and we map from string input to an arrays
   
    const TicketList = SplitArrOfStr.map(([destination, price, status]) => new Ticket(destination, Number(price), status))
   
    const SortedTicketList = TicketList.sort((a, b) => {
        return typeof a[criteria] === 'number' 
        ? a[criteria] - b[criteria] 
        : a[criteria].localeCompare(b[criteria])})

        return SortedTicketList;
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));