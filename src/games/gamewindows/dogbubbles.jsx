export const DogBubbles = () => {
    return (
        <p>
            <iframe src={`${import.meta.env.BASE_URL}game_files/dog_bubbles/index.html`} width="270px" height="600px"></iframe>
        </p>
    );
}