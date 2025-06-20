import * as motion from "motion/react-client";

const While = () => {
  return (
    <div className="flex justify-center items-start mt-[100rem]">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0.2 }}
          whileInView={{
            scale: 1.5,
            opacity: 2,
            y: -200,
          }}
          transition={{ duration: 2 }}
          className="bg-white rounded-lg p-6 shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-2 text-black">Amazing Card</h2>
          <p className="text-gray-600">
            This card animates beautifully into view!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default While;
