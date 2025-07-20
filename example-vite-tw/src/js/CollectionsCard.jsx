import React from 'react';

const collections = [
    { id: 1, name: "Collection 1" },
    { id: 2, name: "Collection 2" },
    { id: 3, name: "Collection 3" },
    { id: 4, name: "Collection 4" },
    { id: 5, name: "Collection 5" },
    { id: 6, name: "Collection 6" },
    { id: 7, name: "Collection 7" },
    { id: 8, name: "Collection 8" },
];

const CollectionsCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Collections</h2>
            <p className="text-gray-600">Explore our curated collections of products.</p>
            <div className="mt-4 w-full overflow-hidden">
                <div className="flex gap-4 mt-4">
                {
                    collections.map((desc, index) =>{
                        return(
                            <div key={index.id} className="text-blue-500 hover:underline cursor-pointer w-[300px] overflow-hidden flex-shrink-0">{desc.name}</div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default CollectionsCard;