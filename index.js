let Riders = { RiderName: "" };
let Drivers = [];

function handleClick(type) {
    switch (type) {
        case "registerDriver":
            const DriverName = window.prompt('Enter Driver Name');
            const CarNumber = window.prompt('Enter Car Number');
            const CarX = window.prompt('Enter Location X');
            const CarY = window.prompt('Enter Location Y');
            Drivers.push({ DriverName, CarNumber, CarX, CarY });
            break;
        case "registerRider":
            const RiderName = window.prompt('Enter Rider Name');
            const RiderX = window.prompt('Enter Location X');
            const RiderY = window.prompt('Enter Location Y');
            Riders = { RiderName, RiderX, RiderY };
            break;
        case "startTrip":
            let cabInfo = {};
            if (Riders.RiderName !== "") {
                if(Drivers.length){
                    const DestinationX = window.prompt('Enter Destination Location X');
                    const DestinationY = window.prompt('Enter Destination Location Y');

                    const distanceDestination = Math.sqrt((DestinationX  - Riders.RiderX)(DestinationX  - Riders.RiderX) + (DestinationY  - Riders.RiderY)(DestinationY  - Riders.RiderY));

                    for(let i=0 ; i<Drivers.length;i++){
                        const driverDestination = Math.sqrt((DestinationX  - Drivers[i].CarX)(DestinationX  - Drivers[i].CarX) + (DestinationY  - Drivers[i].CarY)(DestinationY  - Drivers[i].CarY));

                        if(driverDestination < distanceDestination){
                            cabInfo = {...Drivers[i],driverDestination};
                            break;
                        }
                    }
                    if(cabInfo.DriverName){
                        alert(`Driver name ${Drivers[i].DriverName} \n Cab Distance : ${driverDestination}  \n Destination Distance : ${distanceDestination}`);
                    }else{
                        alert('No cab found');
                    }
                }else{
                    alert('No Cab Found')
                }
            }else{
                alert('Please login')
            }
            break;
        case "logout":
            Riders = { RiderName: "" };
            break;
        default:
            break;
    }

}