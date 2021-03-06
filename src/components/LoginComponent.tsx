import React from 'react'

interface LoginInfo {
    info: string
}

export const LoginComponent:React.FC<LoginInfo> = ({info}) => {
    return (
        <div>
            <div className="form-group">
                <label>{info}</label>
                <input type={info} className="form-control" id={info}/>
            </div>            
        </div>
    )
}

export default LoginComponent