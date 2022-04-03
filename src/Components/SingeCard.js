import './SingleCard.css'

const SingleCard = ({ card, handleCHoice, flipped, disabled }) => {

    const handleClick = () => {
        if (!disabled) {
            handleCHoice(card)
        }

    }

    return (
        <div className='card' >
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt="cardFront" />

                <img
                    className='back'
                    src="/img/cover.png"
                    onClick={handleClick}
                    alt="cardBack" />

            </div>
        </div>
    );
}

export default SingleCard;