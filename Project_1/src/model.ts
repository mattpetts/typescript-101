let displayName: string = "Matt's Desk";
let inventoryType: string = "funiture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: string | number = 425;

interface InventoryItem {
    displayName: string;
    inventoryType: "computer" | "furniture";
    trackingNumber: string;
    createDate: Date;
    originalCost?: number;

    addNote?: (note: string) => string
}

function getInventoryItem(trackingNumber: string) : InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "test Item",
    inventoryType: 'computer',
    trackingNumber: '334566YU',
    createDate: new Date
});