import React from 'react'
const data = [
    { region: "North America", clicks: 1200, percentage: 20 },
    { region: "Europe", clicks: 800,  percentage: 20 },
    { region: "Asia", clicks: 1500,  percentage: 20  },
    { region: "South America", clicks: 700,  percentage: 20  },
    { region: "Australia", clicks: 300,  percentage: 20  },
    // Add more regions as necessary
  ];
function LinkEngagementLocationsComponent() {
    return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold mb-4">Link Clicks by Region</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Region</th>
                  <th className="px-4 py-2 text-left">Clicks</th>
                  <th className="px-4 py-2 text-left">Percentage %</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="border px-4 py-2">{item.region}</td>
                    <td className="border px-4 py-2">{item.clicks}</td>
                    <td className="border px-4 py-2">{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default LinkEngagementLocationsComponent