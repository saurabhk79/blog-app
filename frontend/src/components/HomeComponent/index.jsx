import {useSelector} from "react-redux"
// import {makeAuthRegister} from "../../services/auth"

const HomeComponent = () => {
    const user = useSelector((state)=> state.auth);
    console.log(user);

    return (
    <div>HomeComponent</div>
  )
}

export default HomeComponent