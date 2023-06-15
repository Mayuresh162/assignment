export const generateRandomNumber = () => {
    return Math.floor(Math.random() * (60 - 10 + 1)) + 10;
}

export const filterData = (searchText, itemList) => {
    return itemList.filter(item => item.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
};