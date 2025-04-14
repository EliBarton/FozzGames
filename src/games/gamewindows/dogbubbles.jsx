import CommentsSection from '../gamecomments/comments';
export const DogBubbles = () => {
    return (
        <>
        <div>
            <iframe src={`${import.meta.env.BASE_URL}game_files/dog_bubbles/index.html`} width="270px" height="600px"></iframe>
        </div>
        <div>
            <CommentsSection gameId="dogbubbles" />
        </div>
        </>
    );
}