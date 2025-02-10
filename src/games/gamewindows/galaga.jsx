
export const Galaga = () => {
    return (
        <p>
            <iframe src={`${import.meta.env.BASE_URL}game_files/galaga_online/index.html`} width="480px" height="600px"></iframe>
        </p>
    );
}