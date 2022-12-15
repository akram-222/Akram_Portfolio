function Image({ path = '1', className = 'w-4 h-4' }) {
    function clsx(className: string, arg1: string): string | undefined {
        throw new Error("Function not implemented.");
    }

    return (
        <img
            src={`https://assets.codepen.io/3685267/${path}.jpg`}
            alt=""
            className={clsx(className, 'rounded-full')}
        />
    );
}
export default Image