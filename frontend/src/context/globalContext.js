import React, { useContext, useState} from "react"
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL;

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error,setError] = useState(null)

    const addIncome = async (income) => {      
        const response = await axios.post(`${BASE_URL}add-income`,income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0; 
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const addExpense = async (income) => {      
        const response = await axios.post(`${BASE_URL}add-expense`,income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getExpense()
    }

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()
    }

    const totalExpense = () => {
        let totalIncome = 0; 
        expenses.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionhistory = () => {
        const history = [...incomes,...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0,5)
    }

    return (
        <GlobalContext.Provider value ={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            error,
            setError,
            totalBalance,
            transactionhistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => { 
    return useContext(GlobalContext)
}
       
