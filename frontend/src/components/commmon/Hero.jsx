import { useNavigate } from "react-router"

const Hero = () => {

    const navigate = useNavigate()
    return (
        <div>
            <div className="hero min-h-[80vh] ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Organize your work and life, finally.</h1>
                        <p className="py-6">
                        Simplify life for both you and your team with the world’s #1 task manager and to-do list app.
                        </p>
                        <p>374K+ ★★★★★ reviews </p>
                        <button className="btn my-4" onClick={()=>navigate('/my-todos')}>Get Started</button>
                    </div>
                </div>
            </div>
            {/* <SignUp /> */}
        </div>
    )
}

export default Hero
