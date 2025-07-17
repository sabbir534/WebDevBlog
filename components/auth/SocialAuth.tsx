import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../common/Button";

const SocialAuth = () => {
    return (
        <div className="flex gap-2 flex-col md:flex-row justify-between">
            <Button type="button" label="Continue with GithHub" outlined icon={FaGithub} onClick={() => console.log("GitHub Login")} />
            <Button type="button" label="Continue with Google" outlined icon={FaGoogle} onClick={() => console.log("Google Login")} />
        </div>
    );
}

export default SocialAuth;