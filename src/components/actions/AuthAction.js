import { Actions } from 'react-native-router-flux';
export const LoginUser = ({phoneNumber, password }) =>{
    return (dispatch) => {
        dispatch({ type:'LoginUser' });

        fetch('http://echespos.com/jawaahiruapi/index.php',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cmd: '102000',
                phone: phoneNumber,
                password: password
              })
        })

    }
}