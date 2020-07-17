// Function to convert miles from feet.
function feetToMile (feet) {
    if (0 <= feet) {
        var mile = (feet / 5280);
        return mile;
    }
    else {
        return "Please avoid negative value."
    }
}

// The function of calculating wood.
function woodCalculator (chair, table, bed) {
    if (0 <= chair) {
        var chairWood = (chair * 1);
        if (0 <= table){
            var tableWood = (table * 3);
            if (0 <= bed){
                var bedWood = (bed * 5);
                var total = (chairWood + tableWood + bedWood);
                return total;
            }
            else {
                return "Please avoid negative Value."
            }
        }
        else {
            return "Please avoid negative value."
        }
    }
    else {
        return "Please avoid negative value."
    }
}

// Function for calculating bricks.
function brickCalculator (building) {
    var feetBricks = 1000;
    if (building >= 0 && building <= 10) {
        var totalFeet = (building * 15);
        var totalBricks = (totalFeet * feetBricks); 
        return totalBricks;
    }
    else if (building >= 0 && building <= 20) {
        var downTenBuildingBricks = 30000;
        totalFeet = (building * 12);
        totalBricks = ((totalFeet * feetBricks) + downTenBuildingBricks);
        return totalBricks;
    }    
    else if (building >= 0 && building >= 21) {
        downTenBuildingBricks = 30000;
        var downTenToTwenty = 20000;
        totalFeet = (building * 10);
        var extraTotalBricks = (downTenBuildingBricks + downTenToTwenty);
        totalBricks = ((totalFeet * feetBricks) + extraTotalBricks);
        return totalBricks;
    }
    else {
        return "Please avoid negative value."
    }
}


// Function to find the smallest name.
function tinyFriend (names) {
    var smallName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < smallName.length) {
            smallName = currentName;
        }
    }
    return smallName;  
} 