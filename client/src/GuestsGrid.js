import GuestCard from "./GuestCard";

const GuestsGrid = ({guests, deleteGuest}) =>{
    if (!guests)return <h2>Loading</h2>
    const guestsList = guests.map((guest)=>{
        return (
            <>
                <GuestCard guest={guest} deleteGuest={deleteGuest} key={guest._id}/>
            </>
        )
    });
    return (
        <>
            {guestsList}
        </>
    );
}

export default GuestsGrid;