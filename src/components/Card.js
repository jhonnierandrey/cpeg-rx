function Card({color, title, content, updateState}){
    return(
        <div className={`card ${color} mb-3 ps-0 px-0`}>
            <div className="card-header">{title}</div>
            <div className="card-body">
                <select
                    className="form-select"
                    size="3"
                    aria-label="size 3 select example"
                    onChange={(e) => updateState(content[e.target.value])}
                >
                    {
                        content.map((option, index) => (
                            <option value={index} key={index}>
                                {option}
                            </option>
                        ))
                    }
                </select>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
        </div>
    )
}

export default Card;