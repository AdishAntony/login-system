import React from 'react';

/**
 * The searchUser component is a simple stateless component, It simply provide a way to filter user
 * @param {*} props 
 */
const searchUser = (props) => {
    function handleChange(event){
        props.search(event.target.value);
    }
    return (
        <div className="row">
            <div id="custom-search-input">
                <div className="input-group col-md-12">
                    <input type="text" 
                        className="  search-query form-control" 
                        placeholder="Enter to search"
                        onChange={handleChange} />
                    <span className="input-group-btn">
                        <span className=" glyphicon glyphicon-search"></span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default searchUser;