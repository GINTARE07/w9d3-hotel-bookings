import styled from 'styled-components';

const GuestCard = ({guest, deleteGuest}) =>{


    const Container = styled.div`
    width: 50%;
    margin: auto;
    background-color: lightblue;
    border-radius: 10px;
    border: solid darkblue;
    margin-bottom: 7px;
`

    return (
        <>
        <Container>
            <h1>{guest.name}</h1>
            <h1>{guest.email}</h1>
            <h1>{guest.checked}</h1>

            <button onClick={()=>deleteGuest(guest._id)}> 🗑 </button>
        </Container>
        </>
    )
}



export default GuestCard;