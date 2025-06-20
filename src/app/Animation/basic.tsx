import * as motion from "motion/react-client";

export default function BasicAnimation() {
  return (
    <div>
      <motion.div
        initial={{ x: 0 ,y:0}}
        animate={{ x: 300, rotate: 360 }}
        transition={{duration:2}}

    

        className="bg-amber-300 h-10 w-10 border-2"
      />
    </div>
  );
}
