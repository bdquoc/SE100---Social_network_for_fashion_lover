import { User } from '../../types';
import { useNavigate } from 'react-router-dom'; 

const useRegister = () => {
    const navigate = useNavigate();
    const register = async (email:string, password:string, confirmedPassword: string, firstName:string, lastName:string, phone: string): Promise<void> => {

        debugger;

        
        if (password !== confirmedPassword) {
            throw new Error("confirmed password not correct")
        }
        

        const url = "http://127.0.0.1:5000/api/v1/register"
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "firstName": firstName,
                    "lastName": lastName,
                    "phone": phone
                })
            })

            if (!response.ok) {
                throw new Error(`Register failed`);
            }

            console.log("register successfully")
            navigate("/login")
        } catch(e) {
            console.log("Some errors happen", e)
        }
            
    }

    return {register}

}

export default useRegister