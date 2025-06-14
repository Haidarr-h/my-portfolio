import { FaLinkedin } from "react-icons/fa";

export default function HomePage() {
    return (
        <>
            <div className="bg-white">
                <div className="container-main pt-20">
                    <div className="flex flex-row justify-between">
                        <div className="space-y-5">
                            <h1 className="font-bold text-4xl">Turning Your Ideas into Real-World Digital Solutions</h1>
                            <h3>I'm Haidar, a software engineer ready to help build your dream application.</h3>
                            <button>View my projects</button>
                            <FaLinkedin color="blue"></FaLinkedin>
                        </div>

                        <div>
                            <img src="../src/assets/meReal.png" alt="photo Profile" className="w-[350px] h-auto mr-20"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}