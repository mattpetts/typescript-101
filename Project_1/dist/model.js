var displayName = "Matt's Desk";
var inventoryType = "funiture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
function getInventoryItem(trackingNumber) {
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
