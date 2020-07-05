import React from 'react';
import '../Content/Content.scss';
import Card from '../Card/Card';



const Content = ({ data, isLoading, setModalDataSuccess }) => {
    return (

        <ul className="content__card-list">
            {
                isLoading
                    ? 'Please wait...'
                    : data.map((item) => {

                        return <Card key={item.name}
                            setModalDataSuccess={setModalDataSuccess}
                            data={item}
                        />
                    })
            }
        </ul>


    )
}



export default Content;