const { Customer } = require("../models/customer.js")
const { Deposit } = require("../models/savings.js")
const { Withdrawal } = require("../models/withdrawal.js")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")


const registerCustomer = async (body) => {
    const { cusName, username, password } = body;
    if (!cusName || !username || !password) {
        throw new Error("Customer name, username, and password are required");
    }

    const existingCustomer = await Customer.findOnde({ where: { username } })
    if (existingCustomer) {
        throw new Error("Customer already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = await Customer.create({
        cusName,
        username,
        password: hashedPassword
    });
    return { customerId: newCustomer.custid };
}

const loginCustomer = async ({ username, password }) => {
    if (!username || !password) {
        return { status: 400, message: "Username and password are required" };
    }

    const customer = await Customer.findOne({ where: { username } });
    if (!customer) {
        throw new Error("Customer not found");
    }

    const isPasswordValid = await bcrypt.compare(password, customer.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign(
        { customerId: customer.custid },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    return {
        token,
        customerId: customer.custid,
    };
}

const getDashboardData = async (customerId) => {
    let totalDeposit = 0
    let totalWithDrawal = 0

    const deposits = await Deposit.findAll({ where: { custid: customerId } });
    const withdrawals = await Withdrawal.findAll(({ where: { custid: customerId } }));

    deposits.forEach(d => {
        totalDeposit += d.Amountdep;
    })

    withdrawals.forEach(w => {
        totalWithDrawal += w.Amountwithdraw;
    })
    return {
        savings: totalDeposit,
        withdrawal: totalWithDrawal,
        balance: totalDeposit - totalWithDrawal,
    }
}
module.exports = {
    registerCustomer,
    loginCustomer,
    getDashboardData
}