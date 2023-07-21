import aboutImage from "../assets/images/about-image.png";
export const About=()=>{
    return(
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro architecto enim dolorum eius vero sapiente iste voluptatem eligendi consectetur. Consequuntur maxime impedit, harum autem eaque ut doloribus tenetur. Quidem nobis doloremque, eius delectus sunt ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit explicabo dolorum dolorem quia eligendi architecto quos praesentium itaque minima tenetur!
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}