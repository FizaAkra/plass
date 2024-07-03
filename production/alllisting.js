   // Import Web3
   import Web3 from 'web3';

   // Define your contract ABIs (replace with your actual ABIs)
   const cropAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_harvestDate",
          "type": "string"
        }
      ],
      "name": "addCrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "productName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "category",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "harvestDate",
          "type": "string"
        }
      ],
      "name": "CropAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "CropDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "productName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "category",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "harvestDate",
          "type": "string"
        }
      ],
      "name": "CropUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "deleteCrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_productName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_harvestDate",
          "type": "string"
        }
      ],
      "name": "editCropDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cropCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "crops",
      "outputs": [
        {
          "internalType": "string",
          "name": "productName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "harvestDate",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getCrop",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "productName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "category",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "imageHash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "harvestDate",
              "type": "string"
            }
          ],
          "internalType": "struct CropSystem.Crop",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
    ];;
   const farmAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_farmName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_village",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_country",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_farmReference",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_area",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageHash",
          "type": "string"
        }
      ],
      "name": "addFarm",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "deleteFarm",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_farmName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_village",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_country",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_farmReference",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_area",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageHash",
          "type": "string"
        }
      ],
      "name": "editFarmDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "farmName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "village",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "country",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "farmReference",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "area",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        }
      ],
      "name": "FarmAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "FarmDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "farmName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "village",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "country",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "farmReference",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "area",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        }
      ],
      "name": "FarmUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "farmCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "farms",
      "outputs": [
        {
          "internalType": "string",
          "name": "farmName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "village",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "country",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "farmReference",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "area",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getFarm",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "farmName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "village",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "country",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "farmReference",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "area",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "imageHash",
              "type": "string"
            }
          ],
          "internalType": "struct FarmSystem.Farm",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
   const livestockAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_color",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_maturity",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_breed",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_age",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_refInfo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_birthInfo",
          "type": "string"
        }
      ],
      "name": "addLivestock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_livestockId",
          "type": "uint256"
        }
      ],
      "name": "deleteLivestock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_livestockId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_color",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_maturity",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_breed",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_age",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_refInfo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_birthInfo",
          "type": "string"
        }
      ],
      "name": "editLivestock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "livestockId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "color",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "maturity",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "category",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "breed",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "age",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "refInfo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "birthInfo",
          "type": "string"
        }
      ],
      "name": "LiveStockAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "livestockId",
          "type": "uint256"
        }
      ],
      "name": "LiveStockDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "livestockId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "color",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "maturity",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "category",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "breed",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "age",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "refInfo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "birthInfo",
          "type": "string"
        }
      ],
      "name": "LiveStockUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getLivestocks",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "livestockId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "color",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "maturity",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "category",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "breed",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "age",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "refInfo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "imageHash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "birthInfo",
              "type": "string"
            }
          ],
          "internalType": "struct LivestockSystem.LiveStock[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "livestock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "livestockId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "color",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "maturity",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "category",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "breed",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "age",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "refInfo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "imageHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "birthInfo",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "livestockCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

   // Define your contract addresses
   const contractAddressCrop = '0xb1513451d82f5106861ba2a3Ccdf05C7990b5d9c';
   const contractAddressFarm = '0x7B66C579EfF25378B2eEab702e3FBeCa4D8ad1B7';
   const contractAddressLivestock = '0xA75F066760806DF6Ece9678D71395d88365CdE59';

   // Initialize Web3
   const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // Replace with your actual provider URL

   // Initialize your contract instances for crops, farms, and livestock
   const contractCrop = new web3.eth.Contract(cropAbi, contractAddressCrop);
   const contractFarm = new web3.eth.Contract(farmAbi, contractAddressFarm);
   const contractLivestock = new web3.eth.Contract(livestockAbi, contractAddressLivestock);

   async function loadAllListings() {
       await loadCrops();
       await loadFarms();
       await loadLivestocks();
   }

   async function loadCrops() {
       const cropItems = document.getElementById('cropItems');
       if (!cropItems) return;

       cropItems.innerHTML = 'Loading crop data...';

       try {
           const cropCount = await contractCrop.methods.cropCount().call();
           let cropList = '';

           for (let i = 0; i < cropCount; i++) {
               // Load crop data and add to cropList
               // Replace with your logic to load crop data
           }

           cropItems.innerHTML = cropList || 'No crops available.';
       } catch (error) {
           console.error('Error loading crops:', error);
           cropItems.innerHTML = 'Error loading crops.';
       }
   }

   async function loadFarms() {
       const farmItems = document.getElementById('farmItems');
       if (!farmItems) return;

       farmItems.innerHTML = 'Loading farm data...';

       try {
           const farmCount = await contractFarm.methods.farmCount().call();
           let farmList = '';

           for (let i = 0; i < farmCount; i++) {
               // Load farm data and add to farmList
               // Replace with your logic to load farm data
           }

           farmItems.innerHTML = farmList || 'No farms available.';
       } catch (error) {
           console.error('Error loading farms:', error);
           farmItems.innerHTML = 'Error loading farms.';
       }
   }

   async function loadLivestocks() {
       const livestockItems = document.getElementById('livestockItems');
       if (!livestockItems) return;

       livestockItems.innerHTML = 'Loading livestock data...';

       try {
           const livestockCount = await contractLivestock.methods.livestockCount().call();
           let livestockList = '';

           for (let i = 0; i < livestockCount; i++) {
               // Load livestock data and add to livestockList
               // Replace with your logic to load livestock data
           }

           livestockItems.innerHTML = livestockList || 'No livestock available.';
       } catch (error) {
           console.error('Error loading livestock:', error);
           livestockItems.innerHTML = 'Error loading livestock.';
       }
   }

   // Call the function to load all listings when the page loads
   window.addEventListener('load', loadAllListings);