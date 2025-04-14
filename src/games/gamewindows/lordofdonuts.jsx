import CommentsSection from '../gamecomments/comments';
export const LordOfDonuts = () => {
    return (
        <>
        <div>
            <iframe src={`${import.meta.env.BASE_URL}game_files/lord_of_the_donuts/index.html`} width="864px" height="486px" title="Lord of the Donuts"></iframe>
        </div>
        <div>
        <CommentsSection gameId="lordofthedonuts" />
        </div>
        </>
    )
}