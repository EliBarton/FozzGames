import CommentsSection from '../gamecomments/comments';
export const LoopyDogfights = () => {
    return (
        <>
        <div>
            <iframe src={`${import.meta.env.BASE_URL}game_files/loopy_dogfights/index.html`} width="864px" height="486px" title="Loopy Dogfights"></iframe>
        </div>
        <div>
        <CommentsSection gameId="loopydogfights" />
        </div>
        </>
    )
}