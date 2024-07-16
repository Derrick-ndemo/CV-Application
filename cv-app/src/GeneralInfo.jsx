
function GeneralInfo() {

    return (
        <fieldset className="gi">
            <legend>
                <h1>General Info</h1> 
            </legend>
        <div className="general-info">
            <div className="first">
                <p>First Name:</p>
                <input type="text" placeholder="Enter First Name" />
            </div>
            <div className="last">
                <p>Last Name:</p>
                <input type="text" placeholder="Enter Last Name" />
            </div>
            <div className="email">
                <p>Email:</p>
                <input type="email" placeholder="Enter Email Address" />
            </div>
            <div className="phone">
                <p>Phone Number:</p>
                <input type="text" placeholder="xxx-xxx-xxx" />
            </div>
        </div>
        </fieldset>
    )
}

export default GeneralInfo;