import React from 'react';

const EditExpensePage = (props) => {
    
    return (
        <div>
            This is from Edit expense with id {props.match.params.id}
        </div>
        )
    }

export default EditExpensePage;