
const Card = ({children,className="", ...rest}) => {
    const defaultClass = "card shadow-sm";
    return(
        <div className={`${defaultClass} ${className}`} {... rest}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
};

export default Card;