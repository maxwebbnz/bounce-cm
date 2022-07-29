import './Login.css'

import api from '../../api/handler'
export default function Login() {

    function sendLoginRequest() {
        api('get', '/users', null).then(function (response) {
            console.log(response)
        })
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <button onClick={() => sendLoginRequest()}>Login</button>
        </div>
    )

}