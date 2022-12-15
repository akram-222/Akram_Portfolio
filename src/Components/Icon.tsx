function Icon({ path = 'options', className = 'w-4 h-4' }) {
    function clsx(className: string): string | undefined {
        throw new Error("Function not implemented.");
    }

    return (
        <img
            src={`https://assets.codepen.io/3685267/${path}.svg`}
            alt=""
            className={clsx(className)}
        />
    );
}

export default Icon