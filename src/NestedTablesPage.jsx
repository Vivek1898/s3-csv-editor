// pages/nested-tables.js

import React from "react";
import NestedTables from "./components/NestedTables.jsx";

const data = [
    {
        campaignId: "C1",
        campaignName: "Campaign 1",
        adGroups: [
            {
                adGroupId: "AG1",
                adGroupName: "Ad Group 1",
                ads: [
                    {
                        adId: "AD1",
                        adName: "Ad 1",
                        adContent: "Ad content 1"
                    },
                    {
                        adId: "AD2",
                        adName: "Ad 2",
                        adContent: "Ad content 2"
                    }
                ]
            },
            {
                adGroupId: "AG2",
                adGroupName: "Ad Group 2",
                ads: [
                    {
                        adId: "AD3",
                        adName: "Ad 3",
                        adContent: "Ad content 3"
                    },
                    {
                        adId: "AD4",
                        adName: "Ad 4",
                        adContent: "Ad content 4"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C2",
        campaignName: "Campaign 2",
        adGroups: [
            {
                adGroupId: "AG3",
                adGroupName: "Ad Group 3",
                ads: [
                    {
                        adId: "AD5",
                        adName: "Ad 5",
                        adContent: "Ad content 5"
                    },
                    {
                        adId: "AD6",
                        adName: "Ad 6",
                        adContent: "Ad content 6"
                    }
                ]
            },
            {
                adGroupId: "AG4",
                adGroupName: "Ad Group 4",
                ads: [
                    {
                        adId: "AD7",
                        adName: "Ad 7",
                        adContent: "Ad content 7"
                    },
                    {
                        adId: "AD8",
                        adName: "Ad 8",
                        adContent: "Ad content 8"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C3",
        campaignName: "Campaign 3",
        adGroups: [
            {
                adGroupId: "AG5",
                adGroupName: "Ad Group 5",
                ads: [
                    {
                        adId: "AD9",
                        adName: "Ad 9",
                        adContent: "Ad content 9"
                    },
                    {
                        adId: "AD10",
                        adName: "Ad 10",
                        adContent: "Ad content 10"
                    }
                ]
            },
            {
                adGroupId: "AG6",
                adGroupName: "Ad Group 6",
                ads: [
                    {
                        adId: "AD11",
                        adName: "Ad 11",
                        adContent: "Ad content 11"
                    },
                    {
                        adId: "AD12",
                        adName: "Ad 12",
                        adContent: "Ad content 12"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C4",
        campaignName: "Campaign 4",
        adGroups: [
            {
                adGroupId: "AG7",
                adGroupName: "Ad Group 7",
                ads: [
                    {
                        adId: "AD13",
                        adName: "Ad 13",
                        adContent: "Ad content 13"
                    },
                    {
                        adId: "AD14",
                        adName: "Ad 14",
                        adContent: "Ad content 14"
                    }
                ]
            },
            {
                adGroupId: "AG8",
                adGroupName: "Ad Group 8",
                ads: [
                    {
                        adId: "AD15",
                        adName: "Ad 15",
                        adContent: "Ad content 15"
                    },
                    {
                        adId: "AD16",
                        adName: "Ad 16",
                        adContent: "Ad content 16"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C5",
        campaignName: "Campaign 5",
        adGroups: [
            {
                adGroupId: "AG9",
                adGroupName: "Ad Group 9",
                ads: [
                    {
                        adId: "AD17",
                        adName: "Ad 17",
                        adContent: "Ad content 17"
                    },
                    {
                        adId: "AD18",
                        adName: "Ad 18",
                        adContent: "Ad content 18"
                    }
                ]
            },
            {
                adGroupId: "AG10",
                adGroupName: "Ad Group 10",
                ads: [
                    {
                        adId: "AD19",
                        adName: "Ad 19",
                        adContent: "Ad content 19"
                    },
                    {
                        adId: "AD20",
                        adName: "Ad 20",
                        adContent: "Ad content 20"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C6",
        campaignName: "Campaign 6",
        adGroups: [
            {
                adGroupId: "AG11",
                adGroupName: "Ad Group 11",
                ads: [
                    {
                        adId: "AD21",
                        adName: "Ad 21",
                        adContent: "Ad content 21"
                    },
                    {
                        adId: "AD22",
                        adName: "Ad 22",
                        adContent: "Ad content 22"
                    }
                ]
            },
            {
                adGroupId: "AG12",
                adGroupName: "Ad Group 12",
                ads: [
                    {
                        adId: "AD23",
                        adName: "Ad 23",
                        adContent: "Ad content 23"
                    },
                    {
                        adId: "AD24",
                        adName: "Ad 24",
                        adContent: "Ad content 24"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C7",
        campaignName: "Campaign 7",
        adGroups: [
            {
                adGroupId: "AG13",
                adGroupName: "Ad Group 13",
                ads: [
                    {
                        adId: "AD25",
                        adName: "Ad 25",
                        adContent: "Ad content 25"
                    },
                    {
                        adId: "AD26",
                        adName: "Ad 26",
                        adContent: "Ad content 26"
                    }
                ]
            },
            {
                adGroupId: "AG14",
                adGroupName: "Ad Group 14",
                ads: [
                    {
                        adId: "AD27",
                        adName: "Ad 27",
                        adContent: "Ad content 27"
                    },
                    {
                        adId: "AD28",
                        adName: "Ad 28",
                        adContent: "Ad content 28"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C8",
        campaignName: "Campaign 8",
        adGroups: [
            {
                adGroupId: "AG15",
                adGroupName: "Ad Group 15",
                ads: [
                    {
                        adId: "AD29",
                        adName: "Ad 29",
                        adContent: "Ad content 29"
                    },
                    {
                        adId: "AD30",
                        adName: "Ad 30",
                        adContent: "Ad content 30"
                    }
                ]
            },
            {
                adGroupId: "AG16",
                adGroupName: "Ad Group 16",
                ads: [
                    {
                        adId: "AD31",
                        adName: "Ad 31",
                        adContent: "Ad content 31"
                    },
                    {
                        adId: "AD32",
                        adName: "Ad 32",
                        adContent: "Ad content 32"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C9",
        campaignName: "Campaign 9",
        adGroups: [
            {
                adGroupId: "AG17",
                adGroupName: "Ad Group 17",
                ads: [
                    {
                        adId: "AD33",
                        adName: "Ad 33",
                        adContent: "Ad content 33"
                    },
                    {
                        adId: "AD34",
                        adName: "Ad 34",
                        adContent: "Ad content 34"
                    }
                ]
            },
            {
                adGroupId: "AG18",
                adGroupName: "Ad Group 18",
                ads: [
                    {
                        adId: "AD35",
                        adName: "Ad 35",
                        adContent: "Ad content 35"
                    },
                    {
                        adId: "AD36",
                        adName: "Ad 36",
                        adContent: "Ad content 36"
                    }
                ]
            }
        ]
    },
    {
        campaignId: "C10",
        campaignName: "Campaign 10",
        adGroups: [
            {
                adGroupId: "AG19",
                adGroupName: "Ad Group 19",
                ads: [
                    {
                        adId: "AD37",
                        adName: "Ad 37",
                        adContent: "Ad content 37"
                    },
                    {
                        adId: "AD38",
                        adName: "Ad 38",
                        adContent: "Ad content 38"
                    }
                ]
            },
            {
                adGroupId: "AG20",
                adGroupName: "Ad Group 20",
                ads: [
                    {
                        adId: "AD39",
                        adName: "Ad 39",
                        adContent: "Ad content 39"
                    },
                    {
                        adId: "AD40",
                        adName: "Ad 40",
                        adContent: "Ad content 40"
                    }
                ]
            }
        ]
    }
];

const NestedTablesPage = () => {
    return (
        <div>
            <h1>Nested Tables</h1>
            <NestedTables data={data} />
        </div>
    );
};

export default NestedTablesPage;
