import React,{useState} from 'react'
import PropTypes from 'prop-types'

const GreetingF = (props) => {
    const[age,setage]=useState(29);
    const birthDay = () =>{
        setage(age+1)
    }
    return (
        <div>
            <h1>
                ¡HOLA  {props.name} DESDE COMPONENTE FUNCIONAL!
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthDay}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};

GreetingF.propTypes = {
    name: PropTypes.string
};

export default GreetingF
