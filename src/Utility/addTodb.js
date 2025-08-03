import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('readList');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }  
    else{
        return [];
    }
}

const addtoStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)){
        console.log("Already in read list")
    }
    else {
            storedList.push(id);
            const storedListStr = JSON.stringify(storedList);
            localStorage.setItem('readList', storedListStr);
            toast(' This book is added to your read list', )
        
    }
}

const getStoredWishlist = () => {
    const storedListStr = localStorage.getItem('wishlist');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }  
    else{
        return [];
    }

}

const addtoStoredWishlist = (id) => {
    const storedList = getStoredWishlist();
    if (storedList.includes(id)){
        console.log("Already in wishlist")
    }
    else {
            storedList.push(id);
            const storedListStr = JSON.stringify(storedList);
            localStorage.setItem('wishlist', storedListStr);
            toast(' This book is added to your wish list', )
        
    }

}

export { addtoStoredReadList, addtoStoredWishlist, getStoredReadList, getStoredWishlist };