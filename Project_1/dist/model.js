var displayName = "Matt's Desk";
var inventoryType = "funiture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "test Item",
    inventoryType: 'computer',
    trackingNumber: '334566YU',
    createDate: new Date
});
