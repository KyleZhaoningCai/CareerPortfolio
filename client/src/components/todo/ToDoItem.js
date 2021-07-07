import React, {Fragment} from 'react';
import moment from 'moment';

const ToDoItem = ({todo}) => {

    const {description, priority, date} = todo;

    return (
        <Fragment>
           <li className="collection-item flow-text">{priority === 'High' && (<span className="custom-badge high-priority-badge">H</span>)  }
           {priority === 'Medium' && (<span className="custom-badge medium-priority-badge">M</span>)  }
           {priority === 'Low' && (<span className="custom-badge low-priority-badge">L</span>)  }
           {description}{(date !== null && date !== '') && ( <span>is to be done by {moment(date).format('DD-MM-YYYY')}</span>)}<span className="secondary-content">
           <a class="waves-effect waves-light btn edit-button"><i class="material-icons">edit</i></a>
           <a class="waves-effect waves-light btn delete-button"><i class="material-icons">delete_forever</i></a></span></li>
        </Fragment>
    )
}

export default ToDoItem;
