use hotel_hub;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "Bart Simpson",
        email: "bartj@email.com",
        check_status: true
    },
    {
        name: "Marj Simpson",
        email: "marj@email.com",
        check_status: true
    },
    {
        name: "Homer Simpson",
        email: "homer@email.com",
        check_status: true
    },
    {
        name: "Lisa Simpson",
        email: "lisa@email.com",
        check_status: true
    }
]);