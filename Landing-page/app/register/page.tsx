import LoginSignup from "@/components/Login"; // Use alias or relative path
import "../../styles/style.css"; // Ensure styles are applied

export default function LoginPage() {
    return (
        <div>
            {/* <h1>Login Page</h1> */}
            <LoginSignup />
        </div>
    );
}