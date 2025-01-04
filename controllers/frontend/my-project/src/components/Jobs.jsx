import React, { useState } from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  // States for filters
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");

  // Filtered job based on the selected filters
  const filteredJob = allJobs.find((job) => {
    const matchesLocation = locationFilter
      ? job.location.toLowerCase() === locationFilter.toLowerCase()
      : true;
    const matchesIndustry = industryFilter
      ? job.industry.toLowerCase() === industryFilter.toLowerCase()
      : true;
    const matchesSalary = salaryFilter
      ? job.salaryRange === salaryFilter
      : true;

    return matchesLocation && matchesIndustry && matchesSalary;
  });

  return (
    <div className="max-w-7xl mx-auto mt-5 flex gap-5">
      {/* Filter Sidebar */}
      <div className="w-1/4">
        <FilterCard
          setLocationFilter={setLocationFilter}
          setIndustryFilter={setIndustryFilter}
          setSalaryFilter={setSalaryFilter}
        />
      </div>

      {/* Job Card */}
      <div className="flex-1">
        {filteredJob ? (
          <Job job={filteredJob} />
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No matching jobs found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
