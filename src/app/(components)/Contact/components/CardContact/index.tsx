import { CardContactProps } from './types'
import { motion } from 'framer-motion'

export default function CardContact({
  text,
  title,
  socials,
  animation,
  Icon,
}: CardContactProps) {
  return (
    <motion.div
      animate={{
        y: animation?.isInView ? 0 : -100,
        opacity: animation?.isInView ? 1 : 0,
      }}
      transition={{ duration: 1, delay: 0.3 }}
      className="w-full md:w-1/3 px-4 mb-10 md:mb-0 cursor-pointer"
    >
      <div className="max-w-xs mx-auto text-center">
        <div className="inline-flex mb-6 items-center justify-center w-12 h-12 bg-black border-2 border-primary rounded-full ">
          <Icon className="fill-primary" fontSize={25} />
        </div>
        <h3 className="mb-2 text-white text-2xl md:text-3xl leading-9  font-bold hover:text-primary transition duration-700">
          {title}
        </h3>
        <p className="text-gray-500 text-xl  font-medium">{text}</p>
        <div className="flex justify-center  mt-5">
          {socials
            ? socials?.map((element) => (
                <div key={element.id}>
                  <motion.a
                    whileHover={{
                      y: -10,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mr-8 text-green-500 hover:text-green-600"
                    target="_blank"
                    href={element.link}
                    rel="noreferrer"
                  >
                    <element.Icon fontSize={20} className="fill-primary " />
                  </motion.a>
                </div>
              ))
            : null}
        </div>
      </div>
    </motion.div>
  )
}
