import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"
import { ChevronLeft, ChevronRight, Slash } from "lucide-react"
import img1 from "../assets/P8194728.JPEG"
import img2 from "../assets/P4151471.JPEG"
import img3 from "../assets/P8314797.JPEG"
import img4 from "../assets/P9014923.JPEG"
import img5 from "../assets/fxn 2025-12-01 175047.778.JPEG"
import img6 from "../assets/fxn 2025-12-01 180733.331.JPEG"
import img7 from "../assets/P7133263.JPEG"
import img8 from "../assets/PB295733.JPEG"
import img9 from "../assets/PC015744.JPEG"
const Preloader = () => {
    const [scope, animate] = useAnimate()
    async function myAnimation() {
        await animate("#imageCon", {
            opacity: 0,
        }, { duration: 0 });

        await animate("#imageCon", {
            opacity: 1,
        }, {
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
        });
    }
    useEffect(() => {
        myAnimation()
    }, [])

    const move = {
        hidden: (i) => ({
            x: 0,
            opacity: 0,
        }),
        show: (i) => ({
            x: i[0],
            opacity: 1,
            transition: {
                delay: i[1],
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            }
        }),
    }

    const imgChange = {
        hidden: {
            opacity: 0
        },
        show: (i) => ({
            opacity: 1,
            transition: {
                duration: i[1],
                delay: i[0],
                ease: "easeInOut",
            }
        })
    }

    const containerUp = {
        hidden: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        show: {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            display: "none",
            transition: {
                duration: 0.6,
                delay: 5.0,
                ease: "easeInOut",
            }
        }
    }
    return (
        <motion.div className="bg-linear-to-b from-amber-50 via-orange-50 to-yellow-100 h-full w-full absolute inset-0 overflow-hidden z-50" ref={scope}
            variants={containerUp}
            initial="hidden"
            animate="show">
            <motion.section className="flex flex-col md:flex-row justify-center items-center h-full w-full gap-18 md:gap-0">
                <div className="overflow-y-clip">
                    <motion.h1 className="text-cyan-400 font-bold text-[32px] md:text-[60px] font-mono flex items-center justify-center"
                        variants={move}
                        initial="hidden"
                        animate="show"
                        custom={[-20, 0.1]}><ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />QUY</motion.h1>
                </div>
                <motion.div id="imageCon" className="w-[200px] h-[100px] relative flex justify-center items-center my-4 md:my-0">
                    <motion.img src={img1} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[0.5, 0.7]} />
                    <motion.img src={img2} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[1.2, 0.6]} />
                    <motion.img src={img3} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[1.8, 0.5]} />
                    <motion.img src={img4} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[2.3, 0.4]} />
                    <motion.img src={img8} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[2.7, 0.3]} />
                    <motion.img src={img9} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[3.0, 0.2]} />
                    <motion.img src={img7} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[3.2, 0.2]} />
                    <motion.img src={img5} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[3.4, 0.2]} />
                    <motion.img src={img6} alt="" className="object-cover absolute" variants
                        ={imgChange} initial="hidden" animate="show" custom={[3.6, 0.2]} />
                </motion.div>
                <div className="overflow-y-clip">
                    <motion.h1 className="text-amber-400 font-bold text-[32px] md:text-[60px] font-mono flex items-center justify-center"
                        variants={move}
                        initial="hidden"
                        animate="show"
                        custom={[20, 0.1]}>PORTFOLIO<Slash className="w-7 h-7 md:w-10 md:h-10" /><ChevronRight className="w-8 h-8 md:w-12 md:h-12" /></motion.h1>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default Preloader