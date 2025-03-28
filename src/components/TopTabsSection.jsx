import React, { useState } from "react";
import { siteData } from "./sitedata";

const TopTabsSection = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Booking");

  return (
    <>
    {/* Top Tab buttons............ */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          role="tablist"
        >
          {siteData?.tabs?.tabsArray1?.map((tab) => (
            <li className="me-2" role="presentation" key={tab.id}>
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg transition-all ${
                  activeTab === tab.id
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                role="tab"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

{/* opening data wrt top-tab1 btnns......... */}
      <div id="default-styled-tab-content">
        {siteData?.tabs?.tabsArray2?.map(({ id, content, Comp }) => (
          <div
            key={id}
            className={`p-4 rounded-lg bg-gray-50 ${
              activeTab === id ? "block" : "hidden"
            }`}
            role="tabpanel"
          >
            {Comp&& <Comp />}
          </div>
        ))}
      </div>
    </>
  );
};

export default TopTabsSection;
