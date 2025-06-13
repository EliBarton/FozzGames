import CommentsSection from '../gamecomments/comments';
export const AMFAS = () => {
    return (
        <>
        <div>
            <iframe src={`${import.meta.env.BASE_URL}game_files/all_my_friends_are_squares/AMFAS.html`} width="640px" height="360px" title="All My Friends Are Squares"></iframe>
        </div>
        <div>
        <CommentsSection gameId="allmyfriendsaresquares" />
        </div>
        </>
    )
}