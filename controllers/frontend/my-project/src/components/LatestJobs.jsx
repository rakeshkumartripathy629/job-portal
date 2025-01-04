import React from "react";
import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h1>
      {allJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJobs.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          No jobs available at the moment.
        </div>
      )}
    </div>
  );
};

export default LatestJobs;