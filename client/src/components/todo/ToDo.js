import React, {Fragment} from 'react';
import AddButton from './AddButton';
import FormModal from './FormModal';

const ToDo = () => {
    return (
        <Fragment>
            <ul class="collection with-header">
                <li class="collection-header">To Do List</li>
            </ul>
            <AddButton />
            <FormModal />
        </Fragment>
    )
}

export default ToDo;
