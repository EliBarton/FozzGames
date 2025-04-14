import CommentsSection from '../gamecomments/comments';
export const Galaga = () => {
    return (
        <>
        <div>
            <iframe src={`${import.meta.env.BASE_URL}game_files/galaga_online/index.html`} width="480px" height="600px"></iframe>
        </div>
        <div>
        <CommentsSection gameId="galaga" />
        </div>
        </>
    );
}