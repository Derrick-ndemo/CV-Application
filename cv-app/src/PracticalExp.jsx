

function PracticalExp() {

    return (
        <fieldset className="prac">
            <legend>
                <h2>Work Experence</h2>
            </legend>
            <div className="practical-exp">
                <div className="company">
                    <p>Company Name:</p>
                    <input type="text" />
                </div>
                <div className="pos-title">
                    <p>Position:</p>
                    <input type="text" />
                </div>
                <div className="roles">
                    <p>Roles:</p>
                    <input type="text" />
                </div>
                <div className="date-worked">
                    <p>Period worked:</p>
                    <input type="date" />
                </div>
            </div>
        </fieldset>
    )
}

export default PracticalExp;