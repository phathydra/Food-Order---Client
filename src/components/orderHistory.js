import React, { useEffect, useState } from "react"
import Order from "./order"
import './css/orderHistory.css'

const histories = [
    {time:'2024-10-08 14:08:23', items:['1 Food_1', '2 Food_2','1 Food_3', '1 Food_4'], totalAmount: 153000, paymentMethod:'Paypa', deliveryAdress:'1 Vo Van Ngan Street, Thu Duc, Ho Chi Minh City'},
    {time: '2024-10-08 14:08:23', items: ['2 7 Food_7', '1 18 Food_18'], totalAmount: 57265, paymentMethod: 'Cash', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-10-09 14:08:23', items: ['1 2 Food_2', '1 16 Food_16', '2 12 Food_12'], totalAmount: 192048, paymentMethod: 'PayPal', deliveryAdress: '789 Nguyen Van Cu Street, District 5, Ho Chi Minh City'},
    {time: '2024-10-10 14:08:23', items: ['1 8 Food_8', '1 17 Food_17', '2 19 Food_19'], totalAmount: 55697, paymentMethod: 'PayPal', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-11 14:08:23', items: ['3 17 Food_17', '1 5 Food_5', '1 11 Food_11', '3 15 Food_15'], totalAmount: 85092, paymentMethod: 'Bank Transfer', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-12 14:08:23', items: ['2 1 Food_1', '3 6 Food_6'], totalAmount: 131514, paymentMethod: 'Cash', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-10-13 14:08:23', items: ['3 8 Food_8', '1 1 Food_1'], totalAmount: 78574, paymentMethod: 'Cash', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-14 14:08:23', items: ['2 3 Food_3', '2 14 Food_14', '1 5 Food_5', '3 1 Food_1'], totalAmount: 85341, paymentMethod: 'Bank Transfer', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-10-15 14:08:23', items: ['3 17 Food_17', '3 9 Food_9', '1 15 Food_15', '2 8 Food_8'], totalAmount: 198534, paymentMethod: 'PayPal', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-16 14:08:23', items: ['2 3 Food_3', '2 19 Food_19', '2 1 Food_1', '1 11 Food_11'], totalAmount: 109433, paymentMethod: 'Credit Card', deliveryAdress: '246 Le Duan Street, District 3, Ho Chi Minh City'},

    {time: '2024-10-17 14:08:23', items: ['1 8 Food_8', '2 10 Food_10', '2 11 Food_11', '2 4 Food_4'], totalAmount: 140024, paymentMethod: 'Credit Card', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-18 14:08:23', items: ['2 6 Food_6', '2 1 Food_1', '1 12 Food_12', '2 19 Food_19'], totalAmount: 53303, paymentMethod: 'Bank Transfer', deliveryAdress: '246 Le Duan Street, District 3, Ho Chi Minh City'},
    {time: '2024-10-19 14:08:23', items: ['1 2 Food_2'], totalAmount: 152710, paymentMethod: 'Bank Transfer', deliveryAdress: '654 Bui Vien Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-20 14:08:23', items: ['1 19 Food_19', '1 6 Food_6'], totalAmount: 97560, paymentMethod: 'Cash', deliveryAdress: '1 Vo Van Ngan Street, Thu Duc, Ho Chi Minh City'},
    {time: '2024-10-21 14:08:23', items: ['3 8 Food_8', '2 19 Food_19', '3 5 Food_5', '3 18 Food_18'], totalAmount: 104948, paymentMethod: 'Bank Transfer', deliveryAdress: '246 Le Duan Street, District 3, Ho Chi Minh City'},
    {time: '2024-10-22 14:08:23', items: ['1 10 Food_10', '3 17 Food_17'], totalAmount: 135682, paymentMethod: 'PayPal', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-10-23 14:08:23', items: ['3 7 Food_7', '3 10 Food_10', '2 20 Food_20'], totalAmount: 56677, paymentMethod: 'PayPal', deliveryAdress: '654 Bui Vien Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-24 14:08:23', items: ['1 6 Food_6', '1 14 Food_14', '3 1 Food_1'], totalAmount: 199860, paymentMethod: 'Credit Card', deliveryAdress: '789 Nguyen Van Cu Street, District 5, Ho Chi Minh City'},
    {time: '2024-10-25 14:08:23', items: ['2 6 Food_6', '3 11 Food_11', '1 15 Food_15'], totalAmount: 116278, paymentMethod: 'Credit Card', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-26 14:08:23', items: ['2 12 Food_12', '2 18 Food_18', '2 3 Food_3'], totalAmount: 190392, paymentMethod: 'Cash', deliveryAdress: '654 Bui Vien Street, District 1, Ho Chi Minh City'},

    {time: '2024-10-27 14:08:23', items: ['3 8 Food_8', '3 4 Food_4', '1 3 Food_3'], totalAmount: 108940, paymentMethod: 'PayPal', deliveryAdress: '456 Le Lai Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-28 14:08:23', items: ['1 17 Food_17', '1 12 Food_12', '3 9 Food_9', '1 16 Food_16'], totalAmount: 167321, paymentMethod: 'Cash', deliveryAdress: '654 Bui Vien Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-29 14:08:23', items: ['3 16 Food_16', '1 17 Food_17', '1 13 Food_13'], totalAmount: 108452, paymentMethod: 'Credit Card', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-30 14:08:23', items: ['3 14 Food_14', '3 12 Food_12', '1 2 Food_2', '1 20 Food_20'], totalAmount: 193435, paymentMethod: 'Cash', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-10-31 14:08:23', items: ['1 10 Food_10', '1 2 Food_2', '2 6 Food_6', '3 18 Food_18'], totalAmount: 136639, paymentMethod: 'Bank Transfer', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-01 14:08:23', items: ['3 2 Food_2'], totalAmount: 66449, paymentMethod: 'PayPal', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-11-02 14:08:23', items: ['2 16 Food_16', '1 12 Food_12', '1 15 Food_15'], totalAmount: 144698, paymentMethod: 'Bank Transfer', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-03 14:08:23', items: ['1 5 Food_5', '3 15 Food_15', '1 18 Food_18'], totalAmount: 55503, paymentMethod: 'Cash', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-11-04 14:08:23', items: ['3 9 Food_9', '1 3 Food_3', '2 11 Food_11'], totalAmount: 122417, paymentMethod: 'PayPal', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-05 14:08:23', items: ['1 18 Food_18', '1 7 Food_7', '3 16 Food_16'], totalAmount: 54774, paymentMethod: 'Bank Transfer', deliveryAdress: '246 Le Duan Street, District 3, Ho Chi Minh City'},

    {time: '2024-11-06 14:08:23', items: ['3 6 Food_6', '1 9 Food_9'], totalAmount: 92077, paymentMethod: 'Credit Card', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-11-07 14:08:23', items: ['2 20 Food_20', '3 11 Food_11'], totalAmount: 62037, paymentMethod: 'Cash', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-08 14:08:23', items: ['1 5 Food_5', '1 4 Food_4'], totalAmount: 146475, paymentMethod: 'Credit Card', deliveryAdress: '654 Bui Vien Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-09 14:08:23', items: ['2 12 Food_12', '1 3 Food_3', '1 10 Food_10'], totalAmount: 112014, paymentMethod: 'Cash', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-10 14:08:23', items: ['1 1 Food_1', '3 14 Food_14'], totalAmount: 185938, paymentMethod: 'Credit Card', deliveryAdress: '789 Nguyen Van Cu Street, District 5, Ho Chi Minh City'},
    {time: '2024-11-11 14:08:23', items: ['2 4 Food_4', '2 15 Food_15', '3 7 Food_7'], totalAmount: 162879, paymentMethod: 'PayPal', deliveryAdress: '246 Le Duan Street, District 3, Ho Chi Minh City'},
    {time: '2024-11-12 14:08:23', items: ['1 20 Food_20', '1 19 Food_19', '2 16 Food_16'], totalAmount: 87161, paymentMethod: 'Cash', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-13 14:08:23', items: ['2 8 Food_8', '2 18 Food_18'], totalAmount: 50588, paymentMethod: 'Credit Card', deliveryAdress: '654 Bui Vien Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-14 14:08:23', items: ['1 10 Food_10', '2 14 Food_14'], totalAmount: 125425, paymentMethod: 'Bank Transfer', deliveryAdress: '789 Nguyen Van Cu Street, District 5, Ho Chi Minh City'},
    {time: '2024-11-15 14:08:23', items: ['1 15 Food_15', '1 5 Food_5', '1 16 Food_16'], totalAmount: 57941, paymentMethod: 'PayPal', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},

    {time: '2024-11-16 14:08:23', items: ['1 12 Food_12', '1 20 Food_20'], totalAmount: 152370, paymentMethod: 'Credit Card', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-11-17 14:08:23', items: ['3 3 Food_3', '2 2 Food_2'], totalAmount: 137718, paymentMethod: 'Cash', deliveryAdress: '456 Le Lai Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-18 14:08:23', items: ['3 8 Food_8', '1 10 Food_10'], totalAmount: 190854, paymentMethod: 'Bank Transfer', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-19 14:08:23', items: ['2 18 Food_18', '3 1 Food_1', '3 4 Food_4'], totalAmount: 184648, paymentMethod: 'PayPal', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-11-20 14:08:23', items: ['2 10 Food_10', '3 19 Food_19'], totalAmount: 154975, paymentMethod: 'Cash', deliveryAdress: '246 Le Duan Street, District 3, Ho Chi Minh City'},
    {time: '2024-11-21 14:08:23', items: ['1 7 Food_7', '2 20 Food_20'], totalAmount: 146230, paymentMethod: 'Credit Card', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-22 14:08:23', items: ['1 9 Food_9', '3 18 Food_18'], totalAmount: 53401, paymentMethod: 'Cash', deliveryAdress: '321 Pham Ngu Lao Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-23 14:08:23', items: ['3 14 Food_14', '1 3 Food_3'], totalAmount: 56405, paymentMethod: 'Credit Card', deliveryAdress: '987 Tran Hung Dao Street, District 5, Ho Chi Minh City'},
    {time: '2024-11-24 14:08:23', items: ['1 11 Food_11', '1 19 Food_19'], totalAmount: 52271, paymentMethod: 'Bank Transfer', deliveryAdress: '654 Bui Vien Street, District 1, Ho Chi Minh City'},
    {time: '2024-11-25 14:08:23', items: ['1 1 Food_1', '1 16 Food_16'], totalAmount: 136225, paymentMethod: 'PayPal', deliveryAdress: '123 Nguyen Trai Street, District 1, Ho Chi Minh City'},
];


const OrderHistory = () => {
    const [page, setPage] = useState(1);
    const [displayItems, setDisplayItems] = useState(histories.slice(0, 10))
    const numberOfPage = Math.ceil(histories.length / 10);
    const [pages, setPages] = useState([])

    useEffect(() => {
        setDisplayItems(histories.slice((page - 1) * 10, page * 10));
        displayButton()
        console.log(page)
    }, [page])

    const displayButton = () => {
        const buttons = [];
        console.log()
        let startPage = 0
        page <= 2 ? startPage = 1 : startPage = page - 1
        if(startPage + 3 > numberOfPage) startPage = numberOfPage - 3;
        if(numberOfPage > 4){
            for (let i = startPage; i <= numberOfPage; i++) {
                buttons.push(
                    <button className={page === i ? 'active' : ''} key={i} onClick={() => handleChangePage(i)}> {i} </button>
                );
                if(i === startPage + 2 && startPage + 3 < numberOfPage){
                    buttons.push(
                        <button disabled={true}> ... </button>
                    );
                    buttons.push(
                        <button className={page === numberOfPage ? 'active' : ''} key={numberOfPage} onClick={() => handleChangePage(numberOfPage)}> {numberOfPage} </button>
                    );
                    break;
                }
            }
        }
        else{
            for (let i = 1; i <= numberOfPage; i++) {
                buttons.push(
                    <button className={page === i ? 'active' : ''} key={i} onClick={() => handleChangePage(i)}> {i} </button>
                );
            }
        }
        setPages(buttons);
    }

    const handleChangePage = (pageIndex) => {
        setPage(pageIndex);
        // const indexStart = (pageIndex - 1) * 10;
        // const indexEnd = indexStart + 10;
        // setDisplayItems(histories.slice(indexStart, indexEnd));
    }

    return(
        <div>
            <h1>Order History</h1>
            {displayItems.map((history, key) => (
                <Order data = {history} key={key} />
            ))}
            <div className="page">
                <button onClick={() => handleChangePage(page - 1)} disabled={page === 1}> &lt; </button>
                {pages}
                <button onClick={() => handleChangePage(page + 1)} disabled={page === numberOfPage}> &gt; </button>
            </div>
        </div>
    )
}

export default OrderHistory