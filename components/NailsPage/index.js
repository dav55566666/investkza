import React from 'react';
import NailsCard from '../../uikit/nails';


const NailsPage = (props) => {
    return (
        <div className='container'>
            <p className='nails__heading'>
                Токены к досрочному погашению
            </p>
            <a className='tokens__infolink'>Условия ввода и вывода денежных средств</a>
            <div className='nails__wrapper'>
                <div className='nails__items'>
                    <NailsCard />
                    <NailsCard />
                </div>
                <div className='nails__items'>
                    <NailsCard />
                    <NailsCard />
                </div>
            </div>
            <div className=''></div>
        </div>
    )
}

export default NailsPage;