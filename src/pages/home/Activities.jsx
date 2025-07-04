import { activitiesList } from "../../data/Activities";
import { motion } from "framer-motion";

export default function Activities() {
  return (
    <>
      <div id="activities" className="bg-[#f1f5f7]">
        <div className="container-main py-5 lg:py-10">
          <div className="space-y-5 lg:space-y-7">
            <h1 className="heading-section  text-center lg:text-left">
              Recent Activities
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activitiesList.map((activity, index) => (
                <motion.a
                  key={index}
                  // href=""
                  className="block rounded-xl bg-white"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <img
                    src={activity.img_source}
                    alt={activity.title}
                    className="rounded-t-xl h-[200px] w-full object-cover"
                  />
                  <div className="flex flex-col gap-3 p-2 text-sm justify-between">
                    <p className="font-light w-fit bg-tags text-white">
                      {activity.date}
                    </p>
                    <h2 className="font-bold text-base text-center text-highlight">
                      {activity.title}
                    </h2>
                    <p className="font-light text-justify">{activity.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
