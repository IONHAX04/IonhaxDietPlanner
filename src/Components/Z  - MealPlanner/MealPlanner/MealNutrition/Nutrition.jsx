const Nutrition = (props) => {
    const {title, value} = props.details;

    return(
        <div className="cards col-lg-3">
            <h5>{title}</h5>
            <h6>{value}</h6>
        </div>
    )
}

export default Nutrition;